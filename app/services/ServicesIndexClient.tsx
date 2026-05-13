'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from '@/components/Icons';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LeadFormModal from '@/components/LeadFormModal';
import Breadcrumbs from '@/components/Breadcrumbs';
import { servicesIndexCrumbs } from '@/lib/breadcrumbs';
import { IMAGES } from '@/data/images';

interface ServiceCard {
  slug: string;
  title: string;
  shortTitle: string;
  heroDirectAnswer: string;
}

export default function ServicesIndexClient({ services }: { services: ServiceCard[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-700">
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Navigation onOpenModal={() => setIsModalOpen(true)} />

      <main id="main" className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-4">
            <Breadcrumbs items={servicesIndexCrumbs()} />
          </div>
          <div className="max-w-3xl mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-5">
              Implant treatments covered by the Essex matching panel
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Six pillars covering the range of cases the Essex panel routinely matches. Each page explains what the treatment is, the typical price range across Essex, common edge cases, and worked clinical examples.
            </p>
          </div>

          {/* IMAGE SLOT: services index banner. Implant overview / treatment-range visual. */}
          <div className="mb-12 relative rounded-2xl overflow-hidden border border-slate-200 aspect-[16/7] md:aspect-[16/5]">
            <Image
              src={IMAGES.servicesIndex.hero.src}
              alt={IMAGES.servicesIndex.hero.alt}
              width={IMAGES.servicesIndex.hero.width}
              height={IMAGES.servicesIndex.hero.height}
              priority
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="group bg-white p-7 rounded-2xl border border-slate-200 hover:border-[#1a56a0]/40 hover:shadow-md transition-all flex flex-col"
              >
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">
                  {service.shortTitle}
                </p>
                <h2 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#1a56a0] transition-colors">
                  {service.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">{service.heroDirectAnswer}</p>
                <div className="flex items-center gap-2 text-[#1a56a0] text-sm font-semibold">
                  Read pillar <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
