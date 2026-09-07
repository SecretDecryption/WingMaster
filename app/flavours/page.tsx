import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight, BookOpen, ShieldAlert } from 'lucide-react';
import { FlavourExplorer } from '@/components/flavour-explorer';
import { flavours } from '@/lib/flavours';
import { AccountLink } from '@/components/favourite-button';
import { SpiceLegend } from '@/components/spice-legend';

export const metadata = { title: 'The Wing Bible | Wingmaster', description: 'Browse Wingmaster flavours by name, heat, saved sauces, and dry rubs.' };

export default function FlavoursPage() {
  return <main className="menu-app bible-page">
    <div className="menu-app-top"><Link href="/"><ArrowLeft size={16} /> Back to Wingmaster</Link><span>Brantford · Since 2005</span></div>
    <header className="menu-app-header"><Link href="/" className="menu-app-brand"><Image src="/wingmaster-logo.png" alt="Wingmaster home" width={64} height={64} /></Link><nav aria-label="Menu navigation"><Link href="/blackenstein">Blackenstein</Link><Link href="/your-sauces">Your Sauces</Link><Link href="/order">Food menu <ArrowUpRight size={16} /></Link><AccountLink /></nav></header>
    <div className="bible-shell">
      <div className="bible-title"><div><p className="menu-eyebrow"><BookOpen size={17} /> The flavour directory</p><h1>The Wing<br /><em>Bible.</em></h1><p>Find your usual. Or your next obsession.</p></div><div className="bible-number"><strong>{flavours.length}</strong><span>listed flavours.<br />One delicious dilemma.</span></div></div>
      <Link className="blackenstein-bible-card" href="/blackenstein"><div><ShieldAlert size={27} /><span>Beyond extreme</span></div><h2>Blackenstein · 10 Million Scoville</h2><p>The hottest item at Wingmaster sits outside the regular flavour scale. Mandatory waiver before trying.</p><b>Learn more and read the waiver <ArrowUpRight size={17} /></b></Link>
      <SpiceLegend compact />
      <FlavourExplorer />
      <div className="menu-source-note">Recipes, heat ratings, availability and pricing must be confirmed by Wingmaster before launch.</div>
    </div>
  </main>;
}
