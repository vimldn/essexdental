'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Shield, Sparkles, ChevronUp, CheckCircle, Globe, Users, Medal } from '@/components/Icons';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import LeadFormModal from '@/components/LeadFormModal';
import { FAQS_HOME } from '@/lib/data';

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#4caf7d] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
  </svg>
);

const CountUp: React.FC<{ end: number; suffix?: string; decimals?: number }> = ({ end, suffix = '', decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(start);
          }
        }, 16);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={elementRef}>
      {count.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}
    </span>
  );
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showMobileCTA, setShowMobileCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setShowScrollTop(scrollPos / height > 0.3);
      setShowMobileCTA(scrollPos > 140);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const parent = el.parentElement;
            if (parent) {
              const siblings = Array.from(parent.children).filter(
                (c) => c.classList.contains('reveal') || c.classList.contains('reveal-left') || c.classList.contains('reveal-right')
              );
              const idx = siblings.indexOf(el);
              el.style.transitionDelay = `${idx * 0.08}s`;
            }
            el.classList.add('in-view');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-white text-slate-700">
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Navigation onOpenModal={() => setIsModalOpen(true)} />

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 left-6 z-[70] w-11 h-11 bg-[#0d2750] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* Mobile sticky CTA bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-[60] md:hidden transition-transform duration-500 ${showMobileCTA ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="bg-[#0d2750] border-t border-white/10 px-4 py-3 flex items-center gap-3 safe-area-pb">
          <div className="flex-1 min-w-0">
            <p className="text-white font-bold text-sm leading-tight truncate">Ready to find your specialist?</p>
            <p className="text-white/55 text-xs">Free matching. No obligation.</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex-shrink-0 px-5 py-3 bg-[#1a56a0] hover:bg-[#1d62b8] text-white text-sm font-bold rounded-full shadow-lg active:scale-95 transition-all duration-200"
          >
            Find a Specialist
          </button>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0d2750]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/4687905/pexels-photo-4687905.jpeg"
            className="w-full h-full object-cover animate-slow-zoom"
            alt="Dental Implants UK"
            style={{ opacity: 0.12 }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d2750] via-[#0d2750]/97 to-[#060e1c]" />
        </div>

        {/* Top info strip */}
        <div className="relative z-10 bg-[#060e1c]/60 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-[11px] text-white/40 font-medium">
            <span>Independent referral network. Not a dental provider.</span>
            <span className="hidden sm:block">Free service. No obligation.</span>
          </div>
        </div>

        {/* Hero body */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 pt-12 pb-10 w-full">
            <div className="max-w-3xl space-y-6">

              {/* Live badge */}
              <div className="animate-fade-up-1 flex items-center gap-2.5">
                <div className="w-2 h-2 bg-[#4caf7d] rounded-full animate-blink flex-shrink-0" />
                <span className="text-[#4caf7d] text-xs font-bold uppercase tracking-widest">
                  Verified Specialist Network. Essex
                </span>
              </div>

              {/* H1 */}
              <h1 className="animate-fade-up-2 text-4xl sm:text-5xl lg:text-[4.5rem] font-black text-white leading-[1.05]">
                The Network For<br />
                <span className="text-[#7fb9e8]">Dental Implants</span><br />
                In Essex.
              </h1>

              {/* Sub */}
              <p className="animate-fade-up-3 text-base sm:text-lg text-white/60 max-w-xl font-medium leading-relaxed">
                Connecting patients with elite dental implant specialists for natural-looking, long-lasting tooth replacement solutions.
              </p>

              {/* CTAs - full width on mobile, auto on sm+ */}
              <div className="animate-fade-up-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="pulse-glow w-full sm:w-auto px-8 py-4 bg-[#1a56a0] text-white text-base font-bold rounded-full shadow-2xl hover:bg-[#1d62b8] active:scale-95 transition-all duration-200"
                >
                  Find My Specialist
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 bg-white/8 text-white text-base font-bold rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/15 active:scale-95 transition-all duration-200"
                >
                  Browse Specialists
                </button>
              </div>

              {/* Trust chips */}
              <div className="animate-fade-up-5 flex flex-wrap gap-x-5 gap-y-2 pt-1">
                {[
                  '100+ placements minimum',
                  'Advanced surgical training',
                  '3D imaging and guided surgery',
                  'Verifiable patient outcomes',
                ].map((chip) => (
                  <div key={chip} className="flex items-center gap-2 text-sm text-white/50">
                    <CheckIcon />
                    {chip}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar inside hero */}
        <div className="relative z-10 bg-white/5 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-7 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: 350, suffix: '+', label: 'Verified Partners' },
              { val: 12, suffix: 'k+', label: 'Matches' },
              { val: 4.95, suffix: '', decimals: 2, label: 'Rating' },
              { val: 0, label: 'Service', special: true },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-2xl sm:text-3xl font-black text-white">
                  {s.special ? 'FREE' : <CountUp end={s.val} suffix={s.suffix} decimals={s.decimals || 0} />}
                </p>
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="py-20 bg-[#f0f6ff]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14 space-y-4 reveal">
            <div className="inline-block px-3 py-1 bg-blue-100 text-[#1a56a0] text-[10px] font-black uppercase tracking-widest rounded-full">
              Why Implants
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">Why Choose Dental Implants?</h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto font-medium">
              The gold standard for tooth replacement. Permanent, natural-looking, and designed to last a lifetime.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <CheckCircle className="w-6 h-6" />, title: 'Natural Appearance', desc: 'Custom-crafted implant crowns match your natural teeth perfectly. Indistinguishable from real teeth in both look and feel.' },
              { icon: <Users className="w-6 h-6" />, title: 'Permanent Solution', desc: 'Unlike dentures or bridges, implants are permanently fused to your jawbone. No adhesives, no removal, no slipping.' },
              { icon: <Shield className="w-6 h-6" />, title: 'Preserve Bone Health', desc: 'Titanium implants stimulate jawbone growth, preventing bone loss that occurs with missing teeth. Maintains facial structure.' },
              { icon: <Sparkles className="w-6 h-6" />, title: 'Eat Anything', desc: 'Bite force comparable to natural teeth. Enjoy steak, apples, and all your favourite foods without restrictions or worry.' },
              { icon: <Calendar className="w-6 h-6" />, title: 'Lifetime Durability', desc: 'With proper care, dental implants can last 25+ years or a lifetime. The most cost-effective long-term tooth replacement option.' },
              { icon: <Globe className="w-6 h-6" />, title: 'Confidence Restored', desc: 'Smile, laugh, and speak without worrying about gaps, loose dentures, or damaged teeth. Feel truly confident again.' },
            ].map((item, i) => (
              <div key={i} className="reveal trust-card">
                <div className="w-11 h-11 rounded-xl bg-[#e8f2fc] flex items-center justify-center text-[#1a56a0] mb-5">
                  {item.icon}
                </div>
                <h3 className="text-base font-black text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14 space-y-4 reveal">
            <div className="inline-block px-3 py-1 bg-[#0d2750]/8 text-[#0d2750] text-[10px] font-black uppercase tracking-widest rounded-full">
              The Process
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">How It Works</h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto font-medium">
              Three simple steps to your perfect smile. We make finding the right specialist effortless.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {[
              { num: '01', title: 'Assessment', desc: 'Share your needs through our quick form. Tell us about your dental situation and location preferences.', icon: <Calendar className="w-6 h-6" /> },
              { num: '02', title: 'Match', desc: 'Our system identifies the best-qualified specialists in your area based on your specific requirements.', icon: <Shield className="w-6 h-6" /> },
              { num: '03', title: 'Referral', desc: 'Receive a direct referral for a free consultation and comprehensive treatment plan.', icon: <Sparkles className="w-6 h-6" /> },
            ].map((s, i) => (
              <div key={i} className="reveal bg-white rounded-2xl border border-slate-100 p-8 hover:border-[#1a56a0]/25 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-13 h-13 rounded-xl bg-[#0d2750] flex items-center justify-center text-white p-3">
                    {s.icon}
                  </div>
                  <span className="text-5xl font-black text-slate-100">{s.num}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONDITIONS ── */}
      <section className="py-20 bg-[#f0f6ff]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14 space-y-4 reveal">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">When You Need Dental Implants</h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto font-medium">
              From single tooth replacement to full arch restoration, our specialists handle every case with precision and care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Single Tooth', desc: 'Replace one missing tooth without affecting adjacent healthy teeth. Most common implant procedure.' },
              { title: 'Multiple Teeth', desc: 'Restore several missing teeth with individual implants or implant-supported bridges for stability.' },
              { title: 'Full Arch', desc: 'Replace an entire upper or lower arch with All-on-4 or All-on-6 implant-supported dentures.' },
              { title: 'Failed Teeth', desc: 'Extract severely damaged or decayed teeth and immediately replace with permanent implant solutions.' },
              { title: 'Denture Upgrade', desc: 'Convert removable dentures to implant-retained for superior stability, comfort, and confidence.' },
              { title: 'Bone Loss', desc: 'Advanced procedures including bone grafting and sinus lifts to enable implant placement despite bone loss.' },
              { title: 'Accident Trauma', desc: 'Restore teeth lost to injury or trauma with natural-looking, fully functional implant replacements.' },
              { title: 'Congenital Missing', desc: 'Replace teeth that never developed with permanent implant solutions for complete smile restoration.' },
            ].map((condition, i) => (
              <div key={i} className="reveal trust-card">
                <div className="w-2 h-2 bg-[#1a56a0] rounded-full mb-4" />
                <h3 className="text-base font-black text-slate-900 mb-2">{condition.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{condition.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALIST DIFFERENCE ── */}
      <section className="py-20 bg-[#0d2750]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="space-y-6 reveal-left">
              <div className="inline-block px-3 py-1.5 bg-white/10 text-white/75 text-[10px] font-black uppercase tracking-widest rounded-full border border-white/15">
                Elite Specialist Network
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                The <span className="text-[#7fb9e8]">Specialist</span> Difference
              </h2>
              <p className="text-white/60 text-lg font-medium leading-relaxed">
                Not all dentists place implants. Our network consists exclusively of verified specialists with advanced training and extensive experience.
              </p>
              <div className="space-y-4 pt-2">
                {[
                  'Minimum 100+ successful implant placements annually',
                  'Advanced surgical training in implantology and bone grafting',
                  'State-of-the-art 3D imaging and guided surgery technology',
                  'Proven track record with verifiable patient outcomes',
                  'Continuous education on latest implant systems and techniques',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#4caf7d]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon />
                    </div>
                    <p className="text-white/70 font-medium text-sm">{point}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-4 px-8 py-4 bg-[#1a56a0] text-white font-bold rounded-full shadow-xl hover:bg-[#1d62b8] active:scale-95 transition-all duration-200"
              >
                Find Your Specialist
              </button>
            </div>
            <div className="relative reveal-right">
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop"
                  alt="Dental Implant Specialist"
                  className="w-full h-[400px] object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-5 right-4 sm:-right-6 p-5 rounded-2xl bg-[#060e1c] border border-white/10 shadow-2xl">
                <div className="flex items-center gap-3">
                  <Medal className="w-7 h-7 text-[#7fb9e8]" />
                  <div>
                    <p className="text-2xl font-black text-white">350+</p>
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Vetted Specialists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQSection faqs={FAQS_HOME} />

      {/* ── FINAL CTA ── */}
      <section className="py-20 bg-[#0d2750]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-7 reveal">
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Ready for Your Permanent Smile?
          </h2>
          <p className="text-lg text-white/60 font-medium max-w-2xl mx-auto">
            Connect with a verified dental implant specialist in your area. Free consultation, expert care, and results that last a lifetime.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="pulse-glow inline-block px-10 py-5 bg-[#1a56a0] text-white text-lg font-bold rounded-full shadow-2xl hover:bg-[#1d62b8] active:scale-95 transition-all duration-200"
          >
            Get Matched with a Specialist
          </button>
          <p className="text-sm text-white/40 font-medium">
            No cost to use our service. Verified specialists only. Free consultation matching.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
