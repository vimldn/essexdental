'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle } from '@/components/Icons';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import LeadFormModal from '@/components/LeadFormModal';
import Breadcrumbs from '@/components/Breadcrumbs';
import { servicesIndexCrumbs } from '@/lib/breadcrumbs';
import { serviceImage } from '@/data/images';

interface ServiceCard {
  slug: string;
  title: string;
  shortTitle: string;
  heroDirectAnswer: string;
}

interface GuideCard {
  slug: string;
  title: string;
  shortTitle: string;
  heroBadge: string;
}

interface LocationCard {
  slug: string;
  name: string;
  postcodes: readonly string[];
}

export default function ServicesIndexClient({
  services,
  guides,
  locations,
  faqs,
}: {
  services: ServiceCard[];
  guides: GuideCard[];
  locations: LocationCard[];
  faqs: { question: string; answer: string }[];
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-700">
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Navigation onOpenModal={() => setIsModalOpen(true)} />

      <main id="main">
        <section className="min-h-[360px] pt-28 pb-14 bg-gradient-to-b from-[#0d2750] to-[#0a1f40] text-white flex items-center">
          <div className="max-w-3xl mx-auto px-6 w-full">
            <div className="mb-4">
              <Breadcrumbs items={servicesIndexCrumbs()} onDark />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-5">
              Dental implants in Essex
            </h1>
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-4">
              Compare the main implant treatment routes we match across Essex, from one missing tooth to full-arch replacement.
            </p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-7">
              Each page explains the treatment, typical private price range, common edge cases and what to ask before a consultation.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3.5 bg-[#1a56a0] text-white text-sm font-semibold rounded-md hover:bg-[#1d62b8] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7fb9e8]"
            >
              Request a clinician introduction
            </button>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Implant treatments we match for</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service) => {
                const img = serviceImage(service.slug);
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}/`}
                    className="group bg-white rounded-2xl border border-slate-200 hover:border-[#1a56a0]/40 hover:shadow-md transition-all flex flex-col overflow-hidden"
                  >
                    {img && (
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={img.width}
                          height={img.height}
                          sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                          className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-7 flex flex-col flex-1">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">
                        {service.shortTitle}
                      </p>
                      <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#1a56a0] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">{service.heroDirectAnswer}</p>
                      <div className="flex items-center gap-2 text-[#1a56a0] text-sm font-semibold">
                        Read more <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#f5f8ff]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">
              How matching works
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Why patients use an independent matching service
            </h2>
            <div className="space-y-5 text-slate-700 leading-relaxed">
              <p>
                Implant treatment at a competent Essex clinician is clinically equivalent to central London at a materially lower fee, because the price difference is driven by premises overhead rather than outcome. The difficulty for patients is knowing which clinicians genuinely have the relevant experience, and getting an honest, itemised quote to compare.
              </p>
              <p>
                We confirm each clinician is on the General Dental Council register, ask about scope, scheduling and case fit, and introduce the clinician whose stated experience matches your case. We are not a clinic and do not provide treatment. Our income is a flat panel fee paid by clinicians for inclusion, not a per-introduction commission that would distort the match.
              </p>
            </div>
            <ul className="mt-7 space-y-3">
              {[
                'Verified GDC-registered clinicians only',
                'Free to the patient, no obligation',
                'The matched clinician quotes their own fees in writing',
                'We tell you the clinician name and the basis for the match before any introduction',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#1a56a0] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-slate-700 leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">
              Start with a guide
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Understand implants before you commit</h2>
            <p className="text-slate-600 leading-relaxed mb-8 max-w-2xl">
              Start with practical guides that explain the decisions patients usually need to make before comparing quotes or booking a consultation.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {guides.map((g) => (
                <Link
                  key={g.slug}
                  href={`/guides/${g.slug}/`}
                  className="group flex items-center justify-between gap-3 px-5 py-4 rounded-xl bg-[#f5f8ff] border border-[#1a56a0]/15 hover:border-[#1a56a0]/40 hover:shadow-sm transition-all"
                >
                  <span className="text-sm font-semibold text-slate-700 group-hover:text-[#1a56a0] transition-colors">
                    {g.title}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#1a56a0] flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#f5f8ff]">
          <div className="max-w-7xl mx-auto px-6">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">
              Where we cover
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Essex towns with matched implant clinicians</h2>
            <p className="text-slate-600 leading-relaxed mb-8 max-w-2xl">
              Each location page lists the postcode catchment, neighbourhoods covered, and the local NHS and council context.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/location/${location.slug}/`}
                  className="block px-4 py-3 rounded-xl bg-white border border-slate-200 hover:border-[#1a56a0]/40 hover:shadow-sm transition-all text-sm font-semibold text-slate-700"
                >
                  Dental implants in {location.name}
                  <span className="block text-[11px] font-normal text-slate-500 mt-0.5">
                    {location.postcodes.join(' · ')}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FAQSection
          faqs={faqs}
          title="Dental implants in Essex: common questions"
          subtitle="General questions about implant treatment and how matching works, with specific figures where they apply."
        />

        <section className="py-16 bg-[#0d2750] text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Request a clinician introduction</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Free, independent matching to verified Essex implant clinicians. Tell us the case in ninety seconds and we will introduce a clinician whose experience fits.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-7 py-3.5 bg-[#1a56a0] text-white text-sm font-semibold rounded-md hover:bg-[#1d62b8] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7fb9e8]"
            >
              Request an introduction
            </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
