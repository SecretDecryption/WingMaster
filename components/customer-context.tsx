'use client';

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import type { User } from '@supabase/supabase-js';
import { getCustomerClient } from '@/lib/customer-client';
import { cleanDisplayName } from '@/lib/customer-validation';
import { flavours } from '@/lib/flavours';

type Profile = { user_id: string; display_name: string; created_at: string };
type Snapshot = { owner: string; profile: Profile | null; favourites: string[] };
type CustomerContextValue = {
  user: User | null; configured: boolean; authLoading: boolean;
  dataState: 'loading' | 'ready' | 'error'; profile: Profile | null;
  favourites: string[]; pending: string[]; error: string; notice: string;
  refresh: () => Promise<void>; dismissNotice: () => void;
  toggleFavourite: (id: string) => Promise<boolean>;
  saveProfile: (name: string) => Promise<boolean>;
  signOut: () => Promise<boolean>;
};

const CustomerContext = createContext<CustomerContextValue | null>(null);
const knownSauces = new Set(flavours.map(flavour => flavour.id));

export function CustomerProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [configured, setConfigured] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [dataState, setDataState] = useState<'loading' | 'ready' | 'error'>('loading');
  const [snapshot, setSnapshot] = useState<Snapshot | null>(null);
  const [pending, setPending] = useState<string[]>([]);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const identity = useRef<string | null>(null);
  const generation = useRef(0);
  const locks = useRef(new Map<string, symbol>());

  useEffect(() => {
    const client = getCustomerClient();
    // Configuration is only resolved in the browser, never during SSR.
    // eslint-disable-next-line react/react-compiler
    setConfigured(Boolean(client));
    if (!client) { setAuthLoading(false); setDataState('ready'); return; }
    // Keep this callback synchronous: Supabase auth holds a lock while calling it.
    const { data: { subscription } } = client.auth.onAuthStateChange((_event, session) => {
      const nextId = session?.user.id ?? null;
      if (identity.current !== nextId) {
        generation.current += 1;
        identity.current = nextId;
        locks.current.clear();
        setSnapshot(null);
        setPending([]);
        setNotice('');
        setError('');
        setDataState(nextId ? 'loading' : 'ready');
      }
      setUser(session?.user ?? null);
      setAuthLoading(false);
    });
    return () => { generation.current += 1; subscription.unsubscribe(); };
  }, []);

  const refresh = useCallback(async () => {
    const client = getCustomerClient();
    const owner = identity.current;
    if (!client || !owner) return;
    const request = ++generation.current;
    setDataState('loading');
    setError('');
    try {
      // Auth identity in the UI is not authorization. Both reads are independently
      // checked by Postgres RLS against the server-verified access token.
      const [profileResult, favouritesResult] = await Promise.all([
        client.from('wm_profiles').select('user_id, display_name, created_at').eq('user_id', owner).single(),
        client.from('wm_favourite_sauces').select('sauce_id').eq('user_id', owner).order('created_at', { ascending: false }),
      ]);
      if (generation.current !== request || identity.current !== owner) return;
      if (profileResult.error || favouritesResult.error) throw new Error('load');
      setSnapshot({ owner, profile: profileResult.data as Profile, favourites: favouritesResult.data.map(row => row.sauce_id as string).filter(id => knownSauces.has(id)) });
      setDataState('ready');
    } catch {
      if (generation.current !== request || identity.current !== owner) return;
      setDataState('error');
      setError('We couldn’t load your profile and favourites. Check your connection and try again.');
    }
  }, []);

  useEffect(() => { if (user?.id) void refresh(); }, [user?.id, refresh]);

  useEffect(() => {
    if (!user?.id) return;
    // Reload after returning from another tab/device session; don't overwrite a
    // pending save with an older read. Nothing private is cached by the app.
    const reload = () => { if (document.visibilityState === 'visible' && locks.current.size === 0) void refresh(); };
    document.addEventListener('visibilitychange', reload);
    return () => document.removeEventListener('visibilitychange', reload);
  }, [user?.id, refresh]);

  async function toggleFavourite(id: string) {
    const client = getCustomerClient();
    const owner = identity.current;
    if (!client || !owner || snapshot?.owner !== owner || dataState !== 'ready' || !knownSauces.has(id) || locks.current.has(id)) return false;
    const lock = Symbol(id);
    locks.current.set(id, lock);
    setPending(items => [...items, id]);
    setError('');
    const removing = snapshot.favourites.includes(id);
    try {
      const result = removing
        ? await client.from('wm_favourite_sauces').delete().eq('user_id', owner).eq('sauce_id', id)
        : await client.from('wm_favourite_sauces').upsert({ user_id: owner, sauce_id: id }, { onConflict: 'user_id,sauce_id', ignoreDuplicates: true });
      if (result.error) throw result.error;
      if (identity.current !== owner || locks.current.get(id) !== lock) return false;
      // Update only after the database confirms the change, never a pretend save.
      setSnapshot(current => current?.owner === owner ? { ...current, favourites: removing ? current.favourites.filter(item => item !== id) : [id, ...current.favourites.filter(item => item !== id)] } : current);
      const name = flavours.find(flavour => flavour.id === id)?.name ?? 'Sauce';
      setNotice(`${name} ${removing ? 'removed from' : 'saved to'} your favourites.`);
      return true;
    } catch {
      if (identity.current === owner && locks.current.get(id) === lock) setError('That change wasn’t saved. Please check your connection and try again.');
      return false;
    } finally {
      if (locks.current.get(id) === lock) {
        locks.current.delete(id);
        setPending(items => items.filter(item => item !== id));
      }
    }
  }

  async function saveProfile(value: string) {
    const client = getCustomerClient();
    const owner = identity.current;
    if (!client || !owner || dataState !== 'ready') return false;
    setError('');
    const request = generation.current;
    try {
      const display_name = cleanDisplayName(value);
      const result = await client.from('wm_profiles').update({ display_name }).eq('user_id', owner).select('user_id, display_name, created_at').single();
      if (result.error) throw new Error('We couldn’t save your profile. Please try again.');
      if (identity.current !== owner || generation.current !== request) return false;
      setSnapshot(current => current?.owner === owner ? { ...current, profile: result.data as Profile } : current);
      setNotice('Your profile has been saved.');
      return true;
    } catch (reason) {
      if (identity.current === owner) setError(reason instanceof Error ? reason.message : 'We couldn’t save your profile. Please try again.');
      return false;
    }
  }

  async function signOut() {
    const client = getCustomerClient();
    if (!client) return false;
    setError('');
    try {
      const { error: signOutError } = await client.auth.signOut({ scope: 'local' });
      if (signOutError) throw signOutError;
      return true;
    } catch { setError('We couldn’t sign you out. Please check your connection and try again.'); return false; }
  }

  const current = snapshot?.owner === user?.id ? snapshot : null;
  return <CustomerContext.Provider value={{ user, configured, authLoading, dataState, profile: current?.profile ?? null, favourites: current?.favourites ?? [], pending, error, notice, refresh, toggleFavourite, saveProfile, signOut, dismissNotice: () => setNotice('') }}>{children}</CustomerContext.Provider>;
}

export function useCustomer() {
  const value = useContext(CustomerContext);
  if (!value) throw new Error('useCustomer must be used inside CustomerProvider');
  return value;
}
