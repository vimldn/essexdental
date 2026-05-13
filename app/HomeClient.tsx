'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Shield, Sparkles, ChevronUp, CheckCircle, Users, Medal } from '@/components/Icons';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import LeadFormModal from '@/components/LeadFormModal';
import { FAQS_HOME } from '@/data/faqs';
import { SERVICES } from '@/data/services';
import { LOCATIONS } from '@/data/locations';
import { IMAGES } from '@/data/images';

const Tick = () => (
  <svg className="w-3.5 h-3.5 text-[#1a56a0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
  </svg>
);

export default function HomeClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showMobileCTA, setShowMobileCTA] = useState(false);

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
    const obs = new IntersectionObserver(
      (entries) => {
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
      },
      { threshold: 0.07 }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-700">
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Navigation onOpenModal={() => setIsModalOpen(true)} />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className={`fixed bottom-6 left-5 z-[70] w-10 h-10 bg-[#0d2750] text-white rounded-md flex items-center justify-center shadow-lg transition-all duration-400 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      <div
        className={`fixed bottom-0 left-0 right-0 z-[60] md:hidden transition-transform duration-400 ${
          showMobileCTA ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="bg-[#0d2750] border-t border-white/10 px-4 py-3 flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm leading-tight">Request a clinician introduction</p>
            <p className="text-white/50 text-xs mt-0.5">Free, independent matching.</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex-shrink-0 px-5 py-2.5 bg-[#1a56a0] text-white text-sm font-semibold rounded-md active:scale-95 transition-all duration-200"
          >
            Get matched
          </button>
        </div>
      </div>

      <main id="main">
        <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0d2750]">
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, #0d2750 0%, #0a1f40 60%, #060e1c 100%)' }}
            />
          </div>

          <div className="relative z-10 flex-1 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full pt-28 pb-12">
              <div className="grid lg:grid-cols-[1.05fr_minmax(0,480px)] gap-10 lg:gap-16 items-center">
                <div className="max-w-2xl">
                <div className="animate-fade-up-1 flex items-center gap-2.5 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#7fb9e8] animate-blink flex-shrink-0" aria-hidden="true" />
                  <span className="text-white/60 text-xs font-medium uppercase tracking-widest">
                    Independent Essex matching service
                  </span>
                </div>

                <h1 className="animate-fade-up-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
                  Dental implant matching
                  <br />
                  for <span style={{ color: '#7fb9e8' }}>Essex</span> patients.
                </h1>

                <p className="animate-fade-up-3 text-base text-white/65 max-w-lg font-normal leading-relaxed mb-8">
                  Free matching to verified, GDC-registered implant clinicians across Chelmsford, Colchester, Southend and the wider Essex catchment. We are not a clinic.
                </p>

                <div className="animate-fade-up-4 flex flex-col sm:flex-row gap-3 mb-10">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full sm:w-auto px-7 py-3.5 bg-[#1a56a0] text-white text-sm font-semibold rounded-md hover:bg-[#1d62b8] active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7fb9e8]"
                  >
                    Request an introduction
                  </button>
                  <Link
                    href="/services/"
                    className="w-full sm:w-auto px-7 py-3.5 text-white/80 text-sm font-semibold rounded-md border border-white/20 hover:border-white/40 hover:text-white active:scale-95 transition-all duration-200 text-center"
                  >
                    Browse treatments
                  </Link>
                </div>

                <div className="animate-fade-up-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                  {[
                    'GDC-registered clinicians only',
                    'CBCT-led case planning',
                    'Itemised written quotes',
                    'No introduction fee for patients',
                  ].map((chip) => (
                    <div key={chip} className="flex items-center gap-2.5 text-sm text-white/55">
                      <Tick />
                      {chip}
                    </div>
                  ))}
                </div>
                </div>

                {/* IMAGE SLOT: home hero side panel. Generated dental imagery goes here. */}
                <div className="hidden lg:block animate-fade-up-3">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
                    <Image
                      src={IMAGES.home.heroSide.src}
                      alt={IMAGES.home.heroSide.alt}
                      width={IMAGES.home.heroSide.width}
                      height={IMAGES.home.heroSide.height}
                      priority
                      sizes="(min-width: 1024px) 480px, 100vw"
                      className="w-full h-full object-cover object-center"
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d2750]/40 via-transparent to-transparent" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#f5f8ff]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12 reveal">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">
                What we cover
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Six implant treatment categories, six matched specialisms
              </h2>
              <p className="text-slate-500 text-base max-w-xl leading-relaxed">
                Different cases require different clinical strengths. We match the case to the clinician, not the other way round.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/`}
                  className="reveal bg-white border border-slate-200 rounded-xl p-6 hover:border-[#1a56a0]/30 hover:shadow-md transition-all duration-250 block"
                >
                  <h3 className="text-base font-semibold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.heroDirectAnswer}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-[#1a56a0]">
                    Read pillar →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12 reveal">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">
                How matching works
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Three steps from enquiry to consultation</h2>
              <p className="text-slate-500 text-base max-w-xl leading-relaxed">
                We are not a clinic, a price comparison site, or an affiliate broker. We are an editorial-team-run introduction service that matches enquiries to GDC-registered Essex implant clinicians.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  num: '01',
                  title: 'Tell us the case',
                  desc: 'Postcode, treatment type, any known medical history or sedation needs. Takes about ninety seconds.',
                  icon: <Calendar className="w-5 h-5" />,
                },
                {
                  num: '02',
                  title: 'We match',
                  desc: 'Editorial-team review against current Essex panel availability, scope, and case fit. Most enquiries see a matched clinician name within one working day.',
                  icon: <Shield className="w-5 h-5" />,
                },
                {
                  num: '03',
                  title: 'You meet the clinician',
                  desc: 'Direct booking with the matched clinician. The fee for the consultation is the clinician\'s; the matching is free to the patient.',
                  icon: <Sparkles className="w-5 h-5" />,
                },
              ].map((s, i) => (
                <div key={i} className="reveal bg-[#0d2750] rounded-xl p-7 hover:bg-[#0f2e5e] transition-colors duration-250">
                  <div className="flex items-start justify-between mb-7">
                    <div className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center text-white" aria-hidden="true">
                      {s.icon}
                    </div>
                    <span className="text-4xl font-bold text-white/10 leading-none" aria-hidden="true">{s.num}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#f5f8ff]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12 reveal">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">
                Essex coverage
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Towns and postcodes we cover</h2>
              <p className="text-slate-500 text-base max-w-xl leading-relaxed">
                Twelve Essex towns with active clinician panels. Each location page has the postcode catchment, named neighbourhoods, and the local NHS context relevant to implant work in that area.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {LOCATIONS.map((location) => (
                <Link
                  key={location.slug}
                  href={`/location/${location.slug}/`}
                  className="reveal bg-white border border-slate-200 rounded-xl p-5 hover:border-[#1a56a0]/35 hover:shadow-sm transition-all duration-250 block"
                >
                  <p className="text-sm font-semibold text-slate-900">{location.name}</p>
                  <p className="text-xs text-slate-500 mt-1">{location.postcodePrefixes.join(' · ')}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 reveal-left">
                <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0]">
                  What matching costs you
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  Free to the patient. Honest about what we are.
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  We are not a dentist. We are an editorial team running an Essex implant matching panel. Our income comes from the matched clinicians, not from patients. We tell every enquirer that on the matching call.
                </p>
                <div className="space-y-3.5 pt-1">
                  {[
                    'No introduction fee for patients',
                    'No pressure to commit after the consultation',
                    'Clinician quotes you direct, in writing',
                    'You can ask for a second introduction at any time',
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-sm bg-[#eaf1fb] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Tick />
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="mt-2 px-7 py-3.5 bg-[#0d2750] text-white text-sm font-semibold rounded-md hover:bg-[#1a56a0] active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a56a0]/40"
                >
                  Request an introduction
                </button>
              </div>

              <div className="relative reveal-right">
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-[#f5f8ff] p-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0]">Clinician panel</p>
                      <p className="text-sm text-slate-700 mt-1">GDC-registered only</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0]">Coverage</p>
                      <p className="text-sm text-slate-700 mt-1">12 Essex towns</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0]">Response</p>
                      <p className="text-sm text-slate-700 mt-1">Within 1 working day</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0]">Cost to patient</p>
                      <p className="text-sm text-slate-700 mt-1">Free, no obligation</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-3 lg:-right-6 px-5 py-4 bg-[#0d2750] rounded-xl border border-white/5 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <Medal className="w-6 h-6 text-[#7fb9e8]" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-bold text-white">Essex-only matching</p>
                      <p className="text-[10px] text-white/40 font-medium uppercase tracking-widest">CM · CO · SS postcodes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQSection
          faqs={FAQS_HOME}
          subtitle="Clear answers about how Essex Dental Implants works and what to expect."
        />

        <section className="py-20 bg-[#0d2750]">
          <div className="max-w-3xl mx-auto px-6 text-center reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
              Ready for a matched clinician introduction?
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Free, independent, and GDC-checked. Tell us the case in ninety seconds.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-[#1a56a0] text-white text-base font-semibold rounded-md hover:bg-[#1d62b8] active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7fb9e8]"
            >
              Request an introduction
            </button>
            <p className="text-sm text-white/35 mt-5">
              We are not a dental provider. Matching is free to patients. The matched clinician quotes their professional fees direct.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
