'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
// WomenInPhysicsSection removed per redesign
import ProgrammeSections from '@/components/ProgrammeSections';
import Footer from '@/components/Footer';
import ComingSoonModal from '@/components/ComingSoonModal';

export default function Home() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-exhibition-950 text-slate-100 antialiased selection:bg-icts-crimson selection:text-white">
      {/* 1. Navigation Header */}
      <Navbar onOpenApply={() => setIsApplyOpen(true)} />

      {/* 2. Hero Section */}
      <HeroSection onOpenApply={() => setIsApplyOpen(true)} />

      {/* 3. Women in Physics — The Main Exhibition Journey (≥50% Indian Women Physicists) */}
      {/* WomenInPhysicsSection removed per redesign */}

      {/* 4. Programme Core Information (About, Eligibility, Selection, Support/Norms, Typical Day, Organisers) */}
      <ProgrammeSections />

      {/* 5. Footer */}
      <Footer />

      {/* 6. Application 'Coming Soon' Modal */}
      <ComingSoonModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
      />
    </main>
  );
}
