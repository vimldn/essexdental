import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import SchemaBlock from '@/components/SchemaBlock';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';
import { HOME_CRUMB } from '@/lib/breadcrumbs';
import { FAQS_HOME } from '@/data/faqs';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: `${siteConfig.name} | Verified Essex Implant Clinician Matching`,
  description: siteConfig.description,
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <SchemaBlock
        schemas={[
          breadcrumbSchema([HOME_CRUMB]),
          faqPageSchema(FAQS_HOME),
        ]}
      />
      <HomeClient />
    </>
  );
}
