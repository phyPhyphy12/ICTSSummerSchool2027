/**
 * All editable copy for the SSWP 2027 site lives in this file.
 * Update text, links, organisers or the contact address here; no component changes needed.
 */

export const site = {
  shortName: 'SSWP 2027',
  name: 'Summer School for Women in Physics 2027',
  host: 'International Centre for Theoretical Sciences (ICTS-TIFR), Bengaluru',
  tagline: '',
  intro:
    'A two-week summer school at ICTS Bengaluru created to inspire women undergraduates, deepen conceptual understanding across the foundations of physics, and open pathways toward research careers.',
  address: 'Survey No. 151, Shivakote, Hesaraghatta Hobli, Bengaluru 560089, India',
  ictsUrl: 'https://www.icts.res.in',
  travelNorms: {
    viewUrl: 'https://drive.google.com/file/d/1KLarM5ieFDLeiLjAOtdHKbyrk-3efzw9/view?usp=sharing',
    localPath: '/icts-travel-norms.pdf',
    downloadName: 'ICTS-Travel-Norms-Participants.pdf',
  },
} as const;

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Eligibility', href: '#eligibility' },
  { label: 'Support', href: '#support' },
  { label: 'A typical day', href: '#typical-day' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Organisers', href: '#organisers' },
] as const;

/** Key-date boxes under the hero buttons. Each line of `lines` is shown on its own row. */
export const facts = [
  { label: 'Duration & Dates', lines: ['Two weeks', '31 May – 11 June 2027'] },
  { label: 'Application Deadline', lines: ['28 February 2027'] },
] as const;

export const about = {
  eyebrow: 'About the school',
  title: 'Encouraging women undergraduates to pursue physics',
  paragraphs: [
    'The Summer School for Women in Physics (SSWP) at ICTS-TIFR is designed to encourage women undergraduates to consider physics as a career and to experience the excitement and interconnectedness of physics through lectures, simple experiments or demonstrations, open-ended discussion, and problem-solving.',
    'By bringing together enthusiastic students and active physicists in a collaborative academic setting, the programme fosters deep conceptual understanding, scientific curiosity, and confidence in approaching foundational questions.',
  ],
} as const;

export const eligibility = {
  eyebrow: 'Who can apply',
  title: 'Eligibility & selection',
  cards: [
    {
      heading: 'Eligibility criteria',
      statement:
        "The school is open to women studying for a bachelor's degree/Integrated Masters degree with physics as a subject, and are entering their second year.",
      note: '',
    },
    {
      heading: 'Selection process',
      statement:
        'Selection will be based on an online, MCQ-based test consisting of basic conceptual physics questions. We make every effort to ensure a wide representation across the country.',
      note: '',
    },
  ],
} as const;

export const support = {
  eyebrow: 'Support & accommodation',
  title: 'Institutional support for selected students',
  statement:
    'Accommodation, travel and other support will be provided by ICTS to selected students, as per applicable ICTS norms.',
  documentTitle: 'Applicable ICTS travel & support norms',
  documentNote: 'Official participant guidelines and reimbursement policies (PDF document)',
} as const;

export const typicalDay = {
  eyebrow: 'Programme structure',
  title: 'A typical day at the school',
  lede: 'Balancing foundational lectures, laboratory inquiry, and informal discussion.',
  parts: [
    {
      when: '',
      what: 'Lectures',
      text: 'Lectures by eminent professors focusing on broad, foundational principles of physics rather than hyper-specialized research, fostering direct engagement and open question sessions.',
    },
    {
      when: '',
      what: 'Experiments',
      text: 'Experimental sessions and tabletop laboratory investigations where participants test theoretical predictions, explore simple physical setups, and work collaboratively on empirical observations.',
    },
    {
      when: '',
      what: 'Discussions',
      text: 'Discussions, problem-solving sessions, and informal interactions with research scholars and faculty on careers in physics and academic pathways.',
    },
  ],
  practical: {
    heading: 'What to bring',
    statement:
      'Students are encouraged to bring a laptop if they have access to one. A personal or borrowed laptop may be used.',
    note: 'Laptops are useful for analysis during experimental sessions and accessing shared scientific material.',
  },
} as const;

/**
 * Photos and videos from earlier editions of SSWP, shown as a scrolling reel, one card per item.
 * Put files in public/images/gallery/ and add them to the `items` of the right edition, e.g.
 *   { type: 'image', src: '/images/gallery/sswp-2024-lab.jpg', width: 2400, height: 1600,
 *     alt: 'Participants at a tabletop experiment', caption: 'In the lab' }
 *   { type: 'video', src: '/images/gallery/sswp-2024.mp4', poster: '/images/gallery/sswp-2024.jpg',
 *     alt: 'Lecture highlights', caption: 'Lecture highlights' }
 * `webp` optionally lists smaller/lighter WebP versions as [path, pixel width].
 * An edition with no items shows a single "Photos coming soon" card.
 */
export type GalleryItem =
  | {
      type: 'image';
      src: string;
      width: number;
      height: number;
      alt: string;
      caption?: string;
      webp?: readonly (readonly [string, number])[];
    }
  | { type: 'video'; src: string; poster?: string; alt: string; caption?: string };

export const gallery: {
  eyebrow: string;
  title: string;
  lede: string;
  editions: readonly { name: string; items: readonly GalleryItem[] }[];
} = {
  eyebrow: 'Previous editions',
  title: 'Moments from past schools',
  lede: 'A look at lectures, experiments and conversations from earlier Summer Schools for Women in Physics.',
  editions: [
    { name: 'SSWP 2026', items: [] },
    {
      name: 'SSWP 2025',
      items: [
        {
          type: 'image',
          src: '/images/gallery/sswp-2025-group-2400.jpg',
          width: 2400,
          height: 1350,
          webp: [
            ['/images/gallery/sswp-2025-group-1200.webp', 1200],
            ['/images/gallery/sswp-2025-group-2400.webp', 2400],
          ],
          alt: 'Group photo of SSWP 2025: participants and faculty standing together on a lawn in front of a large framed opening onto a garden at ICTS',
          caption: 'Group photo',
        },
      ],
    },
    { name: 'SSWP 2024', items: [] },
    { name: 'SSWP 2023', items: [] },
  ],
};

export const organisers = {
  eyebrow: 'Organising committee',
  title: 'Programme organisers',
  lede: 'SSWP 2027 organising committee representing leading academic institutions.',
  people: [
    { name: 'Sushan Konar', affiliation: 'National Centre for Radio Astrophysics (NCRA), TIFR, Pune' },
    { name: 'Sumathi Rao', affiliation: 'ICTS-TIFR, Bengaluru' },
    { name: 'Shirish Pathare', affiliation: 'Homi Bhabha Centre for Science Education (HBCSE), TIFR, Mumbai' },
    { name: 'Rema Krishnaswamy', affiliation: 'Azim Premji University, Bengaluru' },
    { name: 'Ranjini Bandyopadhyay', affiliation: 'Raman Research Institute (RRI), Bengaluru' },
    { name: 'Rama Govindarajan', affiliation: 'ICTS-TIFR, Bengaluru' },
    { name: 'Rajaram Nityananda', affiliation: 'ICTS-TIFR, Bengaluru' },
    { name: 'Pradeep Kumar Mohanty', affiliation: 'IISER Kolkata' },
    { name: 'Mahua Ghosh', affiliation: 'Mount Carmel College (Retd.), Bengaluru' },
    { name: 'Kripa Gowrishankar', affiliation: 'Azim Premji University, Bengaluru' },
    { name: 'Ikbal Ahmed', affiliation: 'ICTS-TIFR, Bengaluru' },
  ],
} as const;

export const application = {
  title: 'Exam portal opens here',
  body: 'The application and exam portal for the Summer School for Women in Physics 2027 will open on this page. Programme dates: 31 May – 11 June 2027. Application deadline: 28 February 2027. Recommendation letters can be submitted until 16 March 2027.',
  points: [
    'Programme dates: 31 May – 11 June 2027',
    'Application deadline: 28 February 2027',
    'Recommendation letters can be submitted until 16 March 2027',
    'The online exam portal will be made available here when applications open',
  ],
} as const;
