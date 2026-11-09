'use client';

import React, { useState } from 'react';
import { 
  Atom, 
  GraduationCap, 
  Award, 
  Laptop, 
  CheckCircle2, 
  AlertTriangle, 
  ExternalLink, 
  Menu, 
  X, 
  Sparkles,
  Compass,
  FileText
} from 'lucide-react';

interface NavbarProps {
  onOpenEligibility: () => void;
  onOpenSelection: () => void;
  onOpenFellowship: () => void;
  onOpenLaptopAdvisory: () => void;
  onOpenApply: () => void;
  onOpenArchive: () => void;
}

export default function Navbar({
  onOpenEligibility,
  onOpenSelection,
  onOpenFellowship,
  onOpenLaptopAdvisory,
  onOpenApply,
  onOpenArchive,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-3 md:px-8 py-3 transition-all duration-300">
        <div className="max-w-7xl mx-auto glass-panel-glow rounded-2xl px-4 md:px-6 py-2.5 flex items-center justify-between border border-cyan-500/20 backdrop-blur-xl">
          {/* Brand Logo & Name */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/30 border border-cyan-400/40">
              <Atom className="w-6 h-6 text-cyan-300 animate-spin" style={{ animationDuration: '14s' }} />
              <div className="absolute inset-0 rounded-xl bg-cyan-400/20 blur-md pointer-events-none" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-sm md:text-base font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-200 to-purple-300">
                  SSWP <span className="text-amber-400">2027</span>
                </span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-semibold hidden sm:inline-block">
                  ICTS-TIFR
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono tracking-tight hidden md:block">
                Summer School for Women in Physics
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 font-mono text-xs text-slate-300">
            <button
              onClick={onOpenEligibility}
              className="px-3 py-1.5 rounded-lg hover:text-cyan-300 hover:bg-slate-800/60 transition-all flex items-center space-x-1.5 group"
            >
              <GraduationCap className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Eligibility</span>
            </button>

            <button
              onClick={onOpenSelection}
              className="px-3 py-1.5 rounded-lg hover:text-purple-300 hover:bg-slate-800/60 transition-all flex items-center space-x-1.5 group"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 group-hover:scale-110 transition-transform" />
              <span>Online MCQ Exam</span>
            </button>

            <button
              onClick={onOpenFellowship}
              className="px-3 py-1.5 rounded-lg hover:text-emerald-300 hover:bg-slate-800/60 transition-all flex items-center space-x-1.5 group"
            >
              <Award className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>100% Fellowship</span>
            </button>

            {/* Critical Laptop Advisory Pill */}
            <button
              onClick={onOpenLaptopAdvisory}
              className="px-3 py-1.5 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 hover:bg-amber-500/25 transition-all flex items-center space-x-1.5 animate-pulse"
              title="Urgent advisory regarding laptop requirement"
            >
              <Laptop className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold text-[11px]">Laptop Advisory</span>
            </button>

            <button
              onClick={onOpenArchive}
              className="px-3 py-1.5 rounded-lg hover:text-slate-100 hover:bg-slate-800/60 transition-all text-slate-400"
            >
              <span>Past Editions</span>
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center space-x-2">
            <button
              onClick={onOpenApply}
              className="relative group overflow-hidden px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-mono font-bold text-xs tracking-wider shadow-glow-cyan hover:shadow-cyan-400/50 transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                <span>APPLY NOW</span>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg bg-slate-800/70 text-slate-300 hover:text-cyan-300 border border-slate-700"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-slate-950/90 backdrop-blur-2xl p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center space-x-2">
              <Atom className="w-6 h-6 text-cyan-400" />
              <span className="font-mono font-bold text-cyan-300">SSWP 2027 @ ICTS</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col space-y-4 py-8 font-mono text-sm">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEligibility();
              }}
              className="flex items-center space-x-3 p-3 rounded-xl bg-slate-900 border border-slate-800 text-left text-slate-200"
            >
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="font-bold">Eligibility Criteria</div>
                <div className="text-xs text-slate-400">1st Year B.Sc. & Int. M.Sc. Women</div>
              </div>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSelection();
              }}
              className="flex items-center space-x-3 p-3 rounded-xl bg-slate-900 border border-slate-800 text-left text-slate-200"
            >
              <CheckCircle2 className="w-5 h-5 text-purple-400" />
              <div>
                <div className="font-bold">Selection Process</div>
                <div className="text-xs text-slate-400">100% Remote Online MCQ Exam</div>
              </div>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFellowship();
              }}
              className="flex items-center space-x-3 p-3 rounded-xl bg-slate-900 border border-slate-800 text-left text-slate-200"
            >
              <Award className="w-5 h-5 text-emerald-400" />
              <div>
                <div className="font-bold">Fully Funded Fellowship</div>
                <div className="text-xs text-slate-400">Travel, Housing & Meals Covered</div>
              </div>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLaptopAdvisory();
              }}
              className="flex items-center space-x-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/40 text-left text-amber-200"
            >
              <Laptop className="w-5 h-5 text-amber-400" />
              <div>
                <div className="font-bold">Critical Advisory Note</div>
                <div className="text-xs text-amber-300/80">Laptops required for lab data simulations</div>
              </div>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenArchive();
              }}
              className="flex items-center space-x-3 p-3 rounded-xl bg-slate-900 border border-slate-800 text-left text-slate-300"
            >
              <FileText className="w-5 h-5 text-slate-400" />
              <div>
                <div className="font-bold">Past Editions Archive</div>
                <div className="text-xs text-slate-400">2023, 2024, 2025, 2026 gallery</div>
              </div>
            </button>
          </div>

          <div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-mono font-bold text-sm tracking-wider flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>APPLY FOR SSWP 2027</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
