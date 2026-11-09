'use client';

import React, { useState } from 'react';
import { 
  Sun, 
  FlaskConical, 
  Moon, 
  Clock, 
  Users, 
  UploadCloud, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  Layers,
  ChevronRight
} from 'lucide-react';
import { DropzoneConfig } from './PhotoDropzoneModal';
import { getAssetPath } from './utils';

interface ExperientialCardsProps {
  onOpenDropzone: (config: DropzoneConfig) => void;
}

export default function ExperientialCards({ onOpenDropzone }: ExperientialCardsProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cardsData = [
    {
      id: 'morning-lectures',
      cardNumber: '01',
      title: 'Morning Broad Lectures',
      tagline: 'Foundations & Grand Conceptual Overviews',
      timeSlot: '09:30 AM — 12:30 PM',
      icon: Sun,
      accentColor: 'cyan' as const,
      colorClass: {
        border: 'hover:border-cyan-400/60 border-cyan-500/20',
        badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
        glow: 'hover:shadow-glow-cyan',
        title: 'text-cyan-300',
        btn: 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border-cyan-500/40',
      },
      description:
        'Lectures designed around profound foundational principles by eminent physicists from ICTS and leading global institutions. Rather than hyper-niche personal research slides, talks focus on the architectural beauty of modern physics with open Q&A sessions.',
      highlights: [
        'No hyper-niche research silos: Broad universal concepts',
        'Immediate, unhurried open-floor question hours',
        'Direct pedagogy from world-renowned ICTS faculty',
      ],
      dropzoneTitle: 'Last Year Amphitheater Lecture Photos',
      defaultPhotos: [
        {
          title: 'Nambu Amphitheater Hall',
          src: getAssetPath('/images/Nambu.jpg'),
          caption: 'Interactive blackboard & projection masterclasses in ICTS Nambu Hall.',
        },
        {
          title: 'SSWP 2024 Cohort & Faculty',
          src: getAssetPath('/images/Group.jpg'),
          caption: 'Cohort assembled outside the main academic block with program directors.',
        },
        {
          title: 'SSWP 2026 Academic Overview',
          src: getAssetPath('/images/sswp-2026.png'),
          caption: 'Official 2026 Curriculum and Lecture series roadmap.',
        },
      ],
    },
    {
      id: 'afternoon-labs',
      cardNumber: '02',
      title: 'Afternoon Experimental Cycles',
      tagline: 'Hands-On Investigation & Tabletop Physics',
      timeSlot: '02:30 PM — 05:30 PM',
      icon: FlaskConical,
      accentColor: 'amethyst' as const,
      colorClass: {
        border: 'hover:border-purple-400/60 border-purple-500/20',
        badge: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
        glow: 'hover:shadow-glow-amethyst',
        title: 'text-purple-300',
        btn: 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border-purple-500/40',
      },
      description:
        'Running 2:30 PM to 5:30 PM daily. Agile groups of 5 students tackle and conclude one flagship experiment every 2 days before cycling. Students manipulate cutting-edge lab setups, debug data pipelines, and verify physical theories empirically.',
      highlights: [
        'Agile cohorts of 5 students per experimental bay',
        'Flagship experiments completed & cycled every 48 hours',
        'Nonlinear dynamics, Faraday waves, Van de Graaff generators & optical interferometry',
      ],
      dropzoneTitle: 'Historical Laboratory Setup Photos',
      defaultPhotos: [
        {
          title: 'Faraday Surface Wave Hydrodynamics',
          src: getAssetPath('/images/FaradayWave.PNG'),
          caption: 'High-speed fluid vibration cells demonstrating parametric resonance.',
        },
        {
          title: 'Electrostatic Van de Graaff Rig',
          src: getAssetPath('/images/VDG.PNG'),
          caption: 'High voltage discharge and ion breakdown experimentation.',
        },
        {
          title: 'Spark Gap Diagnostics',
          src: getAssetPath('/images/VDG2.PNG'),
          caption: 'Breakdown field measurements and electromagnetic telemetry.',
        },
      ],
    },
    {
      id: 'evening-symposiums',
      cardNumber: '03',
      title: 'Evening Symposiums & Mentorship',
      tagline: 'Collaborative Problem Sets & Scholar Dialogues',
      timeSlot: '06:30 PM — 08:30 PM',
      icon: Moon,
      accentColor: 'amber' as const,
      colorClass: {
        border: 'hover:border-amber-400/60 border-amber-500/20',
        badge: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
        glow: 'hover:shadow-glow-amber',
        title: 'text-amber-300',
        btn: 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border-amber-500/40',
      },
      description:
        'Collaborative challenge tutorials, assignments, problem sets, and dedicated career guidance discussions with local ICTS PhD and Postdoc scholars. Dive into honest discussions on research careers, fellowship exams, graduate applications, and life in academia.',
      highlights: [
        '1-on-1 mentorship with resident ICTS Postdocs and PhDs',
        'Challenging collaborative problem sets in relaxing lounge spaces',
        'Honest roadmap sessions on research grants, PhD admissions & fellowships',
      ],
      dropzoneTitle: 'Evening Lounge Interaction Snaps',
      defaultPhotos: [
        {
          title: 'Campus Central Courtyard',
          src: getAssetPath('/images/Group2.jpg'),
          caption: 'Evening cross-pollination discussions and student breakout circles.',
        },
        {
          title: 'SSWP 2025 Fellowship Cohort',
          src: getAssetPath('/images/sswp-2025.png'),
          caption: 'The 2025 residential scholars during informal tutorial debriefs.',
        },
        {
          title: 'SSWP 2023 Inaugural Legacy',
          src: getAssetPath('/images/sswp-2023.png'),
          caption: 'Historical launch of the Women in Physics summer school.',
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {cardsData.map((card, idx) => {
        const IconComponent = card.icon;
        const isHovered = hoveredCard === idx;

        return (
          <div
            key={card.id}
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`group relative glass-panel rounded-2xl p-6 md:p-7 border transition-all duration-300 transform ${
              card.colorClass.border
            } ${card.colorClass.glow} ${
              isHovered ? 'scale-[1.02] -translate-y-1 bg-slate-900/85' : 'bg-slate-950/60'
            }`}
          >
            {/* Top Row: Tag, Time, Number */}
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <div className="flex items-center space-x-2">
                <span
                  className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border flex items-center space-x-1.5 ${card.colorClass.badge}`}
                >
                  <IconComponent className="w-3.5 h-3.5" />
                  <span>{card.timeSlot}</span>
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500">
                  {card.tagline}
                </span>
              </div>
              <span className="font-mono text-xl font-black text-slate-700 group-hover:text-slate-400 transition-colors">
                {card.cardNumber}
              </span>
            </div>

            {/* Title */}
            <h3 className={`text-xl md:text-2xl font-bold font-mono tracking-tight mb-2 ${card.colorClass.title}`}>
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {card.description}
            </p>

            {/* Bullet Highlights */}
            <ul className="space-y-2 mb-6">
              {card.highlights.map((point, pIdx) => (
                <li key={pIdx} className="flex items-start space-x-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 mt-0.5 shrink-0 transition-colors" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Bottom Action: Dropzone & Gallery Trigger */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between flex-wrap gap-3">
              <button
                onClick={() =>
                  onOpenDropzone({
                    id: card.id,
                    title: card.dropzoneTitle,
                    subtitle: `Archive and student media gallery for ${card.title}`,
                    accentColor: card.accentColor,
                    defaultPhotos: card.defaultPhotos,
                  })
                }
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold border transition-all flex items-center space-x-2 ${card.colorClass.btn}`}
              >
                <UploadCloud className="w-4 h-4" />
                <span>Open Media Dropzone & Photos</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <span className="text-[11px] font-mono text-slate-500">
                {card.defaultPhotos.length} Archived Photos Available
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
