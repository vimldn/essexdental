'use client';

import React, { useState } from 'react';

type FAQ = { question: string; answer: string } | { q: string; a: string };

interface FAQSectionProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Frequently Asked Questions</h2>
          <p className="text-slate-400 font-medium">Clear answers for your dental implant journey.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-item dark-card rounded-3xl border border-white/5 cursor-default group ${
                activeFaq === idx
                  ? 'active bg-slate-800/80 border-emerald-500/30 shadow-emerald-500/5'
                  : 'hover:border-emerald-500/20 shadow-xl'
              }`}
              onMouseEnter={() => setActiveFaq(idx)}
              onMouseLeave={() => setActiveFaq(null)}
            >
              <div className="p-6 flex items-center justify-between">
                <h3
                  className={`text-lg font-bold transition-colors duration-300 ${
                    activeFaq === idx ? 'text-emerald-400' : 'text-white'
                  }`}
                >
                  {'q' in faq ? faq.q : faq.question}
                </h3>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${
                    activeFaq === idx
                      ? 'rotate-180 bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                      : 'bg-emerald-500/10 text-emerald-400'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div className="faq-answer px-6 pb-6">
                <p className="text-slate-400 font-medium leading-relaxed">{'a' in faq ? faq.a : faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
