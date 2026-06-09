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
import { guideCrumbs } from '@/lib/breadcrumbs';
import { GuideData } from '@/data/guides';

interface SpokeLink {
  slug: string;
  title: string;
  excerpt: string;
}

interface PillarLink {
  slug: string;
  title: string;
  shortTitle: string;
}

interface HubLink {
  slug: string;
  title: string;
  shortTitle: string;
}

interface HeroImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function GuideHubClient({
  guide,
  heroImage,
  liveSpokes,
  services,
  adjacentHubs,
}: {
  guide: GuideData;
  heroImage: HeroImage | null;
  liveSpokes: SpokeLink[];
  services: PillarLink[];
  adjacentHubs: HubLink[];
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-700">
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Navigation onOpenModal={() => setIsModalOpen(true)} />

      <main id="main">
        <section className="pt-28 pb-16 bg-gradient-to-b from-[#0d2750] to-[#0a1f40] text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-4">
              <Breadcrumbs items={guideCrumbs(guide)} onDark />
            </div>
            <div className="grid lg:grid-cols-[1.1fr_minmax(0,460px)] gap-10 lg:gap-16 items-center">
              <div>
                <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#7fb9e8] mb-3">
                  {guide.heroBadge}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-5">
                  {guide.title}
                </h1>
                <p className="text-base md:text-lg text-white/80 leading-relaxed mb-7 max-w-2xl">
                  {guide.heroDirectAnswer}
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3.5 bg-[#1a56a0] text-white text-sm font-semibold rounded-md hover:bg-[#1d62b8] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7fb9e8]"
                >
                  Request a clinician introduction
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

        <section className="py-14 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">
              The short answer
            </span>
            <ul className="space-y-3">
              {guide.keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#1a56a0] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-slate-700 leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {guide.sections.map((section, i) => (
          <section key={i} className={i % 2 === 0 ? 'py-14 bg-[#f5f8ff]' : 'py-14 bg-white'}>
            <div className="max-w-3xl mx-auto px-6">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">{section.heading}</h2>
              <div className="space-y-5 text-slate-700 leading-relaxed">
                {section.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Live spokes (draft posts excluded server-side) */}
        {liveSpokes.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-5xl mx-auto px-6">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">
                Guides in this series
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
                In-depth on {guide.shortTitle.toLowerCase()}
              </h2>
              <div className="grid md:grid-cols-2 gap-5">
                {liveSpokes.map((spoke) => (
                  <Link
                    key={spoke.slug}
                    href={`/blog/${spoke.slug}/`}
                    className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-[#1a56a0]/40 hover:shadow-md transition-all"
                  >
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#1a56a0] transition-colors mb-2">
                      {spoke.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{spoke.excerpt}</p>
                    <div className="flex items-center gap-2 text-[#1a56a0] text-xs font-semibold mt-4">
                      Read guide <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Feeds: service pillars + adjacent hubs */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            {services.length > 0 && (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Related treatments</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}/`}
                      className="group bg-white p-5 rounded-xl border border-slate-200 hover:border-[#1a56a0]/40 hover:shadow-md transition-all"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-2">{s.shortTitle}</p>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#1a56a0] transition-colors">{s.title}</h3>
                      <div className="flex items-center gap-2 text-[#1a56a0] text-xs font-semibold mt-3">
                        Read pillar <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}

            {adjacentHubs.length > 0 && (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Continue across the guides</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {adjacentHubs.map((h) => (
                    <Link
                      key={h.slug}
                      href={`/guides/${h.slug}/`}
                      className="group bg-[#f5f8ff] p-5 rounded-xl border border-[#1a56a0]/15 hover:border-[#1a56a0]/40 hover:shadow-sm transition-all"
                    >
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#1a56a0] transition-colors">{h.title}</h3>
                      <div className="flex items-center gap-2 text-[#1a56a0] text-xs font-semibold mt-3">
                        Open guide <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        <FAQSection
          faqs={guide.faqs}
          title={`${guide.shortTitle} questions answered`}
          subtitle="Common questions on this topic, with specific UK figures where they apply."
        />

        <section className="py-16 bg-[#0d2750] text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to speak to a verified Essex clinician?</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              We are an independent matching service, free to the patient. We are not a clinic and do not provide treatment directly. The matched clinician quotes their own fees in writing.
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
