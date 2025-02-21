import './globals.css';

import type { Metadata, Viewport } from 'next';
import localfont from 'next/font/local';

const workSans = localfont({
  display: 'swap',
  src: './fonts/WorkSans-VF.ttf',
});

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8eeff',
};

export const metadata: Metadata = {
  title: 'Arda Eker - FAQ Accordion',
  description:
    'An interactive FAQ section with responsive design and fully tested functionality.',
  authors: {
    name: 'Arda Eker',
    url: 'https://github.com/ardaeker',
  },
  keywords: [
    'Frontend Mentor',
    'FAQ Accordion',
    'FAQ Accordion solution',
    'FAQ Accordion challenge',
    'FAQ Accordion challenge solution',
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
    'Arda Eker',
  ],
  metadataBase: new URL('https://faq-accordion-lilac-three.vercel.app/'),
  openGraph: {
    title: 'Arda Eker - FAQ Accordion',
    description:
      'An interactive FAQ section with responsive design and fully tested functionality.',
    siteName: 'Arda Eker - FAQ Accordion solution',
    images: [
      {
        url: 'open-graph-image.png',
      },
    ],
  },
  alternates: {
    canonical: 'https://faq-accordion-lilac-three.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={workSans.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
