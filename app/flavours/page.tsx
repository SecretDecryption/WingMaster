import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight, BookOpen } from 'lucide-react';
import { FlavourExplorer } from '@/components/flavour-explorer';
import { flavours } from '@/lib/flavours';

export const metadata = { title: 'The Wing Bible | Wingmaster', description: 'Browse Wingmaster flavours by name, heat, favourites, and dry rubs.' };

export default function FlavoursPage() {
  return <main className="menu-app bible-page">
    <div className="menu-app-top"><Link href="/"><ArrowLeft size={16} /> Back to Wingmaster</Link><span>Brantford · Since 2005</span></div>
    <header className="menu-app-header"><Link href="/" className="menu-app-brand"><Image src="/wingmaster-logo.png" alt="Wingmaster home" width={64} height={64} /></Link><nav aria-label="Menu navigation"><Link href="/flavours" aria-current="page">Wing Bible</Link><Link href="/order">Food menu <ArrowUpRight size={16} /></Link></nav></header>
    <div className="bible-shell">
      <div className="bible-title"><div><p className="menu-eyebrow"><BookOpen size={17} /> The flavour directory</p><h1>The Wing<br /><em>Bible.</em></h1><p>Find your usual. Or your next obsession.</p></div><div className="bible-number"><strong>{flavours.length}</strong><span>listed flavours.<br />One delicious dilemma.</span></div></div>
      <FlavourExplorer />
      <div className="menu-source-note">Flavour reference: Wingmaster’s August 20, 2026 menu. <a href="https://wingmaster.ca/wp-content/uploads/2026/08/updated-website-online-take-out-menu-2026.pdf" target="_blank" rel="noreferrer">View source menu ↗</a></div>
    </div>
  </main>;
}
