'use client';

import React from 'react';
import { Atom, MapPin, Mail, ExternalLink, Heart, Shield, Laptop } from 'lucide-react';

export default function Footer({
  onOpenLaptopAdvisory,
  onOpenEligibility,
  onOpenApply,
}: {
  onOpenLaptopAdvisory: () => void;
  onOpenEligibility: () => void;
  onOpenApply: () => void;
}) {
  return (
    <footer className="relative z-20 border-t border-slate-800/80 bg-slate-950/90 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Institute */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-2 text-cyan-400 font-bold text-sm">
              <Atom className="w-5 h-5 animate-spin" style={{ animationDuration: '20s' }} />
              <span>International Centre for Theoretical Sciences (ICTS-TIFR)</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              A multi-disciplinary research institution of the Tata Institute of Fundamental Research (TIFR), committed to fostering world-class scientific research, advanced human training, and transformative public outreach.
            </p>
            <div className="flex items-center space-x-2 text-[11px] text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
              <span>Survey No. 151, Shivakote, Hesaraghatta Hobli, Bengaluru 560089, India</span>
            </div>
          </div>

          {/* Col 2: Program Links */}
          <div className="space-y-2">
            <h4 className="text-slate-200 font-bold uppercase tracking-wider text-xs">Navigation</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <button onClick={onOpenEligibility} className="hover:text-cyan-300 transition-colors">
                  Eligibility Criteria
                </button>
              </li>
              <li>
                <button onClick={onOpenLaptopAdvisory} className="hover:text-amber-300 transition-colors flex items-center space-x-1">
                  <Laptop className="w-3 h-3 text-amber-400" />
                  <span>Laptop Advisory Note</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenApply} className="hover:text-cyan-300 transition-colors">
                  Registration & Selection Exam
                </button>
              </li>
              <li>
                <a 
                  href="https://www.icts.res.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-slate-200 flex items-center space-x-1"
                >
                  <span>ICTS Official Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Outreach */}
          <div className="space-y-2">
            <h4 className="text-slate-200 font-bold uppercase tracking-wider text-xs">Direct Inquiries</h4>
            <div className="space-y-1.5 text-slate-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-slate-300">sswp@icts.res.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-slate-300">outreach@icts.res.in</span>
              </div>
              <p className="text-[11px] text-slate-500 pt-1">
                Summer School for Women in Physics (SSWP) is held annually during the summer break.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} International Centre for Theoretical Sciences (ICTS-TIFR). All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 text-slate-400">
              <span>Built with high-performance WebGL & Canvas</span>
            </span>
            <span>•</span>
            <span className="text-cyan-400 font-semibold">100% Fully Funded DAE Fellowship</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
