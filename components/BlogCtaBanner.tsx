'use client';

import React from 'react';

interface BlogCtaBannerProps {
  onOpenModal: () => void;
}

const BlogCtaBanner: React.FC<BlogCtaBannerProps> = ({ onOpenModal }) => {
  return (
    <div className="my-10 rounded-xl overflow-hidden border border-[#1a56a0]/20 bg-[#f5f8ff]">
      <div className="px-7 py-8 flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="w-11 h-11 rounded-md bg-[#eaf1fb] border border-[#1a56a0]/15 flex items-center justify-center text-xl flex-shrink-0">
          🦷
        </div>
        <div className="flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-1">Free Consultation</p>
          <h3 className="text-lg font-bold text-slate-900 mb-1">Ready to Transform Your Smile?</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            Book your free consultation with our Essex dental experts today. No obligation, just honest advice tailored to you.
          </p>
        </div>
        <div className="flex-shrink-0">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#0d2750] hover:bg-[#1a56a0] text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-95 whitespace-nowrap"
          >
            Book Free Consultation
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" /><path d="M7 7h10v10" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCtaBanner;
