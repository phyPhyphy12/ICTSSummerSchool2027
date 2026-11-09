'use client';

import React from 'react';
import { X, Clock, Calendar, Mail, Check } from 'lucide-react';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-md bg-exhibition-900 border border-slate-700 rounded-2xl p-6 sm:p-7 shadow-2xl space-y-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="coming-soon-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-icts-crimson/20 border border-icts-crimson/40 text-icts-amber flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h3 id="coming-soon-title" className="font-serif text-xl font-bold text-white">
              Applications Opening Soon
            </h3>
            <span className="font-mono text-xs text-icts-amber">SSWP 2027 Edition</span>
          </div>
        </div>

        {/* Modal Message */}
        <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
          <p>
            Applications for the <strong>Summer School for Women in Physics 2027</strong> have not opened yet. 
            Official programme dates, application portal access, and examination schedules will be announced here.
          </p>
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2 text-xs font-mono">
            <div className="text-slate-400 flex items-start space-x-2">
              <Calendar className="w-4 h-4 text-icts-amber shrink-0 mt-0.5" />
              <span>Programme Dates: To be announced by the organising committee</span>
            </div>
            <div className="text-slate-400 flex items-start space-x-2">
              <Check className="w-4 h-4 text-icts-amber shrink-0 mt-0.5" />
              <span>Eligibility: Women who have completed 1st Year of B.Sc. Physics or Int. B.Sc.–M.Sc.</span>
            </div>
          </div>
          <p className="text-xs text-slate-400">
            For academic inquiries regarding the school, you may write to{' '}
            <a href="mailto:outreach@icts.res.in" className="text-slate-200 underline underline-offset-4 hover:text-icts-amber">
              outreach@icts.res.in
            </a>.
          </p>
        </div>

        {/* Modal Action */}
        <div className="pt-3 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
