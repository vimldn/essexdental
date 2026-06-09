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
import { serviceCrumbs } from '@/lib/breadcrumbs';
import { ServiceData } from '@/data/services';
import { serviceImage } from '@/data/images';

interface RelatedService {
  slug: string;
  title: string;
  shortTitle: string;
}

interface LocationLink {
  slug: string;
  name: string;
  postcodes: readonly string[];
}

interface GuideLink {
  slug: string;
  title: string;
  heroBadge: string;
}

export default function ServicePillarClient({
  service,
  relatedServices,
  relatedGuides,
  locations,
}: {
  service: ServiceData;
  relatedServices: RelatedService[];
  relatedGuides: GuideLink[];
  locations: LocationLink[];
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroImage = serviceImage(service.slug);

  return (
    <div className="min-h-screen bg-white text-slate-700">
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Navigation onOpenModal={() => setIsModalOpen(true)} />

      <main id="main">
        <section className="pt-28 pb-16 bg-gradient-to-b from-[#0d2750] to-[#0a1f40] text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-4">
              <Breadcrumbs items={serviceCrumbs(service)} onDark />
            </div>
            <div className="grid lg:grid-cols-[1.1fr_minmax(0,460px)] gap-10 lg:gap-16 items-center">
              <div>
                <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#7fb9e8] mb-3">
                  {service.heroBadge}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-5">
                  {service.title} in Essex
                </h1>
                <p className="text-base md:text-lg text-white/75 leading-relaxed mb-7 max-w-2xl">
                  {service.heroDirectAnswer}
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3.5 bg-[#1a56a0] text-white text-sm font-semibold rounded-md hover:bg-[#1d62b8] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7fb9e8]"
                >
                  Request a {service.shortTitle.toLowerCase()} introduction
                </button>
              </div>

              {heroImage && (
                <div className="hidden lg:block">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
                    <Image
                      src={heroImage.src}
                      alt={heroImage.alt}
                      width={heroImage.width}
                      height={heroImage.height}
                      priority
                      quality={90}
                      sizes="(min-width: 1024px) 460px, 100vw"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">
              What this covers
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              The clinical scope of {service.shortTitle.toLowerCase()} treatment
            </h2>
            <div className="space-y-5 text-slate-700 leading-relaxed">
              {service.whatItCoversParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#f5f8ff]">
          <div className="max-w-3xl mx-auto px-6">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">
              Edge cases
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Variations the matched clinician should flag at consultation
            </h2>
            <div className="space-y-5 text-slate-700 leading-relaxed">
              {service.edgeCasesParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">
              How it plays out
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              Anonymised worked examples
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {service.workedExamples.map((example, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
                  <p className="text-sm font-semibold text-[#1a56a0] mb-3">{example.title}</p>
                  <p className="text-sm text-slate-700 leading-relaxed">{example.body}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-6 leading-relaxed max-w-2xl">
              Examples are anonymised case sketches drawn from matched-clinician reports. Identifying details are removed; fees and timelines are representative.
            </p>
          </div>
        </section>

        <section className="py-16 bg-[#f5f8ff]">
          <div className="max-w-3xl mx-auto px-6">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">
              Pricing transparency
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              What the Essex panel typically quotes
            </h2>
            <ul className="space-y-3">
              {service.pricingNotes.map((note, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#1a56a0] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-slate-700 leading-relaxed">{note}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">
              Regulatory context
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              How implant care is regulated in the UK
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">{service.regulatoryNotes.text}</p>
            {service.regulatoryNotes.links && service.regulatoryNotes.links.length > 0 && (
              <ul className="space-y-2">
                {service.regulatoryNotes.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#1a56a0] underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section className="py-16 bg-[#f5f8ff]">
          <div className="max-w-7xl mx-auto px-6">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">
              Where we cover
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Essex towns with matched {service.shortTitle.toLowerCase()} clinicians
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 max-w-2xl">
              The matching panel covers the towns below. Each location page lists the postcode catchment, neighbourhoods covered, and the local NHS and council context.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/location/${location.slug}/`}
                  className="block px-4 py-3 rounded-xl bg-white border border-slate-200 hover:border-[#1a56a0]/40 hover:shadow-sm transition-all text-sm font-semibold text-slate-700"
                >
                  {service.shortTitle} in {location.name}
                  <span className="block text-[11px] font-normal text-slate-500 mt-0.5">
                    {location.postcodes.join(' · ')}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FAQSection
          faqs={service.faqs}
          title={`${service.shortTitle} questions answered`}
          subtitle="Common questions from Essex patients about this treatment, with specific figures where they apply."
        />

        {relatedGuides.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-5xl mx-auto px-6">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Guides for this treatment</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedGuides.map((g) => (
                  <Link
                    key={g.slug}
                    href={`/guides/${g.slug}/`}
                    className="group bg-[#f5f8ff] p-5 rounded-xl border border-[#1a56a0]/15 hover:border-[#1a56a0]/40 hover:shadow-sm transition-all"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-2">{g.heroBadge}</p>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#1a56a0] transition-colors">{g.title}</h3>
                    <div className="flex items-center gap-2 text-[#1a56a0] text-xs font-semibold mt-3">
                      Open guide <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-16 bg-[#f5f8ff]">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Related treatments</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}/`}
                  className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-[#1a56a0]/40 hover:shadow-md transition-all"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-2">
                    {related.shortTitle}
                  </p>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#1a56a0] transition-colors">
                    {related.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[#1a56a0] text-xs font-semibold mt-4">
                    Read pillar <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#0d2750] text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Request a {service.shortTitle.toLowerCase()} introduction
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              We are an independent matching service. Free to the patient. We are not a clinic and do not provide treatment directly. The matched clinician quotes their own fees in writing.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-7 py-3.5 bg-[#1a56a0] text-white text-sm font-semibold rounded-md hover:bg-[#1d62b8] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7fb9e8]"
            >
              Request an introduction
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
