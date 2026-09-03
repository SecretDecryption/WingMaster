import { Suspense } from 'react';
import { CustomerArea } from '@/components/customer-area';

export const metadata = { title: 'My profile | Wingmaster', robots: { index: false, follow: false } };

export default function ProfilePage() {
  return <Suspense fallback={<main className="menu-app customer-loading">Loading your profile…</main>}><CustomerArea view="profile" /></Suspense>;
}
