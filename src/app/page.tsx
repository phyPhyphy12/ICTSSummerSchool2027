import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { About } from '@/components/sections/About';
import { Campus } from '@/components/sections/Campus';
import { ClosingCta } from '@/components/sections/ClosingCta';
import { Eligibility } from '@/components/sections/Eligibility';
import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/sections/Marquee';
import { Organisers } from '@/components/sections/Organisers';
import { Support } from '@/components/sections/Support';
import { TypicalDay } from '@/components/sections/TypicalDay';
import { ApplyDialog } from '@/components/ui/ApplyDialog';
import { PointerEffects } from '@/components/ui/PointerEffects';

export default function HomePage() {
  return (
    <>
      <div className="scroll-progress" />
      <div className="ambient" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Eligibility />
        <Support />
        <TypicalDay />
        <Marquee />
        <Campus />
        <Organisers />
        <ClosingCta />
      </main>
      <Footer />
      <ApplyDialog />
      <PointerEffects />
    </>
  );
}
