'use client';

import { Suspense, useEffect, useRef, useState, type FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, BookOpen, Check, ChevronRight, Info, MapPin, Minus, Plus, Search, ShoppingBag, Trash2 } from 'lucide-react';
import { ItemBuilder } from '@/components/item-builder';
import { useOrder } from '@/components/order-context';
import { AccountLink } from '@/components/favourite-button';
import { categories, menuItems, type MenuItem } from '@/lib/menu-data';
import { flavours } from '@/lib/flavours';
import { itemFor, lineDescription, linePrice, money, totals, type CartLine } from '@/lib/order-model';

type Step = 'menu' | 'checkout' | 'review';
function OrderMenu() {
  const params = useSearchParams();
  const flavourId = params.get('flavour');
  const requestedFlavour = flavours.find(f => f.id === flavourId && f.available);
  const requestedType = params.get('type');
  const [category, setCategory] = useState('Wings');
  const [search, setSearch] = useState('');
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);
  const [initialFlavour, setInitialFlavour] = useState<string | undefined>();
  const [step, setStep] = useState<Step>('menu');
  const [message, setMessage] = useState('');
  const [fulfillment, setFulfillment] = useState<'pickup' | 'delivery'>('pickup');
  const [tip, setTip] = useState(0);
  const [details, setDetails] = useState({ name: '', phone: '', email: '', street: '', city: '', postal: '', notes: '' });
  const [formError, setFormError] = useState('');
  const { cart, add, changeQty, remove, clear } = useOrder();
  const summary = totals(cart, tip);
  const count = cart.reduce((sum, line) => sum + line.qty, 0);
  const stepHeading = useRef<HTMLHeadingElement>(null);
  const lastSelection = useRef('');
  const searchKey = params.toString();
  useEffect(() => {
    if (!searchKey || lastSelection.current === searchKey) return;
    lastSelection.current = searchKey;
    if (requestedFlavour || requestedType) {
      setInitialFlavour(requestedFlavour?.id);
      setActiveItem(menuItems.find(item => item.id === requestedType) ?? menuItems[0]);
    }
  }, [searchKey, requestedFlavour, requestedType]);
  useEffect(() => { if (step !== 'menu') { stepHeading.current?.focus(); window.scrollTo({ top: 0, behavior: 'instant' }); } }, [step]);
  useEffect(() => { if (!message) return; const timer = setTimeout(() => setMessage(''), 3500); return () => clearTimeout(timer); }, [message]);
  const filtered = menuItems.filter(item => search.trim() ? `${item.name} ${item.description} ${item.category}`.toLowerCase().includes(search.trim().toLowerCase()) : item.category === category);
  function addItem(line: CartLine) { add(line); setMessage(`${itemFor(line).name} added to your demo cart.`); }
  function review(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!cart.length) { setFormError('Add an item to your cart first.'); return; }
    if (!details.name.trim() || details.phone.replace(/\D/g, '').length < 10) { setFormError('Enter a name and a valid phone number. Demo details are fine.'); return; }
    if (fulfillment === 'delivery' && (!details.street.trim() || !details.city.trim() || !/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(details.postal.trim()))) { setFormError('Enter a street, city and Canadian postal code for the delivery preview.'); return; }
    setFormError(''); setStep('review');
  }
  function field(name: keyof typeof details, value: string) { setDetails(old => ({ ...old, [name]: value })); }
  function startOver() { clear(); setStep('menu'); setTip(0); setDetails({ name: '', phone: '', email: '', street: '', city: '', postal: '', notes: '' }); }
  return <main className="menu-app">
    <div className="menu-app-top"><Link href="/"><ArrowLeft size={16} /> Back to Wingmaster</Link><span>70 Erie Ave. · Brantford</span></div>
    <header className="menu-app-header"><Link href="/" className="menu-app-brand"><Image src="/wingmaster-logo.png" alt="Wingmaster home" width={64} height={64} /></Link><nav aria-label="Menu navigation"><Link href="/flavours"><BookOpen size={16} /> Wing Bible</Link><Link href="/order" aria-current="page" onClick={() => setStep('menu')}>Food menu</Link><Link href="/your-sauces">Your Sauces</Link><AccountLink /></nav></header>
    <div className="demo-banner"><Info size={17} /><p><strong>Interactive demo.</strong> No orders are sent and no payments are taken. <a href="tel:5197501440">Call the shop for a real order.</a></p></div>
    <div className="menu-workspace">
      <div className="menu-heading"><div><p className="menu-eyebrow">{step === 'menu' ? 'Choose. Sauce. Make it yours.' : step === 'checkout' ? 'A final once-over' : 'Preview complete'}</p><h1 ref={stepHeading} tabIndex={-1}>{step === 'menu' ? <>Your kind<br />of <em>wing night.</em></> : step === 'checkout' ? <>Checkout<em> preview.</em></> : <>Looks <em>delicious.</em></>}</h1></div>{step === 'menu' && <a className="cart-jump" href="#demo-cart"><ShoppingBag size={20} />Your cart <b>{count}</b></a>}</div>
      {step === 'review' ? <section className="demo-result">
        <div className="demo-result-icon"><Check size={30} /></div><h2>Demo complete—not an order.</h2><p>This preview has not been sent to Wingmaster. Nothing has been charged, reserved or scheduled.</p>
        <div className="demo-review-details"><div><span>Demo customer</span><strong>{details.name}</strong></div><div><span>{fulfillment === 'pickup' ? 'Pickup location' : 'Delivery preview'}</span><strong>{fulfillment === 'pickup' ? '70 Erie Ave., Brantford' : `${details.street}, ${details.city}, ${details.postal}`}</strong></div></div>
        <div className="review-lines">{cart.map(line => <div key={line.id}><div><strong>{line.qty} × {itemFor(line).name}</strong><p>{lineDescription(line)}</p>{line.notes && <p>Note: {line.notes}</p>}</div><b>{money(linePrice(line) * line.qty)}</b></div>)}</div>
        <div className="review-totals"><p><span>Items</span>{money(summary.subtotal)}</p><p><span>Estimated HST (13%)</span>{money(summary.tax)}</p><p><span>Optional tip</span>{money(summary.tip)}</p>{fulfillment === 'delivery' && <p><span>Delivery charge</span>Not included</p>}<p className="review-grand"><span>Estimated {fulfillment === 'delivery' ? 'items ' : ''}total</span>{money(summary.total)}</p></div>
        {details.notes && <p className="review-note">Order note: {details.notes}</p>}
        <div className="demo-result-actions"><button className="menu-primary" type="button" onClick={() => setStep('checkout')}>Edit preview <ArrowLeft size={16} /></button><button className="menu-secondary" type="button" onClick={startOver}>Start a new demo</button></div>
        <p className="menu-small-note">A restaurant-approved order connection and payment provider are required before this can accept real orders.</p>
      </section> : <div className="menu-columns">
        <div className="menu-main">
          {step === 'menu' ? <>
            <div className="menu-food-search"><Search size={20} /><label className="sr-only" htmlFor="food-search">Search the food menu</label><input id="food-search" type="search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search wings, fries, drinks…" /></div>
            <div className="menu-categories" aria-label="Food categories">{categories.map(cat => <button type="button" key={cat} aria-pressed={!search && category === cat} onClick={() => { setCategory(cat); setSearch(''); }}>{cat}</button>)}</div>
            <div className="menu-section-title"><h2>{search ? 'Search results' : category}</h2><span role="status">{filtered.length} items</span></div>
            {filtered.length === 0 ? <div className="bible-empty"><h3>No dishes found.</h3><p>Try another dish or browse a category.</p><button type="button" onClick={() => setSearch('')}>Clear search</button></div> : <div className="food-grid">{filtered.map(item => <button type="button" key={item.id} className={`food-card ${item.image ? 'food-card-photo' : ''}`} onClick={() => { setInitialFlavour(undefined); setActiveItem(item); }}>
              {item.image && <div className="food-image"><Image src={item.image} alt="" width={577} height={433} /></div>}
              <div className="food-card-copy"><span className="food-category">{item.category}</span><h3>{item.name}</h3><p>{item.description}</p><div><strong>{item.variants ? 'From ' : ''}{money(item.price)}</strong><span className="food-add"><Plus size={20} /><span className="sr-only">Customize {item.name}</span></span></div></div>
            </button>)}</div>}
            <Link className="bible-callout" href="/flavours"><BookOpen size={25} /><div><strong>Decisions, delicious decisions.</strong><span>Browse all {flavours.length} flavours in the Wing Bible.</span></div><ArrowRight size={22} /></Link>
            <p className="menu-small-note">CAD. Menu-reference prices checked September 2, 2026. Some online and takeout prices differ; the shop must confirm pricing, options and availability before launch.</p>
          </> : <section className="demo-checkout">
            <button className="menu-back" type="button" onClick={() => setStep('menu')}><ArrowLeft size={16} /> Back to menu</button>
            <form onSubmit={review}>
              <fieldset className="checkout-fieldset"><legend>01 / Pickup or delivery</legend><div className="checkout-fulfillment"><label className={fulfillment === 'pickup' ? 'selected' : ''}><input type="radio" name="fulfillment" checked={fulfillment === 'pickup'} onChange={() => setFulfillment('pickup')} />Pickup<span>70 Erie Ave., Brantford</span></label><label className={fulfillment === 'delivery' ? 'selected' : ''}><input type="radio" name="fulfillment" checked={fulfillment === 'delivery'} onChange={() => setFulfillment('delivery')} />Delivery<span>Address preview only</span></label></div></fieldset>
              <fieldset className="checkout-fieldset"><legend>02 / Your details</legend><p className="menu-small-note">Use sample details for this demo. These fields stay on this page; they are not submitted or saved.</p><div className="checkout-inputs"><label>Full name<input required value={details.name} onChange={e => field('name', e.target.value)} autoComplete="off" maxLength={80} placeholder="Alex Sample" /></label><label>Phone<input required type="tel" value={details.phone} onChange={e => field('phone', e.target.value)} autoComplete="off" maxLength={24} placeholder="519-555-0100" /></label><label className="input-full">Email<input required type="email" value={details.email} onChange={e => field('email', e.target.value)} autoComplete="off" maxLength={120} placeholder="alex@example.com" /></label>
                {fulfillment === 'delivery' && <><label className="input-full">Street address<input required value={details.street} onChange={e => field('street', e.target.value)} autoComplete="off" maxLength={150} placeholder="123 Example Street" /></label><label>City<input required value={details.city} onChange={e => field('city', e.target.value)} autoComplete="off" maxLength={80} /></label><label>Postal code<input required value={details.postal} onChange={e => field('postal', e.target.value)} autoComplete="off" maxLength={7} placeholder="N3S 2E8" /></label><p className="menu-small-note input-full">Delivery coverage, fee and timing are not connected. The estimate excludes delivery.</p></>}
                <label className="input-full">Order notes <span>optional</span><textarea value={details.notes} onChange={e => field('notes', e.target.value)} maxLength={500} rows={3} placeholder="Any additional preferences?" /></label></div></fieldset>
              <fieldset className="checkout-fieldset"><legend>03 / Optional tip</legend><div className="tip-options">{[0, 10, 15, 20].map(percent => <label key={percent} className={tip === percent ? 'selected' : ''}><input type="radio" name="tip" checked={tip === percent} onChange={() => setTip(percent)} />{percent === 0 ? 'No tip' : `${percent}%`}</label>)}</div><p className="menu-small-note">Calculated on the item subtotal. Nothing is charged.</p></fieldset>
              <div className="demo-payment"><Info size={21} /><div><h3>No payment in this demo</h3><p>Real card payments and pay-at-store orders are not connected. No card information is collected.</p></div></div>
              {formError && <p role="alert" className="form-error">{formError}</p>}
              <button className="menu-primary checkout-submit" type="submit" disabled={!cart.length}>Review demo order <ArrowRight size={19} /></button>
            </form>
          </section>}
        </div>
        <aside className="menu-cart" id="demo-cart" aria-label="Demo shopping cart"><div className="menu-cart-header"><ShoppingBag size={22} /><h2>Your cart</h2><span>{count}</span></div>
          {cart.length === 0 ? <div className="menu-cart-empty"><ShoppingBag size={40} strokeWidth={1} /><h3>A good night starts here.</h3><p>Pick something delicious from the menu.</p></div> : <div className="menu-cart-lines">{cart.map(line => <article className="menu-cart-line" key={line.id}><div className="menu-cart-line-head"><h3>{itemFor(line).name}</h3><button type="button" className="icon-button" aria-label={`Remove ${itemFor(line).name} from cart`} onClick={() => remove(line.id)}><Trash2 size={17} /></button></div><p>{lineDescription(line)}</p>{line.notes && <p className="line-note">{line.notes}</p>}<div className="menu-cart-line-bottom"><div className="quantity-control"><button type="button" aria-label={`Decrease ${itemFor(line).name} quantity`} disabled={line.qty <= 1} onClick={() => changeQty(line.id, line.qty - 1)}><Minus size={15} /></button><span>{line.qty}</span><button type="button" aria-label={`Increase ${itemFor(line).name} quantity`} disabled={line.qty >= 20} onClick={() => changeQty(line.id, line.qty + 1)}><Plus size={15} /></button></div><strong>{money(linePrice(line) * line.qty)}</strong></div></article>)}</div>}
          <div className="menu-cart-totals"><p><span>Items subtotal</span><b>{money(summary.subtotal)}</b></p><p><span>Estimated HST (13%)</span><b>{money(summary.tax)}</b></p>{tip > 0 && <p><span>Tip ({tip}%)</span><b>{money(summary.tip)}</b></p>}{step === 'checkout' && fulfillment === 'delivery' && <p><span>Delivery charge</span><span>Not included</span></p>}<p className="cart-grand-total"><span>Estimated total</span><b>{money(summary.total)}</b></p></div>
          {step === 'menu' && <button className="menu-primary" type="button" disabled={!cart.length} onClick={() => setStep('checkout')}>Preview checkout <ChevronRight size={18} /></button>}
          <p className="menu-cart-note">Demo only · Cart clears on refresh.<br />No order will be placed.</p><div className="menu-cart-location"><MapPin size={16} />70 Erie Ave., Brantford</div>
        </aside>
      </div>}
    </div>
    <div className={`cart-toast ${message ? 'visible' : ''}`} role="status" aria-live="polite">{message && <><Check size={18} />{message}</>}</div>
    {activeItem && <ItemBuilder key={activeItem.id} item={activeItem} initialFlavour={initialFlavour} initialStyle={requestedType === 'naked' ? 'Naked' : undefined} onClose={() => { setActiveItem(null); setInitialFlavour(undefined); }} onAdd={addItem} />}
  </main>;
}
export default function OrderPage() { return <Suspense fallback={<main className="menu-app"><div className="bible-shell"><h1>Loading the menu…</h1><Link href="/flavours">Browse the Wing Bible</Link></div></main>}><OrderMenu /></Suspense>; }
