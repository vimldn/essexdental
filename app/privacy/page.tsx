import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Breadcrumbs from '@/components/Breadcrumbs';
import SchemaBlock from '@/components/SchemaBlock';
import { breadcrumbSchema } from '@/lib/schema';
import { siteConfig } from '@/data/site';
import { HOME_CRUMB } from '@/lib/breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Notice',
  description:
    'How Essex Dental Implants collects, stores, and uses personal information under UK GDPR and the Data Protection Act 2018.',
  alternates: { canonical: '/privacy/' },
};

const crumbs = [HOME_CRUMB, { name: 'Privacy', url: `${siteConfig.url}/privacy/` }];

export default function PrivacyPage() {
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
              Privacy notice
            </h1>
            <p className="text-sm text-slate-500 mb-10">Last updated: {siteConfig.editorial.lastReviewedAt}</p>

            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p>
                This notice explains how {siteConfig.name} (we, us, our) handles personal information when you use this site or submit a matching enquiry. We are the data controller for the personal information you provide.
              </p>

              <h2 className="text-xl font-bold text-slate-900 pt-4">Information we collect</h2>
              <p>
                When you submit the matching form we collect: your name, email address, phone number, location, treatment type, the page you submitted from, and any campaign source data (UTM parameters, referrer URL) captured by your first landing on the site.
              </p>
              <p>
                When you use the site we may set a single Google Analytics 4 cookie to understand how visitors interact with the pages. This cookie is only set after you have given consent via the consent banner. No advertising or remarketing cookies are set without explicit consent.
              </p>

              <h2 className="text-xl font-bold text-slate-900 pt-4">How we use it</h2>
              <p>
                Form submissions are used to match you with a verified Essex implant clinician and to introduce that clinician to you. Your details are shared with the matched clinician for the purpose of arranging an initial consultation. We do not share your details with any third party other than the matched clinician.
              </p>
              <p>
                Analytics data is used in aggregate to understand which pages are useful and where the site needs improvement. We do not use analytics data for advertising or remarketing.
              </p>

              <h2 className="text-xl font-bold text-slate-900 pt-4">Lawful basis</h2>
              <p>
                We process matching-form submissions on the basis of your consent and our legitimate interest in operating the matching service you have asked to use. You may withdraw consent at any time by emailing{' '}
                <a href={`mailto:${siteConfig.contact.privacy}`} className="underline text-[#1a56a0]">
                  {siteConfig.contact.privacy}
                </a>
                .
              </p>

              <h2 className="text-xl font-bold text-slate-900 pt-4">Retention</h2>
              <p>
                Matching-form submissions are retained for three years from the date of submission, after which they are deleted. We retain analytics data for fourteen months.
              </p>

              <h2 className="text-xl font-bold text-slate-900 pt-4">Your rights</h2>
              <p>
                Under UK GDPR you have the right to access, correct, delete, or restrict processing of your personal information. To exercise any of these rights, email{' '}
                <a href={`mailto:${siteConfig.contact.privacy}`} className="underline text-[#1a56a0]">
                  {siteConfig.contact.privacy}
                </a>
                .
              </p>
              <p>
                You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at{' '}
                <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer" className="underline text-[#1a56a0]">
                  ico.org.uk
                </a>
                .
              </p>

              <h2 className="text-xl font-bold text-slate-900 pt-4">Cookies</h2>
              <table className="w-full text-sm border border-slate-200 rounded-md overflow-hidden">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left px-4 py-2 border-b border-slate-200 font-semibold text-slate-700">Cookie</th>
                    <th className="text-left px-4 py-2 border-b border-slate-200 font-semibold text-slate-700">Purpose</th>
                    <th className="text-left px-4 py-2 border-b border-slate-200 font-semibold text-slate-700">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b border-slate-100">_ga</td>
                    <td className="px-4 py-2 border-b border-slate-100">Google Analytics 4 visitor identification</td>
                    <td className="px-4 py-2 border-b border-slate-100">2 years</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-slate-100">_ga_*</td>
                    <td className="px-4 py-2 border-b border-slate-100">GA4 session state</td>
                    <td className="px-4 py-2 border-b border-slate-100">2 years</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">edi-consent-v1</td>
                    <td className="px-4 py-2">Records cookie consent choice</td>
                    <td className="px-4 py-2">1 year</td>
                  </tr>
                </tbody>
              </table>

              <h2 className="text-xl font-bold text-slate-900 pt-4">Contact</h2>
              <p>
                Privacy enquiries:{' '}
                <a href={`mailto:${siteConfig.contact.privacy}`} className="underline text-[#1a56a0]">
                  {siteConfig.contact.privacy}
                </a>
                . Postal correspondence: send to the email address and we will arrange a postal route.
              </p>
            </div>
          </div>
        </div>
      </PageShell>
    </>
  );
}
