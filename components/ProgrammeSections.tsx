'use client';

import React from 'react';
import { 
  GraduationCap, 
  CheckCircle2, 
  FileText, 
  ExternalLink, 
  Sun, 
  FlaskConical, 
  Moon, 
  Laptop, 
  HelpCircle, 
  Users, 
  Building2,
  Download
} from 'lucide-react';
import { getAssetPath } from './utils';

export default function ProgrammeSections() {
  const organisers = [
    { name: 'Rajaram Nityananda', affiliation: 'ICTS-TIFR, Bengaluru' },
    { name: 'Ranjini Bandyopadhyay', affiliation: 'Raman Research Institute (RRI), Bengaluru' },
    { name: 'Mahua Ghosh', affiliation: 'Mount Carmel College (Retd.), Bengaluru' },
    { name: 'Pradeep Kumar Mohanty', affiliation: 'IISER Kolkata' },
    { name: 'Shirish Pathare', affiliation: 'Homi Bhabha Centre for Science Education (HBCSE), TIFR, Mumbai' },
    { name: 'Kripa Gowrishankar', affiliation: 'Azim Premji University, Bengaluru' },
    { name: 'Sushan Konar', affiliation: 'National Centre for Radio Astrophysics (NCRA), TIFR, Pune' },
    { name: 'Ikbal Ahmed', affiliation: 'ICTS-TIFR, Bengaluru' },
    { name: 'Rema Krishnaswamy', affiliation: 'Azim Premji University, Bengaluru' },
    { name: 'Pallavi Bhat', affiliation: 'ICTS-TIFR, Bengaluru' },
    { name: 'Rama Govindarajan', affiliation: 'ICTS-TIFR, Bengaluru' },
  ];

  const travelNormsDriveUrl = 'https://drive.google.com/file/d/1KLarM5ieFDLeiLjAOtdHKbyrk-3efzw9/view?usp=sharing';
  const travelNormsLocalUrl = getAssetPath('/icts-travel-norms.pdf');

  return (
    <div className="space-y-24 py-16">
      
      {/* ========================================================= */}
      {/* SECTION D: ABOUT THE PROGRAMME */}
      {/* ========================================================= */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="museum-panel rounded-2xl p-8 sm:p-10 border border-slate-800">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-icts-crimson/15 border border-icts-crimson/30 text-xs font-mono text-icts-amber mb-4">
            <span>ABOUT THE SCHOOL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
            Encouraging Undergraduate Women to Pursue Physics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-300 text-sm leading-relaxed">
            <p>
              The <strong>Summer School for Women in Physics (SSWP)</strong> at ICTS-TIFR is designed to encourage undergraduate women to consider physics as a career and to experience the excitement and interconnectedness of physics through lectures, simple experiments or demonstrations, open-ended discussion, and problem-solving.
            </p>
            <p>
              By bringing together enthusiastic students and active physicists in a collaborative academic setting, the programme fosters deep conceptual understanding, scientific curiosity, and confidence in approaching foundational questions.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTIONS E & F: ELIGIBILITY & SELECTION PROCESS */}
      {/* ========================================================= */}
      <section id="eligibility" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Eligibility Card */}
          <div className="museum-panel rounded-2xl p-7 sm:p-8 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-icts-amber mb-3">
                <GraduationCap className="w-5 h-5 text-icts-crimson" />
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-slate-200">
                  Eligibility Criteria
                </h3>
              </div>
              <p className="text-white text-base font-serif leading-relaxed mt-2">
                “The school is open to women students who have completed the first year of a B.Sc. Physics programme or an Integrated B.Sc.–M.Sc. programme.”
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
              * Working eligibility statement for the 2027 edition; subject to final reconfirmation by the programme organisers.
            </div>
          </div>

          {/* Selection Process Card */}
          <div className="museum-panel rounded-2xl p-7 sm:p-8 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-icts-amber mb-3">
                <CheckCircle2 className="w-5 h-5 text-icts-amber" />
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-slate-200">
                  Selection Process
                </h3>
              </div>
              <p className="text-white text-base font-serif leading-relaxed mt-2">
                “Selection will be based on an online, MCQ-based test consisting of basic conceptual physics questions.”
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
              Evaluates fundamental physical intuition. Exam details, platform guidelines, and schedule will be communicated when applications open.
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION G: ACCOMMODATION, TRAVEL AND OTHER SUPPORT */}
      {/* ========================================================= */}
      <section id="support" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="museum-panel-highlight rounded-2xl p-8 sm:p-10 border border-icts-crimson/30">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 mb-4">
              <span>SUPPORT & ACCOMMODATION</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
              Institutional Support for Selected Students
            </h3>
            <p className="text-slate-200 text-base leading-relaxed mb-6">
              “Accommodation, travel and other support will be provided by ICTS to selected students, as per applicable ICTS norms.”
            </p>

            {/* Document Box linking to official PDF */}
            <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3.5">
                <div className="p-2.5 rounded-lg bg-icts-crimson/20 text-icts-amber shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-sm font-bold text-white">
                    Applicable ICTS Travel & Support Norms
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Official participant guidelines and reimbursement policies (PDF Document)
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <a
                  href={travelNormsDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-icts-crimson hover:bg-icts-crimson-light text-white font-mono text-xs font-semibold tracking-wider transition-all inline-flex items-center space-x-1.5"
                >
                  <span>View Official PDF</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={travelNormsLocalUrl}
                  download="ICTS-Travel-Norms-Participants.pdf"
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 transition-colors"
                  title="Direct Download Local Copy"
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION H: A TYPICAL DAY */}
      {/* ========================================================= */}
      <section id="typical-day" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400 mb-2">
            <span>PROGRAMME STRUCTURE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            A Typical Day at the School
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Balancing foundational lectures, laboratory inquiry, and informal discussion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Morning */}
          <div className="museum-panel rounded-2xl p-6 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-amber-950/30 border border-amber-600/30 text-amber-400 flex items-center justify-center mb-4">
              <Sun className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-1">
              Part 01
            </div>
            <h3 className="text-lg font-serif font-bold text-white mb-2">
              Morning
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Lectures by eminent professors focusing on broad, foundational principles of physics rather than hyper-specialized research, fostering direct engagement and open question sessions.
            </p>
          </div>

          {/* Card 2: Afternoon */}
          <div className="museum-panel rounded-2xl p-6 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-icts-crimson/20 border border-icts-crimson/40 text-icts-amber flex items-center justify-center mb-4">
              <FlaskConical className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-icts-amber font-semibold mb-1">
              Part 02
            </div>
            <h3 className="text-lg font-serif font-bold text-white mb-2">
              Afternoon
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Experimental sessions and tabletop laboratory investigations where participants test theoretical predictions, explore simple physical setups, and work collaboratively on empirical observations.
            </p>
          </div>

          {/* Card 3: Evening */}
          <div className="museum-panel rounded-2xl p-6 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 flex items-center justify-center mb-4">
              <Moon className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1">
              Part 03
            </div>
            <h3 className="text-lg font-serif font-bold text-white mb-2">
              Evening
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Discussions, problem-solving sessions, and informal interactions with research scholars and faculty on careers in physics and academic pathways.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION I: PRACTICAL INFORMATION / LAPTOP */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="museum-panel rounded-2xl p-7 sm:p-8 border border-slate-800">
          <div className="flex items-start space-x-3.5">
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 shrink-0">
              <Laptop className="w-5 h-5 text-slate-300" />
            </div>
            <div>
              <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-1">
                Practical Information // What to Bring
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                “Students are encouraged to bring a laptop if they have access to one. A personal or borrowed laptop may be used.”
              </p>
              <p className="text-slate-400 text-xs mt-2">
                Laptops are useful for analysis during experimental sessions and accessing shared scientific material.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION J: PROGRAMME ORGANISERS */}
      {/* ========================================================= */}
      <section id="organisers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400 mb-2">
            <span>LEADERSHIP</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Programme Organisers
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            SSWP 2027 organising committee representing leading academic institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {organisers.map((org, index) => (
            <div
              key={index}
              className="museum-panel rounded-xl p-4 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <div className="font-serif font-bold text-slate-100 text-base">
                {org.name}
              </div>
              <div className="text-xs text-slate-400 font-mono mt-1">
                {org.affiliation}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
