'use client';

import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, X } from './Icons';
import { SERVICES } from '@/data/services';
import { LOCATIONS } from '@/data/locations';
import { siteConfig } from '@/data/site';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LEAD_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbz-B9H0JTI7a9Cgyn9z-pZXKnuiNm6acAn8Zb13N21qGRcpxy7EtVvlPAjpl6f7Hj3-RQ/exec';

// 2026-05-18 — Fleet-wide kill switch. The honeypot + time-gate combo was
// silently dropping legitimate autofill submissions: users saw the success
// screen while no row reached the Sheet. Flip GUARD_ENABLED to true to
// re-enable bot filtering once thresholds have been calibrated against
// real audit data.
const GUARD_ENABLED: boolean = false;

function getStoredAttribution() {
  if (typeof window === 'undefined') return {};
  try {
    const stored = window.sessionStorage.getItem('edi-attribution');
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

const LeadFormModal: React.FC<LeadFormModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [animState, setAnimState] = useState<'idle' | 'entering' | 'exiting'>('idle');
  const openedAtRef = useRef<number>(0);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setAnimState('entering');
      openedAtRef.current = Date.now();
    } else if (shouldRender) {
      setAnimState('exiting');
      const t = setTimeout(() => {
        setShouldRender(false);
        setAnimState('idle');
      }, 280);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Esc-to-close and body scroll-lock while the modal is open (a11y, audit #27).
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  if (!shouldRender) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const form = e.currentTarget;
      const elements = form.elements as typeof form.elements & {
        fullName: HTMLInputElement;
        email: HTMLInputElement;
        phone: HTMLInputElement;
        location: HTMLSelectElement;
        treatment: HTMLSelectElement;
        company: HTMLInputElement; // honeypot
      };

      const elapsed = Date.now() - openedAtRef.current;
      if (GUARD_ENABLED && (elements.company.value || elapsed < 1500)) {
        setIsSubmitting(false);
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 2500);
        return;
      }

      const attribution = getStoredAttribution();

      const payload = {
        fullName: elements.fullName.value,
        email: elements.email.value,
        phone: elements.phone.value,
        location: elements.location.value,
        treatment: elements.treatment.value,
        page: window.location.href,
        source: siteConfig.name,
        ...attribution,
      };

      const res = await fetch(LEAD_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(payload),
      });
      const text = await res.text();
      let data: Record<string, unknown> = {};
      try {
        data = JSON.parse(text);
      } catch {
        /* noop */
      }
      if (data?.ok === false) throw new Error((data.error as string) || 'Submission failed');

      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-modal-title"
      className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-[#0d2750]/60 backdrop-blur-sm ${
        animState === 'entering' ? 'animate-backdrop-in' : animState === 'exiting' ? 'animate-backdrop-out' : 'opacity-100'
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`relative w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-xl overflow-hidden shadow-2xl ${
          animState === 'entering' ? 'animate-modal-in' : 'animate-modal-out'
        }`}
      >
        <div className="bg-[#0d2750] px-7 pt-7 pb-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-white/40 hover:text-white/80 hover:bg-white/10 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-[#7fb9e8] mb-2">
            Free matching
          </span>
          <h2 id="lead-modal-title" className="text-xl font-bold text-white leading-snug">
            Request a clinician introduction
          </h2>
          <p className="text-white/50 mt-1 text-sm">
            Independent matching service. We will introduce a verified Essex implant clinician for your case at no charge.
          </p>
        </div>

        <div className="p-7">
          {isSuccess ? (
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <div className="w-16 h-16 bg-[#eaf1fb] rounded-xl flex items-center justify-center">
                <CheckCircle className="w-9 h-9 text-[#1a56a0]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Request received</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  An editorial-team member will be in touch by email to confirm the matched clinician and consultation details.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3" noValidate>
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="absolute left-[-9999px] w-px h-px opacity-0"
                aria-hidden="true"
              />
              <div>
                <label htmlFor="lf-fullName" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                  Full name
                </label>
                <input
                  required
                  id="lf-fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md text-base text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#1a56a0] focus:bg-white focus:ring-2 focus:ring-[#1a56a0]/20 transition-all"
                />
              </div>
              <div>
                <label htmlFor="lf-email" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                  Email
                </label>
                <input
                  required
                  id="lf-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md text-base text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#1a56a0] focus:bg-white focus:ring-2 focus:ring-[#1a56a0]/20 transition-all"
                />
              </div>
              <div>
                <label htmlFor="lf-phone" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                  Phone
                </label>
                <input
                  required
                  id="lf-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md text-base text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#1a56a0] focus:bg-white focus:ring-2 focus:ring-[#1a56a0]/20 transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="lf-location" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                    Location
                  </label>
                  <select
                    required
                    id="lf-location"
                    name="location"
                    defaultValue=""
                    className="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-md text-base text-slate-800 focus:outline-none focus:border-[#1a56a0] focus:bg-white focus:ring-2 focus:ring-[#1a56a0]/20 transition-all"
                  >
                    <option value="" disabled>
                      Select…
                    </option>
                    {LOCATIONS.map((l) => (
                      <option key={l.slug} value={l.name}>
                        {l.name}
                      </option>
                    ))}
                    <option value="Other Essex">Other Essex location</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="lf-treatment" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                    Treatment
                  </label>
                  <select
                    required
                    id="lf-treatment"
                    name="treatment"
                    defaultValue=""
                    className="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-md text-base text-slate-800 focus:outline-none focus:border-[#1a56a0] focus:bg-white focus:ring-2 focus:ring-[#1a56a0]/20 transition-all"
                  >
                    <option value="" disabled>
                      Select…
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.shortTitle}
                      </option>
                    ))}
                    <option value="Not sure">Not sure yet</option>
                  </select>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 leading-relaxed pt-1">
                Submitting consents to your details being shared with the matched clinician for the purpose of arranging a consultation. See{' '}
                <a href="/privacy/" className="underline">
                  privacy notice
                </a>
                .
              </p>

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full py-3.5 mt-1 bg-[#1a56a0] hover:bg-[#1d62b8] text-white font-semibold text-sm rounded-md transition-all active:scale-[0.98] flex items-center justify-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-[#1a56a0]/40 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Request introduction
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadFormModal;
