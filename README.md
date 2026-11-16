# Summer School for Women in Physics 2027 (SSWP), ICTS-TIFR Bengaluru

Website for the two-week Summer School for Women in Physics, for undergraduate women studying physics, hosted at the International Centre for Theoretical Sciences (ICTS-TIFR), Bengaluru.

Live site: https://phyphyphy12.github.io/ICTSSummerSchool2027/

## What is on the page

One page, in this order: hero, about, eligibility and selection, support and accommodation (with the ICTS travel norms PDF), a typical day, the campus photograph, programme organisers, contact, footer. Every "Apply" button opens a "coming soon" notice until applications open.

## Editing content

All text, links, organiser names and the contact email live in one file: `src/content/site.ts`. Change it there and nothing else needs touching.

## Project structure

```
src/
  app/                 Next.js App Router entry (layout, page, global stylesheet import)
  content/site.ts      All editable copy and links
  components/
    layout/            Header, MobileNav, Footer
    sections/          One file per page section (Hero, About, Eligibility, ...)
    ui/                Shared pieces (Dialog, ApplyDialog, Icon, SectionHeading)
  lib/assets.ts        Prefixes /public paths with the GitHub Pages base path
  styles/
    tokens.css         Colours, type, spacing
    base.css           Elements, buttons, dialogs
    layout.css         Header and footer
    sections.css       Section layouts
    motion.css         All animation, including the scroll-driven 3D effects
public/                Logo, campus photo, travel norms PDF
docs/briefs/           Earlier design briefs, kept for reference (the scientist exhibition they describe has been removed)
.agents/skills/        Modern Web Guidance skill for coding agents (installed with `npx modern-web-guidance@latest install`)
```

## Design

- **Colour** comes from the official ICTS logo (`public/images/icts-logo.png`): crimson `#9a393a` for the mark and lettering, amber `#ef7f1a` for the rule and the word "for". The logo sits on white, so the site is a light theme with warm neutrals. Tokens are in `src/styles/tokens.css`.
- **Type**: Fraunces for headings, Instrument Sans for text, loaded through `next/font`.
- **Motion** is plain CSS, no animation library. A 3D gyroscope of orbits in the hero turns and approaches as the page scrolls; sections tip up out of the page as they enter; the campus photo has a parallax drift; a progress bar tracks the scroll. These use native scroll-driven animations behind `@supports` and are switched off for visitors who prefer reduced motion. Without them the page is fully readable.
- **Dialogs** (the Apply notice and the mobile menu) are native `<dialog>` elements, so focus handling, Esc and backdrop dismissal come from the browser.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build      # static export to ./out
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the static export and publishes it to GitHub Pages. The base path (`/ICTSSummerSchool2027`) is applied automatically when building in GitHub Actions (`next.config.mjs`).

## Before launch

Items the organisers still need to confirm (carried over from the briefs): the eligibility wording, the selection wording, the support statement and norms PDF, the laptop note, the daily programme description, and all eleven organiser names and affiliations.
