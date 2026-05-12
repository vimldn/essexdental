'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, X } from './Icons';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadFormModal: React.FC<LeadFormModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess,    setIsSuccess]    = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [animState, setAnimState]       = useState<'idle' | 'entering' | 'exiting'>('idle');

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setAnimState('entering');
    } else if (shouldRender) {
      setAnimState('exiting');
      const t = setTimeout(() => { setShouldRender(false); setAnimState('idle'); }, 280);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const form     = e.currentTarget;
      const fullName = (form.elements[0] as HTMLInputElement).value;
      const email    = (form.elements[1] as HTMLInputElement).value;
      const location = (form.elements[2] as HTMLInputElement).value;
      const payload  = { fullName, email, location, page: window.location.href, source: 'Essex Dental Implants' };
      const res      = await fetch(
        'https://script.google.com/macros/s/AKfycbz-B9H0JTI7a9Cgyn9z-pZXKnuiNm6acAn8Zb13N21qGRcpxy7EtVvlPAjpl6f7Hj3-RQ/exec',
        { method: 'POST', body: JSON.stringify(payload) }
      );
      const text = await res.text();
      let data: Record<string, unknown> = {};
      try { data = JSON.parse(text); } catch {}
      if (data?.ok === false) throw new Error((data.error as string) || 'Submission failed');
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => { setIsSuccess(false); onClose(); }, 3000);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-[#0d2750]/60 backdrop-blur-sm ${
        animState === 'entering' ? 'animate-backdrop-in' : animState === 'exiting' ? 'animate-backdrop-out' : 'opacity-100'
      }`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className={`relative w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-xl overflow-hidden shadow-2xl ${
          animState === 'entering' ? 'animate-modal-in' : 'animate-modal-out'
        }`}
      >
        {/* Header */}
        <div className="bg-[#0d2750] px-7 pt-7 pb-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-white/40 hover:text-white/80 hover:bg-white/10 rounded-md transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-[#7fb9e8] mb-2">
            Priority Referral
          </span>
          <h2 className="text-xl font-bold text-white leading-snug">Start Your Smile Journey</h2>
          <p className="text-white/50 mt-1 text-sm">Get matched with vetted dental implant specialists in your area.</p>
        </div>

        <div className="p-7">
          {isSuccess ? (
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <div className="w-16 h-16 bg-[#eaf6ef] rounded-xl flex items-center justify-center">
                <CheckCircle className="w-9 h-9 text-[#4caf7d]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Request Received</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We have successfully matched you with a Platinum Partner in your area. Check your email for next steps.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { label: 'Full Name',            type: 'text',  placeholder: 'E.g. Alexander Hamilton' },
                { label: 'Email Address',         type: 'email', placeholder: 'alex@example.com' },
                { label: 'Your City / Location', type: 'text',  placeholder: 'e.g. Chelmsford, Essex' },
              ].map(({ label, type, placeholder }) => (
                <div key={label}>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                    {label}
                  </label>
                  <input
                    required
                    type={type}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#1a56a0] focus:bg-white focus:ring-3 focus:ring-[#1a56a0]/10 transition-all"
                  />
                </div>
              ))}

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full py-3.5 mt-1 bg-[#1a56a0] hover:bg-[#1d62b8] text-white font-semibold text-sm rounded-md transition-all active:scale-[0.98] flex items-center justify-center gap-2.5 relative overflow-hidden group/btn"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/6 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Verify Availability
                    <svg className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 pt-1">
                <span className="w-1.5 h-1.5 bg-[#4caf7d] rounded-full animate-pulse" />
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">
                  Facilitator service. Free initial consultation.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadFormModal;
