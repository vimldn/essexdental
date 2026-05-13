import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Breadcrumbs from '@/components/Breadcrumbs';
import SchemaBlock from '@/components/SchemaBlock';
import { breadcrumbSchema } from '@/lib/schema';
import { siteConfig } from '@/data/site';
import { HOME_CRUMB } from '@/lib/breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'Terms governing use of the Essex Dental Implants matching service, including the scope of the introduction service and the boundary with clinical practice.',
  alternates: { canonical: '/terms/' },
};

const crumbs = [HOME_CRUMB, { name: 'Terms', url: `${siteConfig.url}/terms/` }];

export default function TermsPage() {
  return (
    <>
      <SchemaBlock schemas={[breadcrumbSchema(crumbs)]} />
      <PageShell>
        <div className="pt-28 pb-20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="mb-4">
              <Breadcrumbs items={crumbs} />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 leading-tight tracking-tight mb-3">
              Terms of use
            </h1>
            <p className="text-sm text-slate-500 mb-10">Last updated: {siteConfig.editorial.lastReviewedAt}</p>

            <div className="space-y-6 text-slate-700 leading-relaxed">
              <h2 className="text-xl font-bold text-slate-900">1. Scope of service</h2>
              <p>
                {siteConfig.name} provides an information and introduction service connecting patients in Essex with verified dental implant clinicians. We are not a dental provider. We do not place implants. The matched clinician is responsible for their own clinical advice, treatment, and aftercare.
              </p>

              <h2 className="text-xl font-bold text-slate-900 pt-4">2. No clinical advice</h2>
              <p>
                Information on this site is general in nature and is not a substitute for clinical advice from a registered dental professional. Decisions about treatment should be made in consultation with a GDC-registered clinician who has examined you. Worked examples are illustrative case sketches, not personal recommendations.
              </p>

              <h2 className="text-xl font-bold text-slate-900 pt-4">3. Matching and consent</h2>
              <p>
                By submitting a matching enquiry you consent to your details being shared with the matched clinician for the purpose of arranging an initial consultation. You can withdraw this consent at any time before the matched introduction is made.
              </p>

              <h2 className="text-xl font-bold text-slate-900 pt-4">4. Fees</h2>
              <p>
                The matching service is free to the patient. The matched clinician quotes their professional fees direct to you in writing. We have no involvement in those fees and do not take a per-introduction commission.
              </p>

              <h2 className="text-xl font-bold text-slate-900 pt-4">5. Outbound links</h2>
              <p>
                Links from this site to third-party regulatory or information resources (GDC, NHS, MHRA, ICO) are provided for reference. We do not control those sites and are not responsible for their content.
              </p>

              <h2 className="text-xl font-bold text-slate-900 pt-4">6. Liability</h2>
              <p>
                We provide the information and matching service in good faith and exercise reasonable care, but cannot guarantee outcomes from clinical treatment. The matched clinician is liable for their own treatment and is required by GDC standards to carry professional indemnity insurance. Our own liability is limited to the fee we receive from the matched clinician for the introduction (which is not borne by you).
              </p>

              <h2 className="text-xl font-bold text-slate-900 pt-4">7. Governing law</h2>
              <p>
                These terms are governed by the laws of England and Wales. Any dispute is subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>

              <h2 className="text-xl font-bold text-slate-900 pt-4">8. Contact</h2>
              <p>
                Questions about these terms:{' '}
                <a href={`mailto:${siteConfig.contact.email}`} className="underline text-[#1a56a0]">
                  {siteConfig.contact.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </PageShell>
    </>
  );
}
