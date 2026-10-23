import type { Metadata } from 'next';
import { Newsreader, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-serif',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'The Itti Foundation — Embracing Different Minds, Cancer Support, Conservation',
  description: 'The difference is when. The Itti Foundation embraces different minds, supports people through cancer, and protects the world we share.',
  keywords: ['Itti Foundation', 'Neurodivergence', 'Cancer Care', 'Conservation', 'Nonprofit India', 'Pune'],
  authors: [{ name: 'The Itti Foundation' }],
  metadataBase: new URL('https://itti.org.in'),
  openGraph: {
    title: 'The Itti Foundation — The difference is when.',
    description: 'A mind met, not mended. A cancer caught, not carried. A forest saved, not mourned.',
    url: 'https://itti.org.in',
    siteName: 'The Itti Foundation',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${newsreader.variable} ${plusJakartaSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-ivory text-charcoal antialiased selection:bg-sage selection:text-forest font-sans">
        {children}
      </body>
    </html>
  );
}
