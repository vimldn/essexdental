'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Shield, Sparkles, ChevronUp, CheckCircle, Globe, Users, Medal } from '@/components/Icons';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import LeadFormModal from '@/components/LeadFormModal';
import { FAQS_HOME } from '@/lib/data';

const Tick = () => (
  <svg className="w-3.5 h-3.5 text-[#4caf7d] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
  </svg>
);

const CountUp: React.FC<{ end: number; suffix?: string; decimals?: number }> = ({ end, suffix = '', decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let start = 0;
    const inc = end / (2000 / 16);
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const t = setInterval(() => {
          start += inc;
          if (start >= end) { setCount(end); clearInterval(t); } else { setCount(start); }
        }, 16);
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{count.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}</span>;
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop]   = useState(false);
  const [showMobileCTA, setShowMobileCTA]   = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const s = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setShowScrollTop(s / h > 0.3);
      setShowMobileCTA(s > 160);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const siblings = Array.from(el.parentElement?.children ?? []).filter(
          (c) => c.classList.contains('reveal') || c.classList.contains('reveal-left') || c.classList.contains('reveal-right')
        );
        el.style.transitionDelay = `${siblings.indexOf(el) * 0.07}s`;
        el.classList.add('in-view');
        obs.unobserve(el);
      });
    }, { threshold: 0.07 });
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-700">
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Navigation onOpenModal={() => setIsModalOpen(true)} />

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className={`fixed bottom-6 left-5 z-[70] w-10 h-10 bg-[#0d2750] text-white rounded-md flex items-center justify-center shadow-lg transition-all duration-400 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}`}
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* Mobile sticky CTA */}
      <div className={`fixed bottom-0 left-0 right-0 z-[60] md:hidden transition-transform duration-400 ${showMobileCTA ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="bg-[#0d2750] border-t border-white/10 px-4 py-3 flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm leading-tight">Ready to find your specialist?</p>
            <p className="text-white/50 text-xs mt-0.5">Free matching. No obligation.</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex-shrink-0 px-5 py-2.5 bg-[#1a56a0] text-white text-sm font-semibold rounded-md active:scale-95 transition-all duration-200"
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
            alt="Dental Implants"
            style={{ opacity: 0.1 }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0d2750 0%, #0a1f40 60%, #060e1c 100%)' }} />
        </div>

        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full pt-28 pb-12">
            <div className="max-w-2xl">

              {/* Live indicator */}
              <div className="animate-fade-up-1 flex items-center gap-2.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#4caf7d] animate-blink flex-shrink-0" />
                <span className="text-white/60 text-xs font-medium uppercase tracking-widest">
                  Verified Specialist Network. Essex
                </span>
              </div>

              {/* H1 */}
              <h1 className="animate-fade-up-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
                The Network For<br />
                <span style={{ color: '#7fb9e8' }}>Dental Implants</span><br />
                In Essex.
              </h1>

              {/* Sub */}
              <p className="animate-fade-up-3 text-base text-white/55 max-w-lg font-normal leading-relaxed mb-8">
                Connecting patients with elite dental implant specialists for natural-looking, long-lasting tooth replacement solutions.
              </p>

              {/* CTAs */}
              <div className="animate-fade-up-4 flex flex-col sm:flex-row gap-3 mb-10">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="pulse-glow w-full sm:w-auto px-7 py-3.5 bg-[#1a56a0] text-white text-sm font-semibold rounded-md hover:bg-[#1d62b8] active:scale-95 transition-all duration-200"
                >
                  Find My Specialist
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto px-7 py-3.5 text-white/80 text-sm font-semibold rounded-md border border-white/20 hover:border-white/40 hover:text-white active:scale-95 transition-all duration-200"
                >
                  Browse Specialists
                </button>
              </div>

              {/* Trust chips */}
              <div className="animate-fade-up-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                {[
                  '100+ placements minimum',
                  'Advanced surgical training',
                  '3D imaging and guided surgery',
                  'Verifiable patient outcomes',
                ].map((chip) => (
                  <div key={chip} className="flex items-center gap-2.5 text-sm text-white/50">
                    <Tick />
                    {chip}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: 350, suffix: '+', label: 'Verified Partners' },
              { val: 12,  suffix: 'k+', label: 'Matches Made' },
              { val: 4.95, suffix: '', decimals: 2, label: 'Average Rating' },
              { special: true, label: 'Referral Service' },
            ].map((s, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="text-2xl font-bold text-white">
                  {s.special ? 'FREE' : <CountUp end={s.val!} suffix={s.suffix} decimals={s.decimals || 0} />}
                </p>
                <p className="text-[11px] font-medium text-white/35 uppercase tracking-widest mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="py-20 bg-[#f5f8ff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 reveal">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">Why Implants</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Dental Implants?</h2>
            <p className="text-slate-500 text-base max-w-xl leading-relaxed">
              The gold standard for tooth replacement. Permanent, natural-looking, and designed to last a lifetime.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <CheckCircle className="w-5 h-5" />, title: 'Natural Appearance', desc: 'Custom-crafted implant crowns match your natural teeth perfectly. Indistinguishable from real teeth in both look and feel.' },
              { icon: <Users className="w-5 h-5" />,        title: 'Permanent Solution',  desc: 'Unlike dentures or bridges, implants are permanently fused to your jawbone. No adhesives, no removal, no slipping.' },
              { icon: <Shield className="w-5 h-5" />,       title: 'Preserve Bone Health', desc: 'Titanium implants stimulate jawbone growth, preventing bone loss that occurs with missing teeth. Maintains facial structure.' },
              { icon: <Sparkles className="w-5 h-5" />,     title: 'Eat Anything',          desc: 'Bite force comparable to natural teeth. Enjoy steak, apples, and all your favourite foods without restrictions or worry.' },
              { icon: <Calendar className="w-5 h-5" />,     title: 'Lifetime Durability',   desc: 'With proper care, dental implants can last 25+ years or a lifetime. The most cost-effective long-term tooth replacement option.' },
              { icon: <Globe className="w-5 h-5" />,        title: 'Confidence Restored',   desc: 'Smile, laugh, and speak without worrying about gaps, loose dentures, or damaged teeth. Feel truly confident again.' },
            ].map((item, i) => (
              <div key={i} className="reveal bg-white border border-slate-200 rounded-xl p-6 hover:border-[#1a56a0]/30 hover:shadow-md transition-all duration-250">
                <div className="w-9 h-9 rounded-md bg-[#eaf1fb] flex items-center justify-center text-[#1a56a0] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 reveal">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">The Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-slate-500 text-base max-w-xl leading-relaxed">
              Three simple steps to your perfect smile. We make finding the right specialist effortless.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { num: '01', title: 'Assessment', desc: 'Share your needs through our quick form. Tell us about your dental situation and location preferences.', icon: <Calendar className="w-5 h-5" /> },
              { num: '02', title: 'Match',      desc: 'Our system identifies the best-qualified specialists in your area based on your specific requirements.',      icon: <Shield className="w-5 h-5" /> },
              { num: '03', title: 'Referral',   desc: 'Receive a direct referral for a free consultation and comprehensive treatment plan.',                         icon: <Sparkles className="w-5 h-5" /> },
            ].map((s, i) => (
              <div key={i} className="reveal bg-[#0d2750] rounded-xl p-7 hover:bg-[#0f2e5e] transition-colors duration-250">
                <div className="flex items-start justify-between mb-7">
                  <div className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center text-white">
                    {s.icon}
                  </div>
                  <span className="text-4xl font-bold text-white/10 leading-none">{s.num}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONDITIONS ── */}
      <section className="py-20 bg-[#f5f8ff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">When You Need Dental Implants</h2>
            <p className="text-slate-500 text-base max-w-xl leading-relaxed">
              From single tooth replacement to full arch restoration, our specialists handle every case with precision and care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Single Tooth',      desc: 'Replace one missing tooth without affecting adjacent healthy teeth. Most common implant procedure.' },
              { title: 'Multiple Teeth',    desc: 'Restore several missing teeth with individual implants or implant-supported bridges for stability.' },
              { title: 'Full Arch',         desc: 'Replace an entire upper or lower arch with All-on-4 or All-on-6 implant-supported dentures.' },
              { title: 'Failed Teeth',      desc: 'Extract severely damaged or decayed teeth and immediately replace with permanent implant solutions.' },
              { title: 'Denture Upgrade',   desc: 'Convert removable dentures to implant-retained for superior stability, comfort, and confidence.' },
              { title: 'Bone Loss',         desc: 'Advanced procedures including bone grafting and sinus lifts to enable implant placement despite bone loss.' },
              { title: 'Accident Trauma',   desc: 'Restore teeth lost to injury or trauma with natural-looking, fully functional implant replacements.' },
              { title: 'Congenital Missing', desc: 'Replace teeth that never developed with permanent implant solutions for complete smile restoration.' },
            ].map((c, i) => (
              <div key={i} className="reveal bg-white border border-slate-200 rounded-xl p-5 hover:border-[#1a56a0]/35 hover:shadow-sm transition-all duration-250">
                <div className="w-1.5 h-5 rounded-sm bg-[#1a56a0] mb-4" />
                <h3 className="text-sm font-semibold text-slate-900 mb-1.5">{c.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALIST DIFFERENCE ── */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-6 reveal-left">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0]">
                Elite Specialist Network
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                The Specialist Difference
              </h2>
              <p className="text-slate-500 text-base leading-relaxed">
                Not all dentists place implants. Our network consists exclusively of verified specialists with advanced training and extensive experience.
              </p>
              <div className="space-y-3.5 pt-1">
                {[
                  'Minimum 100+ successful implant placements annually',
                  'Advanced surgical training in implantology and bone grafting',
                  'State-of-the-art 3D imaging and guided surgery technology',
                  'Proven track record with verifiable patient outcomes',
                  'Continuous education on latest implant systems and techniques',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-sm bg-[#eaf6ef] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Tick />
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-2 px-7 py-3.5 bg-[#0d2750] text-white text-sm font-semibold rounded-md hover:bg-[#1a56a0] active:scale-95 transition-all duration-200"
              >
                Find Your Specialist
              </button>
            </div>

            <div className="relative reveal-right">
              <div className="rounded-xl overflow-hidden border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop"
                  alt="Dental Implant Specialist"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-3 lg:-right-6 px-5 py-4 bg-[#0d2750] rounded-xl border border-white/5 shadow-2xl">
                <div className="flex items-center gap-3">
                  <Medal className="w-6 h-6 text-[#7fb9e8]" />
                  <div>
                    <p className="text-xl font-bold text-white">350+</p>
                    <p className="text-[10px] text-white/40 font-medium uppercase tracking-widest">Vetted Specialists</p>
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
        <div className="max-w-3xl mx-auto px-6 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
            Ready for Your Permanent Smile?
          </h2>
          <p className="text-white/55 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Connect with a verified dental implant specialist in your area. Free consultation, expert care, and results that last a lifetime.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="pulse-glow px-8 py-4 bg-[#1a56a0] text-white text-base font-semibold rounded-md hover:bg-[#1d62b8] active:scale-95 transition-all duration-200 mb-5"
          >
            Get Matched with a Specialist
          </button>
          <p className="text-sm text-white/30">
            No cost to use our service. Verified specialists only. Free consultation matching.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
