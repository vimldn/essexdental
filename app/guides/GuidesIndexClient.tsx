'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from '@/components/Icons';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LeadFormModal from '@/components/LeadFormModal';
import Breadcrumbs from '@/components/Breadcrumbs';
import { guidesIndexCrumbs } from '@/lib/breadcrumbs';

interface HubCard {
  slug: string;
  title: string;
  heroBadge: string;
  heroDirectAnswer: string;
  liveCount: number;
  image: { src: string; alt: string; width: number; height: number } | null;
}

export default function GuidesIndexClient({ hubs }: { hubs: HubCard[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-700">
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Navigation onOpenModal={() => setIsModalOpen(true)} />

      <main id="main">
        <section className="min-h-[360px] pt-28 pb-14 bg-gradient-to-b from-[#0d2750] to-[#0a1f40] text-white flex items-center">
          <div className="max-w-3xl mx-auto px-6 w-full">
            <div className="mb-4">
              <Breadcrumbs items={guidesIndexCrumbs()} onDark />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-5">
              Dental implant guides
            </h1>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              Clear, practical guides for Essex patients comparing implant costs, treatment routes, suitability and long-term care before booking a consultation.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {hubs.map((hub) => (
                <Link
                  key={hub.slug}
                  href={`/guides/${hub.slug}/`}
                  className="group bg-white rounded-xl border border-slate-200 hover:border-[#1a56a0]/40 hover:shadow-md transition-all flex flex-col overflow-hidden"
                >
                  {hub.image && (
                    <div className="relative aspect-[16/9] overflow-hidden border-b border-slate-100">
                      <Image
                        src={hub.image.src}
                        alt={hub.image.alt}
                        width={hub.image.width}
                        height={hub.image.height}
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-2">{hub.heroBadge}</p>
                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-[#1a56a0] transition-colors mb-2">
                      {hub.title}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed flex-1">{hub.heroDirectAnswer}</p>
                    <div className="flex items-center gap-2 text-[#1a56a0] text-xs font-semibold mt-4">
                      Open guide <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#0d2750] text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Prefer to talk it through?</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Free, independent matching to verified Essex implant clinicians. Tell us the case in ninety seconds.
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
