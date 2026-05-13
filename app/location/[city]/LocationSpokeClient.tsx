'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin, CheckCircle } from '@/components/Icons';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import LeadFormModal from '@/components/LeadFormModal';
import Breadcrumbs from '@/components/Breadcrumbs';
import { locationCrumbs } from '@/lib/breadcrumbs';
import { LocationData } from '@/data/locations';
import { locationImage } from '@/data/images';

interface ServiceLink {
  slug: string;
  title: string;
  shortTitle: string;
}

interface NearbyLink {
  slug: string;
  name: string;
}

function HeroLeadForm({ location, image }: { location: LocationData; image: { src: string; alt: string; width: number; height: number } | null }) {
  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
      {image && (
        <div className="relative w-full aspect-[4/3] border-b border-slate-100">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority
            sizes="(min-width: 1024px) 380px, 100vw"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-7 md:p-8">
        <div className="mb-5">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-2">
            Free matching
          </span>
          <h2 className="text-xl font-bold text-slate-900 leading-snug">
            Request a {location.name} clinician introduction
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            We will reply by email with the matched clinician name and consultation slot.
          </p>
        </div>
        <p className="text-xs text-slate-500 leading-relaxed mb-5">
          Postcodes covered: {location.postcodePrefixes.join(', ')}.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          Use the introduction button above or below to open the request form. The form takes about ninety seconds. We will reply within one working day.
        </p>
      </div>
    </div>
  );
}

export default function LocationSpokeClient({
  location,
  services,
  nearby,
}: {
  location: LocationData;
  services: ServiceLink[];
  nearby: NearbyLink[];
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroImage = locationImage(location.slug);

  return (
    <div className="min-h-screen bg-white text-slate-700">
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Navigation onOpenModal={() => setIsModalOpen(true)} />

      <main id="main">
        <section className="pt-28 pb-16 bg-gradient-to-b from-[#0d2750] to-[#0a1f40] text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-4">
              <Breadcrumbs items={locationCrumbs(location)} onDark />
            </div>
            <div className="grid lg:grid-cols-[1fr,380px] gap-10">
              <div>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[#7fb9e8] mb-3">
                  <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                  {location.district} · {location.postcodePrefixes.join(' · ')}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-5">
                  Dental implants in {location.name}
                </h1>
                <p className="text-base md:text-lg text-white/75 leading-relaxed mb-6 max-w-2xl">
                  {location.heroOpener}
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3.5 bg-[#1a56a0] text-white text-sm font-semibold rounded-md hover:bg-[#1d62b8] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7fb9e8]"
                >
                  Request a {location.name} introduction
                </button>
              </div>
              <div>
                <HeroLeadForm location={location} image={heroImage} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">
              Local context
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              About {location.name} and the implant patients we see here
            </h2>
            <div className="space-y-5 text-slate-700 leading-relaxed">
              {location.localContext.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#f5f8ff]">
          <div className="max-w-3xl mx-auto px-6">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">
              Why local matters
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              What is specific about implant work in {location.name}
            </h2>
            <div className="space-y-5 text-slate-700 leading-relaxed">
              {location.whyLocal.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">
              Neighbourhoods
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              {location.name} sub-areas covered by the matching panel
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {location.neighbourhoods.map((n, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-5">
                  <p className="text-sm font-semibold text-slate-900 mb-1">{n.name}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{n.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#f5f8ff]">
          <div className="max-w-3xl mx-auto px-6">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">
              Local entities and referrers
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              {location.name} dental and NHS context
            </h2>
            <ul className="space-y-3">
              {location.localEntities.map((entity, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#1a56a0] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-slate-700">{entity}</p>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 mt-6 leading-relaxed">
              We are an independent matching service and have no affiliation with the bodies listed. The list documents the local NHS, regulatory and transport context for {location.name} implant patients.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">
              What we cover
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              Implant treatments matched in {location.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/`}
                  className="group bg-white p-5 rounded-xl border border-slate-200 hover:border-[#1a56a0]/40 hover:shadow-sm transition-all"
                >
                  <p className="text-sm font-semibold text-slate-900 group-hover:text-[#1a56a0] transition-colors">
                    {service.shortTitle} in {location.name}
                  </p>
                  <p className="text-xs text-slate-500 mt-2">Read the {service.title.toLowerCase()} pillar</p>
                  <div className="flex items-center gap-2 text-[#1a56a0] text-xs font-semibold mt-4">
                    Read pillar <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FAQSection
          faqs={location.faqs}
          title={`${location.name} questions answered`}
          subtitle={`Questions specific to ${location.name} matching, not generic implant questions.`}
        />

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Nearby areas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {nearby.map((n) => (
                <Link
                  key={n.slug}
                  href={`/location/${n.slug}/`}
                  className="block px-4 py-3 rounded-xl bg-white border border-slate-200 hover:border-[#1a56a0]/40 hover:shadow-sm transition-all text-sm font-semibold text-slate-700"
                >
                  Dental implants in {n.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#0d2750] text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready for a {location.name} introduction?
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Free, independent, and editorial-team-run. We will reply within one working day with the matched clinician name.
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
