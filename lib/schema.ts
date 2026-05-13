import { siteConfig } from '@/data/site';
import { ServiceData } from '@/data/services';
import { LocationData } from '@/data/locations';
import { BlogPost } from '@/data/blog';

const orgId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;
const authorId = `${siteConfig.url}/about/#editorial`;

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': orgId,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: siteConfig.serviceArea.region,
      containedInPlace: { '@type': 'Country', name: siteConfig.serviceArea.country },
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: { '@id': orgId },
    inLanguage: 'en-GB',
  };
}

export function editorialPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': authorId,
    name: siteConfig.editorial.teamName,
    parentOrganization: { '@id': orgId },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function serviceSchema(service: ServiceData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/services/${service.slug}/#service`,
    serviceType: service.title,
    provider: { '@id': orgId },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: siteConfig.serviceArea.region,
      containedInPlace: { '@type': 'Country', name: siteConfig.serviceArea.country },
    },
    description: service.metaDescription,
    url: `${siteConfig.url}/services/${service.slug}/`,
  };
}

export function locationServiceSchema(location: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/location/${location.slug}/#service`,
    serviceType: 'Dental implant referral and matching',
    provider: { '@id': orgId },
    areaServed: {
      '@type': 'City',
      name: location.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: siteConfig.serviceArea.region,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: location.geo.lat,
        longitude: location.geo.lng,
      },
    },
    description: location.metaDescription,
    url: `${siteConfig.url}/location/${location.slug}/`,
  };
}

export function articleSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${siteConfig.url}/blog/${post.slug}/#article`,
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.lastReviewedAt,
    author: { '@id': authorId },
    publisher: { '@id': orgId },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}/`,
    inLanguage: 'en-GB',
  };
}

export function jsonLd(...schemas: unknown[]) {
  return { __html: JSON.stringify(schemas) };
}
