import type { Metadata, Viewport } from 'next';
import { Fraunces, Instrument_Sans } from 'next/font/google';
import type { ReactNode } from 'react';
import { site } from '@/content/site';
import './globals.css';

const display = Fraunces({ subsets: ['latin'], style: ['normal', 'italic'], variable: '--font-fraunces', display: 'swap' });
const body = Instrument_Sans({ subsets: ['latin'], variable: '--font-instrument', display: 'swap' });

export const metadata: Metadata = {
  title: `${site.name} | ICTS-TIFR Bengaluru`,
  description: site.intro,
  keywords: ['SSWP', 'ICTS', 'TIFR', 'Women in Physics', 'Summer School', 'Bengaluru', 'Undergraduate Physics'],
  openGraph: {
    title: `${site.name} | ICTS-TIFR Bengaluru`,
    description: site.intro,
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#9a393a',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
