'use client';

import React from 'react';

interface BlogCtaBannerProps {
  onOpenModal: () => void;
}

const BlogCtaBanner: React.FC<BlogCtaBannerProps> = ({ onOpenModal }) => {
  return (
    <div className="my-10 rounded-2xl overflow-hidden border border-[#1a56a0]/20 bg-gradient-to-br from-[#f0f6ff] via-white to-slate-50 shadow-md">
      <div className="px-8 py-10 md:px-10 md:py-10 flex flex-col md:flex-row items-center gap-7">

        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#e8f2fc] border border-[#1a56a0]/15 flex items-center justify-center text-2xl">
          🦷
        </div>

        <div className="flex-1 text-center md:text-left">
          <p className="text-xs font-black uppercase tracking-widest text-[#1a56a0] mb-1.5">
            Free Consultation
          </p>
          <h3 className="text-2xl font-black text-slate-900 leading-tight mb-2">
            Ready to Transform Your Smile?
          </h3>
          <p className="text-slate-500 font-medium leading-relaxed text-sm">
            Book your free consultation with our Essex dental experts today. No obligation, just honest advice tailored to you.
          </p>
        </div>

        <div className="flex-shrink-0">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#1a56a0] hover:bg-[#1d62b8] text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-blue-900/15 hover:shadow-blue-900/25 hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            Book Free Consultation
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" /><path d="M7 7h10v10" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCtaBanner;
