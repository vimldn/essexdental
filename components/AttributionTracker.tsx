'use client';

import { useEffect } from 'react';

const STORAGE_KEY = 'edi-attribution';

const PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'fbclid',
  'msclkid',
];

export default function AttributionTracker() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const existing = window.sessionStorage.getItem(STORAGE_KEY);
      if (existing) return;
      const url = new URL(window.location.href);
      const captured: Record<string, string> = {
        firstLanding: window.location.href,
        referrer: document.referrer || '',
      };
      let any = false;
      for (const p of PARAMS) {
        const v = url.searchParams.get(p);
        if (v) {
          captured[p] = v;
          any = true;
        }
      }
      if (any || document.referrer) {
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(captured));
      }
    } catch {
      /* noop */
    }
  }, []);
  return null;
}
