'use client';
import { useEffect, useRef, useState } from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { type MenuItem, cannedDrinks, dipOptions, wingAddons } from '@/lib/menu-data';
import { type CartLine, linePrice, money, sauceOptions, validateLine } from '@/lib/order-model';
import { FlavourExplorer } from './flavour-explorer';

export function ItemBuilder({ item, initialFlavour, initialStyle, onClose, onAdd }: {
  item: MenuItem; initialFlavour?: string; initialStyle?: string; onClose: () => void; onAdd: (line: CartLine) => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [line, setLine] = useState<CartLine>({ id: '', itemId: item.id, variantId: item.variants?.[0].id ?? '', style: item.styles?.includes(initialStyle ?? '') ? initialStyle! : item.styles?.[0] ?? '', flavourIds: initialFlavour ? [initialFlavour] : [], addonIds: [], dip: 'Ranch', drinks: Array(item.drinks ?? 0).fill(cannedDrinks[0]), sauce: 'Standard sauce', notes: '', qty: 1 });
  const variant = item.variants?.find(v => v.id === line.variantId);
  const maxFlavours = variant?.flavours ?? item.flavours ?? 0;
  const error = validateLine(line);
  useEffect(() => { const el = dialog.current; el?.showModal(); const old = document.body.style.overflow; document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = old; }; }, []);
  function toggleFlavour(id: string) { setLine(old => ({ ...old, flavourIds: old.flavourIds.includes(id) ? old.flavourIds.filter(f => f !== id) : maxFlavours === 1 ? [id] : [...old.flavourIds, id].slice(0, maxFlavours) })); }
  function close() { dialog.current?.close(); onClose(); }
  return <dialog ref={dialog} className="item-dialog menu-app" aria-labelledby="item-title" onCancel={close} onClick={e => { if (e.target === e.currentTarget) close(); }}>
    <div className="item-dialog-inner">
      <header className="item-dialog-header"><div><p className="menu-eyebrow">Make it yours</p><h2 id="item-title">{item.name}</h2></div><button type="button" className="icon-button" aria-label="Close item builder" onClick={close} autoFocus><X /></button></header>
      <div className="item-dialog-content">
        <p className="item-description">{item.description}</p>
        {item.variants && <fieldset className="item-fieldset"><legend>Choose a portion</legend><div className="portion-options">{item.variants.map(v => <label key={v.id} className={line.variantId === v.id ? 'selected' : ''}><input type="radio" name="portion" checked={line.variantId === v.id} onChange={() => setLine(old => ({ ...old, variantId: v.id, flavourIds: old.flavourIds.slice(0, v.flavours ?? item.flavours ?? 0) }))} /><span>{v.label}<small>{v.flavours ? `Up to ${v.flavours} flavour${v.flavours > 1 ? 's' : ''}` : ''}</small></span><b>{money(v.price)}</b></label>)}</div></fieldset>}
        {item.styles && item.styles.length > 1 && <fieldset className="item-fieldset"><legend>Wing style</legend><div className="choice-row">{item.styles.map(style => <label key={style}><input type="radio" name="style" checked={line.style === style} onChange={() => setLine(old => ({ ...old, style }))} />{style}</label>)}</div></fieldset>}
        {maxFlavours > 0 && <section className="item-flavours"><h3>Your flavour{maxFlavours > 1 ? 's' : ''}</h3><FlavourExplorer compact selected={line.flavourIds} onToggle={toggleFlavour} limit={maxFlavours} /></section>}
        {(item.dips || item.dipChoice) && <fieldset className="item-fieldset"><legend>{item.dipChoice ? 'Choose your dip' : `Included dip${(variant?.dips ?? item.dips ?? 1) > 1 ? 's' : ''} · ${(variant?.dips ?? item.dips ?? 1)} portion${(variant?.dips ?? item.dips ?? 1) > 1 ? 's' : ''}`}</legend><div className="choice-row">{dipOptions.map(dip => <label key={dip}><input type="radio" name="dip" checked={line.dip === dip} onChange={() => setLine(old => ({ ...old, dip }))} />{dip}</label>)}</div></fieldset>}
        {!!item.drinks && <fieldset className="item-fieldset"><legend>Included drinks</legend><div className="drink-options">{line.drinks.map((drink, i) => <label key={i}>Drink {i + 1}<select value={drink} onChange={e => setLine(old => ({ ...old, drinks: old.drinks.map((d, n) => n === i ? e.target.value : d) }))}>{cannedDrinks.map(d => <option key={d}>{d}</option>)}</select></label>)}</div></fieldset>}
        {item.wing && <>
          <fieldset className="item-fieldset"><legend>Extras <span>optional</span></legend><div className="choice-row">{wingAddons.map(addon => <label key={addon.id}><input type="checkbox" checked={line.addonIds.includes(addon.id)} onChange={e => setLine(old => ({ ...old, addonIds: e.target.checked ? [...old.addonIds, addon.id] : old.addonIds.filter(a => a !== addon.id) }))} />{addon.name} <b>+{money(addon.price)}</b></label>)}</div></fieldset>
          <fieldset className="item-fieldset"><legend>Sauce preference</legend><div className="choice-row">{sauceOptions.map(sauce => <label key={sauce}><input type="radio" name="sauce" checked={line.sauce === sauce} onChange={() => setLine(old => ({ ...old, sauce }))} />{sauce}</label>)}</div></fieldset>
        </>}
        <label className="item-note-label">Item notes <span>optional</span><textarea value={line.notes} onChange={e => setLine(old => ({ ...old, notes: e.target.value }))} maxLength={300} rows={2} placeholder="Any preferences for this item?" /></label>
        <p className="menu-small-note">Prices are a menu-reference estimate. Flavour upgrades and special requests may cost extra. Tell staff about allergies directly.</p>
      </div>
      <footer className="item-dialog-footer"><div className="quantity-control"><button type="button" disabled={line.qty <= 1} onClick={() => setLine(old => ({ ...old, qty: old.qty - 1 }))} aria-label="Decrease item quantity"><Minus size={18} /></button><span aria-live="polite">{line.qty}</span><button type="button" disabled={line.qty >= 20} onClick={() => setLine(old => ({ ...old, qty: old.qty + 1 }))} aria-label="Increase item quantity"><Plus size={18} /></button></div><button className="menu-primary" type="button" disabled={!!error} onClick={() => { if (!validateLine(line)) { onAdd({ ...line, id: crypto.randomUUID() }); close(); } }}>Add to demo cart <b>{money(linePrice(line) * line.qty)}</b></button>{error && <p className="item-validation" role="status">{error}</p>}</footer>
    </div>
  </dialog>;
}
