'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check, Flame, Search, X } from 'lucide-react';
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
  const [onlyFavourites, setOnlyFavourites] = useState(false);
  const { user, favourites, dataState, refresh } = useCustomer();
  const [shown, setShown] = useState(compact ? 12 : 30);
  const results = filterFlavours(query, heat, dry, popular).filter(flavour => !onlyFavourites || !user || favourites.includes(flavour.id));
  const pageSize = compact ? 12 : 30;
  function reset() { setQuery(''); setHeat('All heat'); setDry(false); setPopular(false); setOnlyFavourites(false); setShown(pageSize); }
  return <div className={`bible-explorer ${compact ? 'is-compact' : ''}`}>
    <CustomerFeedback />
    {user && dataState === 'error' && <button className="menu-secondary" type="button" onClick={() => void refresh()}>Retry loading favourites</button>}
    <div className="bible-search"><Search size={20} aria-hidden="true" />
      <label className="sr-only" htmlFor={`${id}-search`}>Search flavours</label>
      <input id={`${id}-search`} type="search" placeholder="Find a flavour… BBQ, dill, honey" value={query} onChange={e => { setQuery(e.target.value); setShown(pageSize); }} />
      {query && <button type="button" aria-label="Clear flavour search" onClick={() => { setQuery(''); setShown(pageSize); }}><X size={18} /></button>}
    </div>
    <div className="bible-filters" aria-label="Filter flavours by heat">
      {heatFilters.map(item => <button key={item} type="button" aria-pressed={heat === item} onClick={() => { setHeat(item); setShown(pageSize); }}>{item}</button>)}
    </div>
    <div className="bible-options">
      <label><input type="checkbox" checked={popular} onChange={e => { setPopular(e.target.checked); setShown(pageSize); }} /> Top 10</label>
      <label><input type="checkbox" checked={dry} onChange={e => { setDry(e.target.checked); setShown(pageSize); }} /> Dry rubs</label>
      {user ? <label><input type="checkbox" checked={onlyFavourites} disabled={dataState !== 'ready'} onChange={e => { setOnlyFavourites(e.target.checked); setShown(pageSize); }} /> My favourites</label> : <Link href="/profile" className="bible-saved-link">Sign in to save favourites</Link>}
      <output>{results.length} flavour{results.length !== 1 ? 's' : ''}</output>
    </div>
    {onToggle && selected.length > 0 && <div className="bible-selected" aria-label="Selected flavours">{selected.map(key => <button type="button" key={key} onClick={() => onToggle(key)}>{flavours.find(f => f.id === key)?.name}<X size={14} /><span className="sr-only">Remove</span></button>)}</div>}
    {onToggle && <p className="bible-selection-hint">Choose {limit === 1 ? '1 flavour' : `up to ${limit} flavours`}. {selected.length} selected.</p>}
    {results.length === 0 ? <div className="bible-empty"><h3>No flavours found.</h3><p>Try a different search or reset the filters.</p><button type="button" onClick={reset}>Reset filters</button></div> : <div className="bible-grid">
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
