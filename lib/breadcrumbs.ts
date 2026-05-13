import { siteConfig } from '@/data/site';

export interface Breadcrumb {
  name: string;
  url: string;
}

export const HOME_CRUMB: Breadcrumb = { name: 'Home', url: `${siteConfig.url}/` };

export function servicesIndexCrumbs(): Breadcrumb[] {
  return [HOME_CRUMB, { name: 'Services', url: `${siteConfig.url}/services/` }];
}

export function serviceCrumbs(service: { slug: string; title: string }): Breadcrumb[] {
  return [
    ...servicesIndexCrumbs(),
    { name: service.title, url: `${siteConfig.url}/services/${service.slug}/` },
  ];
}

export function locationIndexCrumbs(): Breadcrumb[] {
  return [HOME_CRUMB, { name: 'Areas', url: `${siteConfig.url}/location/` }];
}

export function locationCrumbs(location: { slug: string; name: string }): Breadcrumb[] {
  return [
    ...locationIndexCrumbs(),
    { name: location.name, url: `${siteConfig.url}/location/${location.slug}/` },
  ];
}

export function blogIndexCrumbs(): Breadcrumb[] {
  return [HOME_CRUMB, { name: 'Guides', url: `${siteConfig.url}/blog/` }];
}

export function blogPostCrumbs(post: { slug: string; title: string }): Breadcrumb[] {
  return [
    ...blogIndexCrumbs(),
    { name: post.title, url: `${siteConfig.url}/blog/${post.slug}/` },
  ];
}
