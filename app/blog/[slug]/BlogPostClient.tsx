'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import LeadFormModal from '@/components/LeadFormModal';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SpokeHero } from '@/components/SpokeHero';
import { blogPostCrumbs } from '@/lib/breadcrumbs';
import { BlogPost } from '@/data/blog';
import { siteConfig } from '@/data/site';

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch {
    return iso;
  }
}

interface ServiceLink {
  slug: string;
  title: string;
  shortTitle: string;
}

interface LocationLink {
  slug: string;
  name: string;
}

interface HubLink {
  slug: string;
  title: string;
  shortTitle: string;
}

export default function BlogPostClient({
  post,
  hub,
  relatedServices,
  relatedLocations,
}: {
  post: BlogPost;
  hub: HubLink | null;
  relatedServices: ServiceLink[];
  relatedLocations: LocationLink[];
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const wordCount = post.paragraphs.join(' ').trim().split(/\s+/).length;
  const readMins = Math.max(3, Math.round(wordCount / 200));

  return (
    <div className="min-h-screen bg-white text-slate-700">
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Navigation onOpenModal={() => setIsModalOpen(true)} />

      <main id="main" className="pt-28 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          <div className="mb-4">
            <Breadcrumbs items={blogPostCrumbs(post)} />
          </div>
          <h1 className="sr-only">{post.title}</h1>
          <div className="my-6">
            <SpokeHero
              title={post.title}
              hubName={hub ? hub.title : null}
              hubSlug={post.hub}
              readMins={readMins}
            />
          </div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">{post.category}</p>
          <div className="flex flex-wrap items-center gap-4 mb-10 text-xs text-slate-500">
            <span>{siteConfig.editorial.teamName}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.publishedAt}>Published {formatDate(post.publishedAt)}</time>
            <span aria-hidden="true">·</span>
            <time dateTime={post.lastReviewedAt}>Last reviewed {formatDate(post.lastReviewedAt)}</time>
          </div>

          {hub && (
            <p className="mb-8 text-sm text-slate-600 bg-[#f5f8ff] border border-[#1a56a0]/15 rounded-xl px-5 py-4">
              Part of our guide to{' '}
              <Link href={`/guides/${hub.slug}/`} className="font-semibold text-[#1a56a0] underline">
                {hub.title.toLowerCase()}
              </Link>
              .
            </p>
          )}

          <div className="space-y-5 text-slate-700 leading-relaxed text-base">
            {post.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {(relatedServices.length > 0 || relatedLocations.length > 0) && (
            <div className="mt-12 p-6 rounded-2xl bg-[#f5f8ff] border border-[#1a56a0]/15">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">Related on this site</p>
              <ul className="space-y-2">
                {relatedServices.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}/`} className="text-sm text-slate-700 underline hover:text-[#1a56a0]">
                      {s.title} pillar
                    </Link>
                  </li>
                ))}
                {relatedLocations.map((l) => (
                  <li key={l.slug}>
                    <Link href={`/location/${l.slug}/`} className="text-sm text-slate-700 underline hover:text-[#1a56a0]">
                      Dental implants in {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-12 p-7 rounded-2xl bg-[#0d2750] text-white">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#7fb9e8] mb-2">Request an introduction</p>
            <h2 className="text-xl font-bold leading-snug mb-3">
              Looking for a verified Essex implant clinician?
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Free, independent matching to GDC-registered implant clinicians across Essex. Tell us the case in ninety seconds.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-[#1a56a0] text-white text-sm font-semibold rounded-md hover:bg-[#1d62b8] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7fb9e8]"
            >
              Request an introduction
            </button>
          </div>
        </article>

        {post.faqs && post.faqs.length > 0 && (
          <FAQSection
            faqs={post.faqs}
            title="Questions raised by this guide"
            subtitle="Common follow-up questions on this topic."
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
