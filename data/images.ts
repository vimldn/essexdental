/**
 * Central image registry. Every visual slot on the site reads from here so
 * generated dental images can be swapped in by editing one file and dropping
 * the files into `public/images/...`.
 *
 * To replace a placeholder:
 *   1. Drop your generated file into `public/images/<page>/<slot>.jpg`.
 *   2. Change the `src` below to `/images/<page>/<slot>.jpg`.
 *   3. Update the `alt` to reflect the new image content.
 *
 * Hero slots are loaded with priority; all others are lazy. Every entry has
 * explicit width/height so the layout reserves the box and CLS stays at zero.
 */

export interface ImageSlot {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const STOCK = {
  clinicInterior:   'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1400&auto=format&fit=crop',
  clinicianHands:   'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1400&auto=format&fit=crop',
  smilePortrait:    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1400&auto=format&fit=crop',
  implantModel:     'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1400&auto=format&fit=crop',
  consultRoom:      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1400&auto=format&fit=crop',
  digitalScan:      'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=80&w=1400&auto=format&fit=crop',
  toothCloseup:     'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1400&auto=format&fit=crop',
  surgeryDetail:    'https://images.unsplash.com/photo-1564420179328-78d23add836b?q=80&w=1400&auto=format&fit=crop',
  patientReassured: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1400&auto=format&fit=crop',
  cbct3dPlanning:   'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1400&auto=format&fit=crop',
  pricingNotes:     'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1400&auto=format&fit=crop',
  teamEditorial:    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1400&auto=format&fit=crop',
  essexCoastal:     'https://images.unsplash.com/photo-1568393691080-cdbc625a4f12?q=80&w=1400&auto=format&fit=crop',
} as const;

export const IMAGES = {
  home: {
    heroSide: {
      src: STOCK.clinicInterior,
      alt: 'Modern dental implant consultation room used by an Essex matching-panel clinician.',
      width: 1400, height: 1000,
    },
    processIllustration: {
      src: STOCK.cbct3dPlanning,
      alt: '3D CBCT implant planning view used during the matching review.',
      width: 1400, height: 900,
    },
    coverageMap: {
      src: STOCK.essexCoastal,
      alt: 'Aerial view of the Essex coastline near Leigh-on-Sea, indicative of panel coverage.',
      width: 1600, height: 700,
    },
    trustPortrait: {
      src: STOCK.patientReassured,
      alt: 'Patient discussing implant treatment options with the matched clinician.',
      width: 1400, height: 1000,
    },
    finalCtaBackground: {
      src: STOCK.surgeryDetail,
      alt: '',
      width: 1920, height: 600,
    },
  },
  servicesIndex: {
    hero: {
      src: STOCK.implantModel,
      alt: 'Cross-section of a dental implant fixture, abutment and crown.',
      width: 1600, height: 700,
    },
  },
  locationIndex: {
    hero: {
      src: STOCK.essexCoastal,
      alt: 'Essex coastline near Southend, indicative of matching-panel coverage.',
      width: 1600, height: 700,
    },
  },
  blogIndex: {
    hero: {
      src: STOCK.consultRoom,
      alt: 'Dental consultation room with treatment-planning monitor.',
      width: 1600, height: 700,
    },
  },
  about: {
    hero: {
      src: STOCK.teamEditorial,
      alt: 'Editorial team workspace where matching decisions are reviewed.',
      width: 1600, height: 800,
    },
  },
  /** Service pillar visuals, keyed by service slug. Defaults are reused for any slug not present. */
  services: {
    'single-tooth': {
      heroSide:    { src: STOCK.implantModel,   alt: 'Single-tooth implant cross-section model.', width: 1400, height: 1000 },
      whatCovers:  { src: STOCK.cbct3dPlanning, alt: 'CBCT planning view of a single-tooth implant site.', width: 1400, height: 900 },
      pricing:     { src: STOCK.pricingNotes,   alt: 'Itemised implant treatment quote and clinical notes.', width: 1400, height: 900 },
    },
    'multiple-teeth': {
      heroSide:    { src: STOCK.implantModel,   alt: 'Implant-supported bridge model replacing multiple adjacent teeth.', width: 1400, height: 1000 },
      whatCovers:  { src: STOCK.cbct3dPlanning, alt: 'CBCT planning for two-implant bridge case.', width: 1400, height: 900 },
      pricing:     { src: STOCK.pricingNotes,   alt: 'Itemised quote for multi-tooth implant treatment.', width: 1400, height: 900 },
    },
    'full-arch': {
      heroSide:    { src: STOCK.smilePortrait,  alt: 'Full-arch implant patient smile after treatment.', width: 1400, height: 1000 },
      whatCovers:  { src: STOCK.surgeryDetail,  alt: 'All-on-4 surgical placement sequence diagram.', width: 1400, height: 900 },
      pricing:     { src: STOCK.pricingNotes,   alt: 'Full-arch implant treatment fee breakdown.', width: 1400, height: 900 },
    },
    'bone-grafting': {
      heroSide:    { src: STOCK.cbct3dPlanning, alt: 'CBCT showing ridge augmentation site prior to grafting.', width: 1400, height: 1000 },
      whatCovers:  { src: STOCK.surgeryDetail,  alt: 'Bone graft material being placed at an implant site.', width: 1400, height: 900 },
      pricing:     { src: STOCK.pricingNotes,   alt: 'Bone graft fee schedule on an itemised quote.', width: 1400, height: 900 },
    },
    'immediate-implants': {
      heroSide:    { src: STOCK.clinicianHands, alt: 'Same-day extraction-and-implant placement workflow.', width: 1400, height: 1000 },
      whatCovers:  { src: STOCK.cbct3dPlanning, alt: 'Immediate-load planning view with provisional crown overlay.', width: 1400, height: 900 },
      pricing:     { src: STOCK.pricingNotes,   alt: 'Itemised quote for an immediate-load implant case.', width: 1400, height: 900 },
    },
    'implant-dentures': {
      heroSide:    { src: STOCK.smilePortrait,  alt: 'Patient with implant-retained overdenture treatment outcome.', width: 1400, height: 1000 },
      whatCovers:  { src: STOCK.implantModel,   alt: 'Two-implant locator-supported overdenture model.', width: 1400, height: 900 },
      pricing:     { src: STOCK.pricingNotes,   alt: 'Implant-retained denture treatment quote.', width: 1400, height: 900 },
    },
  } as Record<string, { heroSide: ImageSlot; whatCovers: ImageSlot; pricing: ImageSlot }>,
  /** Location spoke visuals, keyed by location slug. Defaults are reused for any slug not present. */
  locations: {
    chelmsford:       { heroSide: { src: STOCK.consultRoom,      alt: 'Chelmsford implant clinician consultation room.', width: 1400, height: 1000 }, context: { src: STOCK.clinicInterior, alt: 'Chelmsford private dental practice interior.', width: 1400, height: 900 } },
    colchester:       { heroSide: { src: STOCK.clinicianHands,   alt: 'Implant clinician at work in a Colchester practice.', width: 1400, height: 1000 }, context: { src: STOCK.clinicInterior, alt: 'Colchester dental practice exterior on a high-street site.', width: 1400, height: 900 } },
    'southend-on-sea':{ heroSide: { src: STOCK.essexCoastal,     alt: 'Southend seafront near the implant clinician panel.', width: 1400, height: 1000 }, context: { src: STOCK.clinicInterior, alt: 'Southend private dental consultation room.', width: 1400, height: 900 } },
    basildon:         { heroSide: { src: STOCK.consultRoom,      alt: 'Basildon implant treatment-planning suite.', width: 1400, height: 1000 }, context: { src: STOCK.clinicInterior, alt: 'Basildon dental practice with implant treatment chair.', width: 1400, height: 900 } },
    brentwood:        { heroSide: { src: STOCK.clinicInterior,   alt: 'Brentwood implant clinician consultation suite.', width: 1400, height: 1000 }, context: { src: STOCK.patientReassured, alt: 'Brentwood patient discussing treatment options with clinician.', width: 1400, height: 900 } },
    billericay:       { heroSide: { src: STOCK.consultRoom,      alt: 'Billericay private dental clinic consultation room.', width: 1400, height: 1000 }, context: { src: STOCK.clinicInterior, alt: 'Billericay implant treatment chair and CBCT planning monitor.', width: 1400, height: 900 } },
    witham:           { heroSide: { src: STOCK.clinicInterior,   alt: 'Witham private dental implant clinic.', width: 1400, height: 1000 }, context: { src: STOCK.patientReassured, alt: 'Witham patient at implant consultation.', width: 1400, height: 900 } },
    harlow:           { heroSide: { src: STOCK.consultRoom,      alt: 'Harlow implant clinician consultation room.', width: 1400, height: 1000 }, context: { src: STOCK.clinicInterior, alt: 'Harlow dental practice exterior near Princess Alexandra Hospital.', width: 1400, height: 900 } },
    'clacton-on-sea': { heroSide: { src: STOCK.essexCoastal,     alt: 'Clacton seafront near the local implant panel clinicians.', width: 1400, height: 1000 }, context: { src: STOCK.clinicInterior, alt: 'Clacton dental practice consultation room.', width: 1400, height: 900 } },
    rayleigh:         { heroSide: { src: STOCK.clinicInterior,   alt: 'Rayleigh dental implant clinic interior.', width: 1400, height: 1000 }, context: { src: STOCK.patientReassured, alt: 'Rayleigh implant consultation with the matched clinician.', width: 1400, height: 900 } },
    maldon:           { heroSide: { src: STOCK.consultRoom,      alt: 'Maldon implant clinician consultation room.', width: 1400, height: 1000 }, context: { src: STOCK.clinicInterior, alt: 'Maldon high-street dental practice exterior.', width: 1400, height: 900 } },
    'leigh-on-sea':   { heroSide: { src: STOCK.essexCoastal,     alt: 'Leigh-on-Sea coastline near matching-panel clinicians.', width: 1400, height: 1000 }, context: { src: STOCK.clinicInterior, alt: 'Leigh-on-Sea dental practice implant treatment room.', width: 1400, height: 900 } },
  } as Record<string, { heroSide: ImageSlot; context: ImageSlot }>,
  /** Blog post hero images, keyed by post slug. */
  blog: {} as Record<string, ImageSlot>,
} as const;

/** Default fallback for any slug not explicitly listed above. */
export const DEFAULT_SERVICE_IMAGES = {
  heroSide:   { src: STOCK.implantModel,    alt: 'Dental implant treatment overview.', width: 1400, height: 1000 } satisfies ImageSlot,
  whatCovers: { src: STOCK.cbct3dPlanning,  alt: '3D implant case-planning view.',     width: 1400, height: 900  } satisfies ImageSlot,
  pricing:    { src: STOCK.pricingNotes,    alt: 'Itemised implant treatment quote.',  width: 1400, height: 900  } satisfies ImageSlot,
};

export const DEFAULT_LOCATION_IMAGES = {
  heroSide: { src: STOCK.consultRoom,    alt: 'Essex implant clinician consultation room.', width: 1400, height: 1000 } satisfies ImageSlot,
  context:  { src: STOCK.clinicInterior, alt: 'Essex dental practice interior.',            width: 1400, height: 900  } satisfies ImageSlot,
};

export const DEFAULT_BLOG_IMAGE: ImageSlot = {
  src: STOCK.consultRoom,
  alt: 'Dental implant consultation context.',
  width: 1600, height: 800,
};

export function serviceImages(slug: string) {
  return IMAGES.services[slug] ?? DEFAULT_SERVICE_IMAGES;
}

export function locationImages(slug: string) {
  return IMAGES.locations[slug] ?? DEFAULT_LOCATION_IMAGES;
}

export function blogImage(slug: string) {
  return IMAGES.blog[slug] ?? DEFAULT_BLOG_IMAGE;
}
