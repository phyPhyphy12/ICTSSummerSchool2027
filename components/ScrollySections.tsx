'use client';

import React from 'react';
import { 
  Sparkles, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Laptop, 
  AlertTriangle, 
  Compass, 
  ArrowDown, 
  Atom, 
  Layers, 
  Calendar,
  Building,
  Terminal,
  ChevronRight
} from 'lucide-react';
import ExperientialCards from './ExperientialCards';
import { DropzoneConfig } from './PhotoDropzoneModal';

interface ScrollySectionsProps {
  onOpenDropzone: (config: DropzoneConfig) => void;
  onOpenApply: () => void;
  onOpenEligibility: () => void;
  onOpenSelection: () => void;
  onOpenFellowship: () => void;
  onOpenLaptopAdvisory: () => void;
}

export default function ScrollySections({
  onOpenDropzone,
  onOpenApply,
  onOpenEligibility,
  onOpenSelection,
  onOpenFellowship,
  onOpenLaptopAdvisory,
}: ScrollySectionsProps) {
  return (
    <div className="relative z-10 w-full min-h-[500vh] pointer-events-none">
      {/* Container with responsive positioning: Right-column anchor on desktop (40vw), responsive on mobile */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end">
          <div className="w-full lg:w-[46%] xl:w-[44%] space-y-36 pt-28 pb-40 pointer-events-auto">
            
            {/* ========================================================= */}
            {/* SCROLL PHASE 1: THE LAB GATEWAY & ENTROPY TO ORDER (0-25%) */}
            {/* ========================================================= */}
            <section id="phase-1-gateway" className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="font-bold tracking-wider">PHASE 01 // LAB GATEWAY</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-mono tracking-tight text-white leading-tight">
                PORTAL TO <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
                  PHYSICS AT ICTS
                </span>
              </h1>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                An intensive, fully funded residential summer research school hosted at the{' '}
                <strong className="text-white">International Centre for Theoretical Sciences (ICTS-TIFR)</strong>, 
                Bengaluru. Crafted exclusively to ignite undergraduate women&apos;s passion for experimental inquiry, 
                theoretical clarity, and cutting-edge physics frontiers.
              </p>

              {/* CRITICAL ADVISORY NOTE (FAQ / Highlight) */}
              <div 
                onClick={onOpenLaptopAdvisory}
                className="cursor-pointer group glass-panel rounded-2xl p-5 border border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-slate-900/60 to-slate-900/80 shadow-glow-amber hover:border-amber-400 transition-all"
              >
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 shrink-0 group-hover:scale-110 transition-transform">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs uppercase font-extrabold text-amber-300 tracking-wider">
                        CRITICAL ADVISORY NOTE
                      </span>
                      <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono">
                        MANDATORY
                      </span>
                    </div>
                    <p className="text-slate-200 text-xs md:text-sm mt-1 leading-snug">
                      If selected, students are <strong className="text-amber-300 font-semibold">highly requested and urged to bring a laptop</strong> (either personal or borrowed). Carrying a laptop is essential for the program&apos;s computational experiments and data structures.
                    </p>
                    <div className="mt-2 text-[11px] font-mono text-amber-400 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                      <span>Click to read full computing advisory</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* ADMINISTRATIVE PARAMETERS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {/* 1. Eligibility Card */}
                <div 
                  onClick={onOpenEligibility}
                  className="cursor-pointer group glass-panel rounded-xl p-4 border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-slate-900/80 transition-all"
                >
                  <div className="flex items-center space-x-2 text-cyan-400 mb-1.5">
                    <GraduationCap className="w-4 h-4" />
                    <span className="font-mono text-xs font-bold uppercase">Eligibility</span>
                  </div>
                  <div className="text-xs text-slate-300 leading-snug">
                    Exclusively open to women who have just passed/completed their <strong className="text-cyan-300">1st Year of B.Sc. (Physics)</strong> or Integrated B.Sc.-M.Sc. courses.
                  </div>
                </div>

                {/* 2. Selection Process Card */}
                <div 
                  onClick={onOpenSelection}
                  className="cursor-pointer group glass-panel rounded-xl p-4 border border-purple-500/20 hover:border-purple-400/50 hover:bg-slate-900/80 transition-all"
                >
                  <div className="flex items-center space-x-2 text-purple-400 mb-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="font-mono text-xs font-bold uppercase">Selection Process</span>
                  </div>
                  <div className="text-xs text-slate-300 leading-snug">
                    <strong className="text-purple-300">100% remote, home-based</strong> online MCQ selection exam evaluating basic undergraduate physics conceptual clarity.
                  </div>
                </div>

                {/* 3. Fellowship Card */}
                <div 
                  onClick={onOpenFellowship}
                  className="cursor-pointer group sm:col-span-2 glass-panel rounded-xl p-4 border border-emerald-500/20 hover:border-emerald-400/50 hover:bg-slate-900/80 transition-all"
                >
                  <div className="flex items-center space-x-2 text-emerald-400 mb-1.5">
                    <Award className="w-4 h-4" />
                    <span className="font-mono text-xs font-bold uppercase">100% Fully Funded Fellowship</span>
                  </div>
                  <div className="text-xs text-slate-300 leading-snug">
                    No registration fees. Covers <strong className="text-emerald-300">full travel reimbursements, comfortable campus housing, and all daily meals</strong> at ICTS Bengaluru.
                  </div>
                </div>
              </div>

              {/* Scroll prompt */}
              <div className="pt-6 flex items-center space-x-3 text-xs font-mono text-slate-400">
                <div className="w-6 h-10 rounded-full border border-slate-700 flex items-start justify-center p-1">
                  <div className="w-1.5 h-2.5 rounded-full bg-cyan-400 animate-bounce" />
                </div>
                <span>Scroll down to open the gate and enter the core corridor</span>
              </div>
            </section>

            {/* ========================================================= */}
            {/* SCROLL PHASE 2: HOLOGRAPHIC CORE CORRIDOR (26% - 50%)    */}
            {/* ========================================================= */}
            <section id="phase-2-corridor" className="space-y-6 pt-12">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                <span className="font-bold tracking-wider">PHASE 02 // SPACETIME GEOMETRY</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-mono text-white leading-tight">
                THE HOLOGRAPHIC <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-300 to-amber-300">
                  CORE CORRIDOR
                </span>
              </h2>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Step inside the spacetime well. At ICTS, physics is not taught as a catalog of settled equations, 
                but as a living, breathing geometry of questions. The curriculum pulls down barriers between theory, 
                experimentation, and computation.
              </p>

              {/* Highlights of Academic Environment */}
              <div className="glass-panel rounded-2xl p-6 border border-purple-500/30 space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 font-bold flex items-center space-x-2">
                  <Building className="w-4 h-4 text-purple-400" />
                  <span>The ICTS Campus Environment</span>
                </h4>
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start space-x-2.5">
                    <span className="text-cyan-400 font-mono font-bold">01.</span>
                    <div>
                      <strong className="text-white">World-Class Research Facility:</strong> Located in North Bengaluru, ICTS brings together global Nobel laureates, Fields medalists, and visionary experimentalists under one roof.
                    </div>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <span className="text-purple-400 font-mono font-bold">02.</span>
                    <div>
                      <strong className="text-white">Intimate Mentorship Ratios:</strong> Small cohorts ensure every participant works shoulder-to-shoulder with senior faculty and postdocs.
                    </div>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <span className="text-amber-400 font-mono font-bold">03.</span>
                    <div>
                      <strong className="text-white">Breakthrough Experimental Labs:</strong> From fluid turbulence tanks to laser interferometers and quantum measurement benches.
                    </div>
                  </div>
                </div>
              </div>

              {/* Gravitational Well Concept Box */}
              <div className="glass-panel rounded-xl p-4 border border-slate-800 bg-slate-900/60 font-mono text-xs text-slate-400">
                <div className="text-amber-300 font-semibold mb-1 flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Spacetime Simulation in Background</span>
                </div>
                Observe the canvas to your left: As you scroll through Phase 2, the coordinate grid deforms under a simulated mass singularity, bending geodesics and illustrating Einstein&apos;s field equations in real-time.
              </div>
            </section>

            {/* ========================================================= */}
            {/* SCROLL PHASE 3: EXPERIENTIAL COMPONENT MATRIX (51% - 100%) */}
            {/* ========================================================= */}
            <section id="phase-3-matrix" className="space-y-6 pt-12">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span className="font-bold tracking-wider">PHASE 03 // EXPERIENTIAL MATRIX</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-mono text-white leading-tight">
                THE 3-TIER <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-300 to-cyan-300">
                  DAILY RHYTHM
                </span>
              </h2>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Notice the background transition into Young&apos;s double slit quantum interference. 
                Hover over the cards below to expand details, and click any card to inspect archived photos 
                or drop new snapshot files directly into the repository!
              </p>

              {/* THREE EXPANDABLE INTERACTIVE CARDS */}
              <ExperientialCards onOpenDropzone={onOpenDropzone} />

              {/* Call to action at end of timeline */}
              <div className="pt-8 space-y-4 text-center">
                <div className="glass-panel-glow rounded-2xl p-6 border border-cyan-400/40 space-y-3">
                  <h3 className="font-mono text-lg font-bold text-white">
                    Ready to Enter the Portal?
                  </h3>
                  <p className="text-xs text-slate-300">
                    Join an unforgettable cohort of undergraduate women physicists at ICTS Bengaluru. 
                    Applications are 100% free and open now.
                  </p>
                  <button
                    onClick={onOpenApply}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 text-slate-950 font-mono font-black text-sm tracking-wider shadow-glow-cyan hover:scale-[1.02] transition-all"
                  >
                    SUBMIT APPLICATION FOR SSWP 2027
                  </button>
                </div>
              </div>

            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
