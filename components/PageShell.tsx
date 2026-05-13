'use client';

import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import LeadFormModal from './LeadFormModal';

export default function PageShell({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-700">
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Navigation onOpenModal={() => setIsModalOpen(true)} />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}
