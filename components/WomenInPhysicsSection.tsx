'use client';

import React, { useState } from 'react';
import { ExternalLink, Sparkles, Filter, Award, BookOpen, Compass } from 'lucide-react';
import { SCIENTISTS, Scientist, getIndianScientistRatio } from './scientistsData';
import ScientistResearchVisual from './ScientistResearchVisual';
import { getAssetPath } from './utils';

export default function WomenInPhysicsSection() {
  const [filter, setFilter] = useState<'all' | 'indian' | 'international'>('all');
  const ratio = getIndianScientistRatio();

  const filteredScientists = SCIENTISTS.filter((s) => {
    if (filter === 'indian') return s.isIndian;
    if (filter === 'international') return !s.isIndian;
    return true;
  });

  return (
    <section id="women-in-physics" className="relative py-20 border-t border-slate-800/80 bg-exhibition-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-icts-crimson/15 border border-icts-crimson/30 text-xs font-mono text-icts-amber mb-3">
            <span>EXHIBITION // WOMEN IN PHYSICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Her Contributions to Physics. <br />
            <span className="text-icts-amber font-sans text-2xl sm:text-3xl font-semibold">
              Your Future in Science.
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Physics advances through persistent questions, careful observation, and theoretical insight. 
            Explore the discoveries of pioneering women who transformed our understanding of the universe—from 
            cosmic ray particle tracks in Darjeeling to the mathematical foundations of conservation laws and dark matter halos.
          </p>

          {/* Representation Counter Pill */}
          <div className="mt-4 flex items-center space-x-3 text-xs font-mono text-slate-400">
            <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-slate-200">
              {ratio.indian} of {ratio.total} Featured Scientists are Indian Women ({ratio.percentage}%)
            </span>
            <span className="text-slate-500">•</span>
            <span>Historical Pioneers & Contemporary Researchers</span>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center space-x-2 mb-10 overflow-x-auto pb-2 font-mono text-xs">
          <span className="text-slate-400 mr-2 flex items-center space-x-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </span>
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              filter === 'all'
                ? 'bg-icts-crimson border-icts-crimson text-white font-bold'
                : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            All Scientists ({SCIENTISTS.length})
          </button>
          <button
            onClick={() => setFilter('indian')}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              filter === 'indian'
                ? 'bg-icts-crimson border-icts-crimson text-white font-bold'
                : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            Indian Women Physicists ({SCIENTISTS.filter((s) => s.isIndian).length})
          </button>
          <button
            onClick={() => setFilter('international')}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              filter === 'international'
                ? 'bg-icts-crimson border-icts-crimson text-white font-bold'
                : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            International Pioneers ({SCIENTISTS.filter((s) => !s.isIndian).length})
          </button>
        </div>

        {/* Exhibition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredScientists.map((scientist) => (
            <article
              key={scientist.id}
              className="museum-panel rounded-2xl p-6 md:p-7 border border-slate-800 hover:border-icts-crimson/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Scientist Metadata Header */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center space-x-4">
                    {/* Portrait or Dignified Typographic Treatment */}
                    <div className="relative w-16 h-20 sm:w-20 sm:h-24 rounded-lg overflow-hidden border border-slate-700 bg-slate-900 shrink-0">
                      {scientist.portrait ? (
                        <img
                          src={getAssetPath(scientist.portrait)}
                          alt={`Portrait of ${scientist.name}`}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-2 text-center bg-slate-900 border border-dashed border-slate-700">
                          <span className="font-serif text-lg font-bold text-icts-amber">
                            {scientist.name.split(' ').map((n) => n[0]).join('')}
                          </span>
                          <span className="text-[8px] font-mono text-slate-400 mt-1 leading-tight">
                            Portrait pending confirmation
                          </span>
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${
                            scientist.isIndian
                              ? 'bg-amber-950/40 border-amber-600/30 text-amber-300'
                              : 'bg-slate-800 border-slate-700 text-slate-300'
                          }`}
                        >
                          {scientist.nationality}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {scientist.years}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-white mt-1">
                        {scientist.name}
                      </h3>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {scientist.contribution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Scientifically Grounded Visual Representation */}
                <div className="mt-4 mb-4">
                  <ScientistResearchVisual
                    scientistId={scientist.id}
                    visualTitle={scientist.visualTitle}
                    visualType={scientist.visualType}
                    visualDescription={scientist.visualDescription}
                  />
                </div>
              </div>

              {/* Card Footer: Image Credit & Source Link */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400 flex-wrap gap-2">
                <span className="truncate max-w-[260px] text-slate-400" title={scientist.imageCredit}>
                  Credit: {scientist.imageCredit}
                </span>
                <a
                  href={scientist.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-icts-amber hover:text-white transition-colors"
                >
                  <span>{scientist.sourceLabel}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Transition to Student Future */}
        <div className="mt-16 text-center max-w-2xl mx-auto space-y-3">
          <h3 className="font-serif text-2xl font-bold text-white">
            “What questions will you ask?”
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            The history of physics is shaped by curious minds who looked at anomalies and pursued fundamental answers. 
            SSWP 2027 provides a platform for undergraduate women to deepen their scientific intuition and take their first steps toward research.
          </p>
        </div>

      </div>
    </section>
  );
}
