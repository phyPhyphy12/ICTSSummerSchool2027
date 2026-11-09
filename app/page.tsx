'use client';

import React, { useState, useCallback } from 'react';
import PhysicsPortalCanvas from '@/components/PhysicsPortalCanvas';
import CanvasHUD from '@/components/CanvasHUD';
import Navbar from '@/components/Navbar';
import ScrollySections from '@/components/ScrollySections';
import PhotoDropzoneModal, { DropzoneConfig } from '@/components/PhotoDropzoneModal';
import {
  EligibilityModal,
  SelectionModal,
  FellowshipModal,
  LaptopAdvisoryModal,
  ApplyModal,
  ArchiveModal,
} from '@/components/InfoModals';
import Footer from '@/components/Footer';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activePhase, setActivePhase] = useState(1);

  // Modals state
  const [activeDropzoneConfig, setActiveDropzoneConfig] = useState<DropzoneConfig | null>(null);
  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);
  const [isSelectionOpen, setIsSelectionOpen] = useState(false);
  const [isFellowshipOpen, setIsFellowshipOpen] = useState(false);
  const [isLaptopAdvisoryOpen, setIsLaptopAdvisoryOpen] = useState(false);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

  const handleProgressUpdate = useCallback((progress: number, phase: number) => {
    setScrollProgress(progress);
    setActivePhase(phase);
  }, []);

  return (
    <main className="relative bg-midnight-950 text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-slate-950">
      {/* 1. Background Physics Canvas (Fixed inset-0 over 500vh layout) */}
      <PhysicsPortalCanvas onProgressUpdate={handleProgressUpdate} />

      {/* 2. Live Physics & Telemetry HUD */}
      <CanvasHUD progress={scrollProgress} phase={activePhase} />

      {/* 3. Sticky Glassmorphic Header */}
      <Navbar
        onOpenEligibility={() => setIsEligibilityOpen(true)}
        onOpenSelection={() => setIsSelectionOpen(true)}
        onOpenFellowship={() => setIsFellowshipOpen(true)}
        onOpenLaptopAdvisory={() => setIsLaptopAdvisoryOpen(true)}
        onOpenApply={() => setIsApplyOpen(true)}
        onOpenArchive={() => setIsArchiveOpen(true)}
      />

      {/* 4. Scrollytelling Sections Layer (500vh linear layout with right-column content) */}
      <ScrollySections
        onOpenDropzone={(config) => setActiveDropzoneConfig(config)}
        onOpenApply={() => setIsApplyOpen(true)}
        onOpenEligibility={() => setIsEligibilityOpen(true)}
        onOpenSelection={() => setIsSelectionOpen(true)}
        onOpenFellowship={() => setIsFellowshipOpen(true)}
        onOpenLaptopAdvisory={() => setIsLaptopAdvisoryOpen(true)}
      />

      {/* 5. Footer */}
      <Footer
        onOpenLaptopAdvisory={() => setIsLaptopAdvisoryOpen(true)}
        onOpenEligibility={() => setIsEligibilityOpen(true)}
        onOpenApply={() => setIsApplyOpen(true)}
      />

      {/* 6. Interactive Modals & Overlays */}
      <PhotoDropzoneModal
        config={activeDropzoneConfig}
        onClose={() => setActiveDropzoneConfig(null)}
      />

      <EligibilityModal
        isOpen={isEligibilityOpen}
        onClose={() => setIsEligibilityOpen(false)}
      />

      <SelectionModal
        isOpen={isSelectionOpen}
        onClose={() => setIsSelectionOpen(false)}
      />

      <FellowshipModal
        isOpen={isFellowshipOpen}
        onClose={() => setIsFellowshipOpen(false)}
      />

      <LaptopAdvisoryModal
        isOpen={isLaptopAdvisoryOpen}
        onClose={() => setIsLaptopAdvisoryOpen(false)}
      />

      <ApplyModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
      />

      <ArchiveModal
        isOpen={isArchiveOpen}
        onClose={() => setIsArchiveOpen(false)}
      />
    </main>
  );
}
