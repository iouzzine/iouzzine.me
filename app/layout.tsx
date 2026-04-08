import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import ThemeProvider from '@/components/providers/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/sonner';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://iouzzine.me'),
  title: {
    default: 'Ismail Ouzzine — Full Stack Developer',
    template: '%s | iouzzine',
  },
  description:
    'Full Stack Developer based in Casablanca with 6+ years building impactful products with React, Next.js, Node.js, and TypeScript.',
  keywords: [
    'Next.js',
    'TypeScript',
    'React',
    'Full Stack Developer',
    'Casablanca',
    'Morocco',
    'Node.js',
  ],
  authors: [{ name: 'Ismail Ouzzine', url: 'https://iouzzine.me' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://iouzzine.me',
    title: 'Ismail Ouzzine — Full Stack Developer',
    description:
      'Full Stack Developer based in Casablanca with 6+ years building impactful products.',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@iouzzine',
    title: 'Ismail Ouzzine — Full Stack Developer',
    description: 'Full Stack Developer based in Casablanca.',
  },
  robots: { index: true, follow: true },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={cn('font-sans', geist.variable)} suppressHydrationWarning>
      <body className={cn(geistMono.variable, 'bg-background text-foreground antialiased')}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Ismail Ouzzine',
              url: 'https://iouzzine.me',
              jobTitle: 'Full Stack Developer',
              worksFor: { '@type': 'Organization', name: 'My Company' },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Casablanca',
                addressCountry: 'MA',
              },
              sameAs: ['https://github.com/iouzzine', 'https://www.linkedin.com/in/ismailouzz/'],
              knowsAbout: [
                'React',
                'Next.js',
                'Node.js',
                'TypeScript',
                'JavaScript',
                'PostgreSQL',
                'MongoDB',
                'Docker',
                'NestJS',
              ],
            }),
          }}
        />
        <ThemeProvider>
          <TooltipProvider delayDuration={300}>
            <a
              href="#main"
              className="focus:bg-background sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-200 focus:rounded focus:border focus:px-4 focus:py-2"
            >
              Skip to content
            </a>
            {children}
            <SpeedInsights />
            <Toaster position="bottom-right" richColors />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
