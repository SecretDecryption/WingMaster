import type { Metadata } from 'next';
import './globals.css';
import './menu.css';
import { OrderProvider } from '@/components/order-context';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://wingmaster.ca'),
  title: 'Wingmaster | Brantford’s Original Wing Destination',
  description: 'Crispy wings, bold house-made sauces, and 200 flavours from Brantford’s independently owned Wingmaster.',
  icons: {
    icon: '/wingmaster-logo.png',
  },
  openGraph: {
    title: 'Wingmaster | Brantford’s Original Wing Destination',
    description: 'Crispy wings, 200 original flavours, and one independently owned Brantford shop.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Wingmaster — Brantford’s original wing destination' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wingmaster | Brantford’s Original Wing Destination',
    description: 'Crispy wings, 200 original flavours, and one independently owned Brantford shop.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <OrderProvider>{children}</OrderProvider>
      </body>
    </html>
  );
}
