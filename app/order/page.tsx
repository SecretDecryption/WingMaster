'use client';

import {
  ArrowLeft,
  Check,
  Flame,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FormEvent, Suspense, useMemo, useState } from 'react';
import {
  FlavourTab,
  WingStyleSlug,
  flavourSets,
  portionSizes,
  wingStyles,
} from '@/lib/data';

type CartLine = {
  key: string;
  styleSlug: WingStyleSlug;
  styleTitle: string;
  sizeId: string;
  sizeLabel: string;
  sizePrice: number;
  flavourName: string;
  heat: string;
  qty: number;
};

type Step = 'build' | 'checkout' | 'confirmed';

function currency(value: number) {
  return value.toLocaleString('en-CA', { style: 'currency', currency: 'CAD' });
}

function OrderBuilder() {
  const searchParams = useSearchParams();
  const preselect = searchParams.get('type');
  const initialStyle = wingStyles.find((s) => s.slug === preselect)?.slug ?? null;

  const [styleSlug, setStyleSlug] = useState<WingStyleSlug | null>(initialStyle);
  const [sizeId, setSizeId] = useState<string | null>(null);
  const [flavourTab, setFlavourTab] = useState<FlavourTab>('Most loved');
  const [flavourName, setFlavourName] = useState<string | null>(null);

  const [cart, setCart] = useState<CartLine[]>([]);
  const [step, setStep] = useState<Step>('build');
  const [justAdded, setJustAdded] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [fulfillment, setFulfillment] = useState<'pickup' | 'delivery'>('pickup');
  const [notes, setNotes] = useState('');
  const [orderNumber, setOrderNumber] = useState('');

  const selectedStyle = wingStyles.find((s) => s.slug === styleSlug) ?? null;
  const selectedSize = portionSizes.find((s) => s.id === sizeId) ?? null;
  const selectedFlavour = useMemo(() => {
    for (const tab of Object.keys(flavourSets) as FlavourTab[]) {
      const match = flavourSets[tab].find(([fName]) => fName === flavourName);
      if (match) return { name: match[0], heat: match[1], tab };
    }
    return null;
  }, [flavourName]);

  const canAdd = Boolean(selectedStyle && selectedSize && selectedFlavour);

  const subtotal = cart.reduce((sum, line) => sum + line.sizePrice * line.qty, 0);
  const totalItemCount = cart.reduce((n, line) => n + line.qty, 0);

  function addToCart() {
    if (!selectedStyle || !selectedSize || !selectedFlavour) return;
    const key = `${selectedStyle.slug}-${selectedSize.id}-${selectedFlavour.name}`;
    setCart((prev) => {
      const existing = prev.find((line) => line.key === key);
      if (existing) {
        return prev.map((line) => (line.key === key ? { ...line, qty: line.qty + 1 } : line));
      }
      return [
        ...prev,
        {
          key,
          styleSlug: selectedStyle.slug,
          styleTitle: selectedStyle.title,
          sizeId: selectedSize.id,
          sizeLabel: selectedSize.label,
          sizePrice: selectedSize.price,
          flavourName: selectedFlavour.name,
          heat: selectedFlavour.heat,
          qty: 1,
        },
      ];
    });
    setFlavourName(null);
    setSizeId(null);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1800);
  }

  function changeQty(key: string, delta: number) {
    setCart((prev) =>
      prev
        .map((line) => (line.key === key ? { ...line, qty: Math.max(0, line.qty + delta) } : line))
        .filter((line) => line.qty > 0),
    );
  }

  function removeLine(key: string) {
    setCart((prev) => prev.filter((line) => line.key !== key));
  }

  function placeOrder(e: FormEvent) {
    e.preventDefault();
    const generated = `WM-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(generated);
    setStep('confirmed');
  }

  function startNewOrder() {
    setCart([]);
    setStyleSlug(null);
    setSizeId(null);
    setFlavourName(null);
    setName('');
    setPhone('');
    setNotes('');
    setFulfillment('pickup');
    setStep('build');
  }

  return (
    <main className="order-page">
      <div className="order-topline">
        <Link href="/"><ArrowLeft size={15} /> Back to site</Link>
        <span>519-750-1440</span>
      </div>

      <header className="order-header">
        <Link className="order-brand" href="/">
          <Image src="/wingmaster-logo.png" alt="Wingmaster" width={1500} height={1500} />
        </Link>
        <div>
          <p className="kicker">Build your order</p>
          <h1>Mix &amp; match,<br />your way.</h1>
        </div>
      </header>

      {step === 'confirmed' ? (
        <section className="confirmation section-shell">
          <div className="confirmation-badge"><Check size={26} /></div>
          <p className="kicker">Order received</p>
          <h2>Thanks, {name.split(' ')[0] || 'friend'}.</h2>
          <p className="confirmation-number">Order <strong>{orderNumber}</strong></p>
          <div className="confirmation-summary">
            {cart.map((line) => (
              <div key={line.key} className="confirmation-line">
                <span>{line.qty}&times; {line.sizeLabel} {line.styleTitle} — {line.flavourName}</span>
                <span>{currency(line.sizePrice * line.qty)}</span>
              </div>
            ))}
            <div className="confirmation-line confirmation-total">
              <span>Total</span>
              <span>{currency(subtotal)}</span>
            </div>
          </div>
          <p className="confirmation-note">
            {fulfillment === 'pickup' ? 'Ready for pickup' : 'Out for delivery'} at 70 Erie Ave.
            Payment is taken in-store for now—online payment is coming soon.
          </p>
          <button className="button" type="button" onClick={startNewOrder}>Start a new order</button>
        </section>
      ) : (
        <div className="order-layout section-shell">
          <div className="order-builder">
            {step === 'build' ? (
              <>
                <section className="build-step">
                  <p className="step-label">1. Choose your wing style</p>
                  <div className="style-picker">
                    {wingStyles.map((style) => (
                      <button
                        key={style.slug}
                        type="button"
                        className={`style-card ${styleSlug === style.slug ? 'is-selected' : ''}`}
                        onClick={() => setStyleSlug(style.slug)}
                      >
                        <Image src={style.image} alt={style.title} width={200} height={150} />
                        <span className="style-card-title">{style.title}</span>
                        <span className="style-card-note">{style.note}</span>
                      </button>
                    ))}
                  </div>
                </section>

                <section className="build-step">
                  <p className="step-label">2. Pick a size</p>
                  <div className="size-picker">
                    {portionSizes.map((size) => (
                      <button
                        key={size.id}
                        type="button"
                        className={`size-pill ${sizeId === size.id ? 'is-selected' : ''}`}
                        onClick={() => setSizeId(size.id)}
                      >
                        <span>{size.label}</span>
                        <span className="size-price">{currency(size.price)}</span>
                      </button>
                    ))}
                  </div>
                </section>

                <section className="build-step">
                  <p className="step-label">3. Choose one flavour</p>
                  <div className="flavour-tabs" role="tablist" aria-label="Flavour categories">
                    {(Object.keys(flavourSets) as FlavourTab[]).map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        role="tab"
                        aria-selected={flavourTab === tab}
                        onClick={() => setFlavourTab(tab)}
                      >
                        {tab} <span>{flavourSets[tab].length}</span>
                      </button>
                    ))}
                  </div>
                  <div className="flavour-grid order-flavour-grid" role="tabpanel">
                    {flavourSets[flavourTab].map(([fname, heat, description]) => (
                      <button
                        type="button"
                        key={fname}
                        className={`flavour-card order-flavour-card ${flavourName === fname ? 'is-selected' : ''}`}
                        onClick={() => setFlavourName(fname)}
                      >
                        <div className={`heat heat-${heat.replace('+', 'plus')}`}>{heat}</div>
                        <h3>{fname}</h3>
                        <p>{description}</p>
                        {flavourName === fname && <span className="flavour-check"><Check size={16} /></span>}
                      </button>
                    ))}
                  </div>
                </section>

                <button className="button add-to-cart-button" type="button" disabled={!canAdd} onClick={addToCart}>
                  {justAdded ? 'Added to order' : 'Add this to my order'}
                </button>
                {!canAdd && <p className="add-hint">Pick a style, a size and a flavour to add it.</p>}
              </>
            ) : (
              <section className="checkout-step">
                <p className="step-label">Your details</p>
                <form className="checkout-form" onSubmit={placeOrder}>
                  <label>
                    Name
                    <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
                  </label>
                  <label>
                    Phone
                    <input required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(519) 000-0000" />
                  </label>
                  <div className="fulfillment-toggle">
                    <button type="button" className={fulfillment === 'pickup' ? 'is-selected' : ''} onClick={() => setFulfillment('pickup')}>Pickup</button>
                    <button type="button" className={fulfillment === 'delivery' ? 'is-selected' : ''} onClick={() => setFulfillment('delivery')}>Delivery</button>
                  </div>
                  <label>
                    Notes (optional)
                    <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Extra dips, allergies, etc." rows={3} />
                  </label>

                  <div className="payment-placeholder">
                    <p><strong>Payment</strong></p>
                    <p>Pay in store for now. Online payment can be added here later.</p>
                  </div>

                  <div className="checkout-actions">
                    <button type="button" className="text-link-dark" onClick={() => setStep('build')}>
                      <ArrowLeft size={15} /> Back to order
                    </button>
                    <button className="button" type="submit">Place order — {currency(subtotal)}</button>
                  </div>
                </form>
              </section>
            )}
          </div>

          <aside className="cart-panel">
            <div className="cart-panel-head">
              <ShoppingBag size={18} />
              <span>Your order</span>
              {totalItemCount > 0 && <span className="cart-count">{totalItemCount}</span>}
            </div>

            {cart.length === 0 ? (
              <p className="cart-empty">Nothing added yet—build an item on the left.</p>
            ) : (
              <div className="cart-lines">
                {cart.map((line) => (
                  <div className="cart-line" key={line.key}>
                    <div className="cart-line-info">
                      <p className="cart-line-title">{line.styleTitle}</p>
                      <p className="cart-line-flavour">
                        <Flame size={12} /> {line.flavourName} &middot; {line.sizeLabel}
                      </p>
                    </div>
                    <div className="cart-line-controls">
                      <button type="button" onClick={() => changeQty(line.key, -1)} aria-label="Decrease quantity"><Minus size={13} /></button>
                      <span>{line.qty}</span>
                      <button type="button" onClick={() => changeQty(line.key, 1)} aria-label="Increase quantity"><Plus size={13} /></button>
                    </div>
                    <div className="cart-line-price">
                      <span>{currency(line.sizePrice * line.qty)}</span>
                      <button type="button" className="cart-line-remove" onClick={() => removeLine(line.key)} aria-label="Remove item">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="cart-subtotal">
              <span>Subtotal</span>
              <span>{currency(subtotal)}</span>
            </div>

            {step === 'build' && (
              <button
                className="button cart-checkout-button"
                type="button"
                disabled={cart.length === 0}
                onClick={() => setStep('checkout')}
              >
                Checkout
              </button>
            )}
            <p className="cart-note">Prices shown are placeholders—swap in your real menu pricing.</p>
          </aside>
        </div>
      )}
    </main>
  );
}

export default function OrderPage() {
  return (
    <Suspense fallback={null}>
      <OrderBuilder />
    </Suspense>
  );
}
