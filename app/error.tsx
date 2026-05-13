'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-[#1a56a0] mb-3">Something went wrong</p>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">We hit an unexpected error</h1>
        <p className="text-slate-600 leading-relaxed mb-8">
          The page did not load correctly. You can try again, or go back to the home page.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="px-5 py-2.5 bg-[#0d2750] text-white text-sm font-semibold rounded-md hover:bg-[#1a56a0] transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-5 py-2.5 bg-slate-100 text-slate-700 text-sm font-semibold rounded-md hover:bg-slate-200 transition-colors"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
