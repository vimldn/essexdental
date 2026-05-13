import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { SERVICES } from '@/data/services';
import SchemaBlock from '@/components/SchemaBlock';
import { breadcrumbSchema } from '@/lib/schema';
import { servicesIndexCrumbs } from '@/lib/breadcrumbs';
import ServicesIndexClient from './ServicesIndexClient';

export const metadata: Metadata = {
  title: 'Implant Treatments | Essex Dental Implants',
  description:
    'Six implant treatment pillars covered by our Essex matching panel: single tooth, multiple teeth, full-arch All-on-4, bone grafting, immediate placement, implant-retained dentures.',
  alternates: { canonical: '/services/' },
};

export default function ServicesIndexPage() {
  return (
    <>
      <SchemaBlock
        schemas={[
          breadcrumbSchema(servicesIndexCrumbs()),
        ]}
      />
      <ServicesIndexClient services={SERVICES.map((s) => ({
        slug: s.slug,
        title: s.title,
        shortTitle: s.shortTitle,
        heroDirectAnswer: s.heroDirectAnswer,
      }))} />
    </>
  );
}
