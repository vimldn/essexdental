import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/data/site';
import Analytics from '@/components/Analytics';
import ConsentBanner from '@/components/ConsentBanner';
import AttributionTracker from '@/components/AttributionTracker';
import SchemaBlock from '@/components/SchemaBlock';
import {
  organizationSchema,
  websiteSchema,
  editorialPersonSchema,
} from '@/lib/schema';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Verified Essex Implant Clinician Matching`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: { canonical: '/' },
  authors: [{ name: siteConfig.editorial.teamName }],
  creator: siteConfig.publisher.name,
  publisher: siteConfig.publisher.name,
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
    other: [
      { rel: 'icon', url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteConfig.url,
    title: `${siteConfig.name} | Verified Essex Implant Clinician Matching`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: '/icon-512x512.png', width: 512, height: 512, alt: `${siteConfig.name} logo` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Essex Dental Implant Matching`,
    description: siteConfig.description,
    images: ['/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  verification: {
    google: 'LtqLKA_UgmMYMLl83sQJFYUPbwXry583VVanCAzs7ZE',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <SchemaBlock schemas={[organizationSchema(), websiteSchema(), editorialPersonSchema()]} />
        <Analytics />
        <AttributionTracker />
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
