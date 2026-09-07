'use client';

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  Flame,
  Heart,
  Menu,
  Phone,
  Quote,
  ShieldAlert,
  Star,
  X,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FlavourTab, flavourSets, wingStyles } from '@/lib/data';
import { AccountLink } from '@/components/favourite-button';
import { HomeFavourites } from '@/components/home-favourites';
import { DirectionsChooser, LocationMap } from '@/components/location-map';
import { SpiceLegend } from '@/components/spice-legend';

const menuItems = wingStyles;
const happenings = [
  { eyebrow: '200+ choices', title: 'The full Wing Bible', copy: 'Search, filter and find the sauce calling your name.', image: '/breaded-wings.png', href: '/flavours', cta: 'Find your flavour' },
  { eyebrow: 'For the whole crew', title: 'Party trays', copy: 'Big orders built for game nights, offices and hungry families.', image: '/party-tray.jpg', href: '#party', cta: 'See catering' },
  { eyebrow: 'Your personal lineup', title: 'Your Sauces', copy: 'Save the flavours you love and order them again in a tap.', image: '/boneless-wings.png', href: '/your-sauces', cta: 'Open your sauces' },
  { eyebrow: '10 Million Scoville', title: 'Blackenstein', copy: 'The hottest item at Wingmaster. Mandatory waiver.', image: '/blackenstein-challenge.png', href: '/blackenstein', cta: 'Enter if you dare' },
];

function getStoreStatus() {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Toronto',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date());
  const value = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value ?? '';
  const day = value('weekday');
  const hour = Number(value('hour'));
  const minute = Number(value('minute'));
  const now = hour + minute / 60;
  const opensAt = ['Fri', 'Sat', 'Sun'].includes(day) ? 12 : 15;

  if (day === 'Mon') return { label: 'Closed today', detail: 'Back Tuesday at 3pm' };
  if (now < opensAt) return { label: 'Opens today', detail: `at ${opensAt === 12 ? '12pm' : '3pm'}` };
  if (now < 23) return { label: 'Open now', detail: 'until 11pm' };
  if (day === 'Sun') return { label: 'Closed now', detail: 'Back Tuesday at 3pm' };
  if (day === 'Thu') return { label: 'Closed now', detail: 'Tomorrow at 12pm' };
  return { label: 'Closed now', detail: `Tomorrow at ${['Fri', 'Sat'].includes(day) ? '12pm' : '3pm'}` };
}

export default function Home() {
  const [flavourTab, setFlavourTab] = useState<FlavourTab>('Most loved');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [storeStatus, setStoreStatus] = useState(getStoreStatus);

  useEffect(() => {
    const timer = window.setInterval(() => setStoreStatus(getStoreStatus()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <main>
      <div className="topline">
        <p><span>Chicken wing artwork at its best.</span><span className="topline-dot" /> Brantford · Since 2005</p>
        <a href="tel:5197501440"><Phone size={14} /> 519-750-1440</a>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Wingmaster home">
          <Image src="/wingmaster-logo.png" alt="Wingmaster Wing and Sauce Shop" width={1500} height={1500} priority />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#menu">Menu</a>
          <a href="#flavours">Flavours</a>
          <a href="#specials">Specials</a>
          <Link href="/blackenstein">Blackenstein</Link>
          <a href="#story">About</a>
          <a href="#visit">Contact</a>
        </nav>
        <div className="header-actions">
          <Link className="header-sauces-link" href="/your-sauces"><Heart size={17} aria-hidden="true" /><span>Your Sauces</span></Link>
          <AccountLink />
          <button className="mobile-toggle" type="button" aria-expanded={mobileOpen} aria-controls="mobile-menu" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
          <Link className="button button-small header-order-link" href="/order">
            Order now <ArrowUpRight size={16} />
          </Link>
        </div>
      </header>
      {mobileOpen && (
        <div className="mobile-menu" id="mobile-menu">
          {['menu', 'flavours', 'specials', 'story', 'visit'].map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setMobileOpen(false)}>{item === 'story' ? 'Our story' : item}</a>
          ))}
          <Link href="/blackenstein" onClick={() => setMobileOpen(false)}>Blackenstein</Link>
          <Link href="/profile" onClick={() => setMobileOpen(false)}>My profile</Link>
          <Link href="/your-sauces" onClick={() => setMobileOpen(false)}><Heart size={16} aria-hidden="true" />Your Sauces</Link>
          <a href="tel:5197501440"><Phone size={16} /> 519-750-1440</a>
        </div>
      )}

      <section id="top" className="hero">
        <div className="hero-media" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow"><span /> Brantford&apos;s legendary wing shop</div>
          <h1><em>200+ flavours.</em><br /><span>One legendary wing shop.</span></h1>
          <p>Serving Brantford since 2005. Big wings, outrageous flavour, zero boring bites.</p>
          <div className="hero-actions">
            <Link className="button" href="/order">
              Order now <ArrowUpRight size={18} />
            </Link>
            <a className="button button-outline" href="#menu">View menu</a>
            <Link className="button button-outline" href="/flavours">Find your flavour</Link>
          </div>
        </div>

        <div className="hero-stamp" aria-label="Locally owned in Brantford">
          <strong>It&apos;s a tremendous</strong>
          <span>wing experience</span>
        </div>

        <div className="hero-details">
          <div aria-live="polite"><Clock3 size={18} /><span><b>{storeStatus.label}</b> {storeStatus.detail}</span></div>
          <div><DirectionsChooser hero /></div>
          <div className="heat-note"><Flame size={18} /><span><b>Choose your heat</b> No heat to 10M</span></div>
        </div>
      </section>

      <section className="ticker" aria-label="Wingmaster highlights">
        <div>
          <span>200 flavours</span><b>◆</b><span>Fresh, never boring</span><b>◆</b><span>Brantford born</span><b>◆</b><span>Made by wing people</span><b>◆</b>
          <span aria-hidden="true">200 flavours</span><b aria-hidden="true">◆</b><span aria-hidden="true">Fresh, never boring</span><b aria-hidden="true">◆</b><span aria-hidden="true">Brantford born</span><b aria-hidden="true">◆</b><span aria-hidden="true">Made by wing people</span><b aria-hidden="true">◆</b>
        </div>
      </section>

      <section id="specials" className="happenings section-shell">
        <div className="happenings-heading"><h2>What&apos;s happening at Wingmaster.</h2><Link href="/order">See the full menu <ArrowRight size={16} /></Link></div>
        <div className="happenings-grid">
          {happenings.map(item => <Link className="happening-card" href={item.href} key={item.title}>
            <Image src={item.image} alt="" width={600} height={420} />
            <div><span>{item.eyebrow}</span><h3>{item.title}</h3><p>{item.copy}</p><b>{item.cta} <ArrowUpRight size={15} /></b></div>
          </Link>)}
        </div>
      </section>

      <section id="menu" className="menu-section section-shell">
        <div className="section-heading split-heading">
          <div>
            <p className="kicker">Pick your player</p>
            <h2>Three ways<br />to wing it.</h2>
          </div>
          <div className="heading-copy">
            <p>Every order starts crispy, gets tossed fresh, and lands in the flavour of your choice.</p>
            <Link className="arrow-link" href="/order">See the full menu <ArrowRight size={17} /></Link>
          </div>
        </div>

        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <article className="menu-card" key={item.title}>
              <div className="menu-image">
                <span>0{index + 1}</span>
                <Image src={item.image} alt={item.title} width={577} height={433} />
                <small>{item.note}</small>
              </div>
              <div className="menu-copy">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <Link href={`/order?type=${item.slug}`} aria-label={`Order ${item.title}`}><ArrowUpRight /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="flavours" className="flavour-section">
        <div className="flavour-intro section-shell">
          <div>
            <p className="kicker kicker-light">Find your flavour</p>
            <h2>There&apos;s no<br />wrong answer.</h2>
          </div>
          <div className="flavour-stat">
            <strong>200</strong>
            <span>original recipes<br />and counting</span>
          </div>
        </div>

        <div className="flavour-finder section-shell">
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
          <div className="flavour-grid" role="tabpanel">
            {flavourSets[flavourTab].map(([name, heat, description], index) => (
              <article className="flavour-card" key={name} style={{ animationDelay: `${index * 45}ms` }}>
                <div className={`heat heat-${heat.replace('+', 'plus')}`}>{heat}</div>
                <h3>{name}</h3>
                <p>{description}</p>
                <span className="flavour-arrow"><ArrowUpRight size={18} /></span>
              </article>
            ))}
          </div>
          <div className="flavour-footer">
            <p><span className="legend-dot noheat" /> N — No heat</p>
            <p><span className="legend-dot spicy" /> S — Spicy</p>
            <p><span className="legend-dot hot" /> 3+ — Serious heat</p>
            <Link href="/flavours">Open the full Wing Bible <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="blackenstein-band">
        <div className="blackenstein-band-copy">
          <p>The final level</p><h2>Blackenstein.</h2><strong>10 Million Scoville</strong>
          <span>One way ticket. Straight to fire.</span>
          <div><Link className="button button-outline" href="/blackenstein">Learn more</Link><Link className="button" href="/blackenstein#waiver">Read the waiver <ArrowRight size={17} /></Link></div>
        </div>
        <div className="blackenstein-band-warning"><ShieldAlert size={25} /><span>Mandatory waiver<br />before trying</span></div>
      </section>

      <div className="section-shell spice-home"><SpiceLegend /></div>

      <HomeFavourites />

      <section id="story" className="story-section section-shell">
        <div className="story-photo-wrap">
          <Image src="/party-tray.jpg" alt="A fresh Wingmaster party tray filled with wings" width={800} height={600} />
          <div className="story-badge"><Star size={15} fill="currentColor" /><span>20 years of<br />flavour first</span></div>
        </div>
        <div className="story-copy">
          <p className="kicker">One shop. One obsession.</p>
          <h2>Not a chain.<br /><em>A calling.</em></h2>
          <p className="story-lede">
            Tre “The Wingmaster” Jones opened the doors in 2005 with a recipe book,
            a relentless curiosity and one simple belief: the sauce should be the reason you come back.
          </p>
          <div className="story-points">
            <p><Check size={17} /> Born and built in Brantford</p>
            <p><Check size={17} /> Recipes developed in-house</p>
            <p><Check size={17} /> Still one independently owned shop</p>
          </div>
          <a className="arrow-link" href="https://www.brantbeacon.ca/local-restaurateur-solidifies-reputation-as-the-regions-true-wingmaster/">Meet the Wingmaster <ArrowUpRight size={17} /></a>
        </div>
      </section>

      <section className="quote-section">
        <Quote size={34} />
        <blockquote>We&apos;re not in the wing business.<br />We&apos;re in the <em>flavour</em> business.</blockquote>
        <p>— Tre “The Wingmaster” Jones</p>
      </section>

      <section id="party" className="party-section section-shell">
        <div>
          <p className="kicker">Feed the whole crew</p>
          <h2>Party trays that<br />show up big.</h2>
          <p>Game night, office lunch or family gathering—make the wings the easiest decision of the day.</p>
          <div className="party-actions">
            <a className="button" href="tel:5197501440">Call to order <Phone size={17} /></a>
            <span>Same-day delivery<br />may be available</span>
          </div>
        </div>
        <div className="party-visual">
          <Image src="/party-tray.jpg" alt="Wingmaster wings prepared in a party tray" width={800} height={600} />
          <span className="party-tag">Good times<br />included</span>
        </div>
      </section>

      <section id="visit" className="visit-section">
        <div className="visit-card">
          <p className="kicker kicker-light">Come hungry</p>
          <h2>Your wings<br />are waiting.</h2>
          <div className="visit-grid">
            <div>
              <span className="visit-label">Find us</span>
              <p>70 Erie Ave.<br />Brantford, ON N3S 2E8</p>
              <DirectionsChooser />
            </div>
            <div>
              <span className="visit-label">Hours</span>
              <p>Tue–Thu: 3pm–11pm<br />Fri–Sun: 12pm–11pm<br />Monday: Closed</p>
            </div>
          </div>
          <Link className="button button-cream" href="/order">Order for pickup or delivery <ArrowRight size={17} /></Link>
        </div>
        <LocationMap />
      </section>

      <footer>
        <div className="footer-main section-shell">
          <div className="footer-brand">
            <Image src="/wingmaster-logo.png" alt="Wingmaster" width={1500} height={1500} />
            <p>Big flavour.<br />One Brantford original.</p>
          </div>
          <div className="footer-links">
            <span>Explore</span>
            <a href="#menu">Menu</a>
            <a href="#flavours">Flavours</a>
            <a href="#story">Our story</a>
            <Link href="/blackenstein">Blackenstein</Link>
            <a href="#visit">Visit</a>
            <Link href="/your-sauces">Your Sauces</Link>
          </div>
          <div className="footer-links">
            <span>Talk to us</span>
            <a href="tel:5197501440">519-750-1440</a>
            <a href="mailto:info@wingmaster.ca">info@wingmaster.ca</a>
            <a href="https://www.instagram.com/wingmaster1/">↗ Instagram</a>
          </div>
          <div className="footer-order">
            <p>Craving confirmed?</p>
            <Link className="button" href="/order">Order now <ArrowUpRight size={17} /></Link>
          </div>
        </div>
        <div className="footer-bottom section-shell">
          <span>© {new Date().getFullYear()} Wingmaster · Brantford, Ontario.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
