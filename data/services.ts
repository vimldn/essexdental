export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  heroBadge: string;
  heroDirectAnswer: string;
  metaTitle: string;
  metaDescription: string;
  whatItCoversParagraphs: string[];
  edgeCasesParagraphs: string[];
  workedExamples: { title: string; body: string }[];
  pricingNotes: string[];
  regulatoryNotes: { text: string; links?: { label: string; url: string }[] };
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const SERVICES: ServiceData[] = [
  {
    slug: 'single-tooth',
    title: 'Single-Tooth Implants',
    shortTitle: 'Single-tooth',
    heroBadge: 'Single-tooth replacement',
    heroDirectAnswer:
      'A single-tooth implant replaces one missing tooth with a titanium fixture placed in the jawbone, an abutment, and a custom crown. Treatment runs from three to six months end to end at most Essex clinicians on our matching panel.',
    metaTitle: 'Single-Tooth Implants in Essex | Matching Service',
    metaDescription:
      'Match with verified Essex single-tooth implant clinicians. Typical price ranges, edge cases, and process explained.',
    whatItCoversParagraphs: [
      'A single-tooth implant case begins with a clinical examination, a panoramic radiograph and usually a cone-beam CT scan to map bone volume around the planned implant site. The matched clinician confirms whether the site has adequate bone height and width, the proximity of the inferior alveolar nerve or maxillary sinus, and whether any pre-treatment is required.',
      'Placement is a single chair-time appointment of around forty-five minutes under local anaesthetic. The titanium fixture is seated in the prepared osteotomy, and either a healing abutment or a temporary restoration is fitted depending on bone quality and primary stability. Osseointegration runs three to four months for most cases.',
      'Restoration follows in two appointments: an impression or digital scan for the laboratory, then fit-and-cement of the definitive crown. The matched clinician will confirm whether the crown is screw-retained or cement-retained based on the angulation of the fixture and the position of the tooth in the arch.',
    ],
    edgeCasesParagraphs: [
      'Single-tooth replacement in the upper front aesthetic zone is technically more demanding than a posterior single-tooth case. Soft-tissue management around the emerging crown determines whether the result looks like the patient\'s own tooth or like an obvious crown. Matching weights aesthetic-zone cases toward clinicians whose portfolios show the relevant soft-tissue work.',
      'Sites with thin or resorbed bone may require simultaneous or staged grafting. Staged grafting adds three to six months to the timeline; we tell every enquirer where this is likely so the timeline expectation is honest.',
      'Heavy bruxism shortens the lifespan of a single implant crown and increases screw-loosening risk. The matched clinician will assess bruxism habit and may recommend a night splint as part of the treatment plan.',
    ],
    workedExamples: [
      {
        title: 'Upper left lateral incisor after failed root canal, Chelmsford CM2',
        body:
          'A patient in their late forties presented with a fractured upper left lateral incisor that had failed two prior root canal treatments. Bone volume was adequate at the proposed implant site. Treatment plan: extraction with simultaneous implant placement, healing for three months, then a screw-retained zirconia crown. Total fee at the matched clinician: £2,950 across all stages.',
      },
      {
        title: 'Lower right first molar, Colchester CO3',
        body:
          'A patient in their mid-fifties presented with a missing lower right first molar following an extraction four years prior. CBCT showed mild ridge resorption but adequate height above the inferior alveolar nerve. Treatment plan: implant placement, three-month osseointegration, then a screw-retained ceramic crown. Total fee at the matched clinician: £2,600.',
      },
      {
        title: 'Upper canine, Brentwood CM14, staged grafting',
        body:
          'A patient in their early sixties presented with a missing upper canine following a failed bridge. CBCT showed insufficient buccal bone. Treatment plan: bone grafting (£900), six-month healing, implant placement (£1,800), three-month osseointegration, screw-retained zirconia crown (£950). Total over twelve months: £3,650.',
      },
    ],
    pricingNotes: [
      'Single-tooth treatment across the Essex panel typically falls in the £2,200-£3,500 range for placement plus restoration with mainstream premium implant systems (Straumann, Nobel Biocare, Astra Tech).',
      'Cheaper generic systems exist at £1,800-£2,200 inclusive. Where a clinician quotes inside this range, we ask them to be explicit in writing about which system, which abutment platform, and which restorative material so the comparison is honest.',
      'Bone grafting where required typically adds £400-£1,200 depending on volume and graft material.',
      'CBCT imaging is sometimes itemised separately at £180-£300, and sometimes included in the consultation fee. We ask matched clinicians for an itemised quote so this is explicit.',
    ],
    regulatoryNotes: {
      text:
        'Implant treatment in the UK is regulated by the General Dental Council under the Dentists Act 1984. Implant placement is not a recognised specialty in itself; the relevant specialist titles are oral surgery and prosthodontics. Many high-quality implant practitioners are general dentists with significant restricted-practice experience rather than holders of a specialist title; matched clinicians on the panel are confirmed GDC-registered with verifiable restricted-practice experience.',
      links: [
        { label: 'GDC register', url: 'https://olr.gdc-uk.org/SearchRegister' },
        { label: 'GDC Standards for the Dental Team', url: 'https://standards.gdc-uk.org/' },
      ],
    },
    faqs: [
      {
        question: 'How long does a single-tooth implant take from start to finish?',
        answer:
          'Three to six months is typical. Most of the timeline is healing time for the titanium fixture to integrate with bone (osseointegration). The chair time on the patient side is usually under three hours across all appointments.',
      },
      {
        question: 'Will I be without a tooth during the healing phase?',
        answer:
          'Not necessarily. Many cases use a removable temporary or an Essix retainer with a tooth in it during osseointegration. Front-tooth cases more often get an immediate temporary on the implant if primary stability allows.',
      },
      {
        question: 'How long does a single-tooth implant last?',
        answer:
          'Twenty-plus years is typical for the fixture in patients without uncontrolled periodontal disease, well-managed diabetes, and good home care. The crown on top has a shorter typical lifespan of ten to fifteen years and may need replacing once or twice during the life of the fixture.',
      },
      {
        question: 'Is the placement painful?',
        answer:
          'Placement is under local anaesthetic and most patients report it as no more uncomfortable than a routine extraction. Post-operative discomfort is usually managed with ibuprofen for two to three days.',
      },
      {
        question: 'Can I have an implant if I smoke?',
        answer:
          'Smoking materially raises the risk of early implant failure and peri-implantitis. Most matched clinicians will still treat smokers but will be explicit about the elevated failure rate and may decline the most demanding aesthetic-zone cases.',
      },
      {
        question: 'What happens if the implant fails?',
        answer:
          'Early failure (within six months) is uncommon, around two to three per cent of cases. When it occurs, the fixture is removed, the site is allowed to heal for three to four months, and a replacement is placed. Most matched clinicians cover early failure within their initial fee.',
      },
    ],
    relatedSlugs: ['multiple-teeth', 'immediate-implants', 'bone-grafting'],
  },
  {
    slug: 'multiple-teeth',
    title: 'Multiple-Teeth Implants',
    shortTitle: 'Multiple teeth',
    heroBadge: 'Multiple-tooth replacement',
    heroDirectAnswer:
      'Multiple-tooth implant treatment replaces two or more missing teeth using individual implants or an implant-supported bridge. Implant-supported bridges typically use two fixtures to carry three or four teeth, which keeps cost down compared with one fixture per tooth.',
    metaTitle: 'Multiple-Teeth Implant Bridges in Essex | Matching Service',
    metaDescription:
      'Match with verified Essex implant clinicians for two-or-more-teeth cases. Implant-supported bridges, pricing, edge cases.',
    whatItCoversParagraphs: [
      'A multiple-tooth case starts with the same examination, panoramic radiograph and CBCT as a single-tooth case. The matched clinician then decides between one implant per missing tooth and an implant-supported bridge. For three or four adjacent teeth, two well-spaced implants carrying a fixed bridge is almost always the better choice on cost and on long-term clinical predictability.',
      'Placement of two implants is a single chair-time appointment of around sixty to ninety minutes under local anaesthetic. Healing runs three to four months. The bridge is then fabricated by the laboratory and seated across two abutments, screw-retained at most matched clinicians on the panel for easier maintenance.',
      'For non-adjacent missing teeth, individual implants are placed at each site, healed and restored separately. This is more involved than an implant-supported bridge but produces a more conservative long-term outcome where the gaps are widely spaced.',
    ],
    edgeCasesParagraphs: [
      'A three-unit implant-supported bridge across the front upper teeth is one of the more demanding aesthetic cases in implant dentistry. Soft-tissue contour between the abutment and the pontic determines whether the result looks natural or like a row of identical crowns. Matched aesthetic cases weight toward clinicians whose portfolio shows the relevant pink-ceramic and emergence-profile work.',
      'Replacing two non-adjacent missing teeth either side of a healthy natural tooth raises the question of whether to keep the healthy tooth in service or sacrifice it for a single longer bridge. The matched clinician should explain both options and the trade-off; preserving the healthy tooth is almost always the right answer.',
      'Long-span cases (four or more adjacent missing teeth) sometimes work better as a full-arch solution than as a multi-tooth bridge. Where that is the case the matched clinician should propose the comparison rather than defaulting to the bridge.',
    ],
    workedExamples: [
      {
        title: 'Three upper anterior teeth following trauma, Southend SS1',
        body:
          'A patient in their late forties lost three upper anterior teeth in a cycling accident. CBCT showed adequate bone after a short healing period. Treatment plan: two implants placed at the canine and lateral incisor positions carrying a three-unit fixed bridge. Total fee at the matched clinician: £6,800.',
      },
      {
        title: 'Lower right molar plus second molar, Basildon SS14',
        body:
          'A patient in their mid-fifties presented with both lower right molars missing after long-standing extractions. Treatment plan: two implants and two screw-retained ceramic crowns. Total fee: £4,900.',
      },
      {
        title: 'Upper left pre-molar and first molar, Rayleigh SS6',
        body:
          'A patient in their early sixties presented with two missing upper-left teeth. CBCT showed acceptable bone but limited sinus floor height at the molar site. Treatment plan: lateral-window sinus lift, six-month healing, two implants, ceramic crowns. Total over nine months: £6,400.',
      },
    ],
    pricingNotes: [
      'Two implants supporting a three-unit fixed bridge typically falls in the £5,500-£8,500 range across the Essex panel.',
      'Two separate non-adjacent implants and crowns typically falls in the £4,400-£6,400 range, materially less than the same case treated as a bridge.',
      'Sinus lifts where needed add £1,200-£2,500 depending on technique (lateral window vs crestal).',
      'Provisional restorations during healing are sometimes itemised, sometimes included; ask the matched clinician for the itemised quote.',
    ],
    regulatoryNotes: {
      text:
        'As with single-tooth work, multiple-tooth implant treatment in the UK falls under General Dental Council regulation. There is no separate UK regulatory permission required for implant-supported bridges as opposed to single implants. The Dental Council expects clinicians to work within the scope of their training and to refer where a case sits outside it.',
      links: [
        { label: 'GDC Scope of Practice guidance', url: 'https://www.gdc-uk.org/standards-guidance/standards-and-guidance/scope-of-practice' },
      ],
    },
    faqs: [
      {
        question: 'Why do I need fewer implants than teeth for a multi-tooth bridge?',
        answer:
          'Two well-spaced implants can carry three or four crowns as a fixed bridge because the bridge transfers chewing load to both implants. This reduces total cost and the number of surgical sites without compromising long-term outcomes for spans of this size.',
      },
      {
        question: 'Is an implant-supported bridge weaker than individual implants?',
        answer:
          'No. A properly designed two-implant bridge across three or four units performs equivalently to one implant per tooth at significantly lower cost. The argument for one-per-tooth is largely conservative dentistry preserving redundancy in case of long-term complications.',
      },
      {
        question: 'How long does multiple-teeth implant treatment take?',
        answer:
          'Four to six months end-to-end is typical for a straightforward two-implant fixed bridge. Cases requiring grafting or sinus lifts extend to eight to twelve months.',
      },
      {
        question: 'Can I have the bridge fitted on the same day as placement?',
        answer:
          'Immediate provisional bridges are possible where primary stability of the two implants is high enough. The matched clinician will assess at placement and confirm; the final bridge is fitted after osseointegration.',
      },
      {
        question: 'What happens to the natural teeth either side of the gap?',
        answer:
          'Implant-supported bridges do not require the natural teeth either side of the gap to be prepared as crowns, which is the major clinical advantage over a conventional tooth-supported bridge. The natural teeth stay untouched.',
      },
      {
        question: 'Is finance available for multiple-teeth treatment?',
        answer:
          'Many matched clinicians offer third-party finance, typically over six to twenty-four months. Interest-free terms are usually available on shorter plans. We can ask the matched clinician to confirm available terms before your consultation.',
      },
    ],
    relatedSlugs: ['single-tooth', 'full-arch', 'implant-dentures'],
  },
  {
    slug: 'full-arch',
    title: 'Full-Arch Implants (All-on-4 / All-on-6)',
    shortTitle: 'Full arch',
    heroBadge: 'Full-arch restoration',
    heroDirectAnswer:
      'Full-arch implant treatment replaces an entire upper or lower arch on four to six implants using a fixed bridge. Most matched clinicians complete a full upper or lower arch in a single surgical day with an immediate provisional bridge, and a definitive bridge fitted three to six months later.',
    metaTitle: 'Full-Arch Dental Implants (All-on-4) in Essex | Matching',
    metaDescription:
      'Match with Essex full-arch implant clinicians for All-on-4 and All-on-6 cases. Pricing, edge cases, surgical day, and follow-up explained.',
    whatItCoversParagraphs: [
      'A full-arch case begins with a longer consultation: clinical examination, panoramic radiograph, CBCT, and usually an intra-oral scan or impressions for digital planning. The matched clinician confirms bone volume, available primary stability, occlusal relationship, and whether tilted distal implants (All-on-4) or six straight implants (All-on-6) are the right shape for the case.',
      'Surgical day usually combines remaining-tooth extractions where needed, immediate placement of four or six implants, and seating of an immediate fixed provisional bridge. The provisional is typically acrylic, fit for purpose during healing but not the definitive aesthetic outcome.',
      'After three to six months of osseointegration the provisional is removed and a definitive bridge is fabricated, usually in zirconia or hybrid materials. The matched clinician will confirm material choice in writing before commitment, since long-term cost of ownership is materially different between acrylic, zirconia, and titanium-frame hybrid bridges.',
    ],
    edgeCasesParagraphs: [
      'A heavily resorbed upper maxilla without adequate bone for conventional placement may require zygomatic implants, which anchor into the cheekbone rather than the maxilla itself. Not every matched clinician on the panel handles zygomatic placement. We tell every full-arch enquirer whether their case sounds like one requiring zygomatic input so they are not surprised mid-plan.',
      'Severe bruxism or heavy occlusal force shortens definitive-bridge life and raises screw-loosening risk. The matched clinician should propose a night splint as part of the plan and discuss whether a titanium-frame hybrid or full zirconia is the right shape for the patient.',
      'A patient with terminal-dentition extractions on the surgical day may want their full-arch case completed in a single day. We respect that preference where bone quality and primary stability allow it; we tell every enquirer honestly when a staged approach is the safer plan instead.',
    ],
    workedExamples: [
      {
        title: 'Failing upper dentition, All-on-4, Brentwood CM14',
        body:
          'A patient in their late sixties presented with a failing upper dentition and a long-worn lower partial. CBCT showed adequate bone for four conventional implants. Treatment plan: extraction of remaining upper teeth, immediate placement of four implants, immediate acrylic provisional bridge, six-month healing, definitive zirconia bridge. Total fee at the matched clinician: £19,500.',
      },
      {
        title: 'Lower complete denture replacement, Clacton CO15',
        body:
          'A patient in their early seventies presented with a thirty-year complete lower denture and pronounced ridge resorption. Treatment plan: four standard implants, immediate provisional bridge, six-month healing, definitive titanium-frame hybrid. Total over eight months: £17,800.',
      },
      {
        title: 'All-on-6 upper, severe parafunction, Colchester CO3',
        body:
          'A patient in their early sixties presented with severe bruxism and a failing upper dentition. Treatment plan: six implants for additional support distribution, definitive full zirconia bridge with a custom night splint. Total at the matched clinician: £26,400.',
      },
    ],
    pricingNotes: [
      'All-on-4 (four implants per arch with acrylic provisional and a definitive bridge after healing) typically falls in the £15,000-£22,000 per arch range across the Essex panel.',
      'All-on-6 typically adds £2,500-£4,500 per arch over the four-implant configuration.',
      'Definitive material choice moves the price materially: acrylic-on-titanium-frame is the lower end, full zirconia is the upper end.',
      'Zygomatic implants where required typically add £3,500-£6,000 per fixture; this is specialist work and not every panel clinician handles it.',
      'Some matched clinicians quote inclusive of the definitive bridge; others quote the provisional and the definitive separately. We ask for the all-in figure in writing before introduction so the comparison is honest.',
    ],
    regulatoryNotes: {
      text:
        'Full-arch implant treatment falls under General Dental Council regulation. The level of training expected by the GDC for full-arch reconstruction is materially higher than for single-tooth placement; matched clinicians for full-arch cases are confirmed to hold relevant restricted-practice case experience documented through audited case logs or postgraduate qualifications.',
      links: [
        { label: 'GDC Standards for the Dental Team', url: 'https://standards.gdc-uk.org/' },
        { label: 'GDC continuing professional development', url: 'https://www.gdc-uk.org/education-cpd/cpd' },
      ],
    },
    faqs: [
      {
        question: 'Can a full arch really be completed in a single day?',
        answer:
          'The surgical day involving extractions, implant placement and immediate provisional bridge is genuinely a single day at most matched clinicians, often around five hours of chair time. The definitive bridge is fitted three to six months later. So the all-in timeline is several months, not one day, despite the marketing.',
      },
      {
        question: 'Will the immediate bridge look as good as the final one?',
        answer:
          'No. The immediate provisional is fit for purpose during healing but is usually acrylic and does not match the aesthetics or strength of the definitive bridge. The matched clinician should explain the difference clearly during consultation.',
      },
      {
        question: 'How long does an All-on-4 bridge last?',
        answer:
          'Implant survival at twenty years runs around ninety per cent in well-maintained cases. The definitive bridge above the implants has a shorter typical lifespan; an acrylic-on-titanium bridge often needs replacement at ten to fifteen years, full zirconia rather longer.',
      },
      {
        question: 'Is general anaesthetic available?',
        answer:
          'Most matched clinicians use intravenous sedation rather than general anaesthetic. GA for routine implant work has fallen out of standard UK practice; cases requiring GA are usually referred into hospital settings.',
      },
      {
        question: 'How long am I unable to chew normally after the surgical day?',
        answer:
          'The immediate provisional bridge allows soft chewing from the surgical day. Most matched clinicians ask patients to keep to soft foods for six to eight weeks while osseointegration progresses.',
      },
      {
        question: 'Can I have All-on-4 on the NHS?',
        answer:
          'No. Full-arch implant treatment is not provided on the NHS except in very narrowly defined oncology or congenital cases. The matched clinicians on our full-arch panel are private; we will tell you upfront if your case sounds like one that should sit in secondary care.',
      },
    ],
    relatedSlugs: ['multiple-teeth', 'implant-dentures', 'bone-grafting'],
  },
  {
    slug: 'bone-grafting',
    title: 'Bone Grafting & Sinus Lifts',
    shortTitle: 'Bone grafting',
    heroBadge: 'Foundation procedures',
    heroDirectAnswer:
      'Bone grafting and sinus lifts rebuild jawbone volume where there is not enough bone for direct implant placement. Most matched Essex clinicians handle moderate grafting in-house as part of an implant plan; complex grafting may be staged or referred to a specialist.',
    metaTitle: 'Bone Grafting & Sinus Lifts in Essex | Implant Matching',
    metaDescription:
      'Match with Essex implant clinicians for bone grafting and sinus lift procedures preceding implant placement. Pricing and timeline explained.',
    whatItCoversParagraphs: [
      'Bone grafting comes in two main shapes for implant patients. Socket preservation places graft material into an extraction socket on the day of extraction, preserving ridge volume for future placement. Ridge augmentation rebuilds an already resorbed ridge with block or particulate graft, healed for four to six months before implant placement.',
      'Sinus lifts raise the floor of the maxillary sinus to create vertical bone height for upper posterior implants. The lateral window technique opens a hatch in the sinus wall through the cheek-side gum and packs graft material beneath the elevated sinus membrane. The crestal technique works upward through the implant osteotomy itself and is suited to smaller lifts.',
      'Graft material is usually bovine-derived (Bio-Oss is the most common branded option) or synthetic. Patient preference on material origin is recorded on the matching call and only clinicians offering an alternative will be matched if synthetic-only is specified.',
    ],
    edgeCasesParagraphs: [
      'Very advanced ridge resorption sometimes warrants zygomatic implants rather than block grafting. The clinical and financial calculus differs significantly; matched clinicians on the full-arch panel will explain both routes where they apply.',
      'Patients on bisphosphonates or with a history of head-and-neck radiotherapy face elevated risk of medication-related osteonecrosis of the jaw during grafting procedures. We ask about medical history on the matching form and only match such cases to clinicians comfortable with the relevant pathway, which may include onward referral.',
      'Smokers heal grafting procedures materially more slowly than non-smokers and have a higher failure rate. The matched clinician will explain this and may decline the procedure where the risk profile is too high.',
    ],
    workedExamples: [
      {
        title: 'Socket preservation at upper canine, Chelmsford CM2',
        body:
          'A patient in their early fifties required extraction of an upper canine with a fractured root. Socket preservation graft was placed on the day of extraction. Four months later, the implant was placed into healed graft volume. Graft fee: £400. Total implant case fee: £3,100 inclusive of the graft.',
      },
      {
        title: 'Lateral-window sinus lift, Southend SS1',
        body:
          'A patient in their mid-sixties presented with insufficient sinus floor height for two upper posterior implants. Lateral-window sinus lift was performed first. Six-month healing. Two implants placed and restored with screw-retained ceramic crowns. Sinus lift fee: £1,800. Total over twelve months: £8,200.',
      },
      {
        title: 'Block graft ahead of front-tooth implant, Brentwood CM14',
        body:
          'A patient in their late forties presented with a long-standing missing upper-left central incisor and pronounced buccal-plate loss. Autogenous block graft was harvested from the chin and secured at the implant site. Six-month healing. Implant placement, three-month osseointegration, screw-retained zirconia crown. Block graft fee: £1,200. Total over twelve months: £4,800.',
      },
    ],
    pricingNotes: [
      'Socket preservation typically falls in the £200-£500 range as an add-on to extraction.',
      'Ridge augmentation with particulate graft typically falls in the £400-£1,000 range depending on volume.',
      'Block grafts (autogenous or allograft) typically fall in the £900-£1,800 range.',
      'Sinus lift (crestal technique) typically falls in the £800-£1,200 range; lateral window typically £1,400-£2,500.',
      'Some matched clinicians include moderate grafting in the headline implant fee; others itemise separately. Itemised quotes are standard practice on the panel.',
    ],
    regulatoryNotes: {
      text:
        'Bone grafting materials used in UK dentistry are regulated under the Medical Devices Regulations 2002 and equivalent post-Brexit instruments enforced by the Medicines and Healthcare products Regulatory Agency. The General Dental Council expects practitioners to use only properly licensed graft materials, and to record material provenance in patient records.',
      links: [
        { label: 'MHRA medical devices guidance', url: 'https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency' },
        { label: 'GDC Scope of Practice', url: 'https://www.gdc-uk.org/standards-guidance/standards-and-guidance/scope-of-practice' },
      ],
    },
    faqs: [
      {
        question: 'How long does a bone graft take to heal before implant placement?',
        answer:
          'Socket preservation grafts heal in three to four months. Ridge augmentation grafts heal in four to six months. Block grafts heal in six months. Sinus lifts heal in four to six months. The matched clinician will confirm the schedule for your specific case.',
      },
      {
        question: 'Do I need a graft if my bone looks thin on the X-ray?',
        answer:
          'Not always. CBCT imaging is required before a graft decision is taken because it provides three-dimensional volume data that a two-dimensional panoramic radiograph cannot. Many cases that look marginal on the panoramic are placeable without grafting once the CBCT is analysed.',
      },
      {
        question: 'What does a sinus lift feel like afterwards?',
        answer:
          'Most patients describe it as similar in discomfort to a wisdom-tooth extraction. Mild swelling and pressure in the cheek and nose area is normal for three to five days. Nosebleeds in the first week are not uncommon.',
      },
      {
        question: 'Is bovine-origin graft material safe?',
        answer:
          'Bio-Oss and equivalent bovine-derived materials are sterilised and de-proteinated to remove any biological risk and have decades of clinical use. Synthetic and allograft alternatives are available where bovine material is not acceptable to the patient.',
      },
      {
        question: 'Can a bone graft fail?',
        answer:
          'Yes; graft failure occurs in around five per cent of cases, more often in smokers or in patients with uncontrolled medical conditions. Failed grafts are usually re-attempted after a healing period, often successfully.',
      },
    ],
    relatedSlugs: ['single-tooth', 'full-arch', 'immediate-implants'],
  },
  {
    slug: 'immediate-implants',
    title: 'Immediate Implants',
    shortTitle: 'Immediate implants',
    heroBadge: 'Same-day placement',
    heroDirectAnswer:
      'Immediate implants are placed in the same appointment as the extraction of the tooth being replaced, saving three to four months on the conventional timeline. Suitability depends on bone quality, infection at the site, and primary stability at placement.',
    metaTitle: 'Immediate Dental Implants in Essex | Same-Day Placement',
    metaDescription:
      'Match with Essex immediate-implant clinicians. Same-day extraction and placement, suitability criteria, edge cases.',
    whatItCoversParagraphs: [
      'An immediate implant case starts identically to a conventional case: clinical examination, panoramic radiograph, CBCT. The matched clinician then assesses whether the planned extraction socket will provide adequate primary stability and absence of acute infection for immediate placement, which is not always the case.',
      'The surgical appointment combines extraction, careful socket debridement, and implant placement into the same chair time of around sixty to ninety minutes under local anaesthetic. Where primary stability is high enough (often torque values above 35 Ncm) the matched clinician may also fit an immediate temporary crown out of occlusion, but this is not always advisable.',
      'Healing runs three to four months as with a conventional case. Definitive restoration follows the standard impression and fit-and-cement (or screw retention) protocol.',
    ],
    edgeCasesParagraphs: [
      'Acute infection at the extraction site is a contra-indication for immediate placement. Where the matched clinician detects significant peri-apical pathology or active periodontal infection, the conservative plan is extraction, three to four months of healing, then implant placement. Pushing for same-day placement against this clinical advice elevates failure risk materially.',
      'Aesthetic-zone immediate placement carries higher risk of recession than conventional staged placement, because the gum architecture has not been allowed to mature around the healing site. Matching of aesthetic-zone immediate cases weights toward clinicians whose immediate-placement portfolio shows stable long-term results, not just short-term photographs.',
      'Heavy smokers and patients with poorly controlled diabetes are usually advised toward conventional staged placement rather than immediate placement, on failure-rate grounds.',
    ],
    workedExamples: [
      {
        title: 'Fractured upper premolar, Chelmsford CM2',
        body:
          'A patient in their mid-forties presented with a fractured upper-left first premolar following biting on a peach stone. Tooth was non-restorable. Immediate extraction, simultaneous implant placement, healing abutment fitted. Three months later, screw-retained ceramic crown delivered. Total fee at the matched clinician: £3,000.',
      },
      {
        title: 'Failed lower-right first molar, Rayleigh SS6',
        body:
          'A patient in their early fifties presented with a fractured lower-right first molar. CBCT confirmed adequate bone and no infection. Extraction with simultaneous implant placement, healing abutment, three-month osseointegration, ceramic crown. Total fee: £2,800.',
      },
      {
        title: 'Upper-front incisor with infection, Colchester CO3, staged plan',
        body:
          'A patient in their late thirties presented with a fractured and infected upper-left lateral incisor. Immediate placement was contra-indicated; the conservative plan was extraction, three-month healing, conventional placement, screw-retained zirconia crown. Total over six months: £3,200. The matched clinician explained the choice between staged and immediate placement and made the clinical case clearly.',
      },
    ],
    pricingNotes: [
      'Immediate implant placement at most matched Essex clinicians is priced equivalent to conventional placement; the patient saves on time rather than fees.',
      'Some clinicians charge a small immediate-placement premium of £150-£400 reflecting the higher technical demand; we tell every immediate enquirer if their matched clinician quotes this way.',
      'An immediate temporary crown fitted on the surgical day where primary stability allows is sometimes itemised separately at £400-£900.',
    ],
    regulatoryNotes: {
      text:
        'Immediate implant placement falls under the same GDC regulation as conventional placement. There is no separate regulatory permission, but the clinical decision to place immediately versus staged is squarely within the GDC\'s scope-of-practice expectations. The matched clinician should document the clinical reasoning for immediate placement (and against staged) in the patient record.',
      links: [
        { label: 'GDC Standards for the Dental Team', url: 'https://standards.gdc-uk.org/' },
      ],
    },
    faqs: [
      {
        question: 'Can every tooth be replaced with an immediate implant?',
        answer:
          'No. Suitability depends on bone availability, absence of acute infection, and primary stability achievable at placement. The matched clinician will assess via CBCT and confirm whether immediate placement is realistic for your specific tooth.',
      },
      {
        question: 'Is immediate placement riskier than conventional staged placement?',
        answer:
          'Marginally yes. Long-term outcomes are equivalent where case selection is appropriate, but the case-selection bar is higher. Most matched clinicians will refuse immediate placement where the case sits below it, which is a sign of good practice rather than reluctance.',
      },
      {
        question: 'Will I leave the appointment with a temporary tooth in place?',
        answer:
          'Sometimes. Where primary stability allows an immediate temporary crown, yes. Where the socket needs to heal undisturbed, a removable temporary or Essix retainer is used during osseointegration instead.',
      },
      {
        question: 'How much time does immediate placement save?',
        answer:
          'Three to four months of healing between extraction and conventional placement. The total time to definitive crown is reduced by the same margin.',
      },
      {
        question: 'Is the placement procedure longer than a conventional extraction?',
        answer:
          'Yes; expect sixty to ninety minutes of chair time versus thirty to forty-five minutes for an uncomplicated extraction.',
      },
    ],
    relatedSlugs: ['single-tooth', 'bone-grafting', 'multiple-teeth'],
  },
  {
    slug: 'implant-dentures',
    title: 'Implant-Retained Dentures',
    shortTitle: 'Implant dentures',
    heroBadge: 'Overdentures',
    heroDirectAnswer:
      'Implant-retained dentures are removable dentures held firmly in place by two to four implants per arch. They convert a loose conventional denture into one that stays seated through speech and eating without adhesives, while costing materially less than a fixed full-arch bridge.',
    metaTitle: 'Implant-Retained Dentures in Essex | Implant Matching',
    metaDescription:
      'Match with Essex clinicians for implant-retained overdentures. Two or four implants, locator attachments, pricing and edge cases.',
    whatItCoversParagraphs: [
      'An implant-retained denture case usually starts with two implants placed in the lower arch (the lower jaw is harder for conventional dentures because there is less ridge surface area for suction retention). Four implants is the more common upper-arch configuration because the upper denture covers the palate and patients usually want to open the palate up.',
      'Implants heal three to four months, then locator or bar attachments are fitted to the implants and the matching housings are processed into the underside of the denture. The denture clicks into place over the attachments and stays seated through normal function. The patient still removes the denture for cleaning.',
      'Locator attachments are the lower-cost, easier-to-maintain option; bar attachments offer slightly better stability but require more space and component complexity. The matched clinician will recommend based on ridge anatomy and patient dexterity.',
    ],
    edgeCasesParagraphs: [
      'Patients with severe ridge resorption may not have adequate bone for the standard two-implant lower overdenture configuration without grafting. Conventional shorter implants designed for limited bone volume are an option at some matched clinicians and avoid the grafting step.',
      'Patients who struggle with dexterity for cleaning a fixed bridge are often better served by an implant-retained removable denture than by a fixed full-arch bridge. This is a useful matching question we ask routinely.',
      'Patients with significant gag-reflex problems with conventional upper dentures sometimes benefit dramatically from a palate-free overdenture supported on four implants. This is a common matching driver among long-term upper denture wearers.',
    ],
    workedExamples: [
      {
        title: 'Lower two-implant overdenture, locator attachments, Southend SS1',
        body:
          'A patient in their early seventies presented with a loose lower complete denture worn for fifteen years. Two implants placed in the canine positions, three-month healing, locator attachments fitted and processed into a new lower denture. Total fee at the matched clinician: £5,400.',
      },
      {
        title: 'Upper four-implant overdenture, palate cut back, Clacton CO15',
        body:
          'A patient in their late seventies presented with a long-worn upper complete denture and gag-reflex symptoms. Four implants placed across the upper arch, three-month healing, locator attachments fitted and processed into a new horseshoe upper denture without palatal coverage. Total fee: £9,800.',
      },
      {
        title: 'Lower bar-retained overdenture, Brentwood CM14',
        body:
          'A patient in their early sixties presented with poor manual dexterity and a poorly-retained lower denture. Two implants placed connected by a bar; the lower denture clipped onto the bar with two retention clips. Total fee at the matched clinician: £6,800.',
      },
    ],
    pricingNotes: [
      'Two-implant lower overdenture with locator attachments and a new denture typically falls in the £4,800-£6,500 range across the Essex panel.',
      'Four-implant upper overdenture with locator attachments typically falls in the £8,500-£12,000 range.',
      'Bar-retained configurations typically add £800-£1,500 over locator attachments.',
      'Locator-attachment nylon inserts wear and are replaced every twelve to twenty-four months at a typical cost of £30-£80 per pair. This is ongoing-cost-of-ownership, not a one-off.',
      'A replacement denture every five to seven years is typical regardless of attachment type; budget £1,200-£2,000 for the replacement.',
    ],
    regulatoryNotes: {
      text:
        'Implant-retained dentures are subject to the same GDC regulation as fixed implant work. The denture base itself is a custom-made medical device falling under the Dental Appliance regulations, which require manufacturer registration with the MHRA.',
      links: [
        { label: 'MHRA dental appliance guidance', url: 'https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency' },
      ],
    },
    faqs: [
      {
        question: 'How firmly does an implant-retained denture stay in place?',
        answer:
          'Firmly enough to chew most foods without movement, but not as solid as a fixed full-arch bridge. The denture still comes out for cleaning each night and is intended to be removed.',
      },
      {
        question: 'Is implant-retained denture cheaper than All-on-4?',
        answer:
          'Yes, materially. A lower two-implant overdenture costs around one-third of an All-on-4 fixed bridge. An upper four-implant overdenture costs around half of an All-on-4. The trade-off is the denture is removable rather than fixed.',
      },
      {
        question: 'Do I have to take the denture out at night?',
        answer:
          'Yes. Implant-retained dentures are designed to come out for cleaning. Most matched clinicians recommend nightly removal for both denture and gum hygiene.',
      },
      {
        question: 'How long do the attachments last?',
        answer:
          'Locator nylon inserts wear and need replacement every twelve to twenty-four months. The underlying metal attachment threads into the implant and lasts the life of the implant. Bar attachments do not have a wear part but require more maintenance overall.',
      },
      {
        question: 'Can I have an implant-retained denture if I currently wear a partial denture?',
        answer:
          'Yes. Most matched clinicians will plan implant retention as part of a transition from partial to complete denture wear where the remaining teeth are failing, or alongside conversion of an existing complete denture.',
      },
    ],
    relatedSlugs: ['full-arch', 'multiple-teeth', 'single-tooth'],
  },
];

export const SERVICES_BY_SLUG: Record<string, ServiceData> = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s])
);

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
