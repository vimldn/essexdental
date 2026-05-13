import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, BLOG_POSTS_BY_SLUG } from '@/data/blog';
import { SERVICES_BY_SLUG } from '@/data/services';
import { LOCATIONS_BY_SLUG } from '@/data/locations';
import SchemaBlock from '@/components/SchemaBlock';
import {
  breadcrumbSchema,
  articleSchema,
  faqPageSchema,
} from '@/lib/schema';
import { blogPostCrumbs } from '@/lib/breadcrumbs';
import BlogPostClient from './BlogPostClient';

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
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
  if (!post) notFound();

  const relatedServices = (post.relatedServiceSlugs ?? [])
    .map((slug) => SERVICES_BY_SLUG[slug])
    .filter(Boolean)
    .map((s) => ({ slug: s.slug, title: s.title, shortTitle: s.shortTitle }));

  const relatedLocations = (post.relatedLocationSlugs ?? [])
    .map((slug) => LOCATIONS_BY_SLUG[slug])
    .filter(Boolean)
    .map((l) => ({ slug: l.slug, name: l.name }));

  const schemas: unknown[] = [
    breadcrumbSchema(blogPostCrumbs(post)),
    articleSchema(post),
  ];
  if (post.faqs && post.faqs.length > 0) {
    schemas.push(faqPageSchema(post.faqs));
  }

  return (
    <>
      <SchemaBlock schemas={schemas} />
      <BlogPostClient
        post={post}
        relatedServices={relatedServices}
        relatedLocations={relatedLocations}
      />
    </>
  );
}
