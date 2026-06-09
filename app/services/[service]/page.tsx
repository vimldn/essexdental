import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES, SERVICES_BY_SLUG } from '@/data/services';
import { LOCATIONS } from '@/data/locations';
import { GUIDES } from '@/data/guides';
import SchemaBlock from '@/components/SchemaBlock';
import {
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
} from '@/lib/schema';
import { serviceCrumbs } from '@/lib/breadcrumbs';
import ServicePillarClient from './ServicePillarClient';

export function generateStaticParams() {
  return SERVICES.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: { params: { service: string } }): Promise<Metadata> {
  const service = SERVICES_BY_SLUG[params.service];
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}/` },
  };
}

export default function ServicePillarPage({ params }: { params: { service: string } }) {
  const service = SERVICES_BY_SLUG[params.service];
  if (!service) notFound();

  return (
    <>
      <SchemaBlock
        schemas={[
          breadcrumbSchema(serviceCrumbs(service)),
          serviceSchema(service),
          faqPageSchema(service.faqs),
        ]}
      />
      <ServicePillarClient
        service={service}
        relatedServices={service.relatedSlugs
          .map((slug) => SERVICES_BY_SLUG[slug])
          .filter(Boolean)
          .map((s) => ({ slug: s.slug, title: s.title, shortTitle: s.shortTitle }))}
        relatedGuides={GUIDES.filter((g) => g.servicePillarSlugs.includes(service.slug)).map((g) => ({
          slug: g.slug,
          title: g.title,
          heroBadge: g.heroBadge,
        }))}
        locations={LOCATIONS.map((l) => ({ slug: l.slug, name: l.name, postcodes: l.postcodePrefixes }))}
      />
    </>
  );
}
