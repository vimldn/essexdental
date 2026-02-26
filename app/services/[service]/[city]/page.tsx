'use client';

import React, { useState } from 'react';
import { CheckCircle, Clock, Shield, Award, MapPin, ChevronUp, Users } from '@/components/Icons';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import LeadFormModal from '@/components/LeadFormModal';
import { SERVICES, LOCATIONS, FAQS_SERVICES } from '@/lib/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const SERVICE_IMAGES: Record<string, string> = {
  'single-tooth': 'https://images.unsplash.com/photo-1593022356769-11f762e25ed9?q=80&w=1170&auto=format&fit=crop',
  'multiple-teeth': 'https://images.pexels.com/photos/6502343/pexels-photo-6502343.jpeg',
  'full-arch': 'https://images.pexels.com/photos/4687905/pexels-photo-4687905.jpeg',
  'bone-grafting': 'https://images.pexels.com/photos/6629364/pexels-photo-6629364.jpeg',
  'immediate-implants': 'https://images.pexels.com/photos/5355826/pexels-photo-5355826.jpeg',
  'implant-dentures': 'https://images.pexels.com/photos/3779699/pexels-photo-3779699.jpeg',
};

function HeroLeadForm({ cityName, serviceName }: { cityName: string; serviceName: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const fullName = (form.elements.namedItem('fullName') as HTMLInputElement).value;
      const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
      const email = (form.elements.namedItem('email') as HTMLInputElement).value;
      const treatment = (form.elements.namedItem('treatment') as HTMLSelectElement).value;

      const payload = {
        fullName,
        phone,
        email,
        treatment,
        location: cityName,
        page: typeof window !== 'undefined' ? window.location.href : '',
        source: 'Essex Dental Implants',
      };

      const res = await fetch(
        'https://script.google.com/macros/s/AKfycbz-B9H0JTI7a9Cgyn9z-pZXKnuiNm6acAn8Zb13N21qGRcpxy7EtVvlPAjpl6f7Hj3-RQ/exec',
        { method: 'POST', body: JSON.stringify(payload) }
      );

      const text = await res.text();
      let data: Record<string, unknown> = {};
      try { data = JSON.parse(text); } catch { /* non-JSON is fine */ }
      if (data && data.ok === false) throw new Error((data.error as string) || 'Submission failed');

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="w-full bg-white rounded-[2rem] shadow-[0_32px_80px_-8px_rgba(0,0,0,0.5)] overflow-hidden">
      <div className="p-8 md:p-10">
        {isSuccess ? (
          <div className="flex flex-col items-center text-center py-10 space-y-5">
            <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/10">
              <CheckCircle className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">Request Received!</h3>
              <p className="text-slate-500 font-medium leading-relaxed text-sm">
                We&apos;ve matched you with a Platinum Partner in {cityName}. Check your email for next steps.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-full mb-3">
                Free Matching Service
              </div>
              <h3 className="text-2xl font-black text-slate-900 leading-tight">
                Get Matched in {cityName}
              </h3>
              <p className="text-slate-500 text-sm mt-1 font-medium">
                Top local clinics will contact you within 2 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                required
                name="fullName"
                type="text"
                placeholder="Full Name *"
                className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-sm focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-400/10 outline-none transition-all placeholder:text-slate-400"
              />

              <div className="grid grid-cols-2 gap-3">
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="Phone Number *"
                  className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-sm focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-400/10 outline-none transition-all placeholder:text-slate-400"
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email Address *"
                  className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-sm focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-400/10 outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              <select
                required
                name="treatment"
                defaultValue=""
                className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-sm focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-400/10 outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled>Select Treatment *</option>
                <option value="Single Tooth Implant">Single Tooth Implant</option>
                <option value="Multiple Teeth Implants">Multiple Teeth Implants</option>
                <option value="Full Arch (All-on-4)">Full Arch (All-on-4)</option>
                <option value="Bone Grafting">Bone Grafting</option>
                <option value="Immediate Implants">Immediate Implants</option>
                <option value="Implant Dentures">Implant Dentures</option>
                <option value="Not Sure">Not Sure Yet</option>
              </select>

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full py-4 bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-black text-base rounded-xl shadow-lg shadow-sky-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 relative overflow-hidden group/btn"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                {isSubmitting ? (
                  <div className="w-5 h-5 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Get 3 Free Quotes
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 pt-1">
                {['100% Free', 'No Spam', '2hr Response'].map((label) => (
                  <span key={label} className="flex items-center gap-1 text-[11px] text-slate-500 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                    {label}
                  </span>
                ))}
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function ServiceCityPage({ params }: { params: { service: string; city: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const service = SERVICES.find(s => s.id === params.service);

  const allCities = Object.values(LOCATIONS).flat();
  const cityName = allCities.find(city =>
    city.toLowerCase().replace(/\s+/g, '-') === params.city
  );

  if (!service || !cityName) notFound();

  const heroImage = SERVICE_IMAGES[params.service] || SERVICE_IMAGES['single-tooth'];

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setShowScrollTop(scrollPos / height > 0.3);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const benefits = [
    { icon: <Award className="w-6 h-6" />, title: 'Implant Specialists', desc: 'Only the top 1% of UK Dental Implant specialists' },
    { icon: <Clock className="w-6 h-6" />, title: 'Fast Track Consultations', desc: 'Priority appointments available within 7 days' },
    { icon: <Shield className="w-6 h-6" />, title: 'Guaranteed Results', desc: 'Treatment backed by thousands of successful cases' },
    { icon: <Users className="w-6 h-6" />, title: 'Expert Matching', desc: 'Personalised provider selection for your case' },
  ];

  const treatmentSteps = [
    'Free initial consultation with a vetted specialist',
    '3D digital scan and personalised treatment planning',
    'Receive your custom implants manufactured to precision',
    'Regular progress monitoring and refinement if needed',
    'Achieve your perfect smile with permanent retention',
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Navigation onOpenModal={() => setIsModalOpen(true)} />

      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 left-6 z-[70] w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 text-slate-400 rounded-full flex items-center justify-center transition-all duration-500 ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      {/* HERO */}
      <div className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt={`${service.title} in ${cityName}`}
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mb-12">
            <Link href="/services" className="hover:text-emerald-400 transition-colors">Services</Link>
            <span>/</span>
            <Link href={`/services/${params.service}`} className="hover:text-emerald-400 transition-colors">{service.title}</Link>
            <span>/</span>
            <span className="text-white">{cityName}</span>
          </div>

          {/* Two-column hero */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — copy */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-sm text-emerald-400 backdrop-blur-sm">
                <MapPin className="w-4 h-4" />
                <span>Elite Platinum Providers Available</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
                {service.title} in
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 italic">
                  {cityName}
                </span>
              </h1>

              <p className="text-lg text-slate-400 leading-relaxed font-medium max-w-lg">
                Access {cityName}&apos;s most experienced {service.title.toLowerCase()} specialists.
                Choose from our comprehensive treatment options below.
              </p>

              <div className="flex flex-wrap gap-5 pt-2">
                {['Free Consultation', 'No Obligation', 'Same-week Appointments'].map((label) => (
                  <div key={label} className="flex items-center gap-2 text-sm text-slate-300 font-semibold">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-black">✓</span>
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — inline form */}
            <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <HeroLeadForm cityName={cityName} serviceName={service.title} />
            </div>
          </div>
        </div>
      </div>

      {/* REST OF PAGE */}
      <div className="pb-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="dark-card p-6 rounded-3xl border border-white/5">
                <div className="mb-4 p-3 rounded-xl bg-emerald-500/10 text-emerald-400 inline-flex">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-400">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="dark-card p-10 md:p-14 rounded-[2.5rem] border border-white/5">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 text-center">
              Your Treatment Journey in {cityName}
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {treatmentSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/40 border border-white/5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">
                    {idx + 1}
                  </div>
                  <p className="text-slate-300 font-medium pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="dark-card p-10 rounded-[2.5rem] border border-white/5">
              <h3 className="text-2xl font-black text-white mb-6">
                Why Choose {service.title} in {cityName}?
              </h3>
              <div className="space-y-4">
                {[
                  'Access to Platinum-certified providers with proven track records',
                  'State-of-the-art 3D scanning and 3D treatment planning visualization technology',
                  `Convenient ${cityName} locations with flexible appointment times`,
                  'Comprehensive aftercare and retention planning included',
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                    <p className="text-slate-300">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="dark-card p-10 rounded-[2.5rem] border border-emerald-500/20 bg-emerald-500/5">
              <h3 className="text-2xl font-black text-white mb-6">Ready to Transform Your Smile?</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Our {cityName} network is ready to assess your case and create a personalised treatment plan. Get matched with the perfect provider for your{' '}
                {service.title.toLowerCase()} needs.
              </p>
              <ul className="space-y-3 mb-8">
                {['Free initial consultation', 'No obligation assessment', 'Transparent pricing from the start'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full px-8 py-5 bg-emerald-500 text-white font-black rounded-full shadow-2xl hover:scale-105 transition-all"
              >
                Book Your {cityName} Consultation
              </button>
            </div>
          </div>

          <div className="dark-card p-10 rounded-[2.5rem] border border-white/5">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Other Treatments in {cityName}</h3>
                <div className="space-y-2">
                  {SERVICES.filter(s => s.id !== params.service).slice(0, 5).map(s => (
                    <Link
                      key={s.id}
                      href={`/services/${s.id}/${params.city}`}
                      className="block px-4 py-3 rounded-xl bg-slate-900/40 border border-white/5 hover:border-emerald-500/30 text-slate-300 hover:text-white transition-all text-sm font-medium"
                    >
                      {s.title} in {cityName}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title} in Other Cities</h3>
                <div className="space-y-2">
                  {allCities.filter(c => c !== cityName).slice(0, 5).map(city => {
                    const slug = city.toLowerCase().replace(/\s+/g, '-');
                    return (
                      <Link
                        key={city}
                        href={`/services/${params.service}/${slug}`}
                        className="block px-4 py-3 rounded-xl bg-slate-900/40 border border-white/5 hover:border-emerald-500/30 text-slate-300 hover:text-white transition-all text-sm font-medium"
                      >
                        {service.title} in {city}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <FAQSection faqs={FAQS_SERVICES} />
      </div>

      <Footer />
    </div>
  );
}
