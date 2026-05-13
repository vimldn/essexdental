export const siteConfig = {
  name: 'Essex Dental Implants',
  shortName: 'Essex Dental Implants',
  url: 'https://www.essexdentalimplants.com',
  description:
    'Independent referral network matching patients with verified dental implant clinicians across Essex.',
  gaId: 'G-BPLXLSCSS6',
  brandFraming: 'referral',
  serviceArea: {
    region: 'Essex',
    country: 'United Kingdom',
    countryCode: 'GB',
  },
  contact: {
    email: 'hello@essexdentalimplants.com',
    privacy: 'privacy@essexdentalimplants.com',
    security: 'security@essexdentalimplants.com',
  },
  social: {},
  publisher: {
    name: 'Essex Dental Implants',
    legalName: 'Essex Dental Implants',
  },
  editorial: {
    teamName: 'Essex Dental Implants Editorial Team',
    lastReviewedAt: '2026-05-13',
  },
} as const;

export type SiteConfig = typeof siteConfig;
