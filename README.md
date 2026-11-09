# Summer School for Women in Physics (SSWP) — ICTS-TIFR Bengaluru

A high-performance, immersive scrollytelling web experience built for the **Summer School for Women in Physics (SSWP)** hosted annually at the **International Centre for Theoretical Sciences (ICTS-TIFR)** in Bengaluru, India.

---

## 🌌 Core Mechanics & Features

### 1. Interactive Canvas Physics Simulation
Driven linearly over a `500vh` GSAP ScrollTrigger layout:
- **Phase 1: The Lab Gateway & Chaos to Order (0% - 25% Scroll)**
  - 3D perspective double-door vacuum portal that slides open to the margins.
  - High-entropy thermal motion of 300+ vector particles cooled and aligned by an implicit magnetic spin field into the ordered lattice geometry of **"SSWP"**.
- **Phase 2: Holographic Core Corridor & Spacetime Curvature (26% - 50% Scroll)**
  - Dynamic 3D coordinate spacetime lattice.
  - Deep gravitational mass well singularity warping grid geodesics according to relativistic curvature equations.
- **Phase 3: Wave-Particle Duality & Experiential Matrix (51% - 100% Scroll)**
  - Coherent quantum wave packet passing through Young's double-slit apertures.
  - Live computed cosine-squared interference intensity profile (\(I = I_0 \cos^2(\beta) \mathrm{sinc}^2(\alpha)\)) rendered behind the curriculum matrix.

### 2. Hardcoded Administrative Parameters
- **Eligibility:** Exclusively open to women who have just completed their 1st Year of B.Sc. (Physics) or Integrated B.Sc.-M.Sc. courses.
- **Selection Process:** 100% remote, home-based online MCQ selection exam evaluating basic undergraduate physics conceptual clarity.
- **Fellowships:** Fully funded residency at ICTS. Zero registration fees. Covers full round-trip travel reimbursements, campus housing, and daily meals.
- **Critical Advisory Note (Prominently Highlighted):** Urgently requests that selected students bring a personal or borrowed laptop for experimental data analysis and Python simulation routines.

### 3. Experiential Component Matrix & Dropzones
Interactive expandable cards that scale dynamically on hover:
- 🌅 **Morning Broad Lectures:** Broad foundational talks by eminent faculty with open Q&A.
- 🔬 **Afternoon Experimental Cycles (2:30 PM - 5:30 PM):** Small agile cohorts of 5 tackling flagship experiments (Faraday waves, Van de Graaff breakdown, coupled oscillators) every 48 hours.
- 🌆 **Evening Symposiums & Mentorship:** Problem sets and candid career discussions with ICTS Postdocs and PhD scholars.
- **Archival Dropzones:** Drag-and-drop media upload simulator with distinct upload state icons, auto-indexing, and historical photo galleries from 2023–2026.

---

## 🛠️ Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with custom neon quantum palette (`#020617` midnight slate, `#22d3ee` quantum cyan, `#a855f7` amethyst, `#f59e0b` cosmic amber)
- **Animation & Scrollytelling:** GSAP & ScrollTrigger
- **Simulation Layer:** HTML5 Canvas API with 60 FPS `requestAnimationFrame` loop
- **Icons:** Lucide React
- **Static Export:** Configured for GitHub Pages (`output: 'export'`)

---

## 🚀 Running Locally

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

3. Static Production Export:
```bash
npm run build
```
Static production output is generated into the `out/` directory.

---

## 🌐 Deploying to GitHub Pages

1. Push this repository to GitHub:
```bash
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
git add .
git commit -m "Initial commit: SSWP ICTS Portal"
git push -u origin main
```

2. In your GitHub repository:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **GitHub Actions**.
   - The `.github/workflows/deploy.yml` workflow will automatically build and publish the site!
