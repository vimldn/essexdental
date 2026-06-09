/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
];

const SERVICE_SLUGS = [
  'single-tooth',
  'multiple-teeth',
  'full-arch',
  'bone-grafting',
  'immediate-implants',
  'implant-dentures',
];

const KEPT_LOCATION_SLUGS = [
  'chelmsford',
  'colchester',
  'southend-on-sea',
  'basildon',
  'brentwood',
  'billericay',
  'witham',
  'harlow',
  'clacton-on-sea',
  'rayleigh',
  'maldon',
  'leigh-on-sea',
  'epping',
  'canvey-island',
  'halstead',
  'waltham-cross',
];

// Reactivated 2026-06-09: epping, canvey-island, halstead now have full town
// pages (high-impression towns). Removed from the retired-redirect list so the
// pages render instead of 308ing to /location/.
const RETIRED_LOCATION_SLUGS = [
  'braintree',
  'burnham-on-crouch',
  'chigwell',
  'frinton-on-sea',
  'grays',
  'harwich',
  'rochford',
  'saffron-walden',
  'south-benfleet',
  'stanford-le-hope',
  'tilbury',
  'walton-on-the-naze',
  'west-mersea',
  'wivenhoe',
  'alresford',
  'brightlingsea',
  'buckhurst-hill',
  'coggeshall',
  'dedham',
  'great-dunmow',
  'manningtree',
  'pitsea',
  'thaxted',
  'waltham-abbey',
  'westcliff-on-sea',
  'wickford',
];

const redirects = async () => {
  const out = [];
  for (const service of SERVICE_SLUGS) {
    for (const location of [...KEPT_LOCATION_SLUGS, ...RETIRED_LOCATION_SLUGS]) {
      out.push({
        source: `/services/${service}/${location}`,
        destination: KEPT_LOCATION_SLUGS.includes(location)
          ? `/location/${location}/`
          : `/services/${service}/`,
        permanent: true,
      });
    }
  }
  for (const location of RETIRED_LOCATION_SLUGS) {
    out.push({
      source: `/location/${location}`,
      destination: '/location/',
      permanent: true,
    });
  }
  return out;
};

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  redirects,
};

module.exports = nextConfig;
