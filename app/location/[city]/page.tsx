import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LOCATIONS, LOCATIONS_BY_SLUG } from '@/data/locations';
import { SERVICES } from '@/data/services';
import { GUIDES_BY_SLUG } from '@/data/guides';
import SchemaBlock from '@/components/SchemaBlock';
import {
  breadcrumbSchema,
  faqPageSchema,
  locationServiceSchema,
} from '@/lib/schema';
import { locationCrumbs } from '@/lib/breadcrumbs';
import LocationSpokeClient from './LocationSpokeClient';

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const location = LOCATIONS_BY_SLUG[params.city];
  if (!location) return {};
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical: `/location/${location.slug}/` },
  };
}

export default function LocationSpokePage({ params }: { params: { city: string } }) {
  const location = LOCATIONS_BY_SLUG[params.city];
  if (!location) notFound();

  const nearby = LOCATIONS.filter((l) => l.slug !== location.slug)
    .map((l) => ({
      slug: l.slug,
      name: l.name,
      distance:
        Math.sqrt(
          Math.pow(l.geo.lat - location.geo.lat, 2) +
            Math.pow(l.geo.lng - location.geo.lng, 2)
        ),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 4)
    .map((l) => ({ slug: l.slug, name: l.name }));

  // Location pages link up to the nearest hubs: cost, suitability, choosing.
  const guides = ['implant-costs', 'am-i-suitable-for-implants', 'choosing-an-implant-dentist']
    .map((slug) => GUIDES_BY_SLUG[slug])
    .filter(Boolean)
    .map((g) => ({ slug: g.slug, title: g.title, heroBadge: g.heroBadge }));

  return (
    <>
      <SchemaBlock
        schemas={[
          breadcrumbSchema(locationCrumbs(location)),
          locationServiceSchema(location),
          faqPageSchema(location.faqs),
        ]}
      />
      <LocationSpokeClient
        location={location}
        services={SERVICES.map((s) => ({
          slug: s.slug,
          title: s.title,
          shortTitle: s.shortTitle,
        }))}
        guides={guides}
        nearby={nearby}
      />
    </>
  );
}
