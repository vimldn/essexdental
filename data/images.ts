/**
 * Central image registry. Every visual slot on the site reads from here.
 *
 * Stock photography is a hard "no" on the lead-gen fleet — only locally
 * generated, brand-specific imagery may be referenced here. The current set
 * is six service heroes, twelve location heroes, six blog hero/OG images,
 * one home hero, and one about hero, generated for this project.
 *
 * Hero slots are loaded with priority; others lazy. Every entry carries
 * explicit width/height so the layout reserves the box and CLS stays at zero.
 */

export interface ImageSlot {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const IMAGES = {
  home: {
    heroSide: {
      src: '/images/hero-home.jpg',
      alt: 'Editorial dental implant scene representing the Essex matching panel.',
      width: 1200,
      height: 896,
    } satisfies ImageSlot,
  },
  about: {
    hero: {
      src: '/images/hero-about.jpg',
      alt: 'Editorial overview of the Essex coverage area.',
      width: 1200,
      height: 896,
    } satisfies ImageSlot,
  },
  services: {
    'single-tooth': {
      heroSide: {
        src: '/images/services/single-tooth.jpg',
        alt: 'Single dental implant fixture and crown on a clean dark background.',
        width: 1200,
        height: 896,
      } satisfies ImageSlot,
    },
    'multiple-teeth': {
      heroSide: {
        src: '/images/services/multiple-teeth.jpg',
        alt: 'Two implants supporting a three-unit fixed bridge.',
        width: 1200,
        height: 896,
      } satisfies ImageSlot,
    },
    'full-arch': {
      heroSide: {
        src: '/images/services/full-arch.jpg',
        alt: 'Full-arch zirconia bridge on four to six implants.',
        width: 1200,
        height: 896,
      } satisfies ImageSlot,
    },
    'bone-grafting': {
      heroSide: {
        src: '/images/services/bone-grafting.jpg',
        alt: 'CBCT cross-section view used to plan implant bone grafting.',
        width: 1200,
        height: 896,
      } satisfies ImageSlot,
    },
    'immediate-implants': {
      heroSide: {
        src: '/images/services/immediate-implants.jpg',
        alt: 'Surgical guide for immediate implant placement.',
        width: 1200,
        height: 896,
      } satisfies ImageSlot,
    },
    'implant-dentures': {
      heroSide: {
        src: '/images/services/implant-dentures.jpg',
        alt: 'Implant-retained denture with locator attachments.',
        width: 1200,
        height: 896,
      } satisfies ImageSlot,
    },
  } as Record<string, { heroSide: ImageSlot }>,
  locations: {
    chelmsford: {
      heroSide: { src: '/images/locations/chelmsford.jpg', alt: 'Chelmsford editorial location image.', width: 1200, height: 896 },
    },
    colchester: {
      heroSide: { src: '/images/locations/colchester.jpg', alt: 'Colchester editorial location image.', width: 1200, height: 896 },
    },
    'southend-on-sea': {
      heroSide: { src: '/images/locations/southend-on-sea.jpg', alt: 'Southend-on-Sea editorial location image.', width: 1200, height: 896 },
    },
    basildon: {
      heroSide: { src: '/images/locations/basildon.jpg', alt: 'Basildon editorial location image.', width: 1200, height: 896 },
    },
    brentwood: {
      heroSide: { src: '/images/locations/brentwood.jpg', alt: 'Brentwood editorial location image.', width: 1200, height: 896 },
    },
    billericay: {
      heroSide: { src: '/images/locations/billericay.jpg', alt: 'Billericay editorial location image.', width: 1200, height: 896 },
    },
    witham: {
      heroSide: { src: '/images/locations/witham.jpg', alt: 'Witham editorial location image.', width: 1200, height: 896 },
    },
    harlow: {
      heroSide: { src: '/images/locations/harlow.jpg', alt: 'Harlow editorial location image.', width: 1200, height: 896 },
    },
    'clacton-on-sea': {
      heroSide: { src: '/images/locations/clacton-on-sea.jpg', alt: 'Clacton-on-Sea editorial location image.', width: 1200, height: 896 },
    },
    rayleigh: {
      heroSide: { src: '/images/locations/rayleigh.jpg', alt: 'Rayleigh editorial location image.', width: 1200, height: 896 },
    },
    maldon: {
      heroSide: { src: '/images/locations/maldon.jpg', alt: 'Maldon editorial location image.', width: 1200, height: 896 },
    },
    'leigh-on-sea': {
      heroSide: { src: '/images/locations/leigh-on-sea.jpg', alt: 'Leigh-on-Sea editorial location image.', width: 1200, height: 896 },
    },
  } as Record<string, { heroSide: ImageSlot }>,
  blog: {
    'dental-implant-cost-essex': {
      src: '/images/blog/dental-implant-cost-essex.jpg',
      alt: 'Cost overview for dental implant treatment in Essex.',
      width: 1200, height: 896,
    },
    'implants-vs-dentures-uk': {
      src: '/images/blog/implants-vs-dentures-uk.jpg',
      alt: 'Side-by-side comparison of implants and dentures.',
      width: 1200, height: 896,
    },
    'cbct-3d-planning-for-dental-implants': {
      src: '/images/blog/cbct-3d-planning-for-dental-implants.jpg',
      alt: 'CBCT scan and digital implant planning workflow.',
      width: 1200, height: 896,
    },
    'caring-for-dental-implants': {
      src: '/images/blog/caring-for-dental-implants.jpg',
      alt: 'Implant maintenance tools laid out for home care.',
      width: 1200, height: 896,
    },
    'implants-after-failed-bridge-or-crown': {
      src: '/images/blog/implants-after-failed-bridge-or-crown.jpg',
      alt: 'Failed bridge alongside an implant replacement.',
      width: 1200, height: 896,
    },
    'eating-with-dental-implants': {
      src: '/images/blog/eating-with-dental-implants.jpg',
      alt: 'Foods commonly raised by patients during implant recovery.',
      width: 1200, height: 896,
    },
  } as Record<string, ImageSlot>,
} as const;

export function serviceImage(slug: string): ImageSlot | null {
  return IMAGES.services[slug]?.heroSide ?? null;
}

export function locationImage(slug: string): ImageSlot | null {
  return IMAGES.locations[slug]?.heroSide ?? null;
}

export function blogImage(slug: string): ImageSlot | null {
  return IMAGES.blog[slug] ?? null;
}
