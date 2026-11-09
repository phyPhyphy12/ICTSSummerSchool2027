'use client';

import React, { useState, useEffect } from 'react';
import { Activity, Compass, Gauge, Zap, ChevronDown } from 'lucide-react';

interface CanvasHUDProps {
  progress: number;
  phase: number;
}

export default function CanvasHUD({ progress, phase }: CanvasHUDProps) {
  const [fps, setFps] = useState(60);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const calcFps = () => {
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(calcFps);
    };

    animId = requestAnimationFrame(calcFps);
    return () => cancelAnimationFrame(animId);
  }, []);

  const phaseNames = [
    '',
    'PHASE 1: THE LAB GATEWAY & ENTROPY',
    'PHASE 2: SPACETIME & GRAVITATIONAL WELL',
    'PHASE 3: WAVE-PARTICLE INTERFERENCE MATRIX',
  ];

  const phaseDescriptions = [
    '',
    'Vacuum Gate Open • Spin Alignment → "SSWP"',
    'Coordinate Grid Warping • Mass Singularity z-pull',
    'Double-Slit Diffraction • Realtime Cosine Fringes',
  ];

  const jumpToPhase = (phaseNumber: number) => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    let target = 0;
    if (phaseNumber === 1) target = 0;
    if (phaseNumber === 2) target = totalHeight * 0.38;
    if (phaseNumber === 3) target = totalHeight * 0.72;
    window.scrollTo({ top: target, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-6 z-30 pointer-events-auto hidden md:block">
      <div className="glass-panel-glow rounded-xl p-3.5 text-xs font-mono max-w-sm border border-cyan-500/30 backdrop-blur-md">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
          <div className="flex items-center space-x-2 text-cyan-400">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span className="font-semibold tracking-wider">ICTS SIMULATION HUD</span>
          </div>
          <div className="flex items-center space-x-1 text-slate-400">
            <Gauge className="w-3 h-3 text-emerald-400" />
            <span className="text-[11px] text-emerald-400 font-bold">{fps} FPS</span>
          </div>
        </div>

        {/* Phase Info */}
        <div className="mb-2.5">
          <div className="text-[10px] uppercase tracking-wider text-slate-400 flex items-center justify-between">
            <span>ACTIVE TELEMETRY</span>
            <span className="text-cyan-400 font-bold">{(progress * 100).toFixed(1)}% SCROLL</span>
          </div>
          <div className="font-bold text-slate-100 text-xs mt-0.5">{phaseNames[phase] || 'INITIALIZING'}</div>
          <div className="text-[10px] text-slate-400">{phaseDescriptions[phase] || 'Calibrating canvas coordinates...'}</div>
        </div>

        {/* Progress scrub bar */}
        <div className="w-full bg-slate-900/80 rounded-full h-1.5 overflow-hidden mb-3 border border-slate-800">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-amber-400 transition-all duration-75"
            style={{ width: `${Math.min(100, Math.max(0, progress * 100))}%` }}
          />
        </div>

        {/* Fast jump buttons */}
        <div className="grid grid-cols-3 gap-1.5 pt-1">
          <button
            onClick={() => jumpToPhase(1)}
            className={`px-2 py-1 rounded text-[10px] transition-all flex items-center justify-center space-x-1 border ${
              phase === 1
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold'
                : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <span>P1: GATE</span>
          </button>
          <button
            onClick={() => jumpToPhase(2)}
            className={`px-2 py-1 rounded text-[10px] transition-all flex items-center justify-center space-x-1 border ${
              phase === 2
                ? 'bg-purple-500/20 border-purple-400 text-purple-300 font-bold'
                : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <span>P2: WELL</span>
          </button>
          <button
            onClick={() => jumpToPhase(3)}
            className={`px-2 py-1 rounded text-[10px] transition-all flex items-center justify-center space-x-1 border ${
              phase === 3
                ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold'
                : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <span>P3: WAVE</span>
          </button>
        </div>
      </div>
    </div>
  );
}
