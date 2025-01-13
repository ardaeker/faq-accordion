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
  title: 'Frontend Mentor - FAQ Accordion',
  description:
    'This website is a solution to the FAQ Accordion challenge on Frontend Mentor. It is built with Next.js, Tailwind CSS, and TypeScript. Coded by Arda Eker.',
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
  metadataBase: new URL('http://localhost:3000/'),
  openGraph: {
    title: 'Frontend Mentor - FAQ Accordion',
    description:
      'This website is a solution to the FAQ Accordion challenge on Frontend Mentor. It is built with Next.js, Tailwind CSS, and TypeScript. Coded by Arda Eker.',
    siteName: 'Frontend Mentor - FAQ Accordion solution',
    images: [
      {
        url: 'open-graph-image.png',
      },
    ],
  },
  alternates: {
    canonical: 'http://localhost:3000',
  },
  icons: {
    icon: '/icon.png',
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
