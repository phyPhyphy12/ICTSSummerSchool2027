'use client';

import React from 'react';
import { ArrowDown, Calendar, Sparkles } from 'lucide-react';
import HeroCanvas from './HeroCanvas';

interface HeroSectionProps {
  onOpenApply: () => void;
}

export default function HeroSection({ onOpenApply }: HeroSectionProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-slate-800/80 bg-exhibition-950">
      {/* Restrained Scientific Canvas Background */}
      <HeroCanvas />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Institutional Affiliation Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-icts-amber" />
          <span>INTERNATIONAL CENTRE FOR THEORETICAL SCIENCES (ICTS-TIFR), BENGALURU</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-white leading-tight">
          Summer School for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-icts-amber via-white to-amber-200">
            Women in Physics 2027
          </span>
        </h1>

        {/* Master Brief Core Creative Direction */}
        <div className="mt-4 font-mono text-sm sm:text-base font-bold uppercase tracking-widest text-icts-amber">
          “Her Contributions to Physics. Your Future in Science.”
        </div>

        {/* Editorial Subtitle */}
        <p className="mt-4 max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
          An intensive summer residency at ICTS Bengaluru created to inspire undergraduate women, deepen conceptual understanding across the foundations of physics, and open pathways toward research careers.
        </p>

        {/* Dates Notice */}
        <div className="mt-6 inline-flex items-center space-x-2 px-4 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-400">
          <Calendar className="w-3.5 h-3.5 text-icts-amber" />
          <span>Dates to be announced — Applications will open soon</span>
        </div>

        {/* Call to Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 font-mono text-xs font-semibold">
          <button
            onClick={onOpenApply}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-icts-crimson hover:bg-icts-crimson-light text-white tracking-wider transition-all shadow-md active:scale-95 flex items-center justify-center space-x-2"
          >
            <Sparkles className="w-4 h-4 text-icts-amber" />
            <span>Apply for SSWP 2027</span>
          </button>

          <a
            href="#women-in-physics"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-all flex items-center justify-center space-x-2"
          >
            <span>Explore the Scientist Exhibition</span>
            <ArrowDown className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
