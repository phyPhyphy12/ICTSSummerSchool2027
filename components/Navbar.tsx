'use client';

import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { getAssetPath } from './utils';

interface NavbarProps {
  onOpenApply: () => void;
}

export default function Navbar({ onOpenApply }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Women in Physics', href: '#women-in-physics' },
    { label: 'Eligibility & Selection', href: '#eligibility' },
    { label: 'Support', href: '#support' },
    { label: 'A Typical Day', href: '#typical-day' },
    { label: 'Organisers', href: '#organisers' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-exhibition-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Official ICTS Logo & Title */}
          <a href="#" className="flex items-center space-x-3.5 group">
            <div className="relative h-10 w-auto flex items-center">
              <img
                src={getAssetPath('/images/icts-logo.png')}
                alt="International Centre for Theoretical Sciences Logo"
                className="h-9 w-auto object-contain"
              />
            </div>
            <div className="border-l border-slate-700/80 pl-3.5 flex flex-col">
              <span className="font-mono text-sm font-bold tracking-tight text-slate-100 group-hover:text-icts-amber transition-colors">
                SSWP 2027
              </span>
              <span className="text-[10px] text-slate-400 tracking-tight hidden sm:block">
                Summer School for Women in Physics
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs font-mono">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button: Apply */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenApply}
              className="px-4 py-2 rounded-lg bg-icts-crimson hover:bg-icts-crimson-light text-white font-mono text-xs font-semibold tracking-wider transition-all shadow-sm active:scale-95"
            >
              Apply
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-exhibition-950/95 backdrop-blur-xl p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center space-x-3">
              <img
                src={getAssetPath('/images/icts-logo.png')}
                alt="ICTS Logo"
                className="h-8 w-auto object-contain"
              />
              <span className="font-mono font-bold text-slate-100 text-sm">SSWP 2027</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-slate-900 text-slate-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col space-y-4 py-8 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-lg hover:bg-slate-900 text-slate-200 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              className="w-full py-3 rounded-lg bg-icts-crimson hover:bg-icts-crimson-light text-white font-mono font-bold text-xs tracking-wider"
            >
              Apply for SSWP 2027
            </button>
          </div>
        </div>
      )}
    </>
  );
}
