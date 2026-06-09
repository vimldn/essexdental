import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GUIDES, GUIDES_BY_SLUG } from '@/data/guides';
import { BLOG_POSTS } from '@/data/blog';
import { SERVICES_BY_SLUG } from '@/data/services';
import { siteConfig } from '@/data/site';
import { guideImage } from '@/data/images';
import SchemaBlock from '@/components/SchemaBlock';
import {
  breadcrumbSchema,
  faqPageSchema,
  articleSchemaFor,
  medicalWebPageSchema,
} from '@/lib/schema';
import { guideCrumbs } from '@/lib/breadcrumbs';
import GuideHubClient from './GuideHubClient';

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const guide = GUIDES_BY_SLUG[params.slug];
  if (!guide) return {};
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: `/guides/${guide.slug}/` },
  };
}

export default function GuideHubPage({ params }: { params: { slug: string } }) {
  const guide = GUIDES_BY_SLUG[params.slug];
  if (!guide) notFound();

  const url = `${siteConfig.url}/guides/${guide.slug}/`;

  const liveSpokes = BLOG_POSTS.filter((p) => p.hub === guide.slug && !p.draft).map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
  }));

  const services = guide.servicePillarSlugs
    .map((slug) => SERVICES_BY_SLUG[slug])
    .filter(Boolean)
    .map((s) => ({ slug: s.slug, title: s.title, shortTitle: s.shortTitle }));

  const adjacentHubs = guide.adjacentHubSlugs
    .map((slug) => GUIDES_BY_SLUG[slug])
    .filter(Boolean)
    .map((h) => ({ slug: h.slug, title: h.title, shortTitle: h.shortTitle }));

  return (
    <>
      <SchemaBlock
        schemas={[
          breadcrumbSchema(guideCrumbs(guide)),
          articleSchemaFor({
            url,
            headline: guide.title,
            description: guide.metaDescription,
            datePublished: guide.publishedAt,
            dateModified: guide.lastReviewedAt,
          }),
          medicalWebPageSchema({
            url,
            name: guide.title,
            description: guide.metaDescription,
            datePublished: guide.publishedAt,
            dateModified: guide.lastReviewedAt,
          }),
          faqPageSchema(guide.faqs),
        ]}
      />
      <GuideHubClient
        guide={guide}
        heroImage={guideImage(guide.slug)}
        liveSpokes={liveSpokes}
        services={services}
        adjacentHubs={adjacentHubs}
      />
    </>
  );
}
