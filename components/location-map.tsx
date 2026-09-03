'use client';

import { useEffect, useRef } from 'react';
import { ArrowUpRight, ChevronDown, MapPin, Navigation } from 'lucide-react';
import { appleDirectionsUrl, googleDirectionsUrl, streetMapUrl } from '@/lib/location';

export function DirectionsChooser({ hero = false }: { hero?: boolean }) {
  const details = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const closeOutside = (event: PointerEvent) => { if (details.current && !details.current.contains(event.target as Node)) details.current.open = false; };
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape' && details.current?.open) { details.current.open = false; details.current.querySelector('summary')?.focus(); } };
    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('keydown', escape);
    return () => { document.removeEventListener('pointerdown', closeOutside); document.removeEventListener('keydown', escape); };
  }, []);
  return <details ref={details} className={`directions-chooser ${hero ? 'directions-hero' : ''}`}>
    <summary><MapPin size={18} aria-hidden="true" />{hero ? <span><b>Find us</b> 70 Erie Ave.</span> : <span>Get directions</span>}<ChevronDown size={16} aria-hidden="true" /></summary>
    <div className="directions-options"><p>Open directions in</p><a href={appleDirectionsUrl} onClick={() => { if (details.current) details.current.open = false; }}><Navigation size={18} aria-hidden="true" /> Apple Maps <ArrowUpRight size={16} aria-hidden="true" /></a><a href={googleDirectionsUrl} onClick={() => { if (details.current) details.current.open = false; }}><MapPin size={18} aria-hidden="true" /> Google Maps <ArrowUpRight size={16} aria-hidden="true" /></a></div>
  </details>;
}

export function LocationMap() {
  return <div className="map-card street-map-card">
    <iframe title="Street map showing Wingmaster at 70 Erie Avenue, Brantford" src={streetMapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
    <div className="street-map-footer"><div><strong>Wingmaster</strong><span>70 Erie Avenue · Brantford</span></div><div className="street-map-links"><a href={appleDirectionsUrl}>Apple Maps <ArrowUpRight size={15} /></a><a href={googleDirectionsUrl}>Google Maps <ArrowUpRight size={15} /></a></div></div>
  </div>;
}
