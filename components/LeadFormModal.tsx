'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, X } from './Icons';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadFormModal: React.FC<LeadFormModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [animationState, setAnimationState] = useState<'idle' | 'entering' | 'exiting'>('idle');

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setAnimationState('entering');
    } else if (shouldRender) {
      setAnimationState('exiting');
      const timer = setTimeout(() => {
        setShouldRender(false);
        setAnimationState('idle');
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const form = e.currentTarget;
      const fullName = (form.elements[0] as HTMLInputElement).value;
      const email    = (form.elements[1] as HTMLInputElement).value;
      const location = (form.elements[2] as HTMLInputElement).value;
      const payload  = { fullName, email, location, page: window.location.href, source: 'Essex Dental Implants' };
      const res  = await fetch(
        'https://script.google.com/macros/s/AKfycbz-B9H0JTI7a9Cgyn9z-pZXKnuiNm6acAn8Zb13N21qGRcpxy7EtVvlPAjpl6f7Hj3-RQ/exec',
        { method: 'POST', body: JSON.stringify(payload) }
      );
      const text = await res.text();
      let data: Record<string, unknown> = {};
      try { data = JSON.parse(text); } catch {}
      if (data && data.ok === false) throw new Error((data.error as string) || 'Submission failed');
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => { setIsSuccess(false); onClose(); }, 3000);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      alert('Something went wrong. Please try again.');
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0d2750]/50 backdrop-blur-md ${
        animationState === 'entering' ? 'animate-backdrop-in' : animationState === 'exiting' ? 'animate-backdrop-out' : 'opacity-100'
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`relative w-full max-w-lg overflow-hidden bg-white rounded-3xl shadow-[0_48px_96px_-12px_rgba(0,0,0,0.3)] ${
          animationState === 'entering' ? 'animate-modal-in' : 'animate-modal-out'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-300 hover:text-slate-500 hover:bg-slate-50 rounded-full transition-all z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Navy header stripe */}
        <div className="bg-[#0d2750] px-8 pt-8 pb-6">
          <div className="inline-block px-3 py-1 bg-white/10 text-white/80 text-[10px] font-black uppercase tracking-widest rounded-full border border-white/15 mb-3">
            Priority Referral
          </div>
          <h2 className="text-2xl font-black text-white leading-tight">Start Your Smile Journey</h2>
          <p className="text-white/55 mt-1.5 text-sm font-medium">
            Get matched with vetted dental implant specialists in your area.
          </p>
        </div>

        <div className="p-8">
          {isSuccess ? (
            <div className="flex flex-col items-center text-center py-10 space-y-5">
              <div className="w-20 h-20 bg-[#e8f2fc] text-[#1a56a0] rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-2">Request Received</h2>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">
                  We have successfully matched you with a Platinum Partner in your area. Check your email for next steps.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 mt-1">
              {[
                { label: 'Full Name',          type: 'text',  placeholder: 'E.g. Alexander Hamilton' },
                { label: 'Email Address',      type: 'email', placeholder: 'alex@example.com' },
                { label: 'Your City / Location', type: 'text', placeholder: 'e.g. Chelmsford, Essex' },
              ].map(({ label, type, placeholder }) => (
                <div key={label} className="space-y-1.5 group">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 group-focus-within:text-[#1a56a0] transition-colors">
                    {label}
                  </label>
                  <input
                    required
                    type={type}
                    className="w-full px-5 py-4 bg-white rounded-2xl border-2 border-slate-200 text-slate-700 focus:border-[#1a56a0] focus:ring-8 focus:ring-blue-400/5 outline-none transition-all placeholder:text-slate-300"
                    placeholder={placeholder}
                  />
                </div>
              ))}

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full py-4 mt-2 bg-[#1a56a0] hover:bg-[#1d62b8] text-white font-black text-base rounded-2xl shadow-lg shadow-blue-900/15 transition-all active:scale-[0.98] flex items-center justify-center gap-3 relative overflow-hidden group/btn"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                {isSubmitting ? (
                  <div className="w-5 h-5 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Verify Availability
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="w-1.5 h-1.5 bg-[#4caf7d] rounded-full animate-pulse" />
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  facilitator service. free initial consultation
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
