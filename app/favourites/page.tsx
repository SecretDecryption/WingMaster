import { Suspense } from 'react';
import { CustomerArea } from '@/components/customer-area';

export const metadata = { title: 'Favourite sauces | Wingmaster', robots: { index: false, follow: false } };

export default function FavouritesPage() {
  return <Suspense fallback={<main className="menu-app customer-loading">Loading your favourite sauces…</main>}><CustomerArea view="favourites" /></Suspense>;
}
