'use client';

import React from 'react';

interface BlogCtaBannerProps {
  onOpenModal: () => void;
}

const BlogCtaBanner: React.FC<BlogCtaBannerProps> = ({ onOpenModal }) => {
  return (
    <div className="my-10 rounded-3xl overflow-hidden border border-emerald-500/30 bg-gradient-to-br from-emerald-950/60 via-slate-900 to-slate-950 shadow-2xl">
      <div className="px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center gap-8">
        {/* Icon */}
        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-3xl">
          🦷
        </div>

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-xs font-black uppercase tracking-widest text-emerald-400 mb-2">
            Free Consultation
          </p>
          <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2">
            Ready to Transform Your Smile?
          </h3>
          <p className="text-slate-300 font-medium leading-relaxed">
            Book your free consultation with our Essex dental experts today. No obligation — just honest advice tailored to you.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex-shrink-0">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/40 hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            Book Free Consultation
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCtaBanner;
