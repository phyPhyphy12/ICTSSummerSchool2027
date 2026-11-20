'use client';

import { useEffect } from 'react';

const TARGETS = '.support';

/**
 * Pointer-driven polish for the support panel: a soft light follows the cursor across it.
 * Nothing tilts or moves. Sets CSS custom properties only; the look lives in motion.css.
 * Skipped on touch devices and for visitors who prefer reduced motion.
 */
export function PointerEffects() {
  useEffect(() => {
    const canHover = matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canHover || reducedMotion) return;

    let frame = 0;

    const onMove = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>(TARGETS) : null;
      if (!target) return;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = target.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        target.style.setProperty('--light-x', `${(x * 100).toFixed(1)}%`);
        target.style.setProperty('--light-y', `${(y * 100).toFixed(1)}%`);
      });
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('pointermove', onMove);
    };
  }, []);

  return null;
}
