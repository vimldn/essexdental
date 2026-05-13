'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'edi-consent-v1';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
      window.gtag?.('consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
    } else if (stored === 'accepted') {
      window.gtag?.('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
      });
    }
  }, []);

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, 'accepted');
    window.gtag?.('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    });
    setVisible(false);
  };

  const decline = () => {
    window.localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-[80] bg-white border border-slate-200 rounded-xl shadow-2xl p-5"
    >
      <p className="text-sm font-semibold text-slate-900 mb-2">
        We use cookies for analytics
      </p>
      <p className="text-xs text-slate-600 leading-relaxed mb-4">
        We use a single Google Analytics cookie to understand how the site is used. No advertising cookies are set without consent. See our{' '}
        <a href="/privacy/" className="underline text-[#1a56a0]">privacy notice</a>.
      </p>
      <div className="flex gap-2">
        <button
          onClick={accept}
          className="flex-1 px-4 py-2.5 bg-[#0d2750] text-white text-sm font-semibold rounded-md hover:bg-[#1a56a0] transition-colors"
        >
          Accept
        </button>
        <button
          onClick={decline}
          className="flex-1 px-4 py-2.5 bg-slate-100 text-slate-700 text-sm font-semibold rounded-md hover:bg-slate-200 transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
