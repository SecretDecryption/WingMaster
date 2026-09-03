import { Suspense } from 'react';
import { CustomerArea } from '@/components/customer-area';

export const metadata = { title: 'Your Sauces | Wingmaster', robots: { index: false, follow: false } };

export default function YourSaucesPage() {
  return <Suspense fallback={<main className="menu-app customer-loading">Loading your sauces…</main>}><CustomerArea view="favourites" /></Suspense>;
}
