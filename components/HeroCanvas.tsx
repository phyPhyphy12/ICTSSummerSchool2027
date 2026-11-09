'use client';

import React, { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Respect user's reduced motion preference
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', resize);
    resize();

    let t = 0;

    const render = () => {
      t += 0.008;
      ctx.fillStyle = 'rgba(11, 15, 23, 0.25)';
      ctx.fillRect(0, 0, width, height);

      // Subtle, restrained harmonic physics wavefronts
      const lines = 7;
      const centerY = height * 0.45;

      for (let i = 0; i < lines; i++) {
        const offset = (i - lines / 2) * 22;
        const alpha = 0.04 + (1 - Math.abs(i - lines / 2) / (lines / 2)) * 0.12;

        ctx.strokeStyle = i % 2 === 0 ? `rgba(154, 57, 58, ${alpha})` : `rgba(239, 127, 26, ${alpha * 0.8})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();

        for (let x = 0; x <= width; x += 15) {
          const k1 = 0.003;
          const k2 = 0.008;
          const y =
            centerY +
            offset +
            Math.sin(x * k1 + t + i * 0.4) * 35 +
            Math.sin(x * k2 - t * 0.7) * 15;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 opacity-80">
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(11, 15, 23, 0.95) 90%)'
        }}
      />
    </div>
  );
}
