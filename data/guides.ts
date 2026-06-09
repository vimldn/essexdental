import { siteConfig } from './site';

export interface GuideData {
  slug: string;
  title: string;
  shortTitle: string;
  heroBadge: string;
  reservedKeyword: string;
  metaTitle: string;
  metaDescription: string;
  heroDirectAnswer: string;
  keyPoints: string[];
  sections: { heading: string; paragraphs: string[] }[];
  /** Editorial roadmap for this hub's 10 spokes. Display only: live spokes are
   *  pulled from BLOG_POSTS (hub === slug && !draft). */
  plannedSpokeTitles: string[];
  servicePillarSlugs: string[];
  adjacentHubSlugs: string[];
  faqs: { question: string; answer: string }[];
  publishedAt: string;
  lastReviewedAt: string;
}

const reviewed = siteConfig.editorial.lastReviewedAt;

export const GUIDES: GuideData[] = [
  {
    slug: 'implant-costs',
    title: 'Dental Implant Cost in Essex',
    shortTitle: 'Implant costs',
    heroBadge: 'Cost and finance',
    reservedKeyword: 'dental implant cost essex',
    metaTitle: 'Dental Implant Cost in Essex 2026 | Complete Price Guide',
    metaDescription:
      'What dental implants cost in Essex in 2026, by treatment type. Single tooth, multiple teeth, full-arch, grafting add-ons, finance, and what moves the price.',
    heroDirectAnswer:
      'In Essex in 2026, a single-tooth implant typically costs £2,200 to £3,500, an implant-supported bridge for several teeth £5,500 to £8,500, and full-arch All-on-4 £15,000 to £22,000 per arch. Bone grafting, the implant system, and the final bridge material are the main things that move the number.',
    keyPoints: [
      'Single tooth: £2,200 to £3,500 with a mainstream premium system; cheaper generic systems exist at £1,800 to £2,200.',
      'Two implants carrying a three-unit bridge: £5,500 to £8,500, materially less than one implant per tooth.',
      'Full-arch All-on-4: £15,000 to £22,000 per arch; All-on-6 adds £2,500 to £4,500.',
      'Grafting adds £400 to £1,200 for ridge augmentation, £800 to £2,500 for sinus lifts.',
      'Implants are private in almost all cases; the NHS funds them only in narrow oncology, trauma, or congenital situations.',
    ],
    sections: [
      {
        heading: 'What you are actually paying for',
        paragraphs: [
          'An implant fee bundles several distinct stages: the surgical placement of the titanium fixture, the abutment that connects to it, the laboratory-made crown or bridge, and the imaging and planning that precede surgery. A clear quote itemises these so you can see where the money goes rather than reading a single headline figure.',
          'The implant system matters. Mainstream documented systems such as Straumann, Nobel Biocare and Astra Tech cost more than generic systems, and the difference is most relevant on complex and full-arch cases where component availability decades later affects long-term maintenance. For a straightforward single tooth the clinical gap is smaller, but you should still be told in writing which system is proposed.',
        ],
      },
      {
        heading: 'Why Essex prices sit below central London',
        paragraphs: [
          'The clinical work and the materials at a competent Essex clinician are equivalent to a central London practice. The price difference is driven by premises overhead, not by outcome. A Harley Street address carries a rent and rates burden that has to be recovered from the patient; an Essex high-street or business-park surgery does not.',
          'This is the structural reason an independent matching service exists. Many Essex patients on the Elizabeth line or the c2c and Greater Anglia routes can reach a London clinic easily, so the honest comparison is worth making: equivalent clinical result, materially lower fee, closer to home for the follow-up appointments that matter during osseointegration.',
        ],
      },
      {
        heading: 'Finance, insurance and the NHS',
        paragraphs: [
          'Most matched clinicians offer third-party finance, commonly interest-free over six to twelve months and interest-bearing over longer terms. Dental insurance in the UK rarely covers elective implant treatment in full, though some policies contribute toward the restoration. Check the policy wording before assuming cover.',
          'Implants are not routinely available on the NHS. The exceptions are narrowly defined: reconstruction after head-and-neck cancer, severe trauma, or significant congenital absence, all routed through secondary care rather than a high-street practice. If a case might qualify, the right step is an onward referral from your general dentist, and we will say so rather than quote private fees for something the NHS should fund.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'Dental implant cost in Essex 2026',
      'What a single tooth implant costs',
      'What All-on-4 and full-arch implants cost',
      'Seven things that change the price of implants',
      'Paying for implants in monthly instalments',
      'Are cheap implants abroad worth the risk?',
      'Implants vs dentures on cost',
      'Implants vs a bridge on cost',
      'The cost of bone grafting and sinus-lift add-ons',
      'Do the NHS or dental insurance cover implants in the UK?',
    ],
    servicePillarSlugs: ['single-tooth', 'multiple-teeth', 'full-arch', 'bone-grafting'],
    adjacentHubSlugs: ['implants-vs-alternatives', 'full-arch-all-on-4'],
    faqs: [
      {
        question: 'How much is a single dental implant in Essex?',
        answer:
          'Typically £2,200 to £3,500 for placement plus the crown with a mainstream premium system. Cheaper generic systems exist at £1,800 to £2,200. Bone grafting where needed adds £400 to £1,200.',
      },
      {
        question: 'Why are some implant quotes so much cheaper than others?',
        answer:
          'Usually a different implant system, a different crown material, or grafting and imaging itemised separately rather than included. Ask every clinician to quote the all-in figure in writing and to name the system and materials so the comparison is honest.',
      },
      {
        question: 'Can I pay for implants monthly?',
        answer:
          'Most matched clinicians offer finance through a third-party provider, often interest-free over six to twelve months. Longer plans attract interest. We can ask the clinician to confirm the terms before your consultation.',
      },
    ],
    publishedAt: '2026-06-09',
    lastReviewedAt: reviewed,
  },
  {
    slug: 'types-of-dental-implants',
    title: 'Types of Dental Implants',
    shortTitle: 'Implant types',
    heroBadge: 'Choosing a type',
    reservedKeyword: 'types of dental implants',
    metaTitle: 'Types of Dental Implants Explained | UK Guide',
    metaDescription:
      'The main types of dental implant and restoration: single crowns, implant bridges, implant-retained dentures, materials, and which suits which missing-tooth pattern.',
    heroDirectAnswer:
      'Most UK implant treatment uses standard endosteal titanium implants restored in one of three ways: a single crown for one tooth, an implant-supported bridge for several teeth, or an implant-retained denture for a whole arch. The right type depends on how many teeth are missing, the bone available, and your budget.',
    keyPoints: [
      'A single crown on one implant replaces one tooth without touching the neighbours.',
      'Two implants can carry a three or four-unit fixed bridge, which is more cost-effective than one implant per tooth.',
      'Implant-retained dentures clip onto two to four implants and stop a loose denture moving.',
      'Titanium is the documented standard; zirconia implants are a metal-free alternative for specific cases.',
      'Mini implants and same-day implants are options in narrow situations, not defaults.',
    ],
    sections: [
      {
        heading: 'It is the restoration, not just the implant, that defines the type',
        paragraphs: [
          'Patients often ask which type of implant they need, but the more useful question is which restoration sits on top. The implant fixture itself is broadly standard: a titanium screw placed in the jaw. What changes between cases is whether that fixture carries a single crown, forms one anchor of a fixed bridge, or holds a removable denture in place.',
          'For one missing tooth, a single crown on one implant is the standard answer and leaves the adjacent natural teeth untouched. For three or four teeth in a row, two well-spaced implants carrying a fixed bridge is usually better value and clinically equivalent. For a whole arch, the choice is between a fixed full-arch bridge and a removable implant-retained denture.',
        ],
      },
      {
        heading: 'Materials and special cases',
        paragraphs: [
          'Titanium has decades of clinical documentation and is the default fixture material. Zirconia implants are a ceramic, metal-free alternative chosen by some patients for biocompatibility preferences or thin-gum aesthetic reasons; they are less widely placed and not suited to every case. The matched clinician should explain why they propose one over the other.',
          'Mini implants, narrower than standard fixtures, are used mainly to stabilise lower dentures where bone width is limited, not as a cheaper shortcut for single crowns. Same-day or immediate implants place the fixture at the time of extraction and are covered in the process hub; they are a timing option, not a separate type of implant.',
        ],
      },
      {
        heading: 'Matching the type to your missing-tooth pattern',
        paragraphs: [
          'A scattered pattern of single missing teeth is usually treated with individual implants and crowns. A contiguous gap is usually treated as an implant bridge. A failing or absent full arch is treated with a full-arch fixed bridge or an overdenture, depending on bone, dexterity for cleaning, and budget.',
          'The right type is a clinical decision made after a cone-beam CT scan, not something to fix on before consultation. Use this guide to understand the options so the consultation is a conversation rather than a sales pitch.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'The main types of dental implant explained',
      'Single tooth dental implants',
      'Implant bridges for several missing teeth',
      'Implant-retained dentures and overdentures',
      'Mini dental implants: when they are used',
      'Titanium vs zirconia implants',
      'Endosteal vs subperiosteal implants',
      'Same-day and immediate implants explained',
      'Implant crowns, abutments and components',
      'Which implant type is right for my missing teeth?',
    ],
    servicePillarSlugs: ['single-tooth', 'multiple-teeth', 'implant-dentures'],
    adjacentHubSlugs: ['full-arch-all-on-4', 'implants-vs-alternatives'],
    faqs: [
      {
        question: 'What is the most common type of dental implant?',
        answer:
          'A standard endosteal titanium implant restored with a single crown is the most common treatment in the UK. It replaces one tooth and leaves the neighbouring teeth untouched.',
      },
      {
        question: 'Are zirconia implants better than titanium?',
        answer:
          'Not generally. Titanium has the longest clinical track record and suits most cases. Zirconia is a metal-free alternative for specific aesthetic or biocompatibility reasons and is placed less often.',
      },
      {
        question: 'Do I need one implant for every missing tooth?',
        answer:
          'No. For several teeth in a row, two implants can carry a fixed bridge of three or four teeth, and a whole arch can be restored on four to six implants. One implant per tooth is reserved for spaced-out single gaps.',
      },
    ],
    publishedAt: '2026-06-09',
    lastReviewedAt: reviewed,
  },
  {
    slug: 'implant-process-and-timeline',
    title: 'The Dental Implant Process and Timeline',
    shortTitle: 'Process and timeline',
    heroBadge: 'What to expect',
    reservedKeyword: 'dental implant procedure',
    metaTitle: 'The Dental Implant Process and Timeline | UK Guide',
    metaDescription:
      'Step by step through dental implant treatment: consultation, CBCT planning, surgery, healing and osseointegration, and fitting the final crown, with realistic timings.',
    heroDirectAnswer:
      'A standard implant case runs three to six months from start to finish. The placement appointment is around an hour under local anaesthetic; most of the timeline is healing, while the implant fuses to bone (osseointegration), before the final crown is fitted.',
    keyPoints: [
      'Consultation and a cone-beam CT scan come first, to map bone and plan the implant position.',
      'Placement is usually one appointment of around an hour under local anaesthetic.',
      'Osseointegration takes roughly three to four months for most cases.',
      'A temporary tooth can often bridge the gap during healing.',
      'The final crown or bridge is fitted once the implant is confirmed stable.',
    ],
    sections: [
      {
        heading: 'Consultation, imaging and planning',
        paragraphs: [
          'Treatment starts with a clinical examination and imaging. A cone-beam CT (CBCT) scan gives a three-dimensional view of bone height and width and the position of the nerve canal and sinus, which a flat X-ray cannot. The clinician uses it to plan exactly where the implant should sit, sometimes producing a surgical guide that constrains the drill to the planned position.',
          'This stage also rules cases out. A small proportion of CBCT scans reveal anatomy that makes the planned site unsuitable without grafting, or that points to a different treatment altogether. Imaging-first practice avoids surprises in the surgical chair.',
        ],
      },
      {
        heading: 'Surgery and healing',
        paragraphs: [
          'Placement is a single appointment of roughly forty-five to ninety minutes under local anaesthetic, comparable in discomfort to a routine extraction. The fixture is seated in the prepared site and either a healing cap or, where stability allows, a temporary crown is fitted. Post-operative soreness is usually managed with ibuprofen for a few days.',
          'The implant then needs to integrate with the surrounding bone. This osseointegration phase takes about three to four months, longer where grafting was needed. You are rarely left with a visible gap: a removable temporary, an Essix retainer with a tooth, or an immediate provisional keeps the space filled while healing completes.',
        ],
      },
      {
        heading: 'Fitting the final tooth',
        paragraphs: [
          'Once the implant is confirmed stable, the clinician takes an impression or digital scan for the laboratory, which makes the definitive crown or bridge. A short fitting appointment seats it, either screwed or cemented depending on the angle of the fixture and the position in the arch.',
          'From that point the implant functions like a natural tooth for biting and eating. The full timeline, several months rather than the single day some marketing implies, is mostly healing time you do not spend in the chair.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'What to expect at an implant consultation',
      'CBCT and 3D implant planning',
      'How long implant treatment takes',
      'What happens during implant surgery, step by step',
      'Healing and osseointegration: the timeline',
      'Temporary teeth while your implant heals',
      'Fitting the final crown',
      'Recovery after implant surgery: the first week',
      'Sedation and pain relief during implant surgery',
      'Swelling, stitches and the first few days',
    ],
    servicePillarSlugs: ['single-tooth', 'immediate-implants', 'multiple-teeth'],
    adjacentHubSlugs: ['bone-grafting-and-sinus-lifts', 'implant-aftercare'],
    faqs: [
      {
        question: 'How long does a dental implant take from start to finish?',
        answer:
          'Three to six months is typical, most of it healing time. The placement appointment itself is around an hour, and chair time across the whole case is usually under three hours.',
      },
      {
        question: 'Is implant surgery painful?',
        answer:
          'Placement is done under local anaesthetic and most patients report it as no worse than a routine extraction. Soreness afterwards is usually controlled with ibuprofen for two to three days.',
      },
      {
        question: 'Will I have a gap while the implant heals?',
        answer:
          'Rarely a visible one. A removable temporary, an Essix retainer with a tooth, or an immediate provisional crown keeps the space filled during osseointegration.',
      },
    ],
    publishedAt: '2026-06-09',
    lastReviewedAt: reviewed,
  },
  {
    slug: 'bone-grafting-and-sinus-lifts',
    title: 'Bone Grafting and Sinus Lifts for Implants',
    shortTitle: 'Bone grafting',
    heroBadge: 'Foundation procedures',
    reservedKeyword: 'bone graft dental implant',
    metaTitle: 'Bone Grafting and Sinus Lifts for Dental Implants | UK Guide',
    metaDescription:
      'When implants need a bone graft or sinus lift, the techniques used, healing times, costs, and what to do when there is not enough bone for placement.',
    heroDirectAnswer:
      'A bone graft rebuilds jawbone volume where there is not enough for an implant; a sinus lift raises the sinus floor to create height for upper back teeth. Many cases need none, moderate grafting is often done at the same time as placement, and larger grafts heal for four to six months first.',
    keyPoints: [
      'Grafting is only needed where bone volume is inadequate, confirmed on a CBCT scan, not a flat X-ray.',
      'Socket preservation at the time of extraction protects bone for a future implant.',
      'Sinus lifts create height for upper molar and premolar implants.',
      'Healing adds three to six months where a staged graft is required.',
      'Where bone is severely deficient, alternatives include shorter implants or specialist zygomatic implants.',
    ],
    sections: [
      {
        heading: 'Why bone matters and when grafting is needed',
        paragraphs: [
          'An implant needs enough surrounding bone to hold it firmly and to support the gum around it. Bone is lost after extractions, long-term denture wear, gum disease, or trauma. Whether a graft is needed is a three-dimensional question that only a CBCT scan can answer; many sites that look marginal on a flat panoramic X-ray turn out to be placeable once the scan is analysed.',
          'Where grafting is needed, it ranges from small to substantial. Socket preservation places graft material into an extraction socket on the day the tooth comes out, holding the ridge shape for a future implant. Ridge augmentation rebuilds an already-shrunken ridge and is usually healed before the implant goes in.',
        ],
      },
      {
        heading: 'Sinus lifts for the upper back teeth',
        paragraphs: [
          'The maxillary sinus sits above the upper back teeth, and after those teeth are lost the sinus can expand downward, leaving too little bone height for an implant. A sinus lift raises the sinus floor and packs graft beneath it to create height. The lateral-window technique opens a small hatch through the cheek-side gum; the crestal technique works upward through the implant channel and suits smaller lifts.',
          'Recovery is usually described as similar to a wisdom-tooth extraction, with mild swelling and pressure for a few days. Graft material is commonly a processed bovine mineral with a long clinical record, or a synthetic alternative where preferred.',
        ],
      },
      {
        heading: 'When there is not enough bone',
        paragraphs: [
          'Severe bone loss does not automatically rule out implants. Options include shorter or narrower implants designed for limited volume, larger block grafts, or, for the most resorbed upper jaws, zygomatic implants anchored in the cheekbone. Zygomatic placement is specialist work that not every clinician offers.',
          'Certain medical histories raise grafting risk, including bisphosphonate use and previous head-and-neck radiotherapy. These are flagged on the matching form so the case goes to a clinician comfortable with the pathway, which may include onward referral.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'Do you need a bone graft for implants?',
      'Sinus lift surgery explained',
      'Types of bone graft for implants',
      'Socket preservation after extraction',
      'Bone grafting recovery and timeline',
      'No bone for implants? Your options',
      'Block grafts vs particulate grafts',
      'Guided bone regeneration explained',
      'The cost of grafting add-ons',
      'Sinus lift risks and success rates',
    ],
    servicePillarSlugs: ['bone-grafting', 'full-arch', 'single-tooth'],
    adjacentHubSlugs: ['full-arch-all-on-4', 'am-i-suitable-for-implants'],
    faqs: [
      {
        question: 'Do all implants need a bone graft?',
        answer:
          'No. Many cases have enough bone for direct placement. Grafting is needed only where a CBCT scan shows inadequate volume, and even then it is often moderate and done at the same time as the implant.',
      },
      {
        question: 'How long does a bone graft take to heal?',
        answer:
          'Socket preservation heals in three to four months, ridge augmentation and sinus lifts in four to six months, and block grafts around six months before the implant is placed.',
      },
      {
        question: 'Is a sinus lift painful?',
        answer:
          'Most patients describe recovery as similar to a wisdom-tooth extraction, with mild swelling and pressure for three to five days. It is done under local anaesthetic, often with sedation.',
      },
    ],
    publishedAt: '2026-06-09',
    lastReviewedAt: reviewed,
  },
  {
    slug: 'full-arch-all-on-4',
    title: 'Full-Arch and All-on-4 Implants',
    shortTitle: 'Full-arch',
    heroBadge: 'Whole-arch restoration',
    reservedKeyword: 'all on 4 implants',
    metaTitle: 'All-on-4 and Full-Arch Dental Implants | UK Guide',
    metaDescription:
      'How All-on-4 and full-arch implants replace a whole arch of teeth: the surgical day, immediate teeth, All-on-4 vs All-on-6, costs, suitability and aftercare.',
    heroDirectAnswer:
      'Full-arch treatment replaces an entire upper or lower set of teeth on four to six implants carrying one fixed bridge. The surgical day usually includes any remaining extractions, implant placement, and an immediate provisional bridge, with the definitive bridge fitted three to six months later.',
    keyPoints: [
      'Four implants (All-on-4) or six (All-on-6) support a single fixed bridge for the whole arch.',
      'The immediate bridge fitted on the day is a provisional, not the final aesthetic result.',
      'Typical cost is £15,000 to £22,000 per arch, with All-on-6 and zirconia at the upper end.',
      'It is fixed and not removed by the patient, unlike an implant-retained denture.',
      'The all-in timeline is several months, despite same-day teeth marketing.',
    ],
    sections: [
      {
        heading: 'How All-on-4 works',
        paragraphs: [
          'All-on-4 angles the two back implants to make the most of available bone, which often avoids the grafting a vertical placement would need. Four implants distribute the load of a full fixed bridge across the arch. All-on-6 adds two implants for extra support distribution, chosen for heavier bite forces or longer bridges.',
          'On the surgical day, any failing remaining teeth are removed, the implants are placed, and an immediate provisional bridge is fitted so you leave with fixed teeth. That provisional is usually acrylic, fit for purpose during healing but not the strength or aesthetics of the definitive bridge that follows.',
        ],
      },
      {
        heading: 'The definitive bridge and what it costs',
        paragraphs: [
          'After three to six months of healing, the provisional is replaced with the definitive bridge, commonly an acrylic-on-titanium hybrid or full zirconia. The material choice has a real effect on both price and long-term cost of ownership, so it should be confirmed in writing before you commit.',
          'Across the Essex panel, All-on-4 typically falls in the £15,000 to £22,000 per arch range, with All-on-6 adding £2,500 to £4,500 and full zirconia at the upper end. Some clinicians quote the provisional and definitive separately, so ask for the all-in figure to compare honestly.',
        ],
      },
      {
        heading: 'Is full-arch right for you, and living with it',
        paragraphs: [
          'Full-arch suits a failing or absent dentition where individual implants would mean an impractical number of fixtures. It is fixed, cleaned in the mouth like natural teeth with specific tools, and not removed nightly. Patients who prefer a removable option, or whose budget rules out a fixed bridge, are often better served by an implant-retained overdenture.',
          'Severe bruxism, very resorbed upper jaws, and complex medical histories change the plan, sometimes toward All-on-6, a night guard, or specialist zygomatic input. A good consultation sets these expectations before the surgical day, not during it.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'All-on-4 and full-arch implants explained',
      'All-on-4 vs All-on-6',
      'What full-arch implants cost',
      'Same-day full teeth: how it works',
      'Full-arch implants vs full dentures',
      'Caring for All-on-4 implants',
      'Who is suitable for full-arch implants',
      'The full-arch treatment journey',
      'Fixed full-arch bridge vs implant overdenture',
      'Replacing a failing dentition with full-arch implants',
    ],
    servicePillarSlugs: ['full-arch', 'implant-dentures', 'bone-grafting'],
    adjacentHubSlugs: ['bone-grafting-and-sinus-lifts', 'implants-vs-alternatives'],
    faqs: [
      {
        question: 'Can a full arch of teeth really be done in a day?',
        answer:
          'The surgical day with extractions, implant placement and an immediate fixed provisional bridge is genuinely one day. The definitive bridge follows three to six months later, so the all-in timeline is several months.',
      },
      {
        question: 'What is the difference between All-on-4 and All-on-6?',
        answer:
          'All-on-4 uses four implants, two angled at the back; All-on-6 uses six for extra support distribution. All-on-6 suits heavier bite forces and longer bridges and costs £2,500 to £4,500 more per arch.',
      },
      {
        question: 'Is All-on-4 fixed or removable?',
        answer:
          'Fixed. The bridge is secured to the implants and not removed by the patient. If you prefer a removable option, an implant-retained overdenture is the alternative.',
      },
    ],
    publishedAt: '2026-06-09',
    lastReviewedAt: reviewed,
  },
  {
    slug: 'implants-vs-alternatives',
    title: 'Dental Implants vs the Alternatives',
    shortTitle: 'Implants vs alternatives',
    heroBadge: 'Comparing options',
    reservedKeyword: 'implants vs dentures',
    metaTitle: 'Dental Implants vs Dentures and Bridges | UK Comparison',
    metaDescription:
      'How dental implants compare with dentures, bridges and doing nothing: stability, bone health, cost over time, and when each alternative is the right clinical choice.',
    heroDirectAnswer:
      'Implants are fixed, preserve jawbone, and last longest, but cost the most up front. Dentures are cheapest and removable but accelerate bone loss; bridges are fixed and quicker but rely on grinding down the neighbouring teeth. The right choice depends on the case, the budget, and the time horizon.',
    keyPoints: [
      'Implants preserve bone by transferring chewing load; dentures do not, so the ridge keeps shrinking.',
      'A conventional bridge means cutting down healthy neighbouring teeth; an implant does not.',
      'Dentures are the lowest up-front cost and remain the right answer for some patients.',
      'Over twenty years, dentures usually need replacing two to three times as the ridge changes.',
      'Doing nothing lets the gap drift and the opposing tooth over-erupt, which complicates later treatment.',
    ],
    sections: [
      {
        heading: 'Implants vs dentures',
        paragraphs: [
          'Dentures rest on the gum and rely on suction, clasps, or adhesive. Implants are anchored in bone and fuse to it, which is why the stability is so different. Crucially, implants transfer chewing load into the bone and maintain its volume, while bone resorbs progressively under a denture, which is what produces the sunken look in long-term wearers.',
          'Dentures still win on up-front cost and remain the right choice where medical history rules out surgery, where budget is the deciding factor, or where cleaning a fixed restoration would be difficult. An implant-retained overdenture is a middle path: a denture that clips onto two to four implants and stops moving.',
        ],
      },
      {
        heading: 'Implants vs bridges',
        paragraphs: [
          'A conventional tooth-supported bridge is fixed and faster than an implant, but it requires the healthy teeth either side of the gap to be cut down to carry it. Over fifteen to twenty years those support teeth often develop problems under the crowns, turning a one-tooth issue into a multi-tooth one.',
          'An implant replaces only the missing tooth and leaves the neighbours untouched, which is the conservative long-term choice where those neighbours are healthy. Where the adjacent teeth are themselves failing, the calculation shifts and a bridge or a longer-span implant solution may be more sensible.',
        ],
      },
      {
        heading: 'The cost of doing nothing',
        paragraphs: [
          'Leaving a gap is a decision with consequences. Adjacent teeth drift into the space and the opposing tooth over-erupts, which can complicate or raise the cost of treatment later. Bone at the empty site continues to resorb, which can make a future implant harder.',
          'None of this means everyone should rush into implants. It means the comparison should be made with the long-term trajectory in view, not just the up-front price tag, which is exactly what a good consultation does.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'Dental implants vs dentures',
      'Dental implants vs a fixed bridge',
      'Implants after a failed bridge or crown',
      'What a missing tooth does to your jawbone',
      'Implants vs partial dentures',
      'Are implants worth it vs the alternatives?',
      'Bridge vs implant for one missing tooth',
      'Denture stabilisation vs full implant dentures',
      'Implants vs root canal when a tooth cannot be saved',
      'The long-term value of implants vs cheaper options',
    ],
    servicePillarSlugs: ['implant-dentures', 'single-tooth', 'multiple-teeth'],
    adjacentHubSlugs: ['implant-costs', 'types-of-dental-implants'],
    faqs: [
      {
        question: 'Are implants better than dentures?',
        answer:
          'For stability and bone preservation, yes, but dentures cost far less up front and remain the right choice where surgery is unsuitable, budget is the deciding factor, or cleaning a fixed restoration would be difficult.',
      },
      {
        question: 'Is an implant better than a bridge for one missing tooth?',
        answer:
          'Usually, where the neighbouring teeth are healthy, because an implant replaces only the missing tooth without cutting down the neighbours. Where those teeth are already failing, a bridge may make more sense.',
      },
      {
        question: 'What happens if I leave a gap and do nothing?',
        answer:
          'Adjacent teeth drift, the opposing tooth over-erupts, and bone at the site keeps shrinking. This can complicate and raise the cost of treatment later.',
      },
    ],
    publishedAt: '2026-06-09',
    lastReviewedAt: reviewed,
  },
  {
    slug: 'implant-aftercare',
    title: 'Implant Aftercare and Living With Implants',
    shortTitle: 'Aftercare',
    heroBadge: 'Maintenance and longevity',
    reservedKeyword: 'dental implant aftercare',
    metaTitle: 'Dental Implant Aftercare and Maintenance | UK Guide',
    metaDescription:
      'How to look after dental implants for the long term: daily cleaning, interdental tools, hygienist intervals, eating through healing, and how long implants last.',
    heroDirectAnswer:
      'Implants do not decay, but the gum and bone around them can, so daily interdental cleaning and regular hygienist visits are what make them last. Well-maintained implants commonly last twenty years and beyond; the crown on top has a shorter life and may be replaced once or twice.',
    keyPoints: [
      'Implants cannot get cavities, but they can develop peri-implantitis in the surrounding tissue.',
      'Interdental brushes or a water flosser reach the implant-gum junction better than floss alone.',
      'Hygienist visits every six months are the baseline, more often for higher-risk patients.',
      'Eat soft for the first days after surgery, then build back up as healing allows.',
      'A night guard protects implants and bridges if you grind your teeth.',
    ],
    sections: [
      {
        heading: 'Daily care that keeps implants healthy',
        paragraphs: [
          'The single most important habit is interdental cleaning around the implant. Because the fixture is titanium and the crown ceramic, neither can decay, but the soft tissue and bone around the implant can develop peri-implantitis, an inflammatory disease equivalent to gum disease around natural teeth. Interdental brushes or a water flosser clean the implant-gum junction more effectively than floss alone.',
          'Brush twice a day with a soft brush; an electric brush with a pressure sensor is a good choice. Aggressive brushing causes gum recession around implants exactly as it does around natural teeth, so technique matters more than force.',
        ],
      },
      {
        heading: 'Hygienist visits and professional maintenance',
        paragraphs: [
          'Six-monthly hygienist visits are the baseline for implant patients, shortened to three or four months for anyone with a history of gum disease or higher peri-implantitis risk. The hygienist should use carbon-fibre or PEEK-tipped instruments around implants rather than metal scalers, which can scratch the implant surface.',
          'Early peri-implantitis, signalled by bleeding, soft-tissue recession and bone change on radiographs, can often be reversed with professional cleaning and better home care. Caught late it is much harder to manage, which is why the maintenance routine is not optional.',
        ],
      },
      {
        heading: 'Eating, healing and longevity',
        paragraphs: [
          'For the first few days after placement, keep to soft, cool foods and avoid straws so the healing site is not disturbed. Chew on the other side for a couple of weeks, then reintroduce most foods gradually. Once the final crown is fitted, the implant handles normal biting, including the apples, corn and steak patients most often miss.',
          'With good maintenance, implant survival at twenty years is around ninety per cent. The crown or bridge on top wears more like any restoration and may need replacing once or twice over the life of the fixture, which is a maintenance cost worth planning for rather than a failure.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'Caring for your dental implants',
      'Eating with implants through healing',
      'How to clean around a dental implant',
      'How long do dental implants last?',
      'Best interdental brushes and tools for implants',
      'Can you get a dental implant infection?',
      'Returning to normal eating after implants',
      'Do implants need hygienist maintenance?',
      'Sport, travel and implants after surgery',
      'Protecting implants if you grind your teeth',
    ],
    servicePillarSlugs: ['single-tooth', 'multiple-teeth', 'full-arch'],
    adjacentHubSlugs: ['implant-risks-and-success', 'implant-process-and-timeline'],
    faqs: [
      {
        question: 'Can dental implants get cavities?',
        answer:
          'No. The fixture is titanium and the crown ceramic or metal, both inert to decay. The risk is to the surrounding gum and bone, which can develop peri-implantitis if not cleaned well.',
      },
      {
        question: 'How often should I see a hygienist with implants?',
        answer:
          'Every six months as a baseline, and every three to four months if you have a history of gum disease or higher peri-implantitis risk.',
      },
      {
        question: 'How long do dental implants last?',
        answer:
          'The fixture commonly lasts twenty years and beyond with good care. The crown on top has a shorter life and may need replacing once or twice during the life of the implant.',
      },
    ],
    publishedAt: '2026-06-09',
    lastReviewedAt: reviewed,
  },
  {
    slug: 'implant-risks-and-success',
    title: 'Implant Risks, Safety and Success',
    shortTitle: 'Risks and success',
    heroBadge: 'Risk and evidence',
    reservedKeyword: 'dental implant failure',
    metaTitle: 'Dental Implant Risks, Failure and Success Rates | UK Guide',
    metaDescription:
      'Honest guidance on dental implant risks: success rates, why implants fail, peri-implantitis, smoking, nerve safety, and how to lower your risk.',
    heroDirectAnswer:
      'Dental implants succeed in around 90 to 95 per cent of cases over ten years and beyond. The main risks are early failure to integrate, later peri-implantitis from poor cleaning, and surgical complications, all of which are reduced by good case selection, an experienced clinician, and not smoking.',
    keyPoints: [
      'Ten-year survival is commonly around 90 to 95 per cent in well-maintained cases.',
      'Early failure, where the implant does not integrate, is uncommon and usually re-treatable.',
      'Peri-implantitis is the leading late cause of failure and is largely preventable.',
      'Smoking materially raises failure and complication risk.',
      'Nerve and sinus complications are reduced by CBCT planning and experienced placement.',
    ],
    sections: [
      {
        heading: 'What the success evidence actually says',
        paragraphs: [
          'Implant dentistry is one of the better-documented areas of dentistry. Long-term studies put fixture survival at roughly 90 to 95 per cent at ten years in well-selected, well-maintained patients. Success is not the same as survival: a surviving implant should also be free of inflammation and bone loss, which is where maintenance comes in.',
          'Headline rates hide variation. Front-tooth aesthetic cases, heavily grafted sites, smokers, and poorly controlled diabetes all carry higher risk than a straightforward back-tooth implant in a healthy non-smoker. An honest clinician quotes the rate for your case, not the best-case average.',
        ],
      },
      {
        heading: 'Why implants fail',
        paragraphs: [
          'Early failure, in the first weeks to months, means the implant did not integrate with bone. It is uncommon, often linked to infection, poor stability at placement, or smoking, and is usually managed by removing the fixture, letting the site heal, and placing a replacement, frequently successfully.',
          'Late failure is most often peri-implantitis, the inflammatory bone loss that follows poor cleaning, untreated gum disease, or excessive bite force. It is largely preventable with the maintenance routine and treatable if caught early. A loose crown can usually be re-tightened; a genuinely loose implant needs prompt assessment.',
        ],
      },
      {
        heading: 'Lowering your risk',
        paragraphs: [
          'The biggest controllable factor is smoking, which raises both early failure and peri-implantitis risk; stopping before and during treatment measurably improves the odds. Controlling diabetes and treating active gum disease before placement matter too.',
          'On the clinical side, CBCT planning reduces nerve and sinus complications, and clinician experience correlates with outcome, particularly on complex and full-arch work. Choosing the clinician carefully, covered in the choosing-a-dentist hub, is one of the most effective ways to lower risk.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'Dental implant success rates: the evidence',
      'Ten signs of a failing dental implant',
      'Peri-implantitis: causes, signs and treatment',
      'Why dental implants fail and how to avoid it',
      'Smoking and implant failure risk',
      'Nerve damage and implant safety',
      'What to do if your implant feels loose',
      'Can the body reject a dental implant?',
      'How implant complications are managed',
      'Choosing a dentist to minimise implant risk',
    ],
    servicePillarSlugs: ['single-tooth', 'full-arch', 'bone-grafting'],
    adjacentHubSlugs: ['implant-aftercare', 'choosing-an-implant-dentist'],
    faqs: [
      {
        question: 'What is the success rate of dental implants?',
        answer:
          'Around 90 to 95 per cent survival at ten years in well-maintained cases. The rate is lower for higher-risk cases such as heavy smokers or heavily grafted sites.',
      },
      {
        question: 'Why do dental implants fail?',
        answer:
          'Early failure usually means the implant did not integrate, often linked to infection or smoking. Late failure is most often peri-implantitis from poor cleaning or untreated gum disease, which is largely preventable.',
      },
      {
        question: 'Can the body reject a dental implant?',
        answer:
          'True immune rejection is extremely rare because titanium is biocompatible. What people call rejection is almost always failure to integrate or peri-implantitis, both of which have identifiable causes.',
      },
    ],
    publishedAt: '2026-06-09',
    lastReviewedAt: reviewed,
  },
  {
    slug: 'am-i-suitable-for-implants',
    title: 'Am I Suitable for Dental Implants?',
    shortTitle: 'Suitability',
    heroBadge: 'Candidacy',
    reservedKeyword: 'am i suitable for implants',
    metaTitle: 'Am I Suitable for Dental Implants? | UK Candidacy Guide',
    metaDescription:
      'Who can have dental implants: bone, gum health, age, smoking, diabetes, osteoporosis medication and pregnancy, and how candidacy is actually assessed.',
    heroDirectAnswer:
      'Most adults with reasonable general health and enough jawbone can have implants. Gum disease, smoking, uncontrolled diabetes and certain medications raise risk rather than rule it out, and where bone is short, grafting often makes treatment possible. Suitability is confirmed with an examination and a CBCT scan.',
    keyPoints: [
      'There is no upper age limit; general health matters more than age.',
      'Active gum disease must be treated and stable before implants are placed.',
      'Smoking and uncontrolled diabetes raise risk but rarely rule treatment out outright.',
      'Short bone can often be built up with grafting rather than being a dead end.',
      'Some medications, such as bisphosphonates, need careful assessment first.',
    ],
    sections: [
      {
        heading: 'The things that actually decide suitability',
        paragraphs: [
          'The two clinical essentials are enough bone to hold the implant and healthy, stable gums around it. Both are assessed at consultation, with a CBCT scan giving the three-dimensional bone picture. Active gum disease is treated and brought under control first, because placing an implant into an inflamed mouth invites peri-implantitis.',
          'General health matters more than age. Patients in their eighties have implants routinely; what counts is whether the body can heal and whether any medical conditions are well managed. A frank medical history at the matching stage means the case goes to a clinician comfortable with it.',
        ],
      },
      {
        heading: 'Conditions that raise risk',
        paragraphs: [
          'Smoking is the single most significant modifiable risk factor, raising both early failure and peri-implantitis; many clinicians will still treat smokers but will be explicit about the higher failure rate. Well-controlled diabetes is usually compatible with implants, while poorly controlled diabetes slows healing and raises risk.',
          'Osteoporosis itself is not usually a barrier, but bisphosphonate and related medications used to treat it carry a small risk of jaw healing problems and need careful assessment. Pregnancy is a reason to defer elective surgery and imaging rather than a permanent obstacle.',
        ],
      },
      {
        heading: 'When bone or age seem to rule you out',
        paragraphs: [
          'Being told elsewhere that you do not have enough bone is often the start of a conversation, not the end. Grafting, shorter implants, and for the most resorbed jaws zygomatic implants can make treatment possible; the grafting hub covers these in detail.',
          'Teenagers are the main genuine age restriction, because implants should wait until jaw growth is complete. For everyone else, the honest answer comes from an examination and a scan, which is what a good consultation provides.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'Am I suitable for implants? Candidacy overview',
      'Can you have implants with gum disease?',
      'Is there an age limit for implants?',
      'Dental implants when you have diabetes',
      'Implants for smokers',
      'Implants, osteoporosis and bisphosphonates',
      'Can teenagers have implants?',
      'Pregnancy and dental implants',
      'Getting your mouth ready for implants',
      'No bone for implants? Your options',
    ],
    servicePillarSlugs: ['single-tooth', 'bone-grafting', 'full-arch'],
    adjacentHubSlugs: ['bone-grafting-and-sinus-lifts', 'choosing-an-implant-dentist'],
    faqs: [
      {
        question: 'Is there an age limit for dental implants?',
        answer:
          'There is no upper age limit; general health and healing matter more than age. The main lower limit is that implants should wait until jaw growth is complete in late teens.',
      },
      {
        question: 'Can I have implants if I have gum disease?',
        answer:
          'Active gum disease must be treated and stabilised first. Once it is under control and you maintain good cleaning, implants are often possible with closer monitoring.',
      },
      {
        question: 'Can smokers have dental implants?',
        answer:
          'Usually yes, but smoking raises early failure and peri-implantitis risk. Most clinicians will treat smokers while being explicit about the higher risk; stopping around treatment improves the odds.',
      },
    ],
    publishedAt: '2026-06-09',
    lastReviewedAt: reviewed,
  },
  {
    slug: 'choosing-an-implant-dentist',
    title: 'Choosing an Implant Dentist and Implants Abroad',
    shortTitle: 'Choosing a dentist',
    heroBadge: 'Provider choice',
    reservedKeyword: 'implants abroad vs uk',
    metaTitle: 'Choosing an Implant Dentist, and Implants Abroad | UK Guide',
    metaDescription:
      'How to choose an implant dentist in Essex, check GDC registration and experience, weigh up implants abroad and in Turkey, and spot red flags.',
    heroDirectAnswer:
      'Choose an implant dentist on verifiable GDC registration, genuine implant experience, transparent written quotes, and aftercare you can actually reach. Treatment abroad can be cheaper up front, but continuity of care and recourse if something goes wrong are the real costs to weigh.',
    keyPoints: [
      'Every UK dentist placing implants must be on the General Dental Council register; you can check this yourself.',
      'Implant placement is not a recognised specialty; experience and case logs matter more than a single title.',
      'Insist on an itemised written quote naming the implant system and materials.',
      'Aftercare and recourse are the weak points of treatment abroad, not the surgery itself.',
      'An independent matching service exists to do this verification for you, at no charge.',
    ],
    sections: [
      {
        heading: 'How to vet a UK implant dentist',
        paragraphs: [
          'Start with the General Dental Council register, which anyone can search to confirm a clinician is registered and in good standing. Implant placement is not a standalone specialty in the UK; the relevant specialist titles are oral surgery and prosthodontics, and many excellent implant dentists are experienced general practitioners working within a restricted scope. Ask about case volume, the systems they use, and how they handle complications.',
          'A trustworthy clinician gives an itemised written quote that names the implant system, the abutment, and the crown or bridge material, and is clear about what is and is not included. Vague all-in figures and pressure to commit on the day are warning signs.',
        ],
      },
      {
        heading: 'Implants abroad and in Turkey',
        paragraphs: [
          'Treatment in Turkey and other destinations can be markedly cheaper up front, and much of it is competent. The difficulty is rarely the surgery itself; it is what happens afterwards. Osseointegration and the definitive restoration take months, follow-up is hard to arrange from another country, and if a complication arises the recourse and continuity of care are limited.',
          'Some patients return needing problems fixed locally, which can cost more than treating in the UK would have. If you are weighing an overseas option, factor in travel for multiple stages, the practicality of aftercare, and who is accountable if something fails, not just the headline price.',
        ],
      },
      {
        heading: 'How an independent matching service helps',
        paragraphs: [
          'We are an independent matching service, free to the patient. We confirm GDC registration, ask about scope, scheduling and case fit, and introduce a clinician on that basis rather than to whoever pays the most. We are not a clinic and do not provide treatment; the matched clinician quotes their own fees in writing.',
          'Our income is a flat panel fee paid by clinicians for inclusion, not a per-introduction commission that would distort the match. That structure is the point: it keeps the recommendation aligned with the patient rather than the highest bidder.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'How to choose an implant dentist in Essex',
      'Dental implants abroad: risks vs UK treatment',
      'Turkey dental implants: what to weigh up',
      'Questions to ask at your implant consultation',
      'How to check a dentist GDC registration and experience',
      'Getting a second opinion on implant treatment',
      'What an experienced implant clinician actually means',
      'Fixing implant problems from treatment done abroad',
      'How an independent matching service works',
      'Red flags when choosing a cheap implant provider',
    ],
    servicePillarSlugs: ['single-tooth', 'full-arch', 'implant-dentures'],
    adjacentHubSlugs: ['implant-risks-and-success', 'am-i-suitable-for-implants'],
    faqs: [
      {
        question: 'How do I check an implant dentist is qualified?',
        answer:
          'Search the General Dental Council register to confirm registration and good standing, then ask about implant case volume, the systems they use, and how they handle complications. Specialist titles in oral surgery or prosthodontics are a plus but not the only marker of competence.',
      },
      {
        question: 'Are implants abroad worth the risk?',
        answer:
          'They can be cheaper up front and much of the surgery is competent, but aftercare and recourse are the weak points. Factor in travel for multiple stages and who is accountable if a complication arises months later.',
      },
      {
        question: 'How does your matching service make money if it is free to me?',
        answer:
          'Clinicians pay a flat panel fee for inclusion, not a per-introduction commission. That keeps matching aligned with the patient rather than the highest bidder.',
      },
    ],
    publishedAt: '2026-06-09',
    lastReviewedAt: reviewed,
  },
];

export const GUIDES_BY_SLUG: Record<string, GuideData> = Object.fromEntries(
  GUIDES.map((g) => [g.slug, g])
);

export const GUIDE_SLUGS = GUIDES.map((g) => g.slug);
