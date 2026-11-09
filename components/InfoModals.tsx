'use client';

import React, { useState } from 'react';
import { 
  X, 
  GraduationCap, 
  CheckCircle2, 
  Award, 
  Laptop, 
  AlertTriangle, 
  Send, 
  Sparkles, 
  Calendar, 
  FileText, 
  HelpCircle,
  Clock,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Check
} from 'lucide-react';

// =====================================================================
// 1. ELIGIBILITY MODAL
// =====================================================================
export function EligibilityModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-xl glass-panel-glow rounded-2xl overflow-hidden border border-cyan-500/30 p-6 space-y-5">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-2 text-cyan-400">
            <GraduationCap className="w-5 h-5" />
            <h3 className="font-mono font-bold text-lg text-white">Eligibility Criteria</h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4 text-xs md:text-sm text-slate-300">
          <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-200">
            <strong className="text-white font-mono block mb-1">Target Candidate Profile:</strong>
            Exclusively open to women students who have completed or are completing their <strong>1st Year of B.Sc. (Physics)</strong> or the 1st Year of an <strong>Integrated B.Sc.-M.Sc. (Physics)</strong> program in India.
          </div>

          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold">Key Eligibility Checkpoints:</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Must be enrolled in a recognized Indian university, college, or central institute.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Physics must be a primary/major discipline in the curriculum.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Students awaiting their 1st-year second-semester results are fully eligible to apply.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>No minimum grade cutoff — selection is based purely on merit in the online exam.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800 flex justify-end">
          <button onClick={onClose} className="px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 font-mono text-xs font-semibold">
            Understood
          </button>
        </div>
      </div>
    </div>
  );
}

// =====================================================================
// 2. SELECTION PROCESS MODAL
// =====================================================================
export function SelectionModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-xl glass-panel-glow rounded-2xl overflow-hidden border border-purple-500/30 p-6 space-y-5">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-2 text-purple-400">
            <CheckCircle2 className="w-5 h-5" />
            <h3 className="font-mono font-bold text-lg text-white">Selection Process & Exam</h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4 text-xs md:text-sm text-slate-300">
          <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-200">
            <strong className="text-white font-mono block mb-1">100% Remote, Home-Based MCQ Exam:</strong>
            Candidates will take a remotely proctored online multiple choice question exam from home, testing fundamental intuition and basic undergraduate physics clarity.
          </div>

          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold">Exam Blueprint & Syllabus:</h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-purple-300 font-bold">Classical Mechanics:</span>
                <p className="text-slate-400 mt-1">Newtonian dynamics, oscillations, conservation laws.</p>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-purple-300 font-bold">Electromagnetism:</span>
                <p className="text-slate-400 mt-1">Coulomb&apos;s law, circuits, Gauss&apos;s law, magnetic fields.</p>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-purple-300 font-bold">Optics & Waves:</span>
                <p className="text-slate-400 mt-1">Interference, diffraction, wave speed, refraction.</p>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-purple-300 font-bold">Thermodynamics:</span>
                <p className="text-slate-400 mt-1">Ideal gas laws, heat engines, entropy basics.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800 flex justify-end">
          <button onClick={onClose} className="px-4 py-2 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/40 font-mono text-xs font-semibold">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// =====================================================================
// 3. FELLOWSHIP MODAL
// =====================================================================
export function FellowshipModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-xl glass-panel-glow rounded-2xl overflow-hidden border border-emerald-500/30 p-6 space-y-5">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-2 text-emerald-400">
            <Award className="w-5 h-5" />
            <h3 className="font-mono font-bold text-lg text-white">100% Fully Funded Residency</h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4 text-xs md:text-sm text-slate-300">
          <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
            <strong className="text-white font-mono block mb-1">Zero Financial Burden:</strong>
            SSWP at ICTS is a flagship outreach initiative funded entirely by the Department of Atomic Energy (DAE) and ICTS-TIFR.
          </div>

          <div className="space-y-2.5">
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start space-x-3">
              <span className="p-1.5 rounded bg-emerald-500/20 text-emerald-300 font-bold font-mono text-xs shrink-0">TRAVEL</span>
              <div>
                <strong className="text-white">Full Travel Reimbursement:</strong>
                <p className="text-slate-400 text-xs mt-0.5">Round-trip travel from your hometown/college to ICTS Bengaluru is covered as per institute norms (3-tier AC train or equivalent).</p>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start space-x-3">
              <span className="p-1.5 rounded bg-emerald-500/20 text-emerald-300 font-bold font-mono text-xs shrink-0">HOUSING</span>
              <div>
                <strong className="text-white">Safe, Serene Campus Housing:</strong>
                <p className="text-slate-400 text-xs mt-0.5">Complimentary accommodation inside the ICTS campus hostels with high-speed Wi-Fi, 24/7 security, and modern amenities.</p>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start space-x-3">
              <span className="p-1.5 rounded bg-emerald-500/20 text-emerald-300 font-bold font-mono text-xs shrink-0">MEALS</span>
              <div>
                <strong className="text-white">Nutritious Daily Dining:</strong>
                <p className="text-slate-400 text-xs mt-0.5">All meals (breakfast, lunch, afternoon high-tea with faculty, and dinner) provided at the ICTS campus cafeteria.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800 flex justify-end">
          <button onClick={onClose} className="px-4 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 font-mono text-xs font-semibold">
            Understood
          </button>
        </div>
      </div>
    </div>
  );
}

// =====================================================================
// 4. CRITICAL LAPTOP ADVISORY MODAL
// =====================================================================
export function LaptopAdvisoryModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-xl glass-panel-glow rounded-2xl overflow-hidden border border-amber-500/40 p-6 space-y-5 shadow-glow-amber">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-2 text-amber-400">
            <AlertTriangle className="w-5 h-5 animate-bounce" />
            <h3 className="font-mono font-bold text-lg text-white">Critical Advisory: Laptop Requirement</h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4 text-xs md:text-sm text-slate-300">
          <div className="p-4 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-100">
            <p className="font-semibold leading-relaxed">
              &quot;If selected, students are <strong>highly requested and urged to bring a laptop</strong> (either personal or borrowed). Carrying a laptop is essential for the program&apos;s experimental data structures.&quot;
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold">Why A Laptop Is Crucial:</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Data Acquisition:</strong> Interfacing with laboratory sensors, digital oscilloscopes, and high-speed camera footage.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Scientific Computation:</strong> Hands-on Python scripting (NumPy, SciPy, Matplotlib) for curve fitting and Fourier transforms.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Collaborative Problem Sets:</strong> Real-time shared Jupyter notebooks and group presentations.</span>
              </li>
            </ul>
          </div>

          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400">
            <strong className="text-white block mb-0.5">Borrowing Is Supported:</strong>
            Any working laptop capable of running a web browser and Python is sufficient. If you do not own a laptop, we encourage borrowing one from a friend or college department for the 2-week residency.
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800 flex justify-end">
          <button onClick={onClose} className="px-5 py-2 rounded-xl bg-amber-500 text-slate-950 font-mono text-xs font-bold hover:bg-amber-400 transition-colors">
            I Acknowledge Laptop Requirement
          </button>
        </div>
      </div>
    </div>
  );
}

// =====================================================================
// 5. APPLICATION MODAL / REGISTRATION
// =====================================================================
export function ApplyModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    course: 'B.Sc. Physics (1st Year Completed)',
    city: '',
    hasLaptop: 'yes',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-xl glass-panel-glow rounded-2xl overflow-hidden border border-cyan-500/40 p-6 space-y-5">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-2 text-cyan-400">
            <Sparkles className="w-5 h-5" />
            <h3 className="font-mono font-bold text-lg text-white">Apply for SSWP 2027</h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300">
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40 animate-pulse">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-mono text-xl font-bold text-white">Application Initiated!</h4>
            <p className="text-xs md:text-sm text-slate-300 max-w-md mx-auto">
              Thank you, <strong className="text-cyan-300">{formData.name}</strong>. Your registration profile has been queued for the 100% remote online MCQ selection exam. Check your inbox for the syllabus & exam slot confirmation.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2 rounded-xl bg-cyan-500 text-slate-950 font-mono text-xs font-bold hover:bg-cyan-400 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
            <div>
              <label className="block text-slate-300 mb-1">Full Legal Name *</label>
              <input
                required
                type="text"
                placeholder="e.g. Ananya Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 mb-1">Email Address *</label>
                <input
                  required
                  type="email"
                  placeholder="ananya@college.edu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-400"
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-1">WhatsApp / Phone *</label>
                <input
                  required
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 mb-1">Current College / University *</label>
              <input
                required
                type="text"
                placeholder="e.g. St. Stephen's / Presidency / IISER / St. Xavier's"
                value={formData.institution}
                onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 mb-1">Course Stream *</label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-400"
                >
                  <option>1st Year B.Sc. (Physics)</option>
                  <option>1st Year Int. B.Sc.-M.Sc. (Physics)</option>
                  <option>1st Year BS-MS (Major: Physics)</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-300 mb-1">Can bring a laptop if selected? *</label>
                <select
                  value={formData.hasLaptop}
                  onChange={(e) => setFormData({ ...formData, hasLaptop: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-400"
                >
                  <option value="yes">Yes, personal laptop</option>
                  <option value="borrowed">Yes, will borrow a laptop</option>
                  <option value="need_assistance">Need college assistance</option>
                </select>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 pt-1">
              Zero registration fee. After submitting, your remote online MCQ exam credentials will be generated automatically.
            </p>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 text-slate-950 font-bold text-sm tracking-wider shadow-glow-cyan hover:scale-[1.01] transition-all"
            >
              REGISTER FOR REMOTE SELECTION EXAM
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// =====================================================================
// 6. PAST EDITIONS ARCHIVE MODAL (2023 - 2026)
// =====================================================================
export function ArchiveModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);

  if (!isOpen) return null;

  const posters = [
    { year: '2026', title: 'SSWP 2026', src: '/images/sswp-2026.png', desc: 'Curriculum & Program Poster' },
    { year: '2025', title: 'SSWP 2025', src: '/images/sswp-2025.png', desc: 'Curriculum & Program Poster' },
    { year: '2024', title: 'SSWP 2024', src: '/images/sswp-2024.png', desc: 'Curriculum & Program Poster' },
    { year: '2023', title: 'SSWP 2023', src: '/images/sswp-2023.png', desc: 'Inaugural Launch Poster' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-4xl glass-panel-glow rounded-2xl overflow-hidden border border-slate-700 p-6 space-y-5 max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-2 text-cyan-400">
            <FileText className="w-5 h-5" />
            <h3 className="font-mono font-bold text-lg text-white">Past Editions Archive (2023 — 2026)</h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 pr-1">
          <p className="text-xs text-slate-300 mb-4 font-mono">
            Click any official poster to expand in high-definition view. SSWP has nurtured over 120 undergraduate women scholars across India since 2023.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {posters.map((poster) => (
              <div
                key={poster.year}
                onClick={() => setSelectedPoster(poster.src)}
                className="group cursor-pointer rounded-xl overflow-hidden border border-slate-800 bg-slate-900/60 hover:border-cyan-400/60 transition-all hover:-translate-y-1"
              >
                <div className="aspect-[3/4] relative bg-slate-950">
                  <img
                    src={poster.src}
                    alt={poster.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-slate-950/80 text-cyan-300 font-mono text-[10px] font-bold border border-cyan-500/30">
                    {poster.year}
                  </div>
                </div>
                <div className="p-2 text-center">
                  <div className="font-mono text-xs font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">
                    {poster.title}
                  </div>
                  <div className="text-[10px] text-slate-400">{poster.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800 flex justify-end">
          <button onClick={onClose} className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs font-semibold">
            Close Archive
          </button>
        </div>
      </div>

      {selectedPoster && (
        <div
          onClick={() => setSelectedPoster(null)}
          className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in"
        >
          <div className="max-w-3xl max-h-[90vh] relative">
            <img
              src={selectedPoster}
              alt="Expanded poster"
              className="max-w-full max-h-[90vh] object-contain rounded-lg border border-slate-700 shadow-2xl"
            />
            <button
              onClick={() => setSelectedPoster(null)}
              className="absolute -top-10 right-0 text-slate-300 hover:text-white font-mono text-xs flex items-center space-x-1"
            >
              <X className="w-4 h-4" />
              <span>Close</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
