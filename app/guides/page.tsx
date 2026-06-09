import type { Metadata } from 'next';
import { GUIDES } from '@/data/guides';
import { BLOG_POSTS } from '@/data/blog';
import SchemaBlock from '@/components/SchemaBlock';
import { breadcrumbSchema } from '@/lib/schema';
import { guidesIndexCrumbs } from '@/lib/breadcrumbs';
import GuidesIndexClient from './GuidesIndexClient';

export const metadata: Metadata = {
  title: 'Dental Implant Guides | Essex Dental Implants',
  description:
    'Ten in-depth dental implant guides for Essex and UK patients: cost, types, process, bone grafting, full-arch, alternatives, aftercare, risks, suitability, and choosing a clinician.',
  alternates: { canonical: '/guides/' },
};

export default function GuidesIndexPage() {
  const hubs = GUIDES.map((g) => ({
    slug: g.slug,
    title: g.title,
    heroBadge: g.heroBadge,
    heroDirectAnswer: g.heroDirectAnswer,
    liveCount: BLOG_POSTS.filter((p) => p.hub === g.slug && !p.draft).length,
  }));

  return (
    <>
      <SchemaBlock schemas={[breadcrumbSchema(guidesIndexCrumbs())]} />
      <GuidesIndexClient hubs={hubs} />
    </>
  );
}
