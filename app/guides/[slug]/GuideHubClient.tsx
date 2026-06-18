'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle } from '@/components/Icons';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import LeadFormModal from '@/components/LeadFormModal';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SpokeHero } from '@/components/SpokeHero';
import { guideCrumbs } from '@/lib/breadcrumbs';
import { GuideData } from '@/data/guides';

function renderInline(text: string) {
  const regex = /\[([^\]]+)\]\(((?:\/|https?:\/\/)[^)]+)\)/g;
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    const href = match[2];
    if (href.startsWith('http')) {
      nodes.push(
        <a
          key={key++}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#1a56a0] underline underline-offset-2"
        >
          {match[1]}
        </a>,
      );
    } else {
      nodes.push(
        <Link key={key++} href={href} className="font-semibold text-[#1a56a0] underline underline-offset-2">
          {match[1]}
        </Link>,
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes.length > 0 ? nodes : text;
}

function renderContentBlock(block: NonNullable<GuideData['content']>[number], index: number) {
  switch (block.type) {
    case 'answer':
      return (
        <div key={index} className="mb-6 rounded-2xl border border-[#1a56a0]/20 bg-[#eef6ff] p-5">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-2">Direct answer</p>
          <p className="text-base leading-relaxed text-slate-800">{renderInline(block.text)}</p>
        </div>
      );
    case 'h2':
      return (
        <h2 key={index} className="text-2xl md:text-3xl font-bold tracking-tight text-slate-950 mt-12 mb-4 border-b border-slate-200 pb-3">
          {renderInline(block.text)}
        </h2>
      );
    case 'h3':
      return (
        <h3 key={index} className="text-xl font-bold text-slate-900 mt-8 mb-3">
          {renderInline(block.text)}
        </h3>
      );
    case 'list':
      return (
        <ul key={index} className="space-y-3 my-6">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-slate-700 leading-relaxed">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#1a56a0] shrink-0" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );
    case 'note':
      return (
        <div key={index} className="my-8 rounded-2xl border border-[#1a56a0]/15 bg-[#f5f8ff] p-5">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-2">{block.heading}</p>
          <p className="text-sm leading-relaxed text-slate-700">{renderInline(block.body)}</p>
        </div>
      );
    case 'p':
    default:
      return (
        <p key={index} className="text-slate-700 leading-relaxed">
          {renderInline(block.text)}
        </p>
      );
  }
}

function GuideCta({ onClick }: { onClick: () => void }) {
  return (
    <div className="my-10 p-7 rounded-2xl bg-[#0d2750] text-white">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-[#7fb9e8] mb-2">Request an introduction</p>
      <h2 className="text-xl font-bold leading-snug mb-3">Find an Essex Implant Clinician Who Fits the Case</h2>
      <p className="text-white/70 text-sm leading-relaxed mb-5">
        Free, independent matching to GDC-registered implant clinicians across Essex. Tell us what you need replacing and we will point you to a suitable consultation.
      </p>
      <button
        onClick={onClick}
        className="px-6 py-3 bg-[#1a56a0] text-white text-sm font-semibold rounded-md hover:bg-[#1d62b8] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7fb9e8]"
      >
        Request an introduction
      </button>
    </div>
  );
}

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

export default function GuideHubClient({
  guide,
  liveSpokes,
  services,
  adjacentHubs,
}: {
  guide: GuideData;
  liveSpokes: SpokeLink[];
  services: PillarLink[];
  adjacentHubs: HubLink[];
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const contentWords = guide.content
    ? guide.content
        .map((block) => {
          if (block.type === 'list') return block.items.join(' ');
          if (block.type === 'note') return `${block.heading} ${block.body}`;
          return block.text;
        })
        .join(' ')
        .trim()
        .split(/\s+/).length
    : 0;
  const guideWords =
    contentWords ||
    guide.keyPoints.join(' ').trim().split(/\s+/).length +
      guide.sections.reduce(
        (sum, s) => sum + s.paragraphs.join(' ').trim().split(/\s+/).length,
        0,
      );
  const readMins = Math.max(3, Math.round(guideWords / 200));
  const orderedContent = guide.content
    ? (() => {
        const [first, ...rest] = guide.content;
        if (first?.type !== 'answer') return guide.content;
        const introCount = rest.findIndex((block) => block.type !== 'p');
        const intro = introCount === -1 ? rest : rest.slice(0, introCount);
        const remainder = introCount === -1 ? [] : rest.slice(introCount);
        return [...intro, first, ...remainder];
      })()
    : null;
  const orderedFirstH2Index = orderedContent?.findIndex((block) => block.type === 'h2') ?? -1;
  const orderedNextH2Index = orderedFirstH2Index >= 0
    ? orderedContent?.findIndex((block, index) => index > orderedFirstH2Index && block.type === 'h2') ?? -1
    : -1;
  const orderedCtaInsertIndex = orderedContent
    ? (orderedNextH2Index >= 0 ? orderedNextH2Index : orderedContent.length)
    : -1;

  return (
    <div className="min-h-screen bg-white text-slate-700">
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Navigation onOpenModal={() => setIsModalOpen(true)} />

      <main id="main">
        <section className="pt-28 pb-4 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="mb-4">
              <Breadcrumbs items={guideCrumbs(guide)} />
            </div>
            <h1 className="sr-only">{guide.title}</h1>
            <SpokeHero
              title={guide.title}
              hubName="Guide"
              hubSlug={guide.slug}
              readMins={readMins}
            />
            {!guide.content && (
              <>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0]">
                  {guide.heroBadge}
                </p>
                <p className="mt-4 text-base md:text-lg text-slate-700 leading-relaxed">
                  {guide.heroDirectAnswer}
                </p>
              </>
            )}
          </div>
        </section>

        {!guide.content && (
          <section className="py-10 bg-white">
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
        )}

        {orderedContent ? (
          <section className="pt-0 pb-14 bg-white">
            <div className="max-w-3xl mx-auto px-6">
              <div className="space-y-5">
                {orderedContent.flatMap((block, i) => (
                  i === orderedCtaInsertIndex
                    ? [<GuideCta key="intro-cta" onClick={() => setIsModalOpen(true)} />, renderContentBlock(block, i)]
                    : [renderContentBlock(block, i)]
                ))}
                {orderedCtaInsertIndex === orderedContent.length && (
                  <GuideCta onClick={() => setIsModalOpen(true)} />
                )}
              </div>
            </div>
          </section>
        ) : (
          guide.sections.map((section, i) => (
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
          ))
        )}

        {/* Feeds: services + adjacent guides */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            {adjacentHubs.length > 0 && (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Related implant decisions</h2>
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
