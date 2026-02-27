'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-16 mb-24 text-sm font-medium text-slate-400">
          <div>
            <div className="flex items-center gap-3 text-slate-900 mb-8">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center font-black text-white">ID</div>
              <span className="text-2xl font-black">Essex Dental Implants</span>
            </div>
            <p>Independent referral facilitator connecting consumers with top-rated orthodontic specialists across the UK.</p>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-8 uppercase tracking-widest text-[10px]">Platform</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="hover:text-emerald-500 transition-colors">Services</Link></li>
              <li><Link href="/location" className="hover:text-emerald-500 transition-colors">Vetting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-8 uppercase tracking-widest text-[10px]">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="/blog" className="hover:text-emerald-500 transition-colors">Blog</Link></li>
              <li><Link href="/" className="hover:text-emerald-500 transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>
        <p className="text-center text-[10px] uppercase font-black tracking-widest text-slate-300">
          © 2024 Essex Dental Implants Referral Network. We are a facilitator, not a dental provider.
        </p>
      </div>
    </footer>
  );
}
