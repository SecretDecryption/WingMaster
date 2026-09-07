import type { Metadata } from 'next';
import { BlackensteinWaiver } from '@/components/blackenstein-waiver';

export const metadata: Metadata = {
  title: 'Blackenstein · 10 Million Scoville | Wingmaster',
  description: 'Meet Blackenstein, Wingmaster’s hottest item at 10 Million Scoville. A waiver is mandatory before it can be served.',
};

export default function BlackensteinPage() {
  return <main className="blackenstein-page"><BlackensteinWaiver /></main>;
}
