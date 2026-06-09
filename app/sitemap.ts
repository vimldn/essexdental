import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';
import { SERVICES } from '@/data/services';
import { LOCATIONS } from '@/data/locations';
import { BLOG_POSTS } from '@/data/blog';
import { GUIDES } from '@/data/guides';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = new Date(siteConfig.editorial.lastReviewedAt);

  const staticRoutes = [
    { url: `${base}/`, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${base}/services/`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/guides/`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/location/`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/blog/`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${base}/about/`, priority: 0.6, changeFrequency: 'yearly' as const },
    { url: `${base}/privacy/`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${base}/terms/`, priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  const guideRoutes = GUIDES.map((g) => ({
    url: `${base}/guides/${g.slug}/`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
    lastModified: new Date(g.lastReviewedAt),
  }));

  const serviceRoutes = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}/`,
    priority: 0.85,
    changeFrequency: 'monthly' as const,
    lastModified,
  }));

  const locationRoutes = LOCATIONS.map((l) => ({
    url: `${base}/location/${l.slug}/`,
    priority: 0.85,
    changeFrequency: 'monthly' as const,
    lastModified,
  }));

  // Draft spokes are excluded from the sitemap until the publisher flips them live.
  const blogRoutes = BLOG_POSTS.filter((p) => !p.draft).map((p) => ({
    url: `${base}/blog/${p.slug}/`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
    lastModified: new Date(p.lastReviewedAt),
  }));

  return [
    ...staticRoutes.map((r) => ({ ...r, lastModified })),
    ...serviceRoutes,
    ...guideRoutes,
    ...locationRoutes,
    ...blogRoutes,
  ];
}
