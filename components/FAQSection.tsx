'use client';

import React, { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection({
  faqs,
  title = 'Frequently asked questions',
  subtitle,
}: {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#f5f8ff]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">
            Common questions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{title}</h2>
          {subtitle && <p className="text-slate-500 text-base">{subtitle}</p>}
        </div>

        <div className="space-y-2">
          {faqs.map((faq, idx) => {
            const isOpen = active === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-colors duration-250 ${
                  isOpen ? 'bg-white border-[#1a56a0]/25' : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setActive((p) => (p === idx ? null : idx))}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus:ring-2 focus:ring-[#1a56a0]/40 rounded-xl"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm font-semibold transition-colors duration-250 ${isOpen ? 'text-[#1a56a0]' : 'text-slate-800'}`}>
                    {faq.question}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 transition-all duration-250 ${
                      isOpen ? 'bg-[#1a56a0] text-white rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                    aria-hidden="true"
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
                    transition: 'grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <p className="px-5 pb-5 text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
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
