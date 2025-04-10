import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { Geist_Mono } from 'next/font/google';
import './globals.css';
import ScrollIndicator from './components/scroll-indicator';
import ScrollToTop from './components/scroll-to-top';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'iouzzine • Developer',
  description: 'Full Stack Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} ${geistMono.variable} antialiased`}>
        <ScrollToTop />
        <ScrollIndicator />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
