'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PhysicsPortalCanvasProps {
  onProgressUpdate?: (progress: number, phase: number) => void;
}

export default function PhysicsPortalCanvas({ onProgressUpdate }: PhysicsPortalCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollProgressRef = useRef<number>(0);
  const animFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let dpr = window.devicePixelRatio || 1;

    // -------------------------------------------------------------
    // 1. PARTICLE SYSTEM & SSWP TARGETS
    // -------------------------------------------------------------
    const NUM_PARTICLES = 320;
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      targetX: number;
      targetY: number;
      color: string;
      radius: number;
      alpha: number;
      trail: { x: number; y: number }[];
    }

    const particles: Particle[] = [];
    const colors = ['#22d3ee', '#38bdf8', '#a855f7', '#c084fc', '#f59e0b', '#fbbf24'];
    let sswpTargets: { x: number; y: number }[] = [];

    const initSSWPTargets = () => {
      sswpTargets = [];
      const letterScale = Math.min(width * 0.45, 480);
      const startX = width * 0.32 - letterScale * 0.5;
      const startY = height * 0.48;

      // Define coordinates for letters S, S, W, P in normalized grid
      const letterDefs: { letter: string; offset: number }[] = [
        { letter: 'S', offset: 0 },
        { letter: 'S', offset: 0.28 },
        { letter: 'W', offset: 0.56 },
        { letter: 'P', offset: 0.88 },
      ];

      letterDefs.forEach(({ letter, offset }) => {
        const ox = startX + offset * letterScale;
        const oy = startY;
        const w = letterScale * 0.22;
        const h = letterScale * 0.35;

        if (letter === 'S') {
          for (let t = 0; t <= 1; t += 0.05) {
            const px = ox + (Math.sin(t * Math.PI * 2) * 0.4 + 0.5) * w;
            const py = oy + (t - 0.5) * h;
            sswpTargets.push({ x: px, y: py });
          }
        } else if (letter === 'W') {
          for (let t = 0; t <= 1; t += 0.05) {
            let px = ox + t * w;
            let py = oy - h * 0.5 + Math.abs(Math.sin(t * Math.PI * 2)) * h;
            sswpTargets.push({ x: px, y: py });
          }
        } else if (letter === 'P') {
          for (let t = 0; t <= 1; t += 0.08) {
            sswpTargets.push({ x: ox, y: oy - h * 0.5 + t * h });
          }
          for (let angle = -Math.PI / 2; angle <= Math.PI / 2; angle += 0.15) {
            sswpTargets.push({
              x: ox + Math.cos(angle) * (w * 0.65),
              y: oy - h * 0.22 + Math.sin(angle) * (h * 0.28),
            });
          }
        }
      });
    };

    const resize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      initSSWPTargets();
    };

    window.addEventListener('resize', resize);
    resize();

    // Initialize particles
    for (let i = 0; i < NUM_PARTICLES; i++) {
      const target = sswpTargets[i % sswpTargets.length] || { x: width * 0.35, y: height * 0.5 };
      particles.push({
        x: Math.random() * width * 0.7,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 2.5,
        vy: (Math.random() - 0.5) * 2.5,
        targetX: target.x,
        targetY: target.y,
        color: colors[i % colors.length],
        radius: Math.random() * 2 + 1.2,
        alpha: Math.random() * 0.7 + 0.3,
        trail: [],
      });
    }

    // -------------------------------------------------------------
    // 2. DOUBLE SLIT INTERFERENCE (Phase 3)
    // -------------------------------------------------------------
    interface QuantumPhoton {
      x: number;
      y: number;
      vx: number;
      slitChosen: number;
      phase: number;
      impacted: boolean;
      impactY: number;
    }
    const photons: QuantumPhoton[] = [];
    const NUM_PHOTONS = 90;
    const interferenceHistogram: number[] = new Array(80).fill(0);

    for (let i = 0; i < NUM_PHOTONS; i++) {
      photons.push({
        x: Math.random() * width * 0.5,
        y: height * 0.2 + Math.random() * height * 0.6,
        vx: 3.5 + Math.random() * 3,
        slitChosen: Math.random() > 0.5 ? 1 : -1,
        phase: Math.random() * Math.PI * 2,
        impacted: false,
        impactY: 0,
      });
    }

    // -------------------------------------------------------------
    // GSAP SCROLLTRIGGER BINDING (0 to 1 over 500vh)
    // -------------------------------------------------------------
    const st = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.6,
      onUpdate: (self) => {
        const p = self.progress;
        scrollProgressRef.current = p;
        const currentPhase = p < 0.28 ? 1 : p < 0.6 ? 2 : 3;
        if (onProgressUpdate) {
          onProgressUpdate(p, currentPhase);
        }
      },
    });

    // -------------------------------------------------------------
    // RENDER LOOP (requestAnimationFrame)
    // -------------------------------------------------------------
    let time = 0;

    const render = () => {
      time += 0.02;
      const progress = scrollProgressRef.current;

      // Clear with subtle trail
      ctx.fillStyle = 'rgba(2, 6, 23, 0.45)';
      ctx.fillRect(0, 0, width, height);

      // Render subtle background grid
      drawDeepPerspectiveGrid(ctx, width, height, progress, time);

      // PHASE 1: THE LAB GATEWAY & ENTROPY TO ORDER (0% - 30%)
      if (progress < 0.35) {
        const phase1Ratio = Math.min(progress / 0.28, 1);
        drawLabGatewayPortal(ctx, width, height, phase1Ratio, time);
        drawChaosToOrderParticles(ctx, particles, sswpTargets, phase1Ratio, width, height, time);
      }

      // PHASE 2: SPACETIME GEOMETRY & GRAVITATIONAL WELL (25% - 70%)
      if (progress > 0.22 && progress < 0.72) {
        const p2In = (progress - 0.22) / (0.6 - 0.22);
        const phase2Ratio = Math.max(0, Math.min(1, p2In));
        drawSpacetimeCurvatureGrid(ctx, width, height, phase2Ratio, time);
      }

      // PHASE 3: WAVE-PARTICLE DUALITY & DOUBLE-SLIT (55% - 100%)
      if (progress > 0.52) {
        const p3In = (progress - 0.52) / (1 - 0.52);
        const phase3Ratio = Math.max(0, Math.min(1, p3In));
        drawWaveParticleInterference(ctx, width, height, phase3Ratio, photons, interferenceHistogram, time);
      }

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      st.kill();
    };
  }, [onProgressUpdate]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden bg-midnight-950">
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none opacity-60" 
           style={{ background: 'radial-gradient(circle at 40% 50%, transparent 20%, rgba(2, 6, 23, 0.85) 90%)' }} />
    </div>
  );
}

// =====================================================================
// HELPER DRAWING FUNCTIONS
// =====================================================================

// Subtle perspective floor grid running in the background
function drawDeepPerspectiveGrid(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  progress: number,
  t: number
) {
  ctx.save();
  ctx.strokeStyle = 'rgba(34, 211, 238, 0.04)';
  ctx.lineWidth = 1;

  const horizonY = h * 0.55;
  const numVLines = 16;
  const cx = w * 0.45;

  for (let i = -numVLines; i <= numVLines; i++) {
    const bottomX = cx + i * (w * 0.06);
    ctx.beginPath();
    ctx.moveTo(cx, horizonY);
    ctx.lineTo(bottomX, h);
    ctx.stroke();
  }

  const offset = (t * 20 + progress * 200) % 30;
  for (let y = horizonY + offset; y < h; y += 28) {
    const depthFactor = (y - horizonY) / (h - horizonY);
    ctx.strokeStyle = `rgba(34, 211, 238, ${0.01 + depthFactor * 0.05})`;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }
  ctx.restore();
}

// ---------------------------------------------------------------------
// PHASE 1: THE LAB GATEWAY (Sleek 3D Vector Double Doors + Perspective Hallway)
// ---------------------------------------------------------------------
function drawLabGatewayPortal(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  ratio: number, // 0 = closed, 1 = fully open
  t: number
) {
  ctx.save();
  const centerX = w * 0.38;
  const centerY = h * 0.5;
  const doorWidth = Math.min(w * 0.28, 280);
  const doorHeight = Math.min(h * 0.65, 520);

  // Door opening displacement: smoothly slide outward
  const doorOpenX = ratio * (doorWidth * 1.05);
  const doorAlpha = Math.max(0, 1 - ratio * 1.2);

  if (doorAlpha <= 0.01) {
    ctx.restore();
    return;
  }

  // Vanishing point hallway corridor in perspective behind the doors
  const corridorPush = ratio * 120;
  ctx.strokeStyle = `rgba(34, 211, 238, ${0.25 * doorAlpha})`;
  ctx.lineWidth = 1.5;

  // Corridor boundary lines pushing inward
  const depthScale = 0.55 + ratio * 0.45;
  const backW = doorWidth * 2 * depthScale;
  const backH = doorHeight * depthScale;

  ctx.beginPath();
  // outer frame to inner frame
  ctx.moveTo(centerX - doorWidth, centerY - doorHeight / 2);
  ctx.lineTo(centerX - backW / 2, centerY - backH / 2);

  ctx.moveTo(centerX + doorWidth, centerY - doorHeight / 2);
  ctx.lineTo(centerX + backW / 2, centerY - backH / 2);

  ctx.moveTo(centerX - doorWidth, centerY + doorHeight / 2);
  ctx.lineTo(centerX - backW / 2, centerY + backH / 2);

  ctx.moveTo(centerX + doorWidth, centerY + doorHeight / 2);
  ctx.lineTo(centerX + backW / 2, centerY + backH / 2);
  ctx.stroke();

  // Draw hallway inner neon rings
  for (let ring = 1; ring <= 4; ring++) {
    const ringProgress = (ring / 4 + t * 0.15) % 1;
    const rw = backW + (doorWidth * 2 - backW) * ringProgress;
    const rh = backH + (doorHeight - backH) * ringProgress;
    const rAlpha = (1 - ringProgress) * 0.2 * doorAlpha;
    ctx.strokeStyle = `rgba(168, 85, 247, ${rAlpha})`;
    ctx.strokeRect(centerX - rw / 2, centerY - rh / 2, rw, rh);
  }

  // -------------------------------------------------------------
  // LEFT DOOR
  // -------------------------------------------------------------
  const leftDoorX = centerX - doorWidth - doorOpenX;
  const leftDoorY = centerY - doorHeight / 2;

  // Door body gradient
  const leftGrad = ctx.createLinearGradient(leftDoorX, leftDoorY, leftDoorX + doorWidth, leftDoorY);
  leftGrad.addColorStop(0, `rgba(15, 23, 42, ${0.9 * doorAlpha})`);
  leftGrad.addColorStop(0.85, `rgba(30, 41, 59, ${0.85 * doorAlpha})`);
  leftGrad.addColorStop(1, `rgba(34, 211, 238, ${0.4 * doorAlpha})`);

  ctx.fillStyle = leftGrad;
  ctx.fillRect(leftDoorX, leftDoorY, doorWidth, doorHeight);

  // High-tech vector outlines
  ctx.strokeStyle = `rgba(34, 211, 238, ${0.8 * doorAlpha})`;
  ctx.lineWidth = 2;
  ctx.strokeRect(leftDoorX, leftDoorY, doorWidth, doorHeight);

  // Chevron caution graphics & bevels on left door
  ctx.strokeStyle = `rgba(34, 211, 238, ${0.4 * doorAlpha})`;
  ctx.lineWidth = 1;
  for (let i = 0; i < 5; i++) {
    const cy = leftDoorY + (doorHeight * (i + 1)) / 6;
    ctx.beginPath();
    ctx.moveTo(leftDoorX + 15, cy - 8);
    ctx.lineTo(leftDoorX + 35, cy);
    ctx.lineTo(leftDoorX + 15, cy + 8);
    ctx.stroke();
  }

  // Left Door HUD Text
  ctx.fillStyle = `rgba(34, 211, 238, ${0.8 * doorAlpha})`;
  ctx.font = '10px monospace';
  ctx.fillText('PORTAL://SSWP-27.ICTS-TIFR', leftDoorX + 20, leftDoorY + 30);
  ctx.fillText('STATUS: SECURE_ENTER_OK', leftDoorX + 20, leftDoorY + doorHeight - 20);

  // -------------------------------------------------------------
  // RIGHT DOOR
  // -------------------------------------------------------------
  const rightDoorX = centerX + doorOpenX;
  const rightDoorY = centerY - doorHeight / 2;

  const rightGrad = ctx.createLinearGradient(rightDoorX, rightDoorY, rightDoorX + doorWidth, rightDoorY);
  rightGrad.addColorStop(0, `rgba(34, 211, 238, ${0.4 * doorAlpha})`);
  rightGrad.addColorStop(0.15, `rgba(30, 41, 59, ${0.85 * doorAlpha})`);
  rightGrad.addColorStop(1, `rgba(15, 23, 42, ${0.9 * doorAlpha})`);

  ctx.fillStyle = rightGrad;
  ctx.fillRect(rightDoorX, rightDoorY, doorWidth, doorHeight);

  ctx.strokeStyle = `rgba(34, 211, 238, ${0.8 * doorAlpha})`;
  ctx.lineWidth = 2;
  ctx.strokeRect(rightDoorX, rightDoorY, doorWidth, doorHeight);

  // Chevron caution graphics on right door
  ctx.strokeStyle = `rgba(34, 211, 238, ${0.4 * doorAlpha})`;
  ctx.lineWidth = 1;
  for (let i = 0; i < 5; i++) {
    const cy = rightDoorY + (doorHeight * (i + 1)) / 6;
    ctx.beginPath();
    ctx.moveTo(rightDoorX + doorWidth - 15, cy - 8);
    ctx.lineTo(rightDoorX + doorWidth - 35, cy);
    ctx.lineTo(rightDoorX + doorWidth - 15, cy + 8);
    ctx.stroke();
  }

  // Right Door HUD Text
  ctx.fillStyle = `rgba(168, 85, 247, ${0.8 * doorAlpha})`;
  ctx.font = '10px monospace';
  ctx.fillText('SYSTEM://VACUUM_SEALED', rightDoorX + doorWidth - 165, rightDoorY + 30);
  ctx.fillText('ACCESS: WOMEN IN PHYSICS', rightDoorX + doorWidth - 165, rightDoorY + doorHeight - 20);

  // Central seam lock glow
  if (ratio < 0.2) {
    const seamAlpha = (1 - ratio * 5) * 0.9;
    ctx.strokeStyle = `rgba(34, 211, 238, ${seamAlpha})`;
    ctx.shadowColor = '#22d3ee';
    ctx.shadowBlur = 15;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - doorHeight / 2);
    ctx.lineTo(centerX, centerY + doorHeight / 2);
    ctx.stroke();
    ctx.shadowBlur = 0;
  }

  ctx.restore();
}

// ---------------------------------------------------------------------
// PHASE 1: CHAOS TO ORDER (Entropy -> Magnetic / Lattice Alignment into "SSWP")
// ---------------------------------------------------------------------
function drawChaosToOrderParticles(
  ctx: CanvasRenderingContext2D,
  particles: any[],
  targets: { x: number; y: number }[],
  ratio: number, // 0 to 1
  w: number,
  h: number,
  t: number
) {
  ctx.save();
  const alignmentFactor = Math.pow(ratio, 1.8); // Non-linear snapping into lattice
  const alphaFade = ratio > 0.85 ? Math.max(0, 1 - (ratio - 0.85) / 0.15) : 1;

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    const target = targets[i % targets.length];

    // Chaotic brownian / thermal drift
    p.x += p.vx;
    p.y += p.vy;

    // Bounce off margins during chaos
    if (p.x < 20 || p.x > w * 0.7) p.vx *= -1;
    if (p.y < 20 || p.y > h - 20) p.vy *= -1;

    // Interpolate towards magnetic lattice target as scroll increases
    const curX = p.x * (1 - alignmentFactor) + target.x * alignmentFactor;
    const curY = p.y * (1 - alignmentFactor) + target.y * alignmentFactor;

    // Draw particle
    ctx.beginPath();
    ctx.arc(curX, curY, p.radius * (1 + alignmentFactor * 0.5), 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.alpha * alphaFade;
    ctx.shadowColor = p.color;
    ctx.shadowBlur = alignmentFactor * 8 + 2;
    ctx.fill();

    // Connect lattice links when aligned
    if (alignmentFactor > 0.45 && i % 4 === 0) {
      const nextP = targets[(i + 1) % targets.length];
      const dist = Math.hypot(target.x - nextP.x, target.y - nextP.y);
      if (dist < 45) {
        ctx.strokeStyle = 'rgba(34, 211, 238, 0.25)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(curX, curY);
        ctx.lineTo(nextP.x, nextP.y);
        ctx.stroke();
      }
    }
  }

  // If aligned, draw label HUD
  if (alignmentFactor > 0.6) {
    ctx.globalAlpha = (alignmentFactor - 0.6) * 2.5 * alphaFade;
    ctx.font = '11px monospace';
    ctx.fillStyle = '#22d3ee';
    ctx.textAlign = 'center';
    ctx.fillText('⚡ LATTICE GROUND STATE LOCKED: [SSWP SPINS ALIGNED]', w * 0.35, h * 0.72);
  }

  ctx.restore();
}

// ---------------------------------------------------------------------
// PHASE 2: SPACETIME GEOMETRY & GRAVITATIONAL WELL (Elastic Coordinate Warping)
// ---------------------------------------------------------------------
function drawSpacetimeCurvatureGrid(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  ratio: number, // 0 to 1
  t: number
) {
  ctx.save();
  const overallAlpha = Math.sin(ratio * Math.PI); // Fade in and out cleanly
  if (overallAlpha <= 0.01) {
    ctx.restore();
    return;
  }

  const cx = w * 0.38;
  const cy = h * 0.5;

  // Massive focal node: Black Hole / Neutron star sink
  const wellDepth = ratio * 160;
  const wellRadius = 240 + ratio * 80;
  const massStrength = 9000 * (0.4 + ratio * 1.2);

  // Draw 2D/3D Curvature Coordinate Grid
  const cols = 28;
  const rows = 24;
  const gridW = w * 0.7;
  const gridH = h * 0.85;
  const startX = cx - gridW / 2;
  const startY = cy - gridH / 2;
  const dx = gridW / cols;
  const dy = gridH / rows;

  // Warp points
  const points: { x: number; y: number }[][] = [];

  for (let r = 0; r <= rows; r++) {
    points[r] = [];
    for (let c = 0; c <= cols; c++) {
      let px = startX + c * dx;
      let py = startY + r * dy;

      // Distance to gravitational singularity
      const dist = Math.hypot(px - cx, py - cy);
      if (dist < wellRadius && dist > 1) {
        // Gravitational warping vector
        const force = massStrength / (dist * dist + 1800);
        const angle = Math.atan2(cy - py, cx - px);
        px += Math.cos(angle) * force * ratio;
        py += Math.sin(angle) * force * ratio;
      }

      points[r][c] = { x: px, y: py };
    }
  }

  // Draw horizontal warped grid lines
  ctx.lineWidth = 1.2;
  for (let r = 0; r <= rows; r++) {
    ctx.beginPath();
    for (let c = 0; c <= cols; c++) {
      const p = points[r][c];
      if (c === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    }
    const distToCenter = Math.abs(r - rows / 2) / (rows / 2);
    ctx.strokeStyle = `rgba(168, 85, 247, ${(0.15 + (1 - distToCenter) * 0.25) * overallAlpha})`;
    ctx.stroke();
  }

  // Draw vertical warped grid lines
  for (let c = 0; c <= cols; c++) {
    ctx.beginPath();
    for (let r = 0; r <= rows; r++) {
      const p = points[r][c];
      if (r === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    }
    const distToCenter = Math.abs(c - cols / 2) / (cols / 2);
    ctx.strokeStyle = `rgba(34, 211, 238, ${(0.12 + (1 - distToCenter) * 0.28) * overallAlpha})`;
    ctx.stroke();
  }

  // Gravitational Singularity Core (Black Hole & Photon Sphere)
  ctx.shadowColor = '#a855f7';
  ctx.shadowBlur = 35 * overallAlpha;

  // Accretion disk spinning rings
  for (let ring = 0; ring < 3; ring++) {
    const radius = 45 + ring * 18 + Math.sin(t * 2 + ring) * 4;
    ctx.strokeStyle = ring === 0 ? 'rgba(245, 158, 11, 0.7)' : 'rgba(34, 211, 238, 0.5)';
    ctx.lineWidth = 2.5 - ring * 0.6;
    ctx.beginPath();
    ctx.ellipse(cx, cy, radius * 1.5, radius * 0.55, -0.25, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Event Horizon Black Core
  ctx.beginPath();
  ctx.arc(cx, cy, 32 + ratio * 8, 0, Math.PI * 2);
  ctx.fillStyle = '#020617';
  ctx.fill();
  ctx.strokeStyle = 'rgba(168, 85, 247, 0.8)';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.shadowBlur = 0;

  // Relativistic Geodesics HUD
  ctx.fillStyle = `rgba(245, 158, 11, ${0.85 * overallAlpha})`;
  ctx.font = '10px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('CURVATURE TENSOR: R_μν - 1/2 g_μν R = 8πG T_μν', cx, cy + 90);
  ctx.fillText(`GRAVITATIONAL MASS WELL: ${(ratio * 100).toFixed(1)}% INTENSITY`, cx, cy + 105);

  ctx.restore();
}

// ---------------------------------------------------------------------
// PHASE 3: WAVE-PARTICLE DUALITY & YOUNG'S DOUBLE SLIT INTERFERENCE
// ---------------------------------------------------------------------
function drawWaveParticleInterference(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  ratio: number, // 0 to 1
  photons: any[],
  histogram: number[],
  t: number
) {
  ctx.save();
  const overallAlpha = Math.min(1, ratio * 2);
  ctx.globalAlpha = overallAlpha;

  const barrierX = w * 0.28;
  const detectorX = w * 0.62;
  const centerY = h * 0.5;
  const slitSpacing = 70; // Distance between double slits
  const slitWidth = 14;

  // 1. Draw Double Slit Barrier
  ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
  ctx.strokeStyle = 'rgba(34, 211, 238, 0.6)';
  ctx.lineWidth = 2;

  // Top barrier segment
  ctx.fillRect(barrierX - 4, 0, 8, centerY - slitSpacing / 2 - slitWidth / 2);
  ctx.strokeRect(barrierX - 4, 0, 8, centerY - slitSpacing / 2 - slitWidth / 2);

  // Center barrier island
  const islandTop = centerY - slitSpacing / 2 + slitWidth / 2;
  const islandBottom = centerY + slitSpacing / 2 - slitWidth / 2;
  ctx.fillRect(barrierX - 4, islandTop, 8, islandBottom - islandTop);
  ctx.strokeRect(barrierX - 4, islandTop, 8, islandBottom - islandTop);

  // Bottom barrier segment
  const bottomStart = centerY + slitSpacing / 2 + slitWidth / 2;
  ctx.fillRect(barrierX - 4, bottomStart, 8, h - bottomStart);
  ctx.strokeRect(barrierX - 4, bottomStart, 8, h - bottomStart);

  // Slit HUD labels
  ctx.fillStyle = '#22d3ee';
  ctx.font = '10px monospace';
  ctx.textAlign = 'right';
  ctx.fillText('SLIT A [ψ₁] →', barrierX - 12, centerY - slitSpacing / 2 + 4);
  ctx.fillText('SLIT B [ψ₂] →', barrierX - 12, centerY + slitSpacing / 2 + 4);

  // 2. Coherent Wavefront before slits (Incoming plane wave packets)
  ctx.strokeStyle = 'rgba(34, 211, 238, 0.25)';
  ctx.lineWidth = 1.5;
  for (let x = 40; x < barrierX; x += 36) {
    const waveX = (x + t * 40) % barrierX;
    ctx.beginPath();
    ctx.moveTo(waveX, h * 0.2);
    ctx.lineTo(waveX, h * 0.8);
    ctx.stroke();
  }

  // 3. Outgoing Huygens Spherical Wavefronts from each slit
  const slitAy = centerY - slitSpacing / 2;
  const slitBy = centerY + slitSpacing / 2;

  for (let r = 20; r < 360; r += 32) {
    const waveRadius = (r + t * 35) % 360;
    const waveAlpha = (1 - waveRadius / 360) * 0.22;
    ctx.strokeStyle = `rgba(168, 85, 247, ${waveAlpha})`;
    ctx.lineWidth = 1.2;

    // From Slit A
    ctx.beginPath();
    ctx.arc(barrierX, slitAy, waveRadius, -Math.PI / 2.5, Math.PI / 2.5);
    ctx.stroke();

    // From Slit B
    ctx.strokeStyle = `rgba(34, 211, 238, ${waveAlpha})`;
    ctx.beginPath();
    ctx.arc(barrierX, slitBy, waveRadius, -Math.PI / 2.5, Math.PI / 2.5);
    ctx.stroke();
  }

  // 4. Update and Draw Quantum Photons
  for (let i = 0; i < photons.length; i++) {
    const p = photons[i];
    p.x += p.vx;

    // Reset when past detector screen
    if (p.x > detectorX) {
      p.x = 20 + Math.random() * 80;
      p.y = centerY + (Math.random() - 0.5) * (slitSpacing * 1.8);
      p.slitChosen = Math.random() > 0.5 ? 1 : -1;
    }

    let drawY = p.y;
    // When past the barrier, deflect according to interference probability density
    if (p.x > barrierX) {
      const travelFraction = (p.x - barrierX) / (detectorX - barrierX);
      const slitOrigin = p.slitChosen === 1 ? slitAy : slitBy;
      // Quantum cosine wave diffraction angle
      const k = 0.045; // Wavevector
      const phaseDiff = k * slitSpacing * ((p.y - centerY) / 120);
      const interferenceAmplitude = Math.cos(phaseDiff);
      drawY = slitOrigin + (p.y - slitOrigin) * travelFraction + Math.sin(t * 3 + p.phase) * (4 * (1 - interferenceAmplitude));
    }

    ctx.beginPath();
    ctx.arc(p.x, drawY, 2, 0, Math.PI * 2);
    ctx.fillStyle = p.x > barrierX ? '#a855f7' : '#22d3ee';
    ctx.shadowColor = '#22d3ee';
    ctx.shadowBlur = 6;
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  // 5. Live Computed Cosine Interference Pattern Density on Detector
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(detectorX, h * 0.15);
  ctx.lineTo(detectorX, h * 0.85);
  ctx.stroke();

  // Draw smooth cosine fringe intensity curve behind the cards
  ctx.fillStyle = 'rgba(34, 211, 238, 0.08)';
  ctx.beginPath();
  ctx.moveTo(detectorX, h * 0.15);

  const fringeHeight = h * 0.7;
  const startFringeY = centerY - fringeHeight / 2;

  for (let y = startFringeY; y <= startFringeY + fringeHeight; y += 4) {
    const dy = (y - centerY) / 38;
    // Cosine squared interference equation: I = I_0 * cos^2(β) * sinc^2(α)
    const beta = dy * 1.8;
    const sinc = dy === 0 ? 1 : Math.sin(dy * 0.4) / (dy * 0.4);
    const intensity = Math.pow(Math.cos(beta), 2) * Math.pow(sinc, 2);
    const fringeWidth = intensity * 110;

    ctx.lineTo(detectorX + fringeWidth, y);
  }
  ctx.lineTo(detectorX, startFringeY + fringeHeight);
  ctx.closePath();
  ctx.fill();

  // Glow line along intensity contour
  ctx.strokeStyle = '#22d3ee';
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  for (let y = startFringeY; y <= startFringeY + fringeHeight; y += 4) {
    const dy = (y - centerY) / 38;
    const beta = dy * 1.8;
    const sinc = dy === 0 ? 1 : Math.sin(dy * 0.4) / (dy * 0.4);
    const intensity = Math.pow(Math.cos(beta), 2) * Math.pow(sinc, 2);
    const fringeWidth = intensity * 110;

    if (y === startFringeY) ctx.moveTo(detectorX + fringeWidth, y);
    else ctx.lineTo(detectorX + fringeWidth, y);
  }
  ctx.stroke();

  // Quantum Phase HUD Marker
  ctx.fillStyle = '#22d3ee';
  ctx.font = '10px monospace';
  ctx.textAlign = 'left';
  ctx.fillText('LIVE DETECTOR: |Ψ|² = |ψ₁ + ψ₂|² = 4I₀ cos²(δ/2)', detectorX + 15, centerY - 160);
  ctx.fillText('WAVE-PARTICLE COMPLEMENTARITY VERIFIED', detectorX + 15, centerY - 145);

  ctx.restore();
}
