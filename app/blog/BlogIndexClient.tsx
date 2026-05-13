'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from '@/components/Icons';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LeadFormModal from '@/components/LeadFormModal';
import Breadcrumbs from '@/components/Breadcrumbs';
import { blogIndexCrumbs } from '@/lib/breadcrumbs';

interface PostCard {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  lastReviewedAt: string;
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch {
    return iso;
  }
}

export default function BlogIndexClient({ posts }: { posts: PostCard[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [category, setCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const all = new Set<string>();
    posts.forEach((p) => all.add(p.category));
    return ['All', ...Array.from(all)];
  }, [posts]);

  const filtered = useMemo(() => {
    if (category === 'All') return posts;
    return posts.filter((p) => p.category === category);
  }, [posts, category]);

  return (
    <div className="min-h-screen bg-white text-slate-700">
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Navigation onOpenModal={() => setIsModalOpen(true)} />

      <main id="main" className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-4">
            <Breadcrumbs items={blogIndexCrumbs()} />
          </div>
          <div className="max-w-3xl mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-5">
              Dental implant guides for Essex patients
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Reference-grade guides on cost, planning, maintenance and decision-making, edited for UK private dentistry and the Essex matching panel.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                  category === c
                    ? 'bg-[#0d2750] text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#1a56a0]/40 hover:shadow-md transition-all flex flex-col"
              >
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">
                  {post.category}
                </p>
                <h2 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#1a56a0] transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <time className="text-xs text-slate-500" dateTime={post.lastReviewedAt}>
                    Reviewed {formatDate(post.lastReviewedAt)}
                  </time>
                  <ArrowUpRight className="w-4 h-4 text-[#1a56a0]" />
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
