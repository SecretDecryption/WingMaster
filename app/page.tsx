'use client';

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  Flame,
  MapPin,
  Menu,
  Phone,
  Quote,
  Star,
  X,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FlavourTab, flavourSets, wingStyles } from '@/lib/data';

const menuItems = wingStyles;

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
        <p><span>Brantford&apos;s original wing destination</span><span className="topline-dot" /> Independently owned since 2005</p>
        <a href="tel:5197501440"><Phone size={14} /> 519-750-1440</a>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Wingmaster home">
          <Image src="/wingmaster-logo.png" alt="Wingmaster Wing and Sauce Shop" width={1500} height={1500} priority />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#menu">Menu</a>
          <a href="#flavours">Flavours</a>
          <a href="#story">Our story</a>
          <a href="#visit">Visit</a>
        </nav>
        <div className="header-actions">
          <button className="mobile-toggle" type="button" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
          <Link className="button button-small" href="/order">
            Order now <ArrowUpRight size={16} />
          </Link>
        </div>
      </header>
      {mobileOpen && (
        <div className="mobile-menu">
          {['menu', 'flavours', 'story', 'visit'].map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setMobileOpen(false)}>{item === 'story' ? 'Our story' : item}</a>
          ))}
          <a href="tel:5197501440"><Phone size={16} /> 519-750-1440</a>
        </div>
      )}

      <section id="top" className="hero">
        <div className="hero-media" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow"><span /> Flavour made here</div>
          <h1>Worth the<br />sauce <em>stains.</em></h1>
          <p>
            Brantford&apos;s home for crispy wings and an outrageous lineup of
            house-made flavours—served hot, messy and exactly how you like them.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/order">
              Start your order <ArrowUpRight size={18} />
            </Link>
            <a className="text-link" href="#flavours">Explore 200 flavours <span>↓</span></a>
          </div>
        </div>

        <div className="hero-stamp" aria-label="Locally owned in Brantford">
          <strong>Brantford</strong>
          <span>Local &amp; proud</span>
        </div>

        <div className="hero-details">
          <div aria-live="polite"><Clock3 size={18} /><span><b>{storeStatus.label}</b> {storeStatus.detail}</span></div>
          <div><MapPin size={18} /><span><b>Find us</b> 70 Erie Ave.</span></div>
          <div className="heat-note"><Flame size={18} /><span><b>Choose your heat</b> No heat to 10M</span></div>
        </div>
      </section>

      <section className="ticker" aria-label="Wingmaster highlights">
        <div>
          <span>200 flavours</span><b>◆</b><span>Fresh, never boring</span><b>◆</b><span>Brantford born</span><b>◆</b><span>Made by wing people</span><b>◆</b>
          <span aria-hidden="true">200 flavours</span><b aria-hidden="true">◆</b><span aria-hidden="true">Fresh, never boring</span><b aria-hidden="true">◆</b><span aria-hidden="true">Brantford born</span><b aria-hidden="true">◆</b><span aria-hidden="true">Made by wing people</span><b aria-hidden="true">◆</b>
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
            <Link href="/order">Open the full Wing Bible <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

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

      <section className="party-section section-shell">
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
              <a href="https://maps.google.com/?q=70+Erie+Ave+Brantford+ON">Get directions <ArrowUpRight size={15} /></a>
            </div>
            <div>
              <span className="visit-label">Hours</span>
              <p>Tue–Thu: 3pm–11pm<br />Fri–Sun: 12pm–11pm<br />Monday: Closed</p>
            </div>
          </div>
          <Link className="button button-cream" href="/order">Order for pickup or delivery <ArrowRight size={17} /></Link>
        </div>
        <a className="map-card" href="https://maps.google.com/?q=70+Erie+Ave+Brantford+ON" aria-label="Open Wingmaster location in Google Maps">
          <div className="map-grid-lines" aria-hidden="true" />
          <span className="map-road road-one" />
          <span className="map-road road-two" />
          <span className="map-pin"><MapPin size={24} fill="currentColor" /></span>
          <div className="map-label"><Image src="/wingmaster-logo.png" alt="" width={1500} height={1500} /><span><strong>Wingmaster</strong>70 Erie Avenue</span></div>
        </a>
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
            <a href="#visit">Visit</a>
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
          <span>© {new Date().getFullYear()} Wingmaster. Concept redesign.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
