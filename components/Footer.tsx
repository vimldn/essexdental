'use client';

import React from 'react';
import Link from 'next/link';
import { SERVICES, LOCATIONS } from '@/lib/data';

export default function Footer() {
  const allCities = Object.values(LOCATIONS).flat();
  const topCities = allCities.slice(0, 12);

  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top row: Brand + columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 text-slate-900 mb-5">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center font-black text-white text-sm">ID</div>
              <span className="text-xl font-black">Essex Dental Implants</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              Independent referral network connecting patients with verified dental implant specialists across Essex and the wider UK. Free matching service — no obligation.
            </p>
            <p className="text-xs text-slate-300 font-medium">
              Trusted by 12,000+ patients since 2020
            </p>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-slate-900 font-bold mb-5 uppercase tracking-widest text-[10px]">Treatments</h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.id}`} className="text-sm text-slate-400 hover:text-emerald-500 transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Locations */}
          <div>
            <h4 className="text-slate-900 font-bold mb-5 uppercase tracking-widest text-[10px]">Popular Locations</h4>
            <ul className="space-y-3">
              {topCities.map((city) => {
                const slug = city.toLowerCase().replace(/\s+/g, '-');
                return (
                  <li key={city}>
                    <Link href={`/location/${slug}`} className="text-sm text-slate-400 hover:text-emerald-500 transition-colors">
                      Dental Implants in {city}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-slate-900 font-bold mb-5 uppercase tracking-widest text-[10px]">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-sm text-slate-400 hover:text-emerald-500 transition-colors">Blog & Guides</Link></li>
              <li><Link href="/services" className="text-sm text-slate-400 hover:text-emerald-500 transition-colors">All Treatments</Link></li>
              <li><Link href="/location" className="text-sm text-slate-400 hover:text-emerald-500 transition-colors">All Locations</Link></li>
              <li><Link href="/#faq" className="text-sm text-slate-400 hover:text-emerald-500 transition-colors">FAQ</Link></li>
            </ul>

            <h4 className="text-slate-900 font-bold mt-8 mb-5 uppercase tracking-widest text-[10px]">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/services/single-tooth" className="text-sm text-slate-400 hover:text-emerald-500 transition-colors">Single Tooth Cost UK</Link></li>
              <li><Link href="/services/full-arch" className="text-sm text-slate-400 hover:text-emerald-500 transition-colors">All-on-4 Implants Essex</Link></li>
              <li><Link href="/services/immediate-implants" className="text-sm text-slate-400 hover:text-emerald-500 transition-colors">Same Day Implants</Link></li>
            </ul>
          </div>
        </div>

        {/* SEO-rich location links bar */}
        <div className="border-t border-slate-200 pt-8 mb-8">
          <h4 className="text-slate-900 font-bold mb-4 uppercase tracking-widest text-[10px]">Dental Implants Near You</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {allCities.map((city) => {
              const slug = city.toLowerCase().replace(/\s+/g, '-');
              return (
                <Link key={city} href={`/location/${slug}`} className="text-xs text-slate-300 hover:text-emerald-500 transition-colors">
                  {city}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] uppercase font-black tracking-widest text-slate-300">
            © {new Date().getFullYear()} Essex Dental Implants. Independent referral facilitator — not a dental provider.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-[10px] uppercase font-bold tracking-widest text-slate-300 hover:text-emerald-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="text-[10px] uppercase font-bold tracking-widest text-slate-300 hover:text-emerald-500 transition-colors">
              Terms
            </Link>
            <Link href="/blog" className="text-[10px] uppercase font-bold tracking-widest text-slate-300 hover:text-emerald-500 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
