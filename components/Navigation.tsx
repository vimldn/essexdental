'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { X } from './Icons';
import { siteConfig } from '@/data/site';

interface NavigationProps {
  onOpenModal: () => void;
}

const HamburgerIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const LINKS = [
  { href: '/services/', label: 'Services' },
  { href: '/location/', label: 'Areas' },
  { href: '/blog/', label: 'Guides' },
  { href: '/about/', label: 'About' },
];

export default function Navigation({ onOpenModal }: NavigationProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const onDark = isHome && !scrolled;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-[#0d2750] focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm"
      >
        Skip to content
      </a>
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled || !isHome
            ? 'bg-white border-b border-slate-200 py-3 shadow-sm'
            : 'bg-transparent border-b border-white/10 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div
              className={`w-9 h-9 rounded-md overflow-hidden flex items-center justify-center flex-shrink-0 ${
                onDark ? 'bg-white/15' : 'bg-slate-100'
              }`}
            >
              <Image
                src="/logo.png"
                alt=""
                width={36}
                height={36}
                priority
                className="object-contain"
              />
            </div>
            <span className={`text-[15px] font-semibold tracking-tight ${onDark ? 'text-white' : 'text-slate-900'}`}>
              {siteConfig.name}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {LINKS.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-medium transition-colors ${
                    active
                      ? onDark ? 'text-[#7fb9e8]' : 'text-[#1a56a0]'
                      : onDark ? 'text-white/70 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block flex-shrink-0">
            <button
              onClick={onOpenModal}
              className={`px-5 py-2.5 text-sm font-semibold rounded-md transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a56a0]/40 ${
                onDark
                  ? 'bg-[#1a56a0] text-white hover:bg-[#1d62b8]'
                  : 'bg-[#0d2750] text-white hover:bg-[#1a56a0]'
              }`}
            >
              Request introduction
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
            className={`md:hidden p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a56a0]/40 ${
              onDark ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <HamburgerIcon />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] bg-[#0d2750]/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`absolute top-0 right-0 h-full w-72 bg-white flex flex-col transition-transform duration-300 shadow-2xl ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <span className="font-semibold text-slate-900 text-sm tracking-tight">{siteConfig.name}</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1.5 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#1a56a0]/40"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex flex-col p-4 gap-0.5 flex-1">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                pathname === '/' ? 'text-[#1a56a0] bg-blue-50' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>
            {LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  pathname === href || pathname.startsWith(href)
                    ? 'text-[#1a56a0] bg-blue-50'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="p-4 border-t border-slate-100">
            <button
              onClick={() => {
                onOpenModal();
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-[#0d2750] text-white font-semibold rounded-md text-sm hover:bg-[#1a56a0] active:scale-95 transition-all"
            >
              Request introduction
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
