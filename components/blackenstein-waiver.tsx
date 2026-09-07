'use client';

import { useEffect, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, ShieldAlert } from 'lucide-react';
import { hasCurrentBlackensteinWaiver, saveBlackensteinWaiver } from '@/lib/blackenstein';

const acknowledgements = [
  'I understand Blackenstein is an extreme-heat food challenge that can cause severe and prolonged discomfort.',
  'I am choosing to participate voluntarily and I will follow all restaurant staff instructions.',
  'I understand restaurant staff must verify an approved waiver before Blackenstein can be served.',
  'I agree to review and sign the restaurant’s final, owner-approved waiver at the time of purchase.',
];

export function BlackensteinWaiver() {
  const [accepted, setAccepted] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => setComplete(hasCurrentBlackensteinWaiver(window.sessionStorage)), []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!accepted) return;
    saveBlackensteinWaiver(window.sessionStorage);
    setComplete(true);
    document.querySelector('#waiver-result')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return <>
    <header className="blackenstein-topbar">
      <Link href="/"><ArrowLeft size={16} /> Wingmaster</Link>
      <span>10 Million Scoville · Mandatory waiver</span>
      <Link href="/order?category=Blackenstein">View menu <ArrowRight size={16} /></Link>
    </header>
    <section className="blackenstein-hero">
      <div className="blackenstein-hero-copy">
        <p className="blackenstein-kicker">The hottest item at Wingmaster</p>
        <h1>Blackenstein.</h1>
        <strong>10 Million Scoville</strong>
        <p>One way ticket. Straight to fire. This is not a regular hot wing—it is the final level.</p>
        <a className="button" href="#waiver">Read and acknowledge waiver <ArrowRight size={18} /></a>
      </div>
      <div className="blackenstein-stamp"><ShieldAlert size={28} /><span>Waiver<br />required</span></div>
    </section>

    <section className="blackenstein-intro section-shell">
      <div><p className="kicker">Before you even think about it</p><h2>This one bites back.</h2></div>
      <div><p>Blackenstein sits above every other heat level on the menu. The 350K, 1M and 3M sauces lead up to it. Blackenstein stands alone at 10M.</p><p>If you have a health condition, allergy, take medication, or have been advised to avoid extreme spice, get medical advice before considering it. Stop immediately and seek help if you feel seriously unwell.</p></div>
    </section>

    <section className="blackenstein-steps">
      <div className="section-shell">
        <article><span>01</span><strong>Read it</strong><p>Understand the extreme heat and restaurant rules.</p></article>
        <article><span>02</span><strong>Sign it</strong><p>Complete the approved waiver before ordering.</p></article>
        <article><span>03</span><strong>Staff checks it</strong><p>Restaurant staff verify it before serving.</p></article>
      </div>
    </section>

    <section id="waiver" className="waiver-section section-shell">
      <div className="waiver-heading"><p className="kicker">Mandatory acknowledgement</p><h2>Think you can handle it?</h2><p>This website step keeps Blackenstein locked in the menu until you acknowledge the warning. The restaurant must still verify its final signed waiver.</p></div>
      <div className="waiver-card">
        {complete ? <div className="waiver-complete" id="waiver-result" role="status">
          <span><Check size={34} /></span><p className="kicker">Acknowledgement complete</p><h3>Blackenstein is unlocked for this visit.</h3><p>Restaurant staff must still verify the final signed waiver before serving it.</p><Link className="button" href="/order?category=Blackenstein&waiver=accepted">Continue to Blackenstein <ArrowRight size={18} /></Link>
        </div> : <form onSubmit={submit}>
          <fieldset><legend>Your details</legend><div className="waiver-fields"><label>Full legal name<input required autoComplete="name" maxLength={100} /></label><label>Email<input required type="email" autoComplete="email" maxLength={120} /></label><label>Phone<input required type="tel" autoComplete="tel" maxLength={24} /></label><label>Typed signature<input required autoComplete="off" maxLength={100} /></label></div></fieldset>
          <fieldset><legend>What you are acknowledging</legend><div className="waiver-checks">{acknowledgements.map((label, index) => <label key={label}><input required type="checkbox" name={`acknowledgement-${index + 1}`} /> <span>{label}</span></label>)}</div></fieldset>
          <label className="waiver-final"><input required type="checkbox" checked={accepted} onChange={event => setAccepted(event.target.checked)} /><span><strong>I have read every statement above.</strong> I want to continue to the Blackenstein menu.</span></label>
          <button className="button" type="submit" disabled={!accepted}>Acknowledge and continue <ArrowRight size={18} /></button>
          <p className="waiver-fineprint">For this demo, your typed details are not sent or stored. Only a temporary “acknowledged” flag stays in this browser tab. Production launch requires owner-approved legal wording and secure waiver records.</p>
        </form>}
      </div>
    </section>
  </>;
}
