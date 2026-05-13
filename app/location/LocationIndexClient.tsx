'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Globe } from '@/components/Icons';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LeadFormModal from '@/components/LeadFormModal';
import Breadcrumbs from '@/components/Breadcrumbs';
import { locationIndexCrumbs } from '@/lib/breadcrumbs';
import { locationImage } from '@/data/images';

interface LocationCard {
  slug: string;
  name: string;
  district: string;
  postcodes: readonly string[];
}

export default function LocationIndexClient({ locations }: { locations: LocationCard[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query) return locations;
    const q = query.toLowerCase();
    return locations.filter(
      (l) =>
        l.name.toLowerCase().includes(q) ||
        l.district.toLowerCase().includes(q) ||
        l.postcodes.some((p) => p.toLowerCase().includes(q))
    );
  }, [locations, query]);

  return (
    <div className="min-h-screen bg-white text-slate-700">
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Navigation onOpenModal={() => setIsModalOpen(true)} />

      <main id="main" className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-4">
            <Breadcrumbs items={locationIndexCrumbs()} />
          </div>
          <div className="max-w-3xl mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-5">
              Essex implant matching panel coverage
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Twelve Essex towns with active clinician panels. Each location page covers the postcode catchment, named neighbourhoods, local NHS context and the questions specific to that area.
            </p>
          </div>

          <div className="max-w-lg mb-10 relative">
            <label htmlFor="location-search" className="sr-only">
              Search by town or postcode
            </label>
            <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" aria-hidden="true" />
            <input
              id="location-search"
              type="search"
              placeholder="Search by town or postcode prefix…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-md pl-11 pr-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#1a56a0] focus:ring-2 focus:ring-[#1a56a0]/20"
            />
          </div>

          {filtered.length === 0 ? (
            <p className="text-sm text-slate-500">
              No matching town found. The matching panel currently covers Essex towns only. Use the form below to request an introduction with details of your postcode.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((location) => {
                const img = locationImage(location.slug);
                return (
                  <Link
                    key={location.slug}
                    href={`/location/${location.slug}/`}
                    className="group bg-white rounded-2xl border border-slate-200 hover:border-[#1a56a0]/40 hover:shadow-md transition-all overflow-hidden"
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
                    <div className="p-6">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-2">
                        {location.district}
                      </p>
                      <h2 className="text-lg font-bold text-slate-900 group-hover:text-[#1a56a0] transition-colors">
                        {location.name}
                      </h2>
                      <p className="text-xs text-slate-500 mt-2 font-medium">
                        {location.postcodes.join(' · ')}
                      </p>
                      <div className="flex items-center gap-2 text-[#1a56a0] text-sm font-semibold mt-5">
                        Read location page <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
