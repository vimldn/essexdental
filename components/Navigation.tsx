'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from './Icons';

interface NavigationProps {
  onOpenModal: () => void;
}

export default function Navigation({ onOpenModal }: NavigationProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const transparent = isHome && !scrolled;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-400 ${
          scrolled || !isHome
            ? 'glass-effect py-3 shadow-sm'
            : 'py-5'
        }`}
        style={transparent ? { background: 'transparent' } : undefined}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

          <Link href="/" className="flex items-center gap-3 group">
            <div className={`w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0 transition-colors ${scrolled || !isHome ? 'bg-slate-50' : 'bg-white/10'}`}>
              <Image
                src="/logo.png"
                alt="Essex Dental Implants"
                width={36}
                height={36}
                priority
                className="object-contain"
              />
            </div>
            <span className={`text-xl font-black tracking-tight transition-colors ${scrolled || !isHome ? 'text-slate-900' : 'text-white'}`}>
              Essex Dental Implants
            </span>
          </Link>

          {/* Desktop nav */}
          <div className={`hidden md:flex items-center space-x-9 text-sm font-semibold transition-colors ${scrolled || !isHome ? 'text-slate-600' : 'text-white/75'}`}>
            <Link href="/services" className={`hover:text-[#1a56a0] transition-colors ${pathname === '/services' ? 'text-[#1a56a0]' : ''}`}>
              Services
            </Link>
            <Link href="/location" className={`hover:text-[#1a56a0] transition-colors ${pathname === '/location' ? 'text-[#1a56a0]' : ''}`}>
              Location
            </Link>
            <Link href="/blog" className={`hover:text-[#1a56a0] transition-colors ${pathname === '/blog' ? 'text-[#1a56a0]' : ''}`}>
              Blog
            </Link>
            <button
              onClick={onOpenModal}
              className="px-6 py-2.5 bg-[#1a56a0] text-white rounded-full font-bold shadow-lg shadow-blue-900/20 hover:bg-[#1d62b8] active:scale-95 transition-all duration-200"
            >
              Find a Specialist
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
            className={`md:hidden p-2 rounded-xl transition-colors ${scrolled || !isHome ? 'bg-slate-100 text-slate-600' : 'bg-white/10 text-white'}`}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-[#0d2750]/40 backdrop-blur-sm transition-opacity duration-400 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 h-full w-[70%] max-w-xs bg-white border-l border-slate-100 flex flex-col transition-transform duration-400 shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-slate-100">
            <span className="font-black text-slate-900 text-sm">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-slate-50 text-slate-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex flex-col p-4 gap-1 flex-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/services', label: 'Services' },
              { href: '/location', label: 'Location' },
              { href: '/blog', label: 'Blog' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50 rounded-xl transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="p-4 border-t border-slate-100">
            <button
              onClick={() => { onOpenModal(); setIsMobileMenuOpen(false); }}
              className="w-full py-3.5 bg-[#1a56a0] text-white font-bold rounded-full text-sm hover:bg-[#1d62b8] active:scale-95 transition-all"
            >
              Find a Specialist
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
