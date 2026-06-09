import { siteConfig } from '@/data/site';
import { ServiceData } from '@/data/services';
import { LocationData } from '@/data/locations';
import { BlogPost } from '@/data/blog';

const orgId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;
const authorId = `${siteConfig.url}/about/#author`;

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
    url: `${siteConfig.url}/about/`,
    parentOrganization: { '@id': orgId },
    description:
      'Editorial team for Essex Dental Implants. Clinical claims are checked against current General Dental Council guidance, NHS sources, and published clinical literature.',
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

interface ArticleInput {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
}

// Generic Article builder used by both blog spokes and guide hubs.
export function articleSchemaFor({ url, headline, description, datePublished, dateModified }: ArticleInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline,
    description,
    datePublished,
    dateModified,
    author: { '@id': authorId },
    publisher: { '@id': orgId },
    mainEntityOfPage: url,
    inLanguage: 'en-GB',
  };
}

export function articleSchema(post: BlogPost) {
  return articleSchemaFor({
    url: `${siteConfig.url}/blog/${post.slug}/`,
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.lastReviewedAt,
  });
}

// MedicalWebPage adds the YMYL signal Google looks for on health content:
// an author/reviewer entity, dates, and an "about" medical procedure.
export function medicalWebPageSchema({ url, name, description, datePublished, dateModified }: { url: string; name: string; description: string; datePublished: string; dateModified: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': `${url}#medicalwebpage`,
    url,
    name,
    description,
    datePublished,
    dateModified,
    isPartOf: { '@id': websiteId },
    author: { '@id': authorId },
    reviewedBy: { '@id': authorId },
    publisher: { '@id': orgId },
    lastReviewed: dateModified,
    inLanguage: 'en-GB',
    about: { '@type': 'MedicalProcedure', name: 'Dental implant treatment' },
  };
}

export function jsonLd(...schemas: unknown[]) {
  return { __html: JSON.stringify(schemas) };
}
