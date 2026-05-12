'use client';

import React, { useState } from 'react';

type FAQ = { question: string; answer: string } | { q: string; a: string };

interface FAQSectionProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const toggle = (idx: number) => setActiveIdx((prev) => (prev === idx ? null : idx));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-14 space-y-4">
          <div className="inline-block px-3 py-1 bg-[#e8f2fc] text-[#1a56a0] text-[10px] font-black uppercase tracking-widest rounded-full">
            FAQ
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 font-medium">
            Clear answers for your dental implant journey.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeIdx === idx;
            const question = 'q' in faq ? faq.q : faq.question;
            const answer   = 'a' in faq ? faq.a : faq.answer;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-colors duration-300 ${
                  isOpen
                    ? 'bg-[#f0f6ff] border-[#1a56a0]/25'
                    : 'bg-slate-50 border-slate-100 hover:border-[#1a56a0]/20'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base font-bold transition-colors duration-300 ${
                      isOpen ? 'text-[#1a56a0]' : 'text-slate-900'
                    }`}
                  >
                    {question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#1a56a0] text-white rotate-180 shadow-lg shadow-blue-900/15'
                        : 'bg-[#e8f2fc] text-[#1a56a0] rotate-0'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <p className="px-6 pb-6 text-slate-500 font-medium leading-relaxed text-sm">
                      {answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
