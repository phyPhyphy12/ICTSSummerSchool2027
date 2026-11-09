export interface Scientist {
  id: string;
  name: string;
  years: string;
  isIndian: boolean;
  nationality: string;
  contribution: string;
  portrait: string | null;
  imageCredit: string;
  sourceUrl: string;
  sourceLabel: string;
  visualTitle: string;
  visualType: string;
  visualDescription: string;
}

export const SCIENTISTS: Scientist[] = [
  {
    id: 'bibha-chowdhuri',
    name: 'Bibha Chowdhuri',
    years: '1913 – 1991',
    isIndian: true,
    nationality: 'Indian Physicist',
    contribution: 'Pioneer of cosmic ray physics who identified meson tracks in high‑altitude photographic emulsions in Darjeeling prior to subsequent European accelerator confirmations.',
    portrait: '/scientists/bibha-chowdhuri.jpg',
    imageCredit: 'Indian National Science Academy / Science & Culture Archive',
    sourceUrl: 'https://www.ias.ac.in/article/fulltext/reso/024/09/0989-1002',
    sourceLabel: 'Indian Academy of Sciences Resonance',
    visualTitle: 'Cosmic Ray Emulsion Tracks',
    visualType: 'Scientific illustration',
    visualDescription: 'Simulation of ionizing high‑energy atmospheric cosmic ray tracks etched into photographic emulsion layers.',
  },
  {
    id: 'aditi-sen-de',
    name: 'Aditi Sen De',
    years: 'Contemporary',
    isIndian: true,
    nationality: 'Indian Physicist',
    contribution: 'Theoretical physicist known for contributions to quantum information theory, characterizing multipartite quantum entanglement, and protocols for quantum networks.',
    portrait: '/scientists/aditi-sen-de.jpg',
    imageCredit: 'Harish-Chandra Research Institute',
    sourceUrl: 'https://www.hri.res.in/~aditi/',
    sourceLabel: 'Harish-Chandra Research Institute',
    visualTitle: 'Multipartite Quantum Entanglement',
    visualType: 'Conceptual visualization',
    visualDescription: 'Topological representation of correlated entangled qubit states across distributed quantum nodes.',
  },
  {
    id: 'bimla-buti',
    name: 'Bimla Buti',
    years: 'Contemporary',
    isIndian: true,
    nationality: 'Indian Physicist',
    contribution: 'Theoretical plasma physicist who advanced the understanding of non‑linear solitary waves, chaos, and solitons in astrophysical and space plasmas.',
    portrait: null,
    imageCredit: 'Physical Research Laboratory / INSA (Portrait pending verification)',
    sourceUrl: 'https://www.insa.nic.in/',
    sourceLabel: 'Indian National Science Academy',
    visualTitle: 'Nonlinear Plasma Soliton Wave',
    visualType: 'Scientific illustration',
    visualDescription: 'Non‑dispersive solitary wave packet maintaining coherent structure through balance of non‑linearity and dispersion in magnetized plasma.',
  },
  {
    id: 'emmy-noether',
    name: 'Emmy Noether',
    years: '1882 – 1935',
    isIndian: false,
    nationality: 'International Pioneer',
    contribution: 'Discovered Noether’s theorem, proving that every continuous symmetry of a physical action corresponds directly to a fundamental conservation law of nature.',
    portrait: '/scientists/emmy-noether.jpg',
    imageCredit: 'Mathematical Association of America / Public Domain Archive',
    sourceUrl: 'https://www.nature.com/articles/d41586-021-00810-7',
    sourceLabel: 'Nature Physics History',
    visualTitle: 'Symmetry Invariance & Conservation',
    visualType: 'Conceptual visualization',
    visualDescription: 'Geometric representation of rotational and translational continuous phase symmetries preserving invariant physical action.',
  },
  {
    id: 'jocelyn-bell-burnell',
    name: 'Jocelyn Bell Burnell',
    years: 'Contemporary',
    isIndian: false,
    nationality: 'International Pioneer',
    contribution: 'Astrophysicist who discovered the first radio pulsars in 1967 as a graduate student, recognizing periodic radio signals that revealed the existence of rapidly rotating neutron stars.',
    portrait: '/scientists/jocelyn-bell-burnell.jpg',
    imageCredit: 'UNESCO / International Year of Astronomy',
    sourceUrl: 'https://www.nobelprize.org/womenwhochangedscience/stories/jocelyn-bell-burnell',
    sourceLabel: 'Nobel Foundation Archive',
    visualTitle: 'Rotating Pulsar Emission Beams',
    visualType: 'Scientific illustration',
    visualDescription: 'Highly magnetized rapidly rotating neutron star sweeping collimated radio beams across celestial observation coordinates.',
  },
  {
    id: 'marie-curie',
    name: 'Marie Skłodowska-Curie',
    years: '1867 – 1934',
    isIndian: false,
    nationality: 'International Pioneer',
    contribution: 'Pioneered research on radioactivity, isolating polonium and radium, developing techniques for radiation measurements, and becoming the first person to win Nobel Prizes in both Physics and Chemistry.',
    portrait: '/scientists/marie-curie.jpg',
    imageCredit: 'Nobel Foundation Archive / Public Domain',
    sourceUrl: 'https://www.nobelprize.org/prizes/physics/1903/marie-curie/biographical/',
    sourceLabel: 'NobelPrize.org Official Archive',
    visualTitle: 'Radioactive Decay & Field Deflection',
    visualType: 'Scientific illustration',
    visualDescription: 'Trajectory of emitted ionizing radiation (alpha, beta, gamma) interacting with magnetic and electric fields.',
  },
];

// Helper validation function
export function getIndianScientistRatio() {
  const total = SCIENTISTS.length;
  const indian = SCIENTISTS.filter(s => s.isIndian).length;
  const percentage = total ? Math.round((indian / total) * 100) : 0;
  return { total, indian, percentage };
}
