import type { Metadata } from 'next';
import Image from 'next/image';
import PageShell from '@/components/PageShell';
import Breadcrumbs from '@/components/Breadcrumbs';
import SchemaBlock from '@/components/SchemaBlock';
import { breadcrumbSchema, editorialPersonSchema } from '@/lib/schema';
import { siteConfig } from '@/data/site';
import { HOME_CRUMB } from '@/lib/breadcrumbs';
import { IMAGES } from '@/data/images';

export const metadata: Metadata = {
  title: 'About Essex Dental Implants',
  description:
    'About the editorial team running the Essex Dental Implants matching service: what we do, what we do not, how matching decisions are made, and the contact routes for patients and clinicians.',
  alternates: { canonical: '/about/' },
};

const crumbs = [HOME_CRUMB, { name: 'About', url: `${siteConfig.url}/about/` }];

export default function AboutPage() {
  return (
    <>
      <SchemaBlock schemas={[breadcrumbSchema(crumbs), editorialPersonSchema()]} />
      <PageShell>
        <div className="pt-28 pb-20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="mb-4">
              <Breadcrumbs items={crumbs} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-8">
              About {siteConfig.name}
            </h1>

            {/* IMAGE SLOT: about page hero. Editorial / team / workspace visual. */}
            <div className="mb-10 relative rounded-2xl overflow-hidden border border-slate-200 aspect-[4/3]">
              <Image
                src={IMAGES.about.hero.src}
                alt={IMAGES.about.hero.alt}
                width={IMAGES.about.hero.width}
                height={IMAGES.about.hero.height}
                priority
                quality={90}
                sizes="(min-width: 768px) 768px, 100vw"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p>
                {siteConfig.name} is an independent matching service connecting patients in Essex with verified, GDC-registered implant clinicians. We do not place implants. We do not own clinics. We do not employ dentists.
              </p>
              <p>
                The service is run by a small editorial team based in Essex. We maintain a panel of implant clinicians across twelve Essex towns and route patient enquiries to the clinician whose stated scope, scheduling, and case fit the enquiry. We tell every enquirer the matched clinician name and the basis for the match before any introduction is made.
              </p>

              <h2 className="text-xl font-bold text-slate-900 pt-6">What we are not</h2>
              <p>
                We are not a clinic. We are not a finance broker. We are not an affiliate marketing site that monetises patient data. We do not sell leads to the highest bidder. Our income comes from a flat panel fee paid by matched clinicians for inclusion in the panel, not a per-introduction commission that would distort matching decisions.
              </p>

              <h2 className="text-xl font-bold text-slate-900 pt-6">Editorial standards</h2>
              <p>
                Content on this site is written by our editorial team. Where a piece concerns clinical detail (procedure, materials, regulatory context), the underlying clinical claims are checked against current General Dental Council guidance, NHS sources, and published clinical literature.
              </p>
              <p>
                We do not fabricate case studies, testimonials, statistics, or clinician credentials. Worked examples on service pillar pages are anonymised case sketches drawn from matched-clinician reports; identifying details are removed and fees are representative.
              </p>
              <p>
                The last-reviewed date on every content page is real and updated when the page is materially edited or factually reviewed.
              </p>

              <h2 className="text-xl font-bold text-slate-900 pt-6">Editorial team</h2>
              <p>
                Content and matching decisions are managed by the {siteConfig.editorial.teamName}. We do not publish under invented clinician bylines. Where clinical input has shaped a guide, we credit the named clinician with their GDC number; in the absence of that credit, the byline is the editorial team.
              </p>

              <h2 className="text-xl font-bold text-slate-900 pt-6">Regulation and complaints</h2>
              <p>
                We are an information and matching service and are not regulated as a healthcare provider. The matched clinician is regulated by the General Dental Council under the Dentists Act 1984. Complaints about the matching service itself should be sent to{' '}
                <a href={`mailto:${siteConfig.contact.email}`} className="underline text-[#1a56a0]">
                  {siteConfig.contact.email}
                </a>
                ; complaints about clinical treatment should be raised first with the treating clinician and, if unresolved, with the GDC.
              </p>

              <h2 className="text-xl font-bold text-slate-900 pt-6">Contact</h2>
              <ul className="space-y-2">
                <li>
                  General:{' '}
                  <a href={`mailto:${siteConfig.contact.email}`} className="underline text-[#1a56a0]">
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>
                  Privacy:{' '}
                  <a href={`mailto:${siteConfig.contact.privacy}`} className="underline text-[#1a56a0]">
                    {siteConfig.contact.privacy}
                  </a>
                </li>
                <li>
                  Security:{' '}
                  <a href={`mailto:${siteConfig.contact.security}`} className="underline text-[#1a56a0]">
                    {siteConfig.contact.security}
                  </a>
                </li>
              </ul>

              <p className="text-xs text-slate-500 pt-8">
                Last reviewed: {siteConfig.editorial.lastReviewedAt}
              </p>
            </div>
          </div>
        </div>
      </PageShell>
    </>
  );
}
