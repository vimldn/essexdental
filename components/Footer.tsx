'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Papa from 'papaparse';
import { SERVICES, LOCATIONS } from '@/lib/data';

interface Article {
  'Article Title': string;
  'Slug': string;
  'Article Content': string;
  'wp_category': string;
}

const slugify = (s: string) =>
  (s || '').toLowerCase().trim().replace(/['"]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const makeUniqueSlug = (base: string, used: Set<string>) => {
  const cleanBase = base && base.length ? base : 'post';
  let slug = cleanBase;
  let i = 2;
  while (used.has(slug)) slug = `${cleanBase}-${i++}`;
  used.add(slug);
  return slug;
};

export default function Footer() {
  const allCities = Object.values(LOCATIONS).flat();
  const topCities = allCities.slice(0, 12);
  const [latestArticles, setLatestArticles] = useState<{ title: string; slug: string }[]>([]);

  useEffect(() => {
    fetch('/articles.csv')
      .then((r) => r.text())
      .then((csvText) => {
        Papa.parse<Article>(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const usedSlugs = new Set<string>();
            const today = new Date();
            const startDate = new Date('2026-02-10T00:00:00');
            const articlesPerDay = 3;
            const published = (results.data || [])
              .filter((a) => a && a['Article Title'] && a['Article Title'].trim())
              .map((a, index) => {
                const dayOffset = Math.floor(index / articlesPerDay);
                const publishDate = new Date(startDate);
                publishDate.setDate(publishDate.getDate() + dayOffset);
                const baseSlug = (a['Slug'] || '').trim() || slugify(a['Article Title']);
                const uniqueSlug = makeUniqueSlug(baseSlug, usedSlugs);
                return { title: a['Article Title'], slug: uniqueSlug, publishDate };
              })
              .filter((a) => a.publishDate <= today);
            const latest = published.slice(-3).reverse();
            setLatestArticles(latest.map((a) => ({ title: a.title, slug: a.slug })));
          },
        });
      })
      .catch(() => {});
  }, []);

  return (
    <footer className="bg-[#060e1c] pt-16 pb-10 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-[#1a56a0] rounded-xl flex items-center justify-center font-black text-white text-xs">ID</div>
              <span className="text-lg font-black text-white">Essex Dental Implants</span>
            </div>
            <p className="text-sm text-white/35 leading-relaxed mb-5">
              Independent referral network connecting patients with verified dental implant specialists across Essex and the wider UK. Free matching service — no obligation.
            </p>
            <p className="text-xs text-white/20 font-medium">Trusted by 12,000+ patients since 2020</p>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-[10px]">Treatments</h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.id}`} className="text-sm text-white/35 hover:text-[#7fb9e8] transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-[10px]">Popular Locations</h4>
            <ul className="space-y-3">
              {topCities.map((city) => {
                const slug = city.toLowerCase().replace(/\s+/g, '-');
                return (
                  <li key={city}>
                    <Link href={`/location/${slug}`} className="text-sm text-white/35 hover:text-[#7fb9e8] transition-colors">
                      Dental Implants in {city}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Resources + Articles */}
          <div>
            <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-[10px]">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/blog"     className="text-sm text-white/35 hover:text-[#7fb9e8] transition-colors">Blog &amp; Guides</Link></li>
              <li><Link href="/services" className="text-sm text-white/35 hover:text-[#7fb9e8] transition-colors">All Treatments</Link></li>
              <li><Link href="/location" className="text-sm text-white/35 hover:text-[#7fb9e8] transition-colors">All Locations</Link></li>
              <li><Link href="/#faq"     className="text-sm text-white/35 hover:text-[#7fb9e8] transition-colors">FAQ</Link></li>
            </ul>
            {latestArticles.length > 0 && (
              <>
                <h4 className="text-white font-bold mt-8 mb-5 uppercase tracking-widest text-[10px]">Latest Articles</h4>
                <ul className="space-y-3">
                  {latestArticles.map((article) => (
                    <li key={article.slug}>
                      <Link href={`/blog/${article.slug}`} className="text-sm text-white/35 hover:text-[#7fb9e8] transition-colors line-clamp-2 leading-snug">
                        {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        {/* Location pills */}
        <div className="border-t border-white/8 pt-8 mb-8">
          <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-[10px]">Dental Implants Near You</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {allCities.map((city) => {
              const slug = city.toLowerCase().replace(/\s+/g, '-');
              return (
                <Link key={city} href={`/location/${slug}`} className="text-xs text-white/20 hover:text-[#7fb9e8] transition-colors">
                  {city}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] uppercase font-black tracking-widest text-white/20">
            &copy; {new Date().getFullYear()} Essex Dental Implants. Independent referral facilitator. Not a dental provider.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/"     className="text-[10px] uppercase font-bold tracking-widest text-white/20 hover:text-[#7fb9e8] transition-colors">Privacy Policy</Link>
            <Link href="/"     className="text-[10px] uppercase font-bold tracking-widest text-white/20 hover:text-[#7fb9e8] transition-colors">Terms</Link>
            <Link href="/blog" className="text-[10px] uppercase font-bold tracking-widest text-white/20 hover:text-[#7fb9e8] transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
