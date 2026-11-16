'use client';

import { useEffect } from 'react';

const TARGETS = '.card, .support';
const MAX_TILT_DEGREES = 7;

/**
 * Pointer-driven polish for cards: they tilt toward the cursor in 3D and a soft light follows it.
 * Sets CSS custom properties only; the look lives in motion.css. Skipped on touch devices and
 * for visitors who prefer reduced motion.
 */
export function PointerEffects() {
  useEffect(() => {
    const canHover = matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canHover || reducedMotion) return;

    let active: HTMLElement | null = null;
    let frame = 0;

    const reset = (element: HTMLElement) => {
      element.style.removeProperty('--tilt-x');
      element.style.removeProperty('--tilt-y');
      element.style.removeProperty('--tilt-angle');
    };

    const onMove = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>(TARGETS) : null;
      if (active && active !== target) reset(active);
      active = target;
      if (!target) return;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = target.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        // Offsets from the centre, -1 to 1. The rotation axis is perpendicular to that offset.
        const dx = x * 2 - 1;
        const dy = y * 2 - 1;
        const strength = Math.min(1, Math.hypot(dx, dy));
        target.style.setProperty('--light-x', `${(x * 100).toFixed(1)}%`);
        target.style.setProperty('--light-y', `${(y * 100).toFixed(1)}%`);
        target.style.setProperty('--tilt-x', (-dy).toFixed(3));
        target.style.setProperty('--tilt-y', dx.toFixed(3));
        target.style.setProperty('--tilt-angle', `${(strength * MAX_TILT_DEGREES).toFixed(2)}deg`);
      });
    };

    const onLeave = () => {
      if (active) reset(active);
      active = null;
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return null;
}
