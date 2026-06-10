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
  {
    slug: 'single-tooth-implant-cost',
    hub: 'implant-costs',
    draft: true,
    title: 'What a Single Tooth Implant Costs in Essex',
    metaTitle: 'Single Tooth Implant Cost in Essex 2026 | Guide',
    metaDescription:
      'What a single tooth implant costs in Essex in 2026, from the fixture, abutment and crown to extraction, bone graft and CBCT add-ons, plus finance options.',
    excerpt:
      'A 2026 breakdown of single tooth implant prices in Essex, what the quote should include, the add-ons that move the number, and how to pay.',
    category: 'Pricing',
    publishedAt: '2026-06-09',
    lastReviewedAt: '2026-06-09',
    paragraphs: [
      'A single tooth implant in Essex typically costs £2,200 to £3,500 in 2026 for the complete treatment: the titanium fixture placed in the jaw, the abutment that connects to it, and the crown on top. Cheaper generic systems start around £1,800. The final figure depends on the implant system used, any extraction or bone graft, and the crown material.',
      'A single tooth implant quote should be itemised into three clinical stages. The fixture is the screw placed in the jawbone. The abutment is the connector seated on the fixture once it has healed. The crown is the visible tooth screwed or cemented onto the abutment. A clear quote also separates the consultation, any three-dimensional imaging, and the surgical placement appointment, so you can see exactly what each element costs rather than reading a single headline number.',
      'In Essex in 2026, mainstream premium implant systems such as Straumann, Nobel Biocare and Astra typically place a single tooth in the £2,200 to £3,500 range all-in. Generic or value systems run £1,800 to £2,200 inclusive. The difference is not only the brand. Premium systems carry decades of published survival data and a guaranteed component supply chain, which matters if the crown ever needs remaking in fifteen years and the parts still have to exist. A matched clinician should tell you in writing which system they propose and why.',
      'Several common add-ons sit outside the headline figure. If the failing tooth is still in place, extraction adds roughly £150 to £400. Where the socket needs grafting to hold its bone volume after extraction, socket preservation adds £200 to £600. A separate bone graft or sinus lift, if the ridge is too thin or too short, adds £400 to £2,500 depending on technique. Cone-beam CT imaging, which is standard for all but the simplest cases, is £180 to £300 when itemised. Sedation, if you want it, is a further £250 to £500.',
      'A single implant costs more upfront than a bridge or a partial denture, but the comparison changes over time. A conventional bridge means cutting down the healthy teeth on either side and is typically remade every ten to fifteen years, whereas an implant leaves the neighbouring teeth untouched and, in well-maintained cases, lasts considerably longer. On a single missing tooth the upfront premium for an implant often narrows over twenty years once replacement cycles are counted.',
      'Single tooth implants are almost never available on the NHS, which funds implant work only in narrow reconstructive cases referred through hospital services, so in practice this is private treatment. Most matched clinicians offer finance through a third-party provider, with interest-free terms over six to twelve months common and longer terms attracting interest. Always ask for the quote in writing before agreeing to anything.',
      'The only way to get an accurate single tooth implant price is an in-person assessment with imaging, because the add-ons that move the number depend on what the scan shows. We do not place implants ourselves. We match you, free of charge, with GDC-registered implant clinicians across Essex who provide itemised written quotes, so you can compare like for like rather than headline figures.',
    ],
    faqs: [
      {
        question: 'Does a single tooth implant quote include the crown?',
        answer:
          'It should, but not all do. Some clinics advertise a low headline price that covers only the fixture, with the abutment and crown quoted separately. Always confirm the figure you are given is the all-in price for the fixture, abutment and crown.',
      },
      {
        question: 'Can I get a single tooth implant on the NHS?',
        answer:
          'Almost never. The NHS funds implants only in narrowly defined reconstructive cases, such as after oral cancer surgery or significant trauma, referred through hospital services. Routine replacement of a single missing tooth is private treatment.',
      },
      {
        question: 'Why does a single implant cost more than a crown or a filling?',
        answer:
          'An implant replaces the whole tooth including the root. It involves minor surgery, three-dimensional imaging, premium engineered components and several appointments over months. A crown or filling restores an existing tooth, so the work and materials are far less.',
      },
      {
        question: 'How cheap is too cheap for a single tooth implant?',
        answer:
          'A single tooth implant much below £1,800 in the UK should prompt questions about which system is used, whether the crown is included, and where the laboratory work is done. Price alone is a poor guide, so ask exactly what the figure covers.',
      },
      {
        question: 'Will my quote change after the consultation?',
        answer:
          'It can. An accurate price depends on what the CBCT scan shows, such as whether you need an extraction, socket preservation or a bone graft. A written quote after assessment is firmer than any figure given before imaging.',
      },
    ],
    relatedServiceSlugs: ['single-tooth'],
  },
  {
    slug: 'dental-implant-success-rates',
    hub: 'implant-risks-and-success',
    draft: true,
    title: 'Dental Implant Success Rates: What the Evidence Shows',
    metaTitle: 'Dental Implant Success Rates UK | The Evidence',
    metaDescription:
      'What the long-term evidence really says about dental implant success rates, the difference between survival and success, and the factors that move the odds.',
    excerpt:
      'What the long-term evidence shows about dental implant success rates, why survival and success are not the same, and the factors that change the odds.',
    category: 'Safety',
    publishedAt: '2026-06-10',
    lastReviewedAt: '2026-06-10',
    paragraphs: [
      'Mainstream dental implants are one of the most predictable treatments in modern dentistry. Independent long-term studies of established implant systems consistently report ten-year survival in the region of 90 to 95 percent, and the NHS describes implants as a safe, well-established treatment when carried out by an experienced clinician. Success depends far more on your general health, the planning behind the case and your aftercare than on the brand of implant used.',
      'It helps to separate two terms that often get blurred. Survival means the implant is still in place and doing its job. Success is a stricter measure that also requires healthy surrounding bone and gum, no pain or looseness, and a well-fitting restoration on top. A study quoting 97 percent survival and one quoting 92 percent success can describe the same group of patients measured against different bars. When you read a headline figure, it is worth asking which of the two it refers to and over how many years, because a five-year number and a fifteen-year number are not comparable.',
      'The widely cited 90 to 95 percent ten-year figure comes from long-term clinical studies and systematic reviews of established systems, not from any single clinic. Manufacturers such as Straumann and Nobel Biocare publish multi-year survival data on their own fixtures, which is one practical reason a premium system with decades of evidence behind it is often preferred over an unbranded fixture with little published follow-up. The honest summary is that for a healthy patient with adequate bone, treated by an experienced clinician, a well-placed single implant has a very high chance of still being in service a decade later. No reputable clinician should promise a 100 percent outcome, and a guarantee framed that way is a warning sign rather than a reassurance.',
      'Several factors move the odds in ways that are well documented. Smoking is the single largest modifiable risk, with studies reporting roughly double the failure rate in smokers because nicotine restricts the blood supply that healing bone depends on. Uncontrolled diabetes, active gum disease and poor oral hygiene all raise the risk, as does heavy clenching or grinding that overloads the implant. Bone matters too: implants in the lower jaw tend to survive at slightly higher rates than those in the upper jaw, where the bone is softer and the sinus sits close to the back teeth, which is why some upper cases need a graft or sinus lift first. None of these factors is automatically a barrier. Most are about assessment and preparation rather than a simple yes or no.',
      'The part of the equation that patients have the most control over, after their own health, is who does the work. Implant dentistry is not a recognised speciality on its own, so experience varies widely between clinicians who all describe themselves as implant dentists. Careful case selection, three-dimensional CBCT planning, the right number and position of fixtures, and a clean surgical technique are what turn good published averages into a good individual outcome. This is the reason an independent matching service exists. We do not place implants ourselves, and we have no clinic to fill. We match you, free of charge, with GDC-registered implant clinicians across Essex so you can compare experience and written treatment plans rather than headline percentages.',
      'When you weigh up success-rate claims, treat any figure without a timescale or a source with caution, and be wary of clinics advertising near-perfect outcomes on the cheapest fixtures. The meaningful questions to ask at a consultation are how many cases like yours the clinician has treated, what system they propose and why, and what their own protocol is if an implant does not integrate. A clinician who answers those plainly, and itemises the plan in writing, is giving you far better evidence of a likely good outcome than any number on a website. To understand how the broader picture of risk, safety and long-term success fits together, our guide to implant risks, safety and success sets out the warning signs and how complications are managed.',
    ],
    faqs: [
      {
        question: 'Are dental implants really 95 percent successful?',
        answer:
          'For a healthy patient with adequate bone treated by an experienced clinician, long-term studies of established systems report ten-year survival in the region of 90 to 95 percent. That is an average across many patients, not a guarantee for any single case, and the figure falls when significant risk factors such as smoking or uncontrolled diabetes are present.',
      },
      {
        question: 'What is the difference between implant survival and implant success?',
        answer:
          'Survival simply means the implant is still in place. Success is stricter and also requires healthy bone and gum around it, no pain or movement, and a well-fitting restoration. Two studies can report different numbers for the same patients because they are measuring against different definitions, so it is worth checking which one a figure refers to.',
      },
      {
        question: 'Do implants last longer in the lower or upper jaw?',
        answer:
          'Implants in the lower jaw tend to survive at slightly higher rates because the bone there is denser. The upper jaw has softer bone and the sinus cavity sits close to the back teeth, which is why some upper cases need a bone graft or sinus lift before placement. With proper planning, upper-jaw implants are still highly predictable.',
      },
      {
        question: 'Can a dental implant fail years after it has settled in?',
        answer:
          'Yes, although it is uncommon. Early failure happens in the first weeks if the implant does not fuse with the bone. Late failure, years later, is usually driven by peri-implantitis, a gum-disease-like infection around the implant, or by overload from grinding. Good hygiene and regular hygienist maintenance are the main defences.',
      },
      {
        question: 'Does the brand of implant affect the success rate?',
        answer:
          'Clinician skill and patient health matter more than the brand, but the system is not irrelevant. Premium systems carry decades of published survival data and a guaranteed supply of replacement components, which matters if a part ever needs remaking in fifteen years. An unbranded fixture with little long-term evidence is a bigger unknown.',
      },
    ],
    relatedServiceSlugs: ['single-tooth'],
  },
];

export const BLOG_POSTS_BY_SLUG: Record<string, BlogPost> = Object.fromEntries(
  BLOG_POSTS.map((p) => [p.slug, p])
);

export const BLOG_SLUGS = BLOG_POSTS.map((p) => p.slug);
