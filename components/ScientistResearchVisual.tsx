'use client';

import React, { useEffect, useRef } from 'react';

interface ScientistResearchVisualProps {
  scientistId: string;
  visualTitle: string;
  visualType: string;
  visualDescription: string;
}

export default function ScientistResearchVisual({
  scientistId,
  visualTitle,
  visualType,
  visualDescription,
}: ScientistResearchVisualProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const width = 360;
    const height = 240;
    const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Color definitions matching the ICTS brand palette
    const crimson = '#9a393a';
    const amber = '#ef7f1a';
    const white = '#f8fafc';
    const slateDark = '#0f172a';
    const slateMuted = '#64748b';

    const render = () => {
      t += 0.025;
      ctx.clearRect(0, 0, width, height);

      // Background subtle border & backdrop
      ctx.fillStyle = '#0d131f';
      ctx.fillRect(0, 0, width, height);

      switch (scientistId) {
        // 1. BIBHA CHOWDHURI: Cosmic Ray Emulsion Tracks
        case 'bibha-chowdhuri': {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
          ctx.lineWidth = 1;
          for (let y = 30; y < height; y += 30) {
            ctx.beginPath();
            ctx.moveTo(10, y);
            ctx.lineTo(width - 10, y);
            ctx.stroke();
          }
          // Emulsion silver grains
          ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
          for (let i = 0; i < 40; i++) {
            const gx = (i * 37 + Math.sin(i) * 20) % width;
            const gy = (i * 29 + Math.cos(i) * 15) % height;
            ctx.fillRect(gx, gy, 1.5, 1.5);
          }
          // Influx shower track
          const showerProgress = (t * 0.7) % 1;
          const originX = width * 0.45;
          const originY = 10;
          ctx.strokeStyle = crimson;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(originX, originY);
          ctx.lineTo(originX + 25 * showerProgress, originY + (height * 0.45) * showerProgress);
          ctx.stroke();

          // Secondary daughter tracks (muon/pion tracks)
          if (showerProgress > 0.4) {
            const splitX = originX + 25 * 0.45;
            const splitY = originY + height * 0.45 * 0.45;
            ctx.strokeStyle = amber;
            ctx.lineWidth = 1.8;
            ctx.beginPath();
            ctx.moveTo(splitX, splitY);
            ctx.lineTo(splitX - 60 * (showerProgress - 0.4), splitY + 110 * (showerProgress - 0.4));
            ctx.moveTo(splitX, splitY);
            ctx.lineTo(splitX + 75 * (showerProgress - 0.4), splitY + 95 * (showerProgress - 0.4));
            ctx.stroke();
          }

          // Annotation
          ctx.font = '10px monospace';
          ctx.fillStyle = amber;
          ctx.fillText('EMULSION GRAIN IONIZATION TRACKS', 16, height - 16);
          break;
        }

        // 2. EMMY NOETHER: Continuous Symmetry & Invariance
        case 'emmy-noether': {
          const cx = width / 2;
          const cy = height / 2 - 10;
          const radius = 55;

          // Continuous rotational angle
          const angle = t * 0.6;

          // Outer invariant circle
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(cx, cy, radius, 0, Math.PI * 2);
          ctx.stroke();

          // Symmetry transformed vectors
          for (let k = 0; k < 6; k++) {
            const a = angle + (k * Math.PI) / 3;
            const vx = cx + Math.cos(a) * radius;
            const vy = cy + Math.sin(a) * radius;
            ctx.strokeStyle = k % 2 === 0 ? crimson : amber;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(vx, vy);
            ctx.stroke();

            ctx.fillStyle = white;
            ctx.beginPath();
            ctx.arc(vx, vy, 3, 0, Math.PI * 2);
            ctx.fill();
          }

          // Conserved quantity central invariant
          ctx.fillStyle = crimson;
          ctx.beginPath();
          ctx.arc(cx, cy, 6, 0, Math.PI * 2);
          ctx.fill();

          ctx.font = '10px monospace';
          ctx.fillStyle = amber;
          ctx.fillText('CONTINUOUS SYMMETRY → CONSERVED CHARGE (Q)', 16, height - 16);
          break;
        }

        // 3. ROHINI GODBOLE: High-Energy Collider Jets
        case 'rohini-godbole': {
          const cx = width / 2;
          const cy = height / 2 - 10;

          // Beampipe
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(20, cy);
          ctx.lineTo(width - 20, cy);
          ctx.stroke();

          // Incoming colliding bunches
          const inProgress = (t * 1.5) % 1;
          ctx.fillStyle = amber;
          ctx.beginPath();
          ctx.arc(20 + (cx - 20) * inProgress, cy, 4, 0, Math.PI * 2);
          ctx.arc(width - 20 - (cx - 20) * inProgress, cy, 4, 0, Math.PI * 2);
          ctx.fill();

          // Hard scattering transverse jets
          const jetAngles = [0.7, 0.85, 0.95, -2.1, -2.25, -2.35];
          jetAngles.forEach((ja, idx) => {
            const r = 35 + ((t * 40 + idx * 10) % 65);
            const jx = cx + Math.cos(ja) * r;
            const jy = cy + Math.sin(ja) * r;
            ctx.strokeStyle = idx < 3 ? crimson : amber;
            ctx.lineWidth = 1.6;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(jx, jy);
            ctx.stroke();
          });

          ctx.font = '10px monospace';
          ctx.fillStyle = crimson;
          ctx.fillText('HADRONIC JETS & COLLIDER PHENOMENOLOGY', 16, height - 16);
          break;
        }

        // 4. CHIEN-SHIUNG WU: Parity Asymmetry in Cobalt-60
        case 'chien-shiung-wu': {
          const cx = width / 2;
          const cy = height / 2 - 15;

          // Aligned nuclear spin arrow (Upward magnetic field B)
          ctx.strokeStyle = amber;
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.moveTo(cx, cy + 30);
          ctx.lineTo(cx, cy - 30);
          ctx.stroke();

          // Arrowhead
          ctx.beginPath();
          ctx.moveTo(cx - 5, cy - 22);
          ctx.lineTo(cx, cy - 30);
          ctx.lineTo(cx + 5, cy - 22);
          ctx.stroke();

          ctx.font = '9px monospace';
          ctx.fillStyle = amber;
          ctx.fillText('B (ALIGNMENT)', cx + 10, cy - 20);

          // Polarized Cobalt nucleus
          ctx.fillStyle = crimson;
          ctx.beginPath();
          ctx.arc(cx, cy, 14, 0, Math.PI * 2);
          ctx.fill();

          // Asymmetric beta emission: preferentially downward (Parity Violation)
          for (let i = 0; i < 7; i++) {
            const pPhase = (t * 0.8 + i * 0.15) % 1;
            const spread = (i - 3) * 0.18;
            const bx = cx + Math.sin(spread) * 70 * pPhase;
            const by = cy + Math.cos(spread) * 75 * pPhase; // Downward dominance
            ctx.fillStyle = white;
            ctx.beginPath();
            ctx.arc(bx, by, 2, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.font = '10px monospace';
          ctx.fillStyle = crimson;
          ctx.fillText('PARITY NON-CONSERVATION: DOWNWARD β-ASYMMETRY', 16, height - 16);
          break;
        }

        // 5. ADITI SEN DE: Quantum Entanglement & Bell States
        case 'aditi-sen-de': {
          const nodeAX = width * 0.3;
          const nodeBX = width * 0.7;
          const nodeY = height / 2 - 10;

          // Entangled link oscillation
          ctx.strokeStyle = 'rgba(154, 57, 58, 0.4)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(nodeAX, nodeY);
          for (let x = nodeAX; x <= nodeBX; x += 5) {
            const dx = (x - nodeAX) / (nodeBX - nodeAX);
            const dy = Math.sin(dx * Math.PI * 3 + t * 2) * 14;
            ctx.lineTo(x, nodeY + dy);
          }
          ctx.stroke();

          // Qubit nodes with phase rotation
          [nodeAX, nodeBX].forEach((nx, idx) => {
            const phase = t * 1.5 + (idx === 1 ? Math.PI : 0);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.beginPath();
            ctx.arc(nx, nodeY, 20, 0, Math.PI * 2);
            ctx.stroke();

            ctx.fillStyle = idx === 0 ? crimson : amber;
            ctx.beginPath();
            ctx.arc(nx + Math.cos(phase) * 15, nodeY + Math.sin(phase) * 8, 4, 0, Math.PI * 2);
            ctx.fill();
          });

          ctx.font = '10px monospace';
          ctx.fillStyle = amber;
          ctx.fillText('MULTIPARTITE NON-LOCAL ENTANGLEMENT |Ψ⁺⟩', 16, height - 16);
          break;
        }

        // 6. JOCELYN BELL BURNELL: Rotating Pulsar Radio Beams
        case 'jocelyn-bell-burnell': {
          const cx = width / 2;
          const cy = height / 2 - 10;
          const rotationAngle = t * 1.2;

          // Neutron star body
          ctx.fillStyle = '#1e293b';
          ctx.beginPath();
          ctx.arc(cx, cy, 18, 0, Math.PI * 2);
          ctx.fill();

          // Magnetic dipole sweeping beams
          const beamLen = 95;
          const bx1 = cx + Math.cos(rotationAngle) * beamLen;
          const by1 = cy + Math.sin(rotationAngle) * (beamLen * 0.45);
          const bx2 = cx - Math.cos(rotationAngle) * beamLen;
          const by2 = cy - Math.sin(rotationAngle) * (beamLen * 0.45);

          const grad = ctx.createLinearGradient(cx, cy, bx1, by1);
          grad.addColorStop(0, 'rgba(239, 127, 26, 0.8)');
          grad.addColorStop(1, 'transparent');
          ctx.strokeStyle = grad;
          ctx.lineWidth = 10;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(bx1, by1);
          ctx.moveTo(cx, cy);
          ctx.lineTo(bx2, by2);
          ctx.stroke();

          ctx.font = '10px monospace';
          ctx.fillStyle = amber;
          ctx.fillText('PERIODIC RADIO PULSAR BEAM EMISSION', 16, height - 16);
          break;
        }

        // 7. BIMLA BUTI: Nonlinear Plasma Soliton Wave
        case 'bimla-buti': {
          const cy = height / 2 - 10;
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
          ctx.beginPath();
          ctx.moveTo(20, cy);
          ctx.lineTo(width - 20, cy);
          ctx.stroke();

          // Solitary wave packet traveling along magnetic field
          const solitonCenter = 50 + ((t * 40) % (width - 100));
          ctx.strokeStyle = crimson;
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          for (let x = 20; x <= width - 20; x += 2) {
            const dx = (x - solitonCenter) / 16;
            // Sech^2 solitary profile: A / cosh^2(x)
            const sech = 1 / Math.cosh(dx);
            const y = cy - Math.pow(sech, 2) * 45;
            if (x === 20) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();

          ctx.font = '10px monospace';
          ctx.fillStyle = crimson;
          ctx.fillText('NONLINEAR KdV PLASMA SOLITON ENVELOPE', 16, height - 16);
          break;
        }

        // 8. VERA RUBIN: Galactic Rotation Curve
        case 'vera-rubin': {
          const originX = 50;
          const originY = height - 40;

          // Graph axes
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(originX, 30);
          ctx.lineTo(originX, originY);
          ctx.lineTo(width - 30, originY);
          ctx.stroke();

          // Axis labels
          ctx.font = '9px monospace';
          ctx.fillStyle = slateMuted;
          ctx.fillText('Velocity (v)', originX + 5, 42);
          ctx.fillText('Radius (r)', width - 65, originY - 6);

          // Expected Keplerian curve (v ~ 1/sqrt(r)) - falling
          ctx.strokeStyle = 'rgba(154, 57, 58, 0.6)';
          ctx.setLineDash([4, 4]);
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          for (let x = originX + 15; x <= width - 40; x += 3) {
            const r = (x - originX) / 25;
            const y = originY - (110 / Math.sqrt(r + 0.8));
            if (x === originX + 15) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
          ctx.setLineDash([]);

          // Observed Flat Rotation Curve (Evidence for Dark Matter)
          ctx.strokeStyle = amber;
          ctx.lineWidth = 2.2;
          ctx.beginPath();
          for (let x = originX + 15; x <= width - 40; x += 3) {
            const r = (x - originX) / 25;
            // Rapid rise then flat plateau
            const v = (r / (r + 0.4)) * 75;
            const y = originY - v;
            if (x === originX + 15) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();

          ctx.font = '10px monospace';
          ctx.fillStyle = amber;
          ctx.fillText('OBSERVED FLAT CURVE (DARK MATTER HALO)', 16, height - 16);
          break;
        }

        // 9. RAMA GOVINDARAJAN: Hydrodynamic Shear Instability
        case 'rama-govindarajan': {
          const cy = height / 2 - 10;

          // Interfacial vortex roll-up
          ctx.strokeStyle = crimson;
          ctx.lineWidth = 1.8;
          ctx.beginPath();
          for (let x = 20; x <= width - 20; x += 3) {
            const waveX = (x + t * 25) * 0.05;
            const y = cy + Math.sin(waveX) * 22 + Math.cos(waveX * 2) * 8;
            if (x === 20) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();

          // Vortex core filaments
          for (let k = 0; k < 3; k++) {
            const vx = 60 + k * 100 + ((t * 20) % 100);
            const vy = cy + Math.sin(t + k) * 5;
            ctx.strokeStyle = amber;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.arc(vx, vy, 12, 0, Math.PI * 2);
            ctx.stroke();
          }

          ctx.font = '10px monospace';
          ctx.fillStyle = crimson;
          ctx.fillText('HYDRODYNAMIC SHEAR INTERFACIAL INSTABILITY', 16, height - 16);
          break;
        }

        // 10. LISE MEITNER: Nuclear Fission Deformation
        case 'lise-meitner': {
          const cx = width / 2;
          const cy = height / 2 - 10;
          const fissionPhase = (t * 0.6) % 1;

          // Deformation from sphere into dumbbell then 2 fragments
          if (fissionPhase < 0.6) {
            const stretch = fissionPhase / 0.6;
            ctx.fillStyle = crimson;
            ctx.beginPath();
            ctx.ellipse(cx, cy, 18 + stretch * 25, 18 - stretch * 7, 0, 0, Math.PI * 2);
            ctx.fill();
          } else {
            // Split fragments
            const splitDist = (fissionPhase - 0.6) / 0.4 * 65;
            ctx.fillStyle = crimson;
            ctx.beginPath();
            ctx.arc(cx - splitDist, cy, 12, 0, Math.PI * 2);
            ctx.arc(cx + splitDist, cy, 12, 0, Math.PI * 2);
            ctx.fill();

            // Prompt released neutrons
            ctx.fillStyle = amber;
            ctx.beginPath();
            ctx.arc(cx, cy - splitDist * 0.8, 3, 0, Math.PI * 2);
            ctx.arc(cx, cy + splitDist * 0.8, 3, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.font = '10px monospace';
          ctx.fillStyle = crimson;
          ctx.fillText('NUCLEAR FISSION DUMBBELL DEFORMATION', 16, height - 16);
          break;
        }

        // 11. RANJINI BANDYOPADHYAY: Colloidal Dynamics & Glassy Cage
        case 'ranjini-bandyopadhyay': {
          // Colloidal particle network
          const numParticles = 24;
          for (let i = 0; i < numParticles; i++) {
            const baseX = 40 + (i % 6) * 55;
            const baseY = 35 + Math.floor(i / 6) * 45;
            // Constrained Brownian cage motion
            const px = baseX + Math.sin(t * 2 + i * 2) * 5;
            const py = baseY + Math.cos(t * 2 + i * 3) * 5;

            ctx.fillStyle = i % 2 === 0 ? crimson : amber;
            ctx.beginPath();
            ctx.arc(px, py, 6, 0, Math.PI * 2);
            ctx.fill();

            // Cage bonds
            if (i % 6 < 5) {
              const nextX = baseX + 55 + Math.sin(t * 2 + (i + 1) * 2) * 5;
              const nextY = baseY + Math.cos(t * 2 + (i + 1) * 3) * 5;
              ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(px, py);
              ctx.lineTo(nextX, nextY);
              ctx.stroke();
            }
          }

          ctx.font = '10px monospace';
          ctx.fillStyle = amber;
          ctx.fillText('COLLOIDAL CAGE ARREST & VISCOELASTIC NETWORK', 16, height - 16);
          break;
        }

        // 12. MARIE CURIE: Radiation Magnetic Field Deflection
        case 'marie-curie': {
          const originX = 40;
          const originY = height / 2 - 10;

          // Collimated radiation source
          ctx.fillStyle = '#334155';
          ctx.fillRect(originX - 15, originY - 12, 15, 24);

          // Magnetic field zone (into page)
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
          ctx.strokeRect(originX + 20, originY - 60, 130, 120);
          ctx.font = '9px monospace';
          ctx.fillStyle = slateMuted;
          ctx.fillText('TRANSVERSE B-FIELD', originX + 28, originY - 45);

          // 1. Alpha particles (positive, bent upward with high mass/radius)
          ctx.strokeStyle = crimson;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(originX, originY);
          ctx.quadraticCurveTo(originX + 80, originY - 15, originX + 160, originY - 50);
          ctx.stroke();
          ctx.fillStyle = crimson;
          ctx.fillText('α (He²⁺)', originX + 165, originY - 48);

          // 2. Gamma rays (neutral, undeflected straight line)
          ctx.strokeStyle = white;
          ctx.setLineDash([4, 4]);
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(originX, originY);
          ctx.lineTo(originX + 180, originY);
          ctx.stroke();
          ctx.setLineDash([]);
          ctx.fillStyle = white;
          ctx.fillText('γ (Photon)', originX + 185, originY + 3);

          // 3. Beta particles (negative electron, sharp downward deflection)
          ctx.strokeStyle = amber;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(originX, originY);
          ctx.quadraticCurveTo(originX + 60, originY + 25, originX + 140, originY + 50);
          ctx.stroke();
          ctx.fillStyle = amber;
          ctx.fillText('β (e⁻)', originX + 145, originY + 53);

          ctx.font = '10px monospace';
          ctx.fillStyle = amber;
          ctx.fillText('MAGNETIC DEFLECTION: α (+), γ (0), β (−)', 16, height - 16);
          break;
        }

        default:
          break;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [scientistId]);

  return (
    <div className="w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950/80 p-3 flex flex-col space-y-2">
      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span className="font-semibold text-slate-200">{visualTitle}</span>
        <span className="px-2 py-0.5 rounded text-[10px] bg-slate-900 border border-slate-700/60 text-slate-400">
          {visualType}
        </span>
      </div>
      <div className="relative w-full aspect-[3/2] bg-slate-950 rounded-lg overflow-hidden border border-slate-800/80 flex items-center justify-center">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
      <p className="text-[11px] text-slate-400 leading-relaxed italic">
        {visualDescription}
      </p>
    </div>
  );
}
