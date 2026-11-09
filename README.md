# Summer School for Women in Physics (SSWP 2027) — ICTS-TIFR Bengaluru

**“HER CONTRIBUTIONS TO PHYSICS. YOUR FUTURE IN SCIENCE.”**

The official experiential website for the **Summer School for Women in Physics (SSWP 2027)** hosted at the **International Centre for Theoretical Sciences (ICTS-TIFR)** in Bengaluru, India.

---

## 🏛️ Editorial & Exhibition Design
Designed as a museum-quality science exhibition celebrating pioneering women physicists while clearly presenting the academic programme for undergraduate students:

- **Official ICTS Identity & Palette:** Sampled directly from the official ICTS logo:
  - Primary Brand Accent: `ICTS Crimson / Terracotta` (`#9a393a`)
  - Secondary Brand Accent: `ICTS Solar Amber` (`#ef7f1a`)
  - Exhibition Backdrop: Restrained slate-graphite neutrals (`#0b0f17`, `#131924`)
- **Scientist Exhibition Journey:**
  - **Strict Representation:** Exactly **50% Indian Women Physicists** (6 Indian + 6 International Pioneers).
  - Authentic portraits from verified archives (Indian Academy of Sciences, Smithsonian, Nobel Foundation, CERN, Carnegie Institution).
  - Custom, scientifically grounded visual representations for each scientist's research (cosmic ray emulsion tracks, Noether continuous symmetry, collider hadronic jets, parity-violating beta decay, multipartite quantum entanglement, radio pulsar sweeps, nonlinear plasma solitons, flat galactic rotation curves, hydrodynamic shear instabilities, nuclear fission droplet scission, colloidal brownian arrest, and radioactive magnetic deflection).
  - Clear scientific illustration / conceptual visualization labels with authoritative source links.
- **Accurate Programme Parameters:**
  - **Eligibility:** Open to women students who have completed the first year of a B.Sc. Physics programme or an Integrated B.Sc.–M.Sc. programme *(Subject to confirmation by organisers)*.
  - **Selection:** Based on an online, MCQ-based test evaluating basic conceptual physics clarity.
  - **Support & Travel:** Provided by ICTS to selected students as per applicable ICTS norms, directly linking to the official ICTS Travel Norms PDF.
  - **Programme Organisers:** Full listing of all 11 faculty and institutional affiliations.
  - **Application Status:** Polished "Coming soon" dialog communicating that 2027 dates and registration will open soon.

---

## 🛠️ Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with official ICTS tokens
- **Rendering:** HTML5 Canvas API with responsive 60 FPS animation loops and `prefers-reduced-motion` accessibility support
- **Icons:** Lucide React
- **Static Export & CI/CD:** Configured for GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

---

## 🚀 Development & Deployment

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Static production build
npm run build
```

Production site is hosted live on GitHub Pages:
**[https://phyphyphy12.github.io/ICTSSummerSchool2027/](https://phyphyphy12.github.io/ICTSSummerSchool2027/)**
