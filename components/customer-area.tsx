'use client';

import { useEffect, useRef, useState, type SubmitEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, BookOpen, Heart, LoaderCircle, LogOut, Mail, Search, ShieldCheck, UserRound } from 'lucide-react';
import { getCustomerClient } from '@/lib/customer-client';
import { cleanCode, cleanEmail } from '@/lib/customer-validation';
import { flavours, heatLabel } from '@/lib/flavours';
import { useCustomer } from './customer-context';
import { CustomerFeedback, FavouriteButton } from './favourite-button';

function SignInForm() {
  const { configured } = useCustomer();
  const [email, setEmail] = useState('');
  const [sentTo, setSentTo] = useState('');
  const [code, setCode] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [cooldown, setCooldown] = useState(0);
  const codeInput = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setTimeout(() => setCooldown(value => Math.max(0, value - 1)), 1000);
    return () => clearTimeout(timer);
  }, [cooldown]);
  useEffect(() => { if (sentTo) codeInput.current?.focus(); }, [sentTo]);

  async function sendCode(event?: SubmitEvent<HTMLFormElement>) {
    event?.preventDefault();
    if (busy || cooldown > 0) return;
    const client = getCustomerClient();
    if (!client) return;
    setBusy(true); setError('');
    try {
      const address = cleanEmail(sentTo || email);
      const result = await client.auth.signInWithOtp({ email: address, options: { shouldCreateUser: true } });
      if (result.error) throw new Error(result.error.status === 429 ? 'Too many requests. Please wait a little before asking for another code.' : 'We couldn’t send a code. Please check your email address and try again shortly.');
      setSentTo(address); setCode(''); setCooldown(60);
    } catch (reason) { setError(reason instanceof Error ? reason.message : 'Please try again.'); }
    finally { setBusy(false); }
  }

  async function verifyCode(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const client = getCustomerClient();
    if (!client) return;
    setBusy(true); setError('');
    try {
      const token = cleanCode(code);
      const result = await client.auth.verifyOtp({ email: sentTo, token, type: 'email' });
      if (result.error || !result.data.session) throw new Error('That code is incorrect or has expired. Try again, or request a new code.');
    } catch (reason) { setError(reason instanceof Error ? reason.message : 'Please try again.'); }
    finally { setBusy(false); }
  }

  return <div className="customer-signin-card">
    <div className="customer-round-icon"><Mail size={25} aria-hidden="true" /></div>
    <h2>{sentTo ? 'Check your inbox.' : 'Your email. Your Sauces.'}</h2>
    <p>{sentTo ? <>Enter the sign-in code sent to <strong>{sentTo}</strong>. Check your spam folder too.</> : 'Sign in or create your profile with a code sent to your email. No password to remember.'}</p>
    {!configured && <output className="customer-setup"><strong>Customer accounts are coming soon.</strong><span>Sign-in and saving sauces aren’t available yet. You can still explore every sauce in the Wing Bible.</span></output>}
    {sentTo ? <form onSubmit={verifyCode} className="customer-form">
      <label htmlFor="customer-code">Email sign-in code</label>
      <input ref={codeInput} id="customer-code" className="customer-code" type="text" inputMode="numeric" autoComplete="one-time-code" pattern="[0-9 ]{6,12}" maxLength={12} required value={code} onChange={event => setCode(event.target.value)} aria-describedby={error ? 'customer-signin-error' : undefined} />
      <button type="submit" className="menu-primary" disabled={busy}>{busy ? <LoaderCircle size={18} className="customer-spinner" /> : <ShieldCheck size={18} />} Sign in</button>
      <div className="customer-code-actions"><button type="button" disabled={busy || cooldown > 0} onClick={() => void sendCode()}>{cooldown > 0 ? `Resend in ${cooldown}s` : 'Send a new code'}</button><button type="button" disabled={busy} onClick={() => { setSentTo(''); setCode(''); setError(''); }}>Change email</button></div>
    </form> : <form onSubmit={sendCode} className="customer-form">
      <label htmlFor="customer-email">Email address</label>
      <input id="customer-email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={254} required disabled={!configured || busy} value={email} onChange={event => setEmail(event.target.value)} aria-describedby={error ? 'customer-signin-error' : undefined} />
      <button type="submit" className="menu-primary" disabled={!configured || busy || cooldown > 0}>{busy ? <><LoaderCircle size={18} className="customer-spinner" /> Sending code…</> : cooldown > 0 ? `Try again in ${cooldown}s` : <>Send me a sign-in code <ArrowUpRight size={18} /></>}</button>
      <p className="customer-fineprint">New here? Verifying your email creates your customer profile. Your saved sauces are only visible to you.</p>
    </form>}
    {error && <p id="customer-signin-error" className="customer-error" role="alert">{error}</p>}
  </div>;
}

function ProfileForm() {
  const { profile, user, saveProfile } = useCustomer();
  const [name, setName] = useState(profile?.display_name ?? '');
  const [busy, setBusy] = useState(false);
  async function submit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    try { await saveProfile(name); } finally { setBusy(false); }
  }
  return <section className="customer-details"><h2>Your details</h2><p>Make yourself at home. What should we call you?</p><form className="customer-form" onSubmit={submit}>
    <label htmlFor="customer-name">Your name</label><input id="customer-name" autoComplete="name" placeholder="Your name" maxLength={60} required value={name} onChange={event => setName(event.target.value)} disabled={busy} />
    <label htmlFor="customer-verified-email">Sign-in email</label><input id="customer-verified-email" type="email" value={user?.email ?? ''} readOnly aria-describedby="customer-email-note" /><span id="customer-email-note" className="customer-fineprint">This is the email you verified to sign in.</span>
    <button className="menu-primary" disabled={busy || name.trim() === profile?.display_name} type="submit">{busy ? 'Saving…' : 'Save profile'} <ArrowUpRight size={18} /></button>
  </form></section>;
}

function SavedSauces() {
  const { favourites } = useCustomer();
  const [query, setQuery] = useState('');
  const saved = favourites.flatMap(id => { const flavour = flavours.find(item => item.id === id); return flavour ? [flavour] : []; });
  const matches = saved.filter(flavour => `${flavour.name} ${flavour.description}`.toLowerCase().includes(query.toLowerCase().trim()));
  return <section id="your-sauces" className="customer-saved">
    <div className="customer-section-heading"><div><h2>Your Sauces <span>{saved.length}</span></h2><p>Your go-to flavours, all in one place.</p></div><Link href="/flavours">Find more <ArrowUpRight size={17} /></Link></div>
    {saved.length > 0 && <div className="bible-search"><Search size={19} aria-hidden="true" /><label className="sr-only" htmlFor="saved-sauce-search">Search your saved sauces</label><input id="saved-sauce-search" type="search" value={query} placeholder="Find one of your sauces…" onChange={event => setQuery(event.target.value)} /></div>}
    {!saved.length ? <div className="customer-empty"><Heart size={34} aria-hidden="true" /><h3>Meet your next regular.</h3><p>Tap the heart beside any flavour in the Wing Bible. It’ll be waiting right here next time.</p><Link className="menu-primary" href="/flavours">Explore the Wing Bible <ArrowUpRight size={18} /></Link></div> : !matches.length ? <div className="customer-empty"><h3>No saved sauces match “{query}”.</h3><button className="menu-secondary" onClick={() => setQuery('')} type="button">Clear search</button></div> : <div className="customer-sauce-grid">{matches.map(flavour => <article className="customer-sauce" key={flavour.id}>
      <div className="customer-sauce-top"><span className="customer-sauce-heat">{heatLabel(flavour.heat)}{flavour.dry && ' · Dry rub'}</span><FavouriteButton id={flavour.id} name={flavour.name} /></div>
      <h3>{flavour.name}</h3><p>{flavour.description || (flavour.dry ? 'One of your go-to dry rubs.' : 'One of your go-to sauces.')}</p>
      {flavour.available ? <Link href={`/order?flavour=${encodeURIComponent(flavour.id)}`}>Choose this flavour <ArrowUpRight size={17} /></Link> : <span className="customer-fineprint">Currently unavailable</span>}
    </article>)}</div>}
  </section>;
}

export function CustomerArea({ view }: { view: 'profile' | 'favourites' }) {
  const { user, authLoading, dataState, profile, favourites, signOut, refresh } = useCustomer();
  const [signingOut, setSigningOut] = useState(false);
  const params = useSearchParams();
  const requestedSauce = flavours.find(flavour => flavour.id === params.get('save'));
  const firstName = profile?.display_name.split(' ')[0] || 'wing lover';
  async function leave() { setSigningOut(true); try { await signOut(); } finally { setSigningOut(false); } }
  return <main className="menu-app customer-page">
    <div className="menu-app-top"><Link href="/"><ArrowLeft size={16} /> Back to Wingmaster</Link><span>Your flavour. Your way.</span></div>
    <header className="menu-app-header"><Link href="/" className="menu-app-brand"><Image src="/wingmaster-logo.png" alt="Wingmaster home" width={64} height={64} /></Link><nav aria-label="Menu navigation"><Link href="/flavours"><BookOpen size={16} /> Wing Bible</Link><Link href="/order">Food menu <ArrowUpRight size={16} /></Link></nav></header>
    <div className="customer-shell">
      <div className="customer-heading"><p className="menu-eyebrow"><Heart size={17} /> A little extra sauce</p><h1>{view === 'favourites' ? <>Your<br /><em>Sauces.</em></> : <>Your Wingmaster.<br /><em>Your way.</em></>}</h1></div>
      <div className="customer-layout">
        <aside className="customer-sidebar"><div className="customer-identity"><div className="customer-avatar" aria-hidden="true">{profile?.display_name ? profile.display_name.slice(0, 1).toUpperCase() : <UserRound size={26} />}</div><div><strong>{user ? `Hey, ${firstName}.` : 'Make it your usual.'}</strong><span>{user ? 'Your Wingmaster profile' : 'A home for your favourite flavours'}</span></div></div>
          <nav className="customer-nav" aria-label="Your account"><Link href="/profile" aria-current={view === 'profile' ? 'page' : undefined}><UserRound size={19} /> My profile</Link><Link href="/your-sauces" aria-current={view === 'favourites' ? 'page' : undefined}><Heart size={19} /> Your Sauces {user && dataState === 'ready' && <b>{favourites.length}</b>}</Link><Link href="/flavours"><BookOpen size={19} /> Explore the Wing Bible</Link></nav>
          {user && <button className="customer-signout" type="button" onClick={() => void leave()} disabled={signingOut}><LogOut size={17} />{signingOut ? 'Signing out…' : 'Sign out'}</button>}
          <p className="customer-private"><ShieldCheck size={17} /> Your profile and saved sauces are private to your account.</p>
        </aside>
        <div className="customer-main"><CustomerFeedback />
          {authLoading || (user && dataState === 'loading') ? <output className="customer-loading"><LoaderCircle className="customer-spinner" size={24} /> Loading your profile…</output> : !user ? <>{requestedSauce && <p className="customer-save-intent"><Heart size={18} /> Sign in to save <strong>{requestedSauce.name}</strong>.</p>}<SignInForm /></> : dataState === 'error' ? <div className="customer-empty"><h2>We couldn’t load your account.</h2><p>Please check your connection and try again.</p><button className="menu-primary" onClick={() => void refresh()} type="button">Try again</button></div> : <>
            {requestedSauce && <div className="customer-save-intent"><Heart size={19} /><span>{favourites.includes(requestedSauce.id) ? 'Saved to Your Sauces:' : 'Save the sauce you picked:'} <strong>{requestedSauce.name}</strong></span><FavouriteButton id={requestedSauce.id} name={requestedSauce.name} /></div>}
            {view === 'profile' && <ProfileForm key={user.id} />}
            <SavedSauces />
          </>}
        </div>
      </div>
    </div>
  </main>;
}
