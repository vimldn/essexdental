'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from '@/components/Icons';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import LeadFormModal from '@/components/LeadFormModal';
import Breadcrumbs from '@/components/Breadcrumbs';
import { blogPostCrumbs } from '@/lib/breadcrumbs';
import { BlogPost } from '@/data/blog';
import { siteConfig } from '@/data/site';
import { blogImage } from '@/data/images';

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

export default function BlogPostClient({
  post,
  relatedServices,
  relatedLocations,
}: {
  post: BlogPost;
  relatedServices: ServiceLink[];
  relatedLocations: LocationLink[];
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const featured = blogImage(post.slug);

  return (
    <div className="min-h-screen bg-white text-slate-700">
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Navigation onOpenModal={() => setIsModalOpen(true)} />

      <main id="main" className="pt-28 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          <div className="mb-4">
            <Breadcrumbs items={blogPostCrumbs(post)} />
          </div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">{post.category}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-5">
            {post.title}
          </h1>

          {featured && (
            <div className="my-8 relative rounded-2xl overflow-hidden border border-slate-200 aspect-[16/9]">
              <Image
                src={featured.src}
                alt={featured.alt}
                width={featured.width}
                height={featured.height}
                priority
                sizes="(min-width: 768px) 768px, 100vw"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="flex flex-wrap items-center gap-4 mb-10 text-xs text-slate-500">
            <span>{siteConfig.editorial.teamName}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.publishedAt}>Published {formatDate(post.publishedAt)}</time>
            <span aria-hidden="true">·</span>
            <time dateTime={post.lastReviewedAt}>Last reviewed {formatDate(post.lastReviewedAt)}</time>
          </div>

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
