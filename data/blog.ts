import { siteConfig } from './site';

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  /** Parent hub slug (see data/guides.ts). Every spoke belongs to one hub. */
  hub: string;
  /** Draft spokes 404, and are excluded from /blog, hub spoke-grids and the
   *  sitemap until the publisher flips them live. */
  draft: boolean;
  publishedAt: string;
  lastReviewedAt: string;
  paragraphs: string[];
  faqs?: { question: string; answer: string }[];
  relatedServiceSlugs?: string[];
  relatedLocationSlugs?: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'dental-implant-cost-essex',
    hub: 'implant-costs',
    draft: false,
    title: 'Dental Implant Cost in Essex 2026: What to Expect',
    metaTitle: 'Dental Implant Cost in Essex 2026 | Price Guide',
    metaDescription:
      'Typical 2026 prices for single-tooth, multiple-tooth and full-arch dental implants at Essex clinicians. Itemised ranges and what moves the price.',
    excerpt:
      'A 2026 price breakdown for dental implant treatment in Essex, with itemised ranges by treatment type and an explanation of what moves the number.',
    category: 'Pricing',
    publishedAt: '2026-02-15',
    lastReviewedAt: siteConfig.editorial.lastReviewedAt,
    paragraphs: [
      'Single-tooth implant treatment in Essex in 2026 typically falls in the £2,200-£3,500 range for placement plus restoration with mainstream premium implant systems. Cheaper generic systems exist at £1,800-£2,200 inclusive, and most reputable matched clinicians will be explicit in writing about which system they propose.',
      'Multiple-teeth treatment using two implants to carry a three-unit fixed bridge typically falls in the £5,500-£8,500 range. Two non-adjacent implants with separate crowns typically run £4,400-£6,400. The implant-supported bridge configuration is materially cheaper than one implant per tooth, with equivalent long-term predictability for spans of three or four teeth.',
      'Full-arch All-on-4 typically falls in the £15,000-£22,000 per arch range with an acrylic provisional and a definitive bridge after healing. All-on-6 adds £2,500-£4,500 per arch. The choice of definitive bridge material moves the price materially: acrylic-on-titanium frame at the lower end, full zirconia at the upper end.',
      'Bone grafting where required adds £400-£1,200 for ridge augmentation, £800-£2,500 for sinus lifts depending on technique. Some clinicians include moderate grafting in the headline implant fee; others itemise separately. Itemised quotes are standard practice on the panel.',
      'Pricing differences across Essex are smaller than commonly assumed. Premises overhead drives most of the variation. Clinical work and materials at competent Essex clinicians are equivalent to central London at materially lower prices, which is the structural reason a referral service exists.',
    ],
    faqs: [
      {
        question: 'Is implant treatment available on the NHS?',
        answer:
          'Generally not, except in narrowly defined oncology, congenital or severe trauma scenarios referred through secondary care. The matched clinicians on the panel are private.',
      },
      {
        question: 'Why do prices vary across Essex?',
        answer:
          'Premises overhead, the implant system used, the definitive bridge material on full-arch cases, and individual clinician experience all move the price. Clinical outcomes at competent clinicians are equivalent.',
      },
      {
        question: 'Is finance available?',
        answer:
          'Yes at most matched clinicians, typically via a third-party provider. Interest-free terms over six to twelve months are common; longer terms attract interest.',
      },
    ],
    relatedServiceSlugs: ['single-tooth', 'multiple-teeth', 'full-arch'],
  },
  {
    slug: 'implants-vs-dentures-uk',
    hub: 'implants-vs-alternatives',
    draft: false,
    title: 'Dental Implants vs Dentures in the UK: Which Is Right For You?',
    metaTitle: 'Dental Implants vs Dentures UK | Comparison Guide',
    metaDescription:
      'A practical UK comparison of dental implants and dentures: stability, bone health, cost over twenty years, and when each is the right choice.',
    excerpt:
      'A practical comparison of dental implants and dentures for UK patients, with stability, bone health, and cost-over-twenty-years explained.',
    category: 'Patient Guide',
    publishedAt: '2026-02-20',
    lastReviewedAt: siteConfig.editorial.lastReviewedAt,
    paragraphs: [
      'Dentures sit on top of the gum ridge and rely on suction, retention clasps to neighbouring teeth, or denture adhesive. Implants are surgically placed in the jawbone and fuse with bone through osseointegration. The resulting stability is dramatically different.',
      'Implants preserve jawbone volume in the long run. Bone resorbs progressively under a denture because there is no stimulating chewing load transferred through the bone, which is why long-term denture wearers develop the characteristic sunken facial appearance. Implants transfer chewing load directly through the fixture and maintain bone volume.',
      'A complete upper or lower denture costs around £600-£1,500 privately and is available on the NHS for around £319.10 at Band 3. A two-implant lower overdenture costs £4,800-£6,500. A full-arch fixed bridge on four implants costs £15,000-£22,000 per arch. The price difference reflects the difference in clinical outcome.',
      'Over twenty years, dentures usually need replacement two to three times because the underlying ridge changes shape as bone resorbs. Implants last twenty years and beyond at survival rates around ninety per cent in well-maintained cases. The total-cost-of-ownership comparison narrows over time, though implants remain materially more expensive.',
      'Dentures are still the right answer for some patients. Where medical history precludes implant surgery, where budget rules out implant work, or where dexterity for cleaning fixed restorations is limited, a well-made denture or an implant-retained overdenture is the better clinical choice than a fixed implant solution.',
    ],
    faqs: [
      {
        question: 'Can I convert my existing denture to implant-retained?',
        answer:
          'In some cases yes; the matched clinician will assess whether the existing denture can be modified to take locator housings, or whether a new denture is required.',
      },
      {
        question: 'Are dentures painful?',
        answer:
          'Well-made dentures should not be painful. Sore spots in the first few weeks are normal and easily adjusted. Persistent discomfort usually indicates the denture base needs relining or replacement.',
      },
      {
        question: 'How long do dentures last?',
        answer:
          'Five to seven years is typical for a complete denture before the fit deteriorates as the underlying ridge changes. Partial dentures last similarly.',
      },
    ],
    relatedServiceSlugs: ['implant-dentures', 'full-arch'],
  },
  {
    slug: 'cbct-3d-planning-for-dental-implants',
    hub: 'implant-process-and-timeline',
    draft: false,
    title: 'CBCT and 3D Planning for Dental Implants in the UK',
    metaTitle: 'CBCT 3D Planning for Implants UK | What to Expect',
    metaDescription:
      'How CBCT cone-beam imaging and digital implant planning are used by UK implant clinicians for surgical guides and predictable placement.',
    excerpt:
      'How CBCT cone-beam imaging and digital planning produce predictable implant placement at Essex clinicians.',
    category: 'Technology',
    publishedAt: '2026-02-25',
    lastReviewedAt: siteConfig.editorial.lastReviewedAt,
    paragraphs: [
      'Cone-beam computed tomography (CBCT) is a three-dimensional imaging technique that produces volumetric data of the jaw, sinuses and inferior alveolar nerve canal at a fraction of the radiation dose of a conventional medical CT scan. CBCT is the standard pre-treatment imaging for implant cases at competent Essex clinicians.',
      'The CBCT volume is imported into implant planning software where the clinician positions virtual implants in three dimensions, checks proximity to anatomical structures, and confirms restorative angulation. The output is either a freehand surgical plan or a manufactured surgical guide that physically constrains the drill path to the planned position.',
      'Surgical guides are particularly valuable in cases with limited bone width, proximity to the maxillary sinus or inferior alveolar nerve, or aesthetic-zone work where angulation drives the final crown emergence profile. Not every case warrants a guide, and the matched clinician should explain the planning approach they propose.',
      'Single-arch CBCT imaging typically costs £180-£300 when itemised. Some matched clinicians include CBCT in the consultation fee, others charge separately. Surgical guide manufacture (where used) typically adds £200-£500.',
      'CBCT also rules out cases that should not have implants. A small but meaningful proportion of consultation cases reveal anatomical findings on CBCT that contra-indicate placement at the planned site. Imaging-first practice avoids surgical surprises.',
    ],
    faqs: [
      {
        question: 'Is the CBCT radiation dose significant?',
        answer:
          'A small-field CBCT for a single-implant case delivers a radiation dose comparable to one to two days of natural background radiation. A full-jaw CBCT delivers around five to ten times that. Both are well below routine medical CT scan doses.',
      },
      {
        question: 'Is CBCT compulsory for implant cases?',
        answer:
          'It is not a regulatory requirement, but it is standard care for all but the most straightforward cases. Any clinician proposing an implant case without three-dimensional imaging should be asked why.',
      },
      {
        question: 'Can my dentist use a CBCT taken elsewhere?',
        answer:
          'Most matched clinicians will accept a recent CBCT from another GDC-registered practice if the imaging is current and the resolution is adequate, though they may request additional views.',
      },
    ],
    relatedServiceSlugs: ['single-tooth', 'full-arch', 'bone-grafting'],
  },
  {
    slug: 'caring-for-dental-implants',
    hub: 'implant-aftercare',
    draft: false,
    title: 'Caring For Your Dental Implants: A Practical Guide',
    metaTitle: 'How To Care For Dental Implants | UK Maintenance Guide',
    metaDescription:
      'Daily care, hygienist intervals, peri-implantitis prevention, and what to do if something feels wrong with a dental implant.',
    excerpt:
      'Daily home care and hygienist schedule that keeps implants and the surrounding soft tissue healthy long-term.',
    category: 'Patient Guide',
    publishedAt: '2026-03-01',
    lastReviewedAt: siteConfig.editorial.lastReviewedAt,
    paragraphs: [
      'The most important habit is interdental cleaning. Implants do not develop cavities (the titanium fixture and ceramic crown are inert), but the surrounding soft tissue and underlying bone can develop peri-implantitis, an inflammatory disease equivalent to periodontitis around natural teeth. Interdental brushes or water flossers reach the implant-gum junction better than dental floss alone.',
      'Brush twice daily with a soft-bristled brush. Electric brushes with pressure sensors perform well around implant crowns. Aggressive brushing risks gum recession around implants exactly as it does around natural teeth.',
      'Hygienist visits every six months are the baseline for implant patients. Some matched clinicians recommend three to four months for patients with a history of periodontal disease or higher peri-implantitis risk. The hygienist should be using carbon-fibre or PEEK-tipped instruments around implants, not metal scalers that can damage the implant surface.',
      'Peri-implantitis presents with bleeding around the implant crown, recession of the soft tissue, and progressive bone loss visible on radiographs. Early-stage peri-implantitis can be reversed with hygienist intervention and improved home care. Advanced cases may require surgical intervention and in some cases removal of the implant.',
      'If a crown feels loose, an implant feels loose, or there is persistent bleeding or discomfort, contact the placing clinician promptly. Loose crowns can usually be re-tightened. Loose implants are unusual and require immediate assessment.',
    ],
    faqs: [
      {
        question: 'Can implants get cavities?',
        answer:
          'No. The implant fixture is titanium and the crown is ceramic or metal. Both are inert to dental decay. The risk is to the surrounding soft tissue and bone, not the implant itself.',
      },
      {
        question: 'Are interdental brushes safe around implants?',
        answer:
          'Yes, and they are essential. The right brush size depends on the gap dimension; the matched clinician\'s hygienist will recommend a size.',
      },
      {
        question: 'How often do I need a hygienist visit?',
        answer:
          'Every six months is the baseline. Patients with periodontal history or known higher peri-implantitis risk often go every three to four months.',
      },
    ],
    relatedServiceSlugs: ['single-tooth', 'multiple-teeth', 'full-arch'],
  },
  {
    slug: 'implants-after-failed-bridge-or-crown',
    hub: 'implants-vs-alternatives',
    draft: false,
    title: 'Implants After a Failed Bridge or Crown: When They Make Sense',
    metaTitle: 'Implants After A Failed Bridge Or Crown | UK Guide',
    metaDescription:
      'When a failed bridge or crown is best replaced with an implant rather than another bridge or crown, with the clinical reasoning explained.',
    excerpt:
      'When a failed bridge or crown is best replaced with an implant rather than refurbished, with the clinical reasoning explained.',
    category: 'Patient Guide',
    publishedAt: '2026-03-10',
    lastReviewedAt: siteConfig.editorial.lastReviewedAt,
    paragraphs: [
      'A conventional tooth-supported bridge transfers chewing load through the natural teeth either side of the gap. Over a fifteen to twenty year span, those supporting teeth often develop decay, fractures, or pulpal problems under the crown preparation that brought them into the bridge in the first place. Bridge failure then becomes a multi-tooth problem.',
      'An implant replaces only the missing tooth. The supporting natural teeth on either side stay untouched. Where a single-unit bridge has just failed, the matched clinician will frequently propose extracting the failed bridge pontic site for an implant, while leaving the previously-prepared supporting teeth with new crowns or restorations.',
      'Where the supporting teeth themselves are non-restorable, the comparison shifts. A long-span implant bridge can replace a failed three-unit bridge with two new implants and a fixed bridge, leaving the surrounding teeth in a stable state. This is a substantially more involved plan than a single-tooth implant but produces a definitive long-term outcome.',
      'A failed crown is different. Where the underlying tooth is restorable, a new crown is almost always the right answer. Where the underlying tooth has failed (root fracture, severe decay below the gum line, advanced periodontal loss), extraction and an implant becomes the conservative long-term choice.',
      'The decision rests on whether the underlying natural teeth are themselves restorable. The matched clinician will assess this clinically and may request a CBCT before committing to either route.',
    ],
    faqs: [
      {
        question: 'How can I tell if my supporting teeth are restorable?',
        answer:
          'Only the matched clinician can assess this clinically. Visible signs that supporting teeth are failing include recurrent decay under the bridge margins, persistent gum bleeding, and mobility. None of these are conclusive on their own.',
      },
      {
        question: 'Is an implant always better than a new bridge?',
        answer:
          'No. Where the supporting teeth are themselves at risk and would not benefit from being preserved, a new bridge can prolong the inevitable. Where the supporting teeth are healthy, an implant for the missing tooth is the conservative long-term choice.',
      },
      {
        question: 'Can I have an implant under a failed bridge without removing the whole bridge?',
        answer:
          'No. The bridge has to be sectioned to access the failed unit and the supporting teeth assessed. Re-cementing the existing bridge is not generally an option once a failure is identified.',
      },
    ],
    relatedServiceSlugs: ['single-tooth', 'multiple-teeth'],
  },
  {
    slug: 'eating-with-dental-implants',
    hub: 'implant-aftercare',
    draft: false,
    title: 'Eating With Dental Implants: What to Expect Through Healing',
    metaTitle: 'Eating With Dental Implants | Healing Timeline UK',
    metaDescription:
      'What you can eat immediately after placement, during osseointegration, and once your implant crown is fitted.',
    excerpt:
      'What you can eat immediately after placement, during osseointegration, and once the definitive crown is in.',
    category: 'Lifestyle',
    publishedAt: '2026-03-15',
    lastReviewedAt: siteConfig.editorial.lastReviewedAt,
    paragraphs: [
      'For the first two to three days after placement, keep to soft, cool foods. Yoghurt, smoothies, mashed potato, well-cooked pasta, soups (not hot enough to burn the surgical site). Avoid hard, crunchy, or sticky foods, and do not use straws; the suction risks disturbing the blood clot that begins healing.',
      'For the first two weeks, chew on the opposite side of the mouth where possible. The surgical site is still soft tissue healing and the implant is integrating with bone. Hot drinks are fine after the first day, but extreme temperatures are uncomfortable around healing tissue.',
      'During osseointegration (weeks two to twelve) you can gradually reintroduce most foods. Steak, apples, hard bread crusts and similarly demanding chewing are still best avoided directly over the implant site, but the soft-food restriction relaxes.',
      'Once the definitive crown is fitted (three to six months after placement), the implant functions like a natural tooth. Bite force comparable to natural teeth is achievable. Hard foods, chewy foods, and most everyday eating are fine.',
      'Across the patient base, the foods most often raised as something patients want back are apples, corn on the cob, and steak. All three are achievable on a healed single-tooth implant and on most multi-tooth and full-arch cases.',
    ],
    faqs: [
      {
        question: 'When can I eat normally after implant surgery?',
        answer:
          'Soft foods only for two to three days, gentle chewing for two weeks, mostly normal eating from week three onwards with the surgical site protected, full normal eating once the definitive crown is in.',
      },
      {
        question: 'Can I drink alcohol after implant surgery?',
        answer:
          'Most matched clinicians ask patients to avoid alcohol for the first three to five days because it impairs healing. After that, in moderation is fine. Smoking is the more significant risk factor for implant failure.',
      },
      {
        question: 'Will I feel the implant when I bite?',
        answer:
          'No. The implant is anchored in bone with no nerve fibres directly attached, so the proprioceptive feedback is different from a natural tooth. Most patients adapt to this within weeks.',
      },
    ],
    relatedServiceSlugs: ['single-tooth', 'multiple-teeth'],
  },
];

export const BLOG_POSTS_BY_SLUG: Record<string, BlogPost> = Object.fromEntries(
  BLOG_POSTS.map((p) => [p.slug, p])
);

export const BLOG_SLUGS = BLOG_POSTS.map((p) => p.slug);
