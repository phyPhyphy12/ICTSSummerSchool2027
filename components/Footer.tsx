'use client';

import React from 'react';
import { MapPin, Mail, ExternalLink, FileText } from 'lucide-react';
import { getAssetPath } from './utils';

export default function Footer() {
  const travelNormsDriveUrl = 'https://drive.google.com/file/d/1KLarM5ieFDLeiLjAOtdHKbyrk-3efzw9/view?usp=sharing';

  return (
    <footer className="border-t border-slate-800/80 bg-exhibition-950 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Col 1: Institute Overview */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <img
                src={getAssetPath('/images/icts-logo.png')}
                alt="ICTS Logo"
                className="h-8 w-auto object-contain"
              />
              <span className="font-bold text-white text-sm">ICTS-TIFR</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              International Centre for Theoretical Sciences, a centre of the Tata Institute of Fundamental Research, dedicated to research, advanced human capacity building, and scientific outreach.
            </p>
            <div className="flex items-start space-x-2 text-[11px] text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-icts-amber shrink-0 mt-0.5" />
              <span>Survey No. 151, Shivakote, Hesaraghatta Hobli, Bengaluru 560089, India</span>
            </div>
          </div>

          {/* Col 2: Navigation & Documents */}
          <div className="space-y-2">
            <h4 className="text-slate-200 font-bold uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#about" className="hover:text-slate-200 transition-colors">
                  About the Summer School
                </a>
              </li>
              <li>
                <a href="#women-in-physics" className="hover:text-slate-200 transition-colors">
                  Women in Physics Exhibition
                </a>
              </li>
              <li>
                <a href="#eligibility" className="hover:text-slate-200 transition-colors">
                  Eligibility & Selection
                </a>
              </li>
              <li>
                <a 
                  href={travelNormsDriveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-slate-200 transition-colors inline-flex items-center space-x-1"
                >
                  <FileText className="w-3 h-3 text-icts-amber" />
                  <span>Applicable ICTS Travel Norms (PDF)</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.icts.res.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-200 transition-colors inline-flex items-center space-x-1"
                >
                  <span>ICTS Official Website</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: General Outreach Contact */}
          <div className="space-y-2">
            <h4 className="text-slate-200 font-bold uppercase tracking-wider text-xs">General Inquiries</h4>
            <div className="space-y-2 text-slate-400 text-xs">
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-icts-amber" />
                <a href="mailto:outreach@icts.res.in" className="text-slate-300 hover:text-white transition-colors">
                  outreach@icts.res.in
                </a>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                For administrative and general programme correspondence. Individual organiser contact details are not published per institute privacy guidelines.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Attribution */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
          <div>
            © {new Date().getFullYear()} International Centre for Theoretical Sciences (ICTS-TIFR). All rights reserved.
          </div>
          <div>
            Summer School for Women in Physics (SSWP 2027)
          </div>
        </div>
      </div>
    </footer>
  );
}
