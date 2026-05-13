import type { Metadata } from 'next';
import { LOCATIONS } from '@/data/locations';
import SchemaBlock from '@/components/SchemaBlock';
import { breadcrumbSchema } from '@/lib/schema';
import { locationIndexCrumbs } from '@/lib/breadcrumbs';
import LocationIndexClient from './LocationIndexClient';

export const metadata: Metadata = {
  title: 'Essex Areas Covered | Essex Dental Implants',
  description:
    'Twelve Essex towns with active implant clinician matching panels: Chelmsford, Colchester, Southend, Basildon, Brentwood, Billericay, Witham, Harlow, Clacton, Rayleigh, Maldon, Leigh-on-Sea.',
  alternates: { canonical: '/location/' },
};

export default function LocationIndexPage() {
  return (
    <>
      <SchemaBlock schemas={[breadcrumbSchema(locationIndexCrumbs())]} />
      <LocationIndexClient
        locations={LOCATIONS.map((l) => ({
          slug: l.slug,
          name: l.name,
          district: l.district,
          postcodes: l.postcodePrefixes,
        }))}
      />
    </>
  );
}
