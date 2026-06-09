import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, BLOG_POSTS_BY_SLUG } from '@/data/blog';
import { SERVICES_BY_SLUG } from '@/data/services';
import { LOCATIONS_BY_SLUG } from '@/data/locations';
import { GUIDES_BY_SLUG } from '@/data/guides';
import { siteConfig } from '@/data/site';
import SchemaBlock from '@/components/SchemaBlock';
import {
  breadcrumbSchema,
  articleSchema,
  faqPageSchema,
  medicalWebPageSchema,
} from '@/lib/schema';
import { blogPostCrumbs } from '@/lib/breadcrumbs';
import BlogPostClient from './BlogPostClient';

export function generateStaticParams() {
  // Draft spokes are not pre-rendered; they 404 until the publisher flips them.
  return BLOG_POSTS.filter((p) => !p.draft).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = BLOG_POSTS_BY_SLUG[params.slug];
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}/` },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS_BY_SLUG[params.slug];
  if (!post || post.draft) notFound();

  const relatedServices = (post.relatedServiceSlugs ?? [])
    .map((slug) => SERVICES_BY_SLUG[slug])
    .filter(Boolean)
    .map((s) => ({ slug: s.slug, title: s.title, shortTitle: s.shortTitle }));

  const relatedLocations = (post.relatedLocationSlugs ?? [])
    .map((slug) => LOCATIONS_BY_SLUG[slug])
    .filter(Boolean)
    .map((l) => ({ slug: l.slug, name: l.name }));

  const hubGuide = GUIDES_BY_SLUG[post.hub];
  const hub = hubGuide ? { slug: hubGuide.slug, title: hubGuide.title, shortTitle: hubGuide.shortTitle } : null;

  const url = `${siteConfig.url}/blog/${post.slug}/`;
  const schemas: unknown[] = [
    breadcrumbSchema(blogPostCrumbs(post)),
    articleSchema(post),
    medicalWebPageSchema({
      url,
      name: post.title,
      description: post.metaDescription,
      datePublished: post.publishedAt,
      dateModified: post.lastReviewedAt,
    }),
  ];
  if (post.faqs && post.faqs.length > 0) {
    schemas.push(faqPageSchema(post.faqs));
  }

  return (
    <>
      <SchemaBlock schemas={schemas} />
      <BlogPostClient
        post={post}
        hub={hub}
        relatedServices={relatedServices}
        relatedLocations={relatedLocations}
      />
    </>
  );
}
