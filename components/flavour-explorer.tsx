'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check, Flame, Heart, LoaderCircle, Search, SlidersHorizontal, X } from 'lucide-react';
import { filterFlavours, flavours, heatFilters, heatLabel, type HeatFilter } from '@/lib/flavours';
import { useCustomer } from './customer-context';
import { CustomerFeedback, FavouriteButton } from './favourite-button';

export function FlavourExplorer({ selected = [], onToggle, limit = 1, compact = false }: {
  selected?: string[]; onToggle?: (id: string) => void; limit?: number; compact?: boolean;
}) {
  const id = useId();
  const [query, setQuery] = useState('');
  const [heat, setHeat] = useState<HeatFilter>('All heat');
  const [dry, setDry] = useState(false);
  const [popular, setPopular] = useState(false);
  const [onlySaved, setOnlySaved] = useState(false);
  const { user, favourites, authLoading, dataState, refresh } = useCustomer();
  const [shown, setShown] = useState(compact ? 12 : 30);
  const results = filterFlavours(query, heat, dry, popular, onlySaved ? (user && dataState === 'ready' ? favourites : []) : undefined);
  const savedLoading = onlySaved && (authLoading || (user && dataState === 'loading'));
  const savedSignIn = onlySaved && !authLoading && !user;
  const savedError = onlySaved && user && dataState === 'error';
  const hasFilters = Boolean(query || heat !== 'All heat' || dry || popular || onlySaved);
  const pageSize = compact ? 12 : 30;
  function reset() { setQuery(''); setHeat('All heat'); setDry(false); setPopular(false); setOnlySaved(false); setShown(pageSize); }
  return <div className={`bible-explorer ${compact ? 'is-compact' : ''}`}>
    <CustomerFeedback />
    <div className="bible-filter-panel">
    <div className="bible-filter-heading"><span><SlidersHorizontal size={17} aria-hidden="true" />Find your sauce</span>{hasFilters && <button type="button" onClick={reset}>Reset filters <X size={14} aria-hidden="true" /></button>}</div>
    <div className="bible-search"><Search size={20} aria-hidden="true" />
      <label className="sr-only" htmlFor={`${id}-search`}>Search flavours</label>
      <input id={`${id}-search`} type="search" placeholder="Find a flavour… BBQ, dill, honey" value={query} onChange={e => { setQuery(e.target.value); setShown(pageSize); }} />
      {query && <button type="button" aria-label="Clear flavour search" onClick={() => { setQuery(''); setShown(pageSize); }}><X size={18} /></button>}
    </div>
    <div className="bible-filters" role="group" aria-label="Filter flavours by heat">
      {heatFilters.map(item => <button key={item} type="button" aria-pressed={heat === item} onClick={() => { setHeat(item); setShown(pageSize); }}>{item}</button>)}
    </div>
    <div className="bible-options">
      <div className="bible-sauce-scope" role="group" aria-label="Sauce collection">
        <button type="button" aria-pressed={!onlySaved} onClick={() => { setOnlySaved(false); setShown(pageSize); }}>All sauces</button>
        <button type="button" aria-pressed={onlySaved} onClick={() => { setOnlySaved(true); setShown(pageSize); }}><Heart size={15} aria-hidden="true" />Your Sauces</button>
      </div>
      <label><input type="checkbox" checked={popular} onChange={e => { setPopular(e.target.checked); setShown(pageSize); }} /> Top 10</label>
      <label><input type="checkbox" checked={dry} onChange={e => { setDry(e.target.checked); setShown(pageSize); }} /> Dry rubs</label>
    </div>
    </div>
    <div className="bible-results-heading"><output aria-live="polite">{savedLoading ? 'Loading your sauces…' : savedSignIn ? 'Your saved collection' : savedError ? 'Your sauces are unavailable' : `${results.length} ${onlySaved ? 'saved ' : ''}flavour${results.length !== 1 ? 's' : ''}`}</output>{onToggle && <span>{selected.length} / {limit} selected</span>}</div>
    {onToggle && selected.length > 0 && <div className="bible-selected" aria-label="Selected flavours">{selected.map(key => <button type="button" key={key} onClick={() => onToggle(key)}>{flavours.find(f => f.id === key)?.name}<X size={14} /><span className="sr-only">Remove</span></button>)}</div>}
    {onToggle && <p className="bible-selection-hint">Choose {limit === 1 ? '1 flavour' : `up to ${limit} flavours`}. {selected.length} selected.</p>}
    {savedLoading ? <output className="customer-loading"><LoaderCircle size={20} className="customer-spinner" aria-hidden="true" />Loading your sauces…</output> : savedSignIn ? <div className="bible-empty"><Heart size={26} aria-hidden="true" /><h3>Your sauces, right here.</h3><p>Sign in to see the sauces saved to your profile.</p><Link className="menu-primary" href="/your-sauces">Sign in to Your Sauces <ArrowUpRight size={16} /></Link></div> : savedError ? <div className="bible-empty"><h3>We couldn’t load your sauces.</h3><p>Your selection is still here. Try loading your saved sauces again.</p><button type="button" onClick={() => void refresh()}>Try again</button></div> : results.length === 0 ? <div className="bible-empty"><h3>{onlySaved && favourites.length === 0 ? 'Your lineup starts with a heart.' : 'No flavours match these filters.'}</h3><p>{onlySaved && favourites.length === 0 ? 'Browse all sauces and tap a heart to save one to Your Sauces.' : 'Try another heat level, search, or reset the filters.'}</p><button type="button" onClick={reset}>{onlySaved && favourites.length === 0 ? 'Explore all sauces' : 'Reset filters'}</button></div> : <div className="bible-grid">
      {results.slice(0, shown).map(f => {
        const isSelected = selected.includes(f.id);
        const disabled = !f.available || (!isSelected && selected.length >= limit);
        return <article className={`bible-card ${isSelected ? 'is-selected' : ''}`} key={f.id}>
          <div className="bible-card-meta"><span className={`heat-label heat-group-${f.heat === 'N' ? 'mild' : f.heat === 'D' ? 'dry' : 'hot'}`}><Flame size={13} />{heatLabel(f.heat)}</span><div className="sauce-card-tools">{f.popular && <span className="top-ten-label">Top 10</span>}<FavouriteButton id={f.id} name={f.name} /></div></div>
          <h3>{f.name}</h3>
          {f.description && <p>{f.description}</p>}
          <div className="bible-card-bottom"><span>{!f.available ? 'Coming soon' : f.dry ? 'Dry rub' : f.name === 'Plain' ? 'No sauce' : 'Sauce'}{!f.available && ' · not selectable'}</span>
            {onToggle ? <button type="button" disabled={disabled} aria-pressed={isSelected} aria-label={`${isSelected ? 'Remove' : 'Select'} ${f.name} — ${heatLabel(f.heat)}`} onClick={() => onToggle(f.id)}>{isSelected ? <><Check size={15} /> Selected</> : 'Select'}</button> : f.available && <Link href={`/order?flavour=${encodeURIComponent(f.id)}`} aria-label={`Use ${f.name} in an order`}>Use this flavour <ArrowUpRight size={15} /></Link>}
          </div>
        </article>;
      })}
    </div>}
    {shown < results.length && <button className="bible-more" type="button" onClick={() => setShown(n => n + pageSize)}>Show {Math.min(pageSize, results.length - shown)} more flavours <span>({results.length - shown} remaining)</span></button>}
    <p className="bible-footnote">Dry rub does not mean no heat. Recipes may contain allergens; ask the shop before ordering. Menu and availability can change.</p>
  </div>;
}
