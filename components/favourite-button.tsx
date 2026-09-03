'use client';

import Link from 'next/link';
import { Heart, LoaderCircle, UserRound } from 'lucide-react';
import { useCustomer } from './customer-context';

export function AccountLink({ className = '' }: { className?: string }) {
  const { user } = useCustomer();
  return <Link href="/profile" aria-label={user ? 'My profile' : 'Sign in'} className={`customer-account-link ${className}`}><UserRound size={18} aria-hidden="true" /><span>{user ? 'My profile' : 'Sign in'}</span></Link>;
}

export function FavouriteButton({ id, name }: { id: string; name: string }) {
  const { user, authLoading, favourites, pending, dataState, toggleFavourite } = useCustomer();
  if (!authLoading && !user) return <Link className="sauce-heart" href={`/profile?save=${encodeURIComponent(id)}`} aria-label={`Sign in to save ${name} to Your Sauces`} title={`Save ${name}`}><Heart size={19} aria-hidden="true" /></Link>;
  const saved = favourites.includes(id);
  const saving = pending.includes(id);
  return <button type="button" className={`sauce-heart ${saved ? 'is-saved' : ''}`} disabled={authLoading || saving || dataState !== 'ready'} aria-pressed={saved} aria-busy={saving} aria-label={`${saving ? 'Saving' : saved ? 'Remove' : 'Save'} ${name}${saved ? ' from' : ' to'} Your Sauces`} title={saved ? 'Remove saved sauce' : 'Save sauce'} onClick={() => void toggleFavourite(id)}>{saving ? <LoaderCircle className="customer-spinner" size={19} aria-hidden="true" /> : <Heart size={19} fill={saved ? 'currentColor' : 'none'} aria-hidden="true" />}</button>;
}

export function CustomerFeedback() {
  const { error, notice, dismissNotice } = useCustomer();
  return <div className="customer-feedback">
    {error && <p className="customer-error" role="alert">{error}</p>}
    {notice && <output className="customer-success"><span>{notice}</span><button type="button" aria-label="Dismiss saved notification" onClick={dismissNotice}>Dismiss</button></output>}
  </div>;
}
