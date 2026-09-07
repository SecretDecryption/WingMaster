import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const levels = [
  { name: 'No heat', value: 'Easy does it', peppers: 0 },
  { name: 'Spicy', value: 'A little kick', peppers: 1 },
  { name: 'Hot', value: 'Proper heat', peppers: 2 },
  { name: '350K', value: 'Devilz territory', peppers: 3 },
  { name: '1M', value: 'Ghost-level fire', peppers: 4 },
  { name: '3M', value: 'Challenge heat', peppers: 5 },
  { name: 'Blackenstein', value: '10M · waiver required', peppers: 6, blackenstein: true },
];

function Pepper({ active }: { active: boolean }) {
  return <svg className={active ? 'is-active' : ''} viewBox="0 0 30 42" aria-hidden="true">
    <path className="pepper-stem" d="M18 8c1-4 4-6 8-6-1 4-3 7-7 9" />
    <path className="pepper-body" d="M18 8c7 1 9 7 7 13-3 9-12 15-22 18 5-5 7-9 7-15C9 16 11 9 18 8Z" />
    <path className="pepper-shine" d="M18 13c3 1 4 3 4 6" />
  </svg>;
}

export function SpiceLegend({ compact = false }: { compact?: boolean }) {
  return <section className={`spice-legend ${compact ? 'is-compact' : ''}`} aria-labelledby="spice-legend-title">
    <div className="spice-legend-heading">
      <div><p className="kicker">Know your heat</p><h2 id="spice-legend-title">The spice scale.</h2></div>
      {!compact && <p>Start where you&apos;re comfortable. The last stop is a completely different beast.</p>}
    </div>
    <div className="spice-scale">
      {levels.map(level => <article key={level.name} className={level.blackenstein ? 'is-blackenstein' : ''}>
        <div className="pepper-row" aria-label={`${level.peppers} out of 6 peppers`}>
          {Array.from({ length: 6 }, (_, index) => <Pepper key={index} active={index < level.peppers} />)}
        </div>
        <strong>{level.name}</strong><span>{level.value}</span>
        {level.blackenstein && <Link href="/blackenstein" aria-label="Learn about Blackenstein and its mandatory waiver"><ArrowUpRight size={17} /></Link>}
      </article>)}
    </div>
    <p className="spice-warning"><strong>Blackenstein is the hottest item at Wingmaster.</strong> A waiver is mandatory before it can be served.</p>
  </section>;
}
