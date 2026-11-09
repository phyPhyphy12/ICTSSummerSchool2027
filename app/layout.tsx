import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Summer School for Women in Physics (SSWP) | ICTS-TIFR Bengaluru',
  description: 'An intensive, fully funded summer residency for women pursuing Physics. Hosted annually at the International Centre for Theoretical Sciences (ICTS-TIFR), Bengaluru.',
  keywords: ['SSWP', 'ICTS', 'TIFR', 'Women in Physics', 'Summer School', 'Physics Research', 'Bengaluru', 'Undergraduate Physics'],
  authors: [{ name: 'ICTS-TIFR Outreach & Academic Programs' }],
  openGraph: {
    title: 'Summer School for Women in Physics (SSWP) | ICTS Bengaluru',
    description: 'Interactive portal to physics at ICTS-TIFR: Fully funded fellowship, laboratory cycles, masterclasses, and career mentorship for undergraduate women in physics.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-midnight-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
