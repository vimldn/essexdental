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
  {
    slug: 'who-can-have-dental-implants',
    hub: 'am-i-suitable-for-implants',
    draft: true,
    title: 'Who Can Have Dental Implants? Suitability Explained',
    metaTitle: 'Who Can Have Dental Implants? Suitability Guide',
    metaDescription:
      'Who can have dental implants: the bone, gum health, age, smoking and medical factors that decide candidacy, and how suitability is actually assessed.',
    excerpt:
      'A plain-English overview of who is suitable for dental implants, covering bone, gum health, age, smoking and medical factors, and how candidacy is confirmed.',
    category: 'Patient Guide',
    publishedAt: '2026-06-10',
    lastReviewedAt: '2026-06-10',
    paragraphs: [
      'Most adults with one or more missing teeth are suitable for dental implants. The questions that really decide it are whether you have enough jawbone to hold a fixture, whether your gums are healthy, and whether any medical condition or medication slows healing. Age is rarely a barrier on its own, and only an assessment with a scan can confirm it.',
      'Suitability comes down to three clinical factors. The first is bone. An implant is a titanium screw that has to be anchored in the jaw, so there needs to be enough bone height and width to hold it securely. Where bone has been lost after an extraction or long-term gum disease, a bone graft or sinus lift can often rebuild it, so thin bone is frequently a reason for an extra step rather than a flat refusal. The second is gum health: active gum disease has to be brought under control before any implant is placed, because the same bacteria that loosen natural teeth will attack an implant. The third is general healing capacity, which is where your overall health and medications come in.',
      'A number of medical conditions affect candidacy without ruling it out. Well-controlled diabetes is usually compatible with implant treatment, while poorly controlled blood sugar slows healing and raises the risk of failure, so clinicians often want to see stable readings first. Osteoporosis itself is not a barrier, but some bone-protecting medicines, particularly bisphosphonates and similar drugs, change how the jaw heals and need to be disclosed and discussed before any surgery. Blood thinners, a history of head and neck radiotherapy, and conditions that suppress the immune system all matter to planning. None of these is an automatic no. Each is a reason for careful assessment and, where needed, liaison with your doctor.',
      'Lifestyle plays a larger part than many people expect. Smoking is the single biggest modifiable risk: studies report roughly double the failure rate in smokers, because nicotine restricts the blood supply that healing bone relies on. You do not have to have quit for good to be a candidate, but most clinicians will ask you to stop for a period around surgery, and stopping altogether gives the best odds. Heavy clenching or grinding can overload an implant, which is usually managed with a night guard rather than treated as a barrier. Good daily cleaning and a willingness to attend hygienist appointments are part of being suitable too, because an implant lasts only as long as the gum and bone around it stay healthy.',
      'Age is rarely the deciding factor. There is no upper age limit for dental implants; healthy people in their seventies, eighties and beyond have them successfully, and general fitness for minor surgery matters far more than the number itself. The more common age-related limit sits at the younger end. Implants are generally not placed until the jaw has finished growing, usually around eighteen, because a fixture set in a still-developing jaw can end up out of position as the surrounding bone changes. For a teenager who has lost a tooth, a temporary solution is normally used until growth is complete.',
      'The only way to know for certain is an in-person assessment with three-dimensional imaging. A cone-beam CT scan shows the exact bone volume and the position of the nerves and the sinus, which a visual examination cannot, and it is this scan that turns a general yes into a specific plan. The NHS funds implants only in narrow reconstructive cases referred through hospital services, so for most people this is private treatment. We do not place implants ourselves and we have no clinic to fill. We match you, free of charge, with GDC-registered implant clinicians across Essex who assess suitability properly and set out the findings in writing, so you can understand your options rather than be sold a single answer. Where bone or a medical condition complicates the picture, our guide to implant suitability covers the individual situations in more detail.',
    ],
    faqs: [
      {
        question: 'Can I have implants if I have gum disease?',
        answer:
          'Not until it is treated and stable. The bacteria that cause gum disease will attack an implant in the same way they loosen natural teeth, so a clinician will bring the gums under control first. Once your gum health is settled and you keep up good cleaning, gum disease in the past does not rule out implants.',
      },
      {
        question: 'Is there an age limit for dental implants?',
        answer:
          'There is no upper age limit. Healthy people in their seventies and eighties have implants successfully, and fitness for minor surgery matters more than age. The usual limit is at the younger end: implants are generally not placed until the jaw has finished growing, around eighteen, so that the fixture does not end up out of position.',
      },
      {
        question: 'Can I have dental implants if I have diabetes?',
        answer:
          'Usually yes, if the diabetes is well controlled. Stable blood sugar allows normal healing, so clinicians often want to see recent readings before treatment. Poorly controlled diabetes slows healing and raises the risk of failure, which is a reason to get it under control first rather than an outright barrier.',
      },
      {
        question: 'Does smoking stop me from having implants?',
        answer:
          'It does not automatically rule them out, but it is the single biggest modifiable risk, with studies reporting roughly double the failure rate in smokers. Most clinicians ask you to stop for a period around surgery, and stopping for good gives the best chance of long-term success.',
      },
      {
        question: 'What if I do not have enough bone for an implant?',
        answer:
          'Short or thin bone is often an extra step rather than a dead end. A bone graft or sinus lift can rebuild enough volume to place an implant in many cases. A CBCT scan shows exactly how much bone you have, which is why an accurate answer needs an in-person assessment with imaging.',
      },
    ],
    relatedServiceSlugs: ['single-tooth'],
  },
  {
    slug: 'full-arch-implant-cost',
    hub: 'implant-costs',
    draft: true,
    title: 'What Full-Arch and All-on-4 Implants Cost in Essex',
    metaTitle: 'All-on-4 and Full-Arch Implant Cost in Essex',
    metaDescription:
      'What full-arch dental implants cost in Essex in 2026, covering All-on-4 and All-on-6 prices, bridge materials, grafting add-ons, finance and whole-mouth costs.',
    excerpt:
      'A 2026 breakdown of full-arch implant prices in Essex, covering All-on-4 and All-on-6, the bridge materials that move the cost, and how to pay.',
    category: 'Pricing',
    publishedAt: '2026-06-11',
    lastReviewedAt: '2026-06-11',
    paragraphs: [
      'Full-arch dental implants in Essex typically cost £15,000 to £22,000 per arch for an All-on-4 in 2026, and around £18,000 to £26,000 per arch for an All-on-6. That figure replaces a whole jaw of teeth and covers the implants, the surgery, the imaging and a fixed bridge of new teeth. The definitive bridge material and any bone grafting are what move the number most.',
      'A full-arch quote should be itemised rather than handed over as a single headline figure, because it pays for several distinct stages. The first is the consultation and cone-beam CT planning that maps your bone before anything is placed. The second is the surgical day itself, which often includes removing any failing teeth, placing the four or six implants, and fitting a fixed temporary bridge you wear straight away. The third is the definitive bridge, made and fitted months later once the implants have fused with the bone. A clear quote separates these stages so you can see what the provisional teeth cost against the final restoration, and whether review appointments, adjustments and the final fit are included or billed on top.',
      'The main structural choice that moves the price is how many implants carry the arch. All-on-4 uses four implants per jaw, two placed upright at the front and two angled at the back to avoid the sinus and make the most of the bone you already have, which is what keeps both the implant count and the cost down. All-on-6 uses six implants to spread the load further and is often chosen where the bone allows it or where a heavier bridge is planned. In Essex in 2026 the step up from four implants to six typically adds £2,500 to £4,500 per arch. Neither option is automatically better, and the right number depends on your bone volume and the bridge being built, which is a clinical decision made only after a scan.',
      'After the implant count, the definitive bridge material is the biggest single driver of cost. An acrylic bridge on a titanium frame sits at the lower end of the range. It is lighter and straightforward to repair, but the acrylic teeth wear over the years and may need replacing. A full zirconia bridge sits at the upper end. It resists wear and staining far better and looks closest to natural teeth, but it costs more and is harder to modify once made. Many Essex clinicians fit an acrylic provisional bridge first and then a definitive bridge once the implants have fully integrated, so any headline figure you are quoted should make clear which material the final bridge uses and whether the provisional is included.',
      'Several costs can sit outside the headline per-arch figure. Bone grafting or a sinus lift, where the ridge is too thin or too short, adds £400 to £2,500 depending on technique, although full-arch planning with angled implants is often designed specifically to reduce the need for it. Sedation on the surgical day, if you want it, is a further £250 to £500. Treating both jaws roughly doubles the single-arch figure, so a full-mouth All-on-4 case commonly runs £30,000 to £44,000. Full-arch implants are not available on the NHS, which funds implant work only in narrow reconstructive cases referred through hospital services, so in practice this is private treatment. Most matched clinicians offer finance through a third-party provider, with interest-free terms over six to twelve months common and longer terms attracting interest.',
      'The only way to get an accurate full-arch price is an in-person assessment with a CBCT scan, because the implant count, the bridge material and any grafting all depend on what that scan shows. It is also worth understanding how a low overseas headline price compares once travel, follow-up and any remedial work are counted, a point our guide to dental implant cost in Essex weighs up across treatment types, while our full-arch and All-on-4 treatment page explains what the journey itself involves. We do not place implants ourselves. We match you, free of charge, with GDC-registered implant clinicians across Essex who provide itemised written quotes, so you can compare like for like rather than headline figures.',
    ],
    faqs: [
      {
        question: 'Is All-on-4 cheaper than replacing each tooth with its own implant?',
        answer:
          'Yes, considerably. Placing an individual implant for every missing tooth in a full arch would need far more fixtures and far more surgery. All-on-4 carries a complete fixed bridge on just four implants per jaw, which is why it is the more affordable route to fixed teeth for a whole arch.',
      },
      {
        question: 'Does the full-arch price include the final fixed teeth?',
        answer:
          'It should, but always confirm it. A complete quote covers the implants, the surgery, a temporary bridge worn during healing and the definitive bridge fitted later. Some headline prices cover only the surgical stage and the provisional teeth, with the final bridge quoted separately, so ask exactly what the figure includes.',
      },
      {
        question: 'Why does a zirconia bridge cost more than an acrylic one?',
        answer:
          'Zirconia is a far harder, more wear-resistant material than acrylic, and milling a full-arch bridge from it takes more laboratory work and more expensive materials. It resists staining and looks closest to natural teeth, which is why it sits at the upper end of the range, whereas an acrylic bridge on a titanium frame is lighter, cheaper and easier to repair.',
      },
      {
        question: 'Are full-arch implants available on the NHS?',
        answer:
          'Almost never. The NHS funds implants only in narrowly defined reconstructive cases, such as after oral cancer surgery or significant trauma, referred through hospital services. Replacing a full arch of teeth with All-on-4 or All-on-6 is private treatment.',
      },
      {
        question: 'How much does it cost to do both the upper and lower jaw?',
        answer:
          'Treating both arches roughly doubles the single-arch figure, so a full-mouth All-on-4 case in Essex commonly falls in the £30,000 to £44,000 range in 2026. The exact figure depends on the implant count per jaw, the bridge material chosen and any grafting, all of which are confirmed after a CBCT scan.',
      },
    ],
    relatedServiceSlugs: ['full-arch'],
  },
  {
    slug: 'implant-consultation-questions',
    hub: 'choosing-an-implant-dentist',
    draft: true,
    title: 'Questions to Ask at Your Implant Consultation',
    metaTitle: 'Questions to Ask at an Implant Consultation',
    metaDescription:
      'Key questions to ask at a dental implant consultation, covering the implant system, the full written cost, the experience of the clinician, the plan and aftercare.',
    excerpt:
      'The questions worth asking at a dental implant consultation, from the implant system and total cost to clinician experience and what happens if it fails.',
    category: 'Choosing a Clinician',
    publishedAt: '2026-06-11',
    lastReviewedAt: '2026-06-11',
    paragraphs: [
      'A good implant consultation should leave you with a written treatment plan, a clear total cost and an honest view of the risks. The questions worth asking cover the implant system being used, the experience of the clinician, exactly what the price includes, how long treatment will take, and what happens if something goes wrong. Walking in with that list keeps the conversation about your case rather than a sales pitch.',
      'Start with the implant system and the materials. Ask which implant brand the clinician proposes and why, because the established systems have decades of published data and a guaranteed supply of matching parts, while some budget systems do not. Ask whether the crown or bridge is being made from porcelain, zirconia or acrylic, and whether the laboratory work is done in the UK. It is fair to ask what happens in ten years if a component needs replacing, since a mainstream system makes spare parts and future repairs far easier to source than an obscure one.',
      'Then ask directly about experience and registration. Every dentist placing implants in the UK must be registered with the General Dental Council, and you can check any name and registration number on the GDC online register yourself, free of charge. Ask how many implant cases the clinician places each year, how long they have been doing implant work, and what postgraduate implant training they have completed. For anything complex, such as a sinus lift or a full arch, ask whether they handle that case type routinely or refer it on. A confident clinician will answer these questions plainly rather than take offence.',
      'Get the money in writing and itemised. Ask for a written quotation that separates the consultation, any scans, the implant placement, the abutment, the final crown or bridge and any bone grafting, so you can see what is and is not included. Ask whether the price covers follow-up appointments and the temporary tooth while you heal, and whether finance is available and on what terms. Our guide to choosing an implant dentist explains why a vague all-in figure is a warning sign, and the cost of treatment is set out in detail on the relevant pillar so you can sense-check the numbers you are quoted.',
      'Cover the plan, the timeline and the alternatives. A proper consultation should include an examination and a three-dimensional CBCT scan before any firm plan is set, because the scan shows the bone and the position of the nerves and sinus that a visual check cannot. Ask how many visits the whole course will take, how long the healing phase is, and what you will wear in the meantime. Ask what the alternatives are, including a bridge, a denture or doing nothing, and why an implant is being recommended over them. If only one option is ever presented, that is worth questioning.',
      'Finally, ask about risk, success and what happens if it fails. Ask what the realistic success rate is for your case and what could lower it, such as smoking, gum disease or grinding. Ask who you contact if there is a problem after surgery and out of hours, what any warranty or guarantee covers, and who pays if an implant fails early. This is also where an independent introduction helps. We do not place implants and we own no clinic, so we have no incentive to push one provider. We match you, free of charge, with GDC-registered implant clinicians across Essex, including in and around Chelmsford, who will give you the written plan and the straight answers these questions are designed to draw out.',
    ],
    faqs: [
      {
        question: 'How many questions should I ask at an implant consultation?',
        answer:
          'There is no set number. Focus on the five areas that matter: the implant system and materials, clinician experience and registration, the full itemised cost, the treatment plan and timeline, and what happens if the implant fails. A good clinician will welcome the questions and answer them clearly.',
      },
      {
        question: 'Should I get the treatment plan and cost in writing?',
        answer:
          'Yes. Always ask for a written, itemised plan that breaks down the consultation, scans, implant, abutment, crown or bridge and any grafting separately, along with the finance terms. A clear written quotation lets you compare options properly, and a reluctance to put it in writing is a reason to be cautious.',
      },
      {
        question: 'How can I check the experience and registration of an implant dentist?',
        answer:
          'Every dentist in the UK must be registered with the General Dental Council, and you can search any name or registration number on the GDC online register for free. Beyond registration, ask how many implant cases they place each year, how long they have done implant work, and what postgraduate implant training they hold.',
      },
      {
        question: 'What should a thorough implant consultation include?',
        answer:
          'A clinical examination, a review of your medical history and, before any firm plan, a three-dimensional CBCT scan that shows the bone volume and the position of the nerves and sinus. It should also set out the alternatives to an implant and an honest view of the risks, not just a single recommended option.',
      },
      {
        question: 'Is it worth getting a second opinion before treatment?',
        answer:
          'Often, yes, particularly for complex or full-arch cases or where the quotes you receive vary widely. A second opinion costs little against the price of treatment and can confirm whether the proposed plan, implant system and timeline are reasonable. An independent matching service can introduce you to more than one clinician so you can compare.',
      },
    ],
    relatedLocationSlugs: ['chelmsford'],
  },
  {
    slug: 'full-arch-implants-explained',
    hub: 'full-arch-all-on-4',
    draft: true,
    title: 'Full-Arch and All-on-4 Dental Implants Explained',
    metaTitle: 'Full-Arch and All-on-4 Implants Explained',
    metaDescription:
      'A plain guide to full-arch and All-on-4 dental implants, how a few implants replace a whole arch of teeth with one fixed bridge, who they suit and what to expect.',
    excerpt:
      'What full-arch and All-on-4 dental implants are, how four to six implants carry a whole jaw of fixed teeth, and who the treatment suits.',
    category: 'Treatment Types',
    publishedAt: '2026-06-12',
    lastReviewedAt: '2026-06-12',
    paragraphs: [
      'Full-arch dental implants replace a whole jaw of missing or failing teeth with one fixed bridge carried on four to six implants, rather than placing a separate implant for every tooth. All-on-4 is the best known version, using four implants per arch to hold a complete set of fixed teeth that you do not take out to clean.',
      'Full-arch treatment is designed for people who have lost, or are about to lose, most or all of the teeth in a jaw. Instead of a removable denture that sits on the gum, a full-arch bridge is fixed to implants anchored in the bone, so the teeth stay put when you eat and speak. The term covers several configurations, but they share one principle: a small number of implants spread the load of a whole arch of teeth, which is far more economical in surgery and cost than giving every tooth its own implant. Because the bridge is supported by bone-anchored implants rather than resting on the gum, it also helps preserve the jawbone that a conventional denture cannot stimulate.',
      'All-on-4 is a specific full-arch technique, and the name describes the method: four implants carry a complete fixed arch. Two are placed upright at the front of the jaw, where the bone is usually denser, and two are angled towards the back. Tilting the rear implants lets the clinician anchor them in available bone while avoiding the sinus in the upper jaw and the nerve in the lower jaw, which often means good bone can be used without a graft. The All-on-4 protocol was developed and trademarked by the implant manufacturer Nobel Biocare, and similar four-implant approaches are now offered on other established implant systems. In many cases the four implants achieve enough initial stability for a fixed temporary bridge to be fitted the same day or within a few days, which is where the idea of teeth in a day comes from. Published clinical follow-up of the technique reports high implant survival over ten years, commonly in the region of the mid-nineties per cent in well-maintained cases, though individual outcomes depend on bone quality, general health and aftercare.',
      'All-on-4 is not the only option. Where the bone allows, or where a longer or heavier bridge is planned, a clinician may recommend six implants per arch, often called All-on-6, to spread the load further. There are also implant-retained overdentures, which clip onto a smaller number of implants but can still be removed for cleaning, sitting between a conventional denture and a fixed full-arch bridge. The right number of implants and the right type of restoration are clinical decisions that depend on a three-dimensional scan of your bone, not a fixed rule, and our full-arch and All-on-4 guide sets out how these configurations compare in more detail.',
      'The main appeal of a fixed full-arch bridge is that it behaves much more like natural teeth than a removable denture. It does not move when you bite, it needs no adhesive, and it restores far more chewing strength, which widens the range of foods you can eat comfortably. Because the implants carry chewing forces into the jaw, they also slow the bone loss that continues under a denture and changes the shape of the face over time. The trade-offs are real, though. It is surgery, it costs considerably more than a denture upfront, and a fixed bridge has to be cleaned thoroughly around and under the framework every day to keep the gum and implants healthy. For some people, particularly where budget or medical history rules out extensive surgery, a well-made denture or a removable implant-retained overdenture remains the more sensible choice.',
      'Treatment runs in stages. It starts with a consultation and a cone-beam CT scan that maps the bone before anything is planned, followed by the surgical day, when any failing teeth are removed, the implants are placed and a fixed provisional bridge is usually fitted so you are not left without teeth. The implants then fuse with the bone over several months, a process called osseointegration, after which the definitive bridge is made and fitted. That final bridge can be acrylic on a titanium frame or full zirconia, a choice that affects both appearance and cost. Full-arch work is private rather than NHS treatment in almost all cases, and because the price depends on the implant count, the bridge material and any grafting, the only reliable figure comes from an in-person assessment. Our guide to dental implant cost in Essex explains how those numbers are built up.',
      'Full-arch implants are a significant decision, both clinically and financially, so it is worth comparing more than one written plan before committing. We do not place implants and we own no clinic, so we have no reason to steer you towards a particular provider. We match you, free of charge, with GDC-registered implant clinicians across Essex who assess your suitability properly with a scan and provide an itemised written quote, so you can weigh up replacing a full arch with confidence rather than on a headline price alone.',
    ],
    faqs: [
      {
        question: 'What is the difference between full-arch implants and All-on-4?',
        answer:
          'Full-arch implants is the umbrella term for replacing a whole jaw of teeth with a fixed bridge on implants. All-on-4 is one specific way of doing that, using four implants per arch with the back two angled. All-on-4 is therefore a type of full-arch treatment, not a separate thing.',
      },
      {
        question: 'Will I have teeth on the same day as the surgery?',
        answer:
          'Often, yes. If the implants are stable enough on the day, a fixed temporary bridge is commonly fitted straight away or within a few days, so you do not leave without teeth. The definitive bridge is made and fitted later, once the implants have fused with the bone over several months.',
      },
      {
        question: 'Do full-arch implants stay in the mouth permanently?',
        answer:
          'A fixed full-arch bridge is not removed by the patient. It stays in place when you eat, speak and sleep, and you clean it in the mouth. Your clinician or hygienist can unscrew it for a thorough professional clean or maintenance, but day to day it functions like a fixed set of teeth. An implant-retained overdenture, by contrast, clips on and is taken out for cleaning.',
      },
      {
        question: 'Are full-arch implants better than a full denture?',
        answer:
          'They are more stable and stronger for chewing, do not need adhesive and help preserve the jawbone, but they cost considerably more and involve surgery. A well-made denture or a removable implant-retained overdenture can be the better choice where budget, medical history or cleaning ability point that way. It is a clinical decision made case by case after an assessment.',
      },
      {
        question: 'How long do full-arch implants last?',
        answer:
          'Published follow-up studies report high implant survival over ten years and beyond in well-maintained cases. The implants themselves are designed to last many years, while the bridge they carry can wear and may need repair or replacement over time, especially an acrylic bridge. Daily cleaning, not smoking and regular professional maintenance all influence how long the result lasts.',
      },
    ],
    relatedServiceSlugs: ['full-arch'],
  },
  {
    slug: 'signs-of-failing-dental-implant',
    hub: 'implant-risks-and-success',
    draft: true,
    title: 'Ten Signs of a Failing Dental Implant',
    metaTitle: 'Signs of a Failing Dental Implant | What to Watch For',
    metaDescription:
      'The warning signs of a failing dental implant, from bleeding gums to looseness, what tends to cause them, and why acting early gives the best chance of saving it.',
    excerpt:
      'How to recognise the warning signs of a failing dental implant, what usually sits behind them, and why prompt assessment gives the best chance of saving the implant.',
    category: 'Safety',
    publishedAt: '2026-06-12',
    lastReviewedAt: '2026-06-12',
    paragraphs: [
      'The clearest warning signs of a failing dental implant are pain or discomfort that persists or returns after healing, any feeling of movement, gums around the implant that bleed, swell or recede, a bad taste or odour that will not clear, and difficulty chewing on that side. None of these proves the implant is lost, but every one of them justifies a prompt appointment, because problems caught early are usually manageable and problems left for months often are not.',
      'In the first weeks after placement, some tenderness, minor swelling and bruising are a normal part of healing and settle steadily. What should not happen is pain that worsens after the first week, throbbing that keeps you awake, swelling that grows rather than shrinks, or any sensation that the implant itself shifts when touched. These early signs can mean the implant is not fusing with the bone, a process called osseointegration that the whole treatment depends on. An implant that fails to integrate is uncomfortable but rarely an emergency, and removing it early is a far smaller event than most patients fear. The site is usually left to heal and can often be re-treated later.',
      'Once an implant has been in service for months or years, the signs shift. Gums that bleed when you brush around the implant are the earliest and most reversible signal, much as they are around natural teeth. Redness, puffiness, a gum line creeping down the implant so that metal becomes visible, pus or a persistent bad taste, and a crown that suddenly feels high or loose when you bite all warrant assessment. It is worth knowing that a loose crown and a loose implant are very different problems. A crown or its retaining screw can work loose while the implant below remains solid, and tightening or recementing it is routine. Genuine movement of the implant itself is a serious sign, and chewing on it in the meantime makes matters worse. For upper back implants, new sinus pressure or congestion on one side is also worth mentioning to your dentist.',
      'Behind most late problems sits inflammation of the tissues around the implant. The milder, reversible form, peri-implant mucositis, affects only the gum. Left unmanaged it can progress to peri-implantitis, where the bone supporting the implant starts to be lost, and that bone does not regrow on its own. The drivers are familiar: plaque building up where brushing misses, smoking, poorly controlled diabetes, untreated gum disease elsewhere in the mouth, and heavy clenching or grinding that mechanically overloads the implant. The NHS advises that implants need the same daily cleaning discipline and regular professional care as natural teeth, and the small minority of implants that run into trouble are disproportionately those that miss out on both.',
      'If you notice any of these signs, the right move is an examination rather than watchful waiting. Whoever placed the implant should normally see you first, and you are entitled to a second opinion if you want one. Assessment is straightforward: the clinician will probe gently around the implant, check the crown and screw, and take an X-ray or CBCT scan to see the bone level. Caught at the mucositis stage, treatment is usually professional cleaning and improved home care. Established peri-implantitis may need deeper cleaning or minor surgery to access the implant surface. Where an implant genuinely cannot be saved, it is removed, the site heals, and bone grafting can usually rebuild the area so a replacement implant is possible later. If you would rather have an independent route to an experienced clinician, we are a free matching service, we do not place implants ourselves, and we can match you with GDC-registered implant dentists across Essex for an assessment or second opinion.',
      'Prevention is mostly unglamorous consistency: brushing twice daily including around the implant, cleaning the spaces with interdental brushes or floss designed for implants, keeping hygienist appointments, not smoking, and wearing a night guard if you grind. Implants cannot decay, which lulls some patients into treating them as maintenance-free, but the gum and bone around them remain living tissue with the same vulnerabilities as ever. For the wider picture of how complications arise, how often they occur and how they are managed, our guide to implant risks, safety and success sets out the evidence in full.',
    ],
    faqs: [
      {
        question: 'Is it normal for a dental implant to hurt months after placement?',
        answer:
          'No. A healed, healthy implant should be comfortable and feel much like a natural tooth. Pain that appears or returns months after placement suggests infection, bone loss or a mechanical problem such as a loose component, and it should be examined promptly rather than managed with painkillers alone.',
      },
      {
        question: 'Can a failing dental implant be saved?',
        answer:
          'Often, if it is caught early. Gum inflammation around an implant is usually reversible with professional cleaning and better home care, and a loose crown or screw is a routine repair. Once significant bone has been lost or the implant itself is mobile, saving it becomes much harder, which is why early assessment matters so much.',
      },
      {
        question: 'How do I tell whether the crown or the implant is loose?',
        answer:
          'You usually cannot tell reliably at home, and the distinction matters. A loose crown or retaining screw is common and easily fixed while the implant stays solid in the bone. A loose implant means the bond with the bone has failed. Either way, stop chewing on it and book an examination so the cause can be confirmed with an X-ray.',
      },
      {
        question: 'What does a dental implant infection feel like?',
        answer:
          'Early on it may cause no pain at all, just gums that bleed when brushed, look red or puffy, or produce a bad taste. More established infection can bring swelling, pus, tenderness and visible gum recession around the implant. Because the early stage is often painless, bleeding around an implant is worth taking seriously even when it does not hurt.',
      },
      {
        question: 'If my implant fails, can I have another one?',
        answer:
          'Usually, yes. A failed implant is removed, the site is allowed to heal, and any lost bone can typically be rebuilt with grafting before a new implant is placed. The clinician will also want to understand why the first one failed, for example smoking, gum disease or overload, so the same problem does not repeat.',
      },
    ],
    relatedServiceSlugs: ['bone-grafting'],
  },
  {
    slug: 'implants-with-gum-disease',
    hub: 'am-i-suitable-for-implants',
    draft: true,
    title: 'Can You Have Dental Implants With Gum Disease?',
    metaTitle: 'Dental Implants With Gum Disease | What to Know',
    metaDescription:
      'Whether you can have dental implants with gum disease, why active disease must be treated first, how stabilised cases proceed, and what assessment involves.',
    excerpt:
      'What gum disease means for implant suitability: why active disease is treated first, how stabilised periodontitis cases proceed, and what the assessment checks.',
    category: 'Patient Guide',
    publishedAt: '2026-06-13',
    lastReviewedAt: '2026-06-13',
    paragraphs: [
      'You can have dental implants after gum disease, but not during it. Active periodontitis has to be treated and stabilised before any implant is placed, because the same bacteria that loosen natural teeth will attack the tissue around an implant. With the disease under control and enough bone remaining, implants remain a realistic option for most patients, and an assessment with a scan confirms it.',
      'Gum disease and implants are in direct conflict for one simple reason. Periodontitis is a bacterial infection that destroys the bone and ligament holding teeth in place, and an implant placed into an infected mouth inherits that same bacterial environment. Around an implant the equivalent condition is called peri-implantitis, and it tends to progress faster than gum disease around a natural tooth because an implant lacks the ligament and blood supply that give natural teeth some defence. No careful clinician will place a fixture while active infection is present, and a clinic willing to skip that step is a warning sign rather than a convenience.',
      'Treating the gum disease first is therefore a fixed stage of the journey, not an optional extra. Stabilisation usually means a course of professional deep cleaning below the gumline, strict daily cleaning at home, and in more advanced cases targeted gum treatment from a dentist with periodontal experience. The NHS describes gum disease as very common and emphasises that it can be managed well with professional treatment and good daily hygiene. Once pockets have shrunk, bleeding has stopped and the disease is demonstrably stable over follow-up visits, implant planning can begin. Depending on severity, expect this phase to take a few months rather than weeks.',
      'The second consequence of gum disease is bone loss, and this is what shapes the treatment plan more than the infection itself. Periodontitis dissolves the bone that an implant would anchor into, so long-standing disease often leaves the ridge thinner or shorter than placement requires. That is rarely a flat refusal. A bone graft or sinus lift can usually rebuild enough volume, adding a healing stage and cost to the plan but keeping implants achievable. The CBCT scan taken at assessment shows precisely how much bone remains and whether grafting is needed before, or at the same time as, placement.',
      'A history of periodontitis does carry a higher long-term risk of peri-implantitis than an implant placed in a mouth that never had gum disease, and an honest clinician will say so plainly. What the evidence also shows is that the risk is managed rather than fixed: well-maintained patients with treated gum disease keep implants for many years. The conditions are strict daily cleaning around the implant, regular hygienist maintenance, and not smoking, since smoking both drives gum disease and roughly doubles implant failure risk. If you are weighing this up alongside other health factors, our guide on whether you are a suitable implant candidate covers bone, age, smoking and medical conditions together.',
      'Assessment is where the general picture becomes a personal answer. A GDC-registered implant clinician will measure gum pockets, chart any bleeding, take a CBCT scan to map remaining bone, and review your medical history before proposing anything. The realistic outcomes are a plan that starts with gum treatment and re-assessment, a plan that adds grafting to rebuild lost bone, or in well-stabilised cases a straightforward placement plan. What you should not accept is a same-day promise made without periodontal measurements, because suitability with a gum disease history cannot be judged by looking.',
      'We do not place implants or treat gum disease ourselves. We match you, free of charge, with GDC-registered implant clinicians across Essex who will assess your gum health honestly, treat or refer the periodontal side first where needed, and give you a written, itemised plan, so you can compare your options rather than being sold a single answer.',
    ],
    faqs: [
      {
        question: 'Can implants be placed while I still have active gum disease?',
        answer:
          'No. Active periodontitis has to be treated and shown to be stable before placement, because implants placed into an infected mouth carry a much higher risk of early failure and peri-implantitis. Treating the gums first is a standard stage of the treatment plan, not an optional extra.',
      },
      {
        question: 'How long after gum treatment can I have an implant?',
        answer:
          'It depends on how severe the disease was and how well it responds. Clinicians generally want to see stable pockets and no bleeding over at least one or two follow-up reviews, which typically means a few months between starting gum treatment and implant placement. Cases needing bone grafting take longer.',
      },
      {
        question: 'Will gum disease have destroyed too much bone for implants?',
        answer:
          'Sometimes it reduces bone below what placement needs, but that is usually a reason for a bone graft or sinus lift rather than a refusal. A CBCT scan at assessment shows exactly how much bone remains and whether rebuilding is needed first.',
      },
      {
        question: 'Are implants more likely to fail if I have had gum disease?',
        answer:
          'A periodontitis history raises the long-term risk of peri-implantitis compared with patients who never had gum disease, but well-maintained patients keep implants for many years. Strict daily cleaning, regular hygienist visits and not smoking are what keep the risk down.',
      },
      {
        question: 'Should I just have my loose teeth out and implants fitted instead?',
        answer:
          'Not as a first step. Teeth that can be saved with gum treatment are usually worth saving, and extracting teeth does not remove the disease from the mouth. A proper assessment weighs which teeth are saveable against which are failing, then sequences gum treatment, any extractions and implants in the right order.',
      },
    ],
    relatedServiceSlugs: ['bone-grafting'],
  },
];

export const BLOG_POSTS_BY_SLUG: Record<string, BlogPost> = Object.fromEntries(
  BLOG_POSTS.map((p) => [p.slug, p])
);

export const BLOG_SLUGS = BLOG_POSTS.map((p) => p.slug);
