'use client';

import Link from 'next/link';
import { ArrowUpRight, Heart } from 'lucide-react';
import { useCustomer } from './customer-context';
import { flavours } from '@/lib/flavours';

export function HomeFavourites() {
  const { user, favourites, dataState } = useCustomer();
  const saved = favourites.slice(0, 3).flatMap(id => { const flavour = flavours.find(item => item.id === id); return flavour ? [flavour] : []; });
  return <section className="home-favourites" aria-labelledby="home-favourites-title"><div className="section-shell">
    <div className="home-favourites-icon"><Heart size={34} aria-hidden="true" /></div><div className="home-favourites-copy"><p className="kicker">The ones you come back for</p><h2 id="home-favourites-title">Your Sauces.</h2><p>{user ? 'Your personal lineup. Ready for your next wing night.' : 'Found your flavour? Save it to your profile and make next time an easy choice.'}</p>
      {user && dataState === 'ready' && saved.length > 0 && <div className="home-saved-sauces">{saved.map(flavour => <Link key={flavour.id} href="/your-sauces"><Heart size={13} fill="currentColor" aria-hidden="true" />{flavour.name}</Link>)}</div>}
    </div><Link className="button" href="/your-sauces">Explore Your Sauces <ArrowUpRight size={18} /></Link>
  </div></section>;
}
