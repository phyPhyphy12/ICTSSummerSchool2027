/**
 * All editable copy for the SSWP 2027 site lives in this file.
 * Update text, links, organisers or the contact address here; no component changes needed.
 */

export const site = {
  shortName: 'SSWP 2027',
  name: 'Summer School for Women in Physics 2027',
  host: 'International Centre for Theoretical Sciences (ICTS-TIFR), Bengaluru',
  tagline: 'Her contributions to physics. Your future in science.',
  intro:
    'A two-week summer school at ICTS Bengaluru created to inspire undergraduate women, deepen conceptual understanding across the foundations of physics, and open pathways toward research careers.',
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
  { label: 'Organisers', href: '#organisers' },
] as const;

export const facts = [
  { label: 'Duration', value: 'Two weeks' },
  { label: 'For', value: 'Undergraduate women in physics' },
  { label: 'Where', value: 'ICTS-TIFR, Bengaluru' },
  { label: 'Dates', value: 'To be announced' },
] as const;

export const about = {
  eyebrow: 'About the school',
  title: 'Encouraging undergraduate women to pursue physics',
  paragraphs: [
    'The Summer School for Women in Physics (SSWP) at ICTS-TIFR is designed to encourage undergraduate women to consider physics as a career and to experience the excitement and interconnectedness of physics through lectures, simple experiments or demonstrations, open-ended discussion, and problem-solving.',
    'By bringing together enthusiastic students and active physicists in a collaborative academic setting, the programme fosters deep conceptual understanding, scientific curiosity, and confidence in approaching foundational questions.',
  ],
  pillars: ['Lectures', 'Experiments & demonstrations', 'Open-ended discussion', 'Problem-solving'],
} as const;

export const eligibility = {
  eyebrow: 'Who can apply',
  title: 'Eligibility & selection',
  cards: [
    {
      heading: 'Eligibility criteria',
      statement:
        'The school is open to women students who have completed the first year of a B.Sc. Physics programme or an Integrated B.Sc.–M.Sc. programme in Physics.',
      note: 'Working eligibility statement for the 2027 edition; subject to final reconfirmation by the programme organisers.',
    },
    {
      heading: 'Selection process',
      statement:
        'Selection will be based on an online, MCQ-based test consisting of basic conceptual physics questions.',
      note: 'Evaluates fundamental physical intuition. Exam details, platform guidelines, and schedule will be communicated when applications open.',
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
      when: 'Morning',
      what: 'Lectures',
      text: 'Lectures by eminent professors focusing on broad, foundational principles of physics rather than hyper-specialized research, fostering direct engagement and open question sessions.',
    },
    {
      when: 'Afternoon',
      what: 'Experiments',
      text: 'Experimental sessions and tabletop laboratory investigations where participants test theoretical predictions, explore simple physical setups, and work collaboratively on empirical observations.',
    },
    {
      when: 'Evening',
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

export const organisers = {
  eyebrow: 'Organising committee',
  title: 'Programme organisers',
  lede: 'SSWP 2027 organising committee representing leading academic institutions.',
  people: [
    { name: 'Sushan Konar', affiliation: 'National Centre for Radio Astrophysics (NCRA), TIFR, Pune' },
    { name: 'Sumathi Rao', affiliation: 'ICTS-TIFR' },
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
  title: 'Applications opening soon',
  body: 'Applications for the Summer School for Women in Physics 2027 have not opened yet. Official programme dates, application portal access, and examination schedules will be announced here.',
  points: [
    'Programme dates: to be announced by the organising committee',
    'Eligibility: women who have completed the first year of B.Sc. Physics or Integrated B.Sc.–M.Sc. in Physics',
  ],
} as const;
