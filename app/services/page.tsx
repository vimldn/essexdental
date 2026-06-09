import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { SERVICES } from '@/data/services';
import { GUIDES } from '@/data/guides';
import { LOCATIONS } from '@/data/locations';
import SchemaBlock from '@/components/SchemaBlock';
import { breadcrumbSchema, faqPageSchema, medicalWebPageSchema } from '@/lib/schema';
import { servicesIndexCrumbs } from '@/lib/breadcrumbs';
import ServicesIndexClient from './ServicesIndexClient';

export const metadata: Metadata = {
  title: 'Dental Implants in Essex | Treatments & Matching',
  description:
    'Dental implants in Essex from a verified clinician panel: single tooth, multiple teeth, full-arch All-on-4, bone grafting, immediate placement and implant-retained dentures. Free, independent matching.',
  alternates: { canonical: '/services/' },
};

const FAQS = [
  {
    question: 'How much do dental implants cost in Essex?',
    answer:
      'A single-tooth implant typically costs £2,200 to £3,500, an implant bridge for several teeth £5,500 to £8,500, and full-arch All-on-4 £15,000 to £22,000 per arch. Bone grafting, the implant system, and the final restoration material move the figure.',
  },
  {
    question: 'Are dental implants available on the NHS?',
    answer:
      'Only in narrowly defined situations such as cancer reconstruction, severe trauma, or significant congenital absence, routed through secondary care. For almost everyone, implant treatment is private.',
  },
  {
    question: 'Do you place the implants yourselves?',
    answer:
      'No. We are an independent matching service, not a clinic. We connect you with a verified, GDC-registered implant clinician in Essex. The matched clinician carries out treatment and quotes their own fees in writing.',
  },
  {
    question: 'Is the matching service free?',
    answer:
      'Yes, free to the patient with no obligation. Clinicians pay a flat panel fee for inclusion, not a per-introduction commission, so matching is not skewed toward whoever pays most.',
  },
  {
    question: 'How long does implant treatment take?',
    answer:
      'A standard case runs three to six months from start to finish. Most of that is healing time while the implant fuses to the bone; the placement appointment itself is around an hour under local anaesthetic.',
  },
];

const servicesIndexUrl = `${siteConfig.url}/services/`;

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${servicesIndexUrl}#treatments`,
  name: 'Dental implant treatments in Essex',
  itemListElement: SERVICES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    url: `${siteConfig.url}/services/${s.slug}/`,
  })),
};

export default function ServicesIndexPage() {
  return (
    <>
      <SchemaBlock
        schemas={[
          breadcrumbSchema(servicesIndexCrumbs()),
          medicalWebPageSchema({
            url: servicesIndexUrl,
            name: 'Dental implants in Essex',
            description: metadata.description as string,
            datePublished: '2026-02-01',
            dateModified: siteConfig.editorial.lastReviewedAt,
          }),
          itemListSchema,
          faqPageSchema(FAQS),
        ]}
      />
      <ServicesIndexClient
        services={SERVICES.map((s) => ({
          slug: s.slug,
          title: s.title,
          shortTitle: s.shortTitle,
          heroDirectAnswer: s.heroDirectAnswer,
        }))}
        guides={GUIDES.map((g) => ({
          slug: g.slug,
          title: g.title,
          shortTitle: g.shortTitle,
          heroBadge: g.heroBadge,
        }))}
        locations={LOCATIONS.map((l) => ({
          slug: l.slug,
          name: l.name,
          postcodes: l.postcodePrefixes,
        }))}
        faqs={FAQS}
      />
    </>
  );
}
