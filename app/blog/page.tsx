import type { Metadata } from 'next';
import { BLOG_POSTS } from '@/data/blog';
import SchemaBlock from '@/components/SchemaBlock';
import { breadcrumbSchema } from '@/lib/schema';
import { blogIndexCrumbs } from '@/lib/breadcrumbs';
import BlogIndexClient from './BlogIndexClient';

export const metadata: Metadata = {
  title: 'Implant Guides | Essex Dental Implants',
  description:
    'UK-focused dental implant guides on pricing, planning, maintenance and decision-making, edited for the Essex matching panel.',
  alternates: { canonical: '/blog/' },
};

export default function BlogIndexPage() {
  return (
    <>
      <SchemaBlock schemas={[breadcrumbSchema(blogIndexCrumbs())]} />
      <BlogIndexClient
        posts={BLOG_POSTS.map((p) => ({
          slug: p.slug,
          title: p.title,
          excerpt: p.excerpt,
          category: p.category,
          publishedAt: p.publishedAt,
          lastReviewedAt: p.lastReviewedAt,
        }))}
      />
    </>
  );
}
