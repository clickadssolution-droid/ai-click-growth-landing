import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Hero } from "@/components/sections/Hero";
import { OpportunityAreas } from "@/components/sections/OpportunityAreas";
import { AuditScope } from "@/components/sections/AuditScope";
import { GrowthEcosystem } from "@/components/sections/GrowthEcosystem";
import { AppliedExperience } from "@/components/sections/AppliedExperience";
import { Services } from "@/components/sections/Services";
import { Method } from "@/components/sections/Method";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { hasIsotype, hasLogoColor, hasLogoWhite } from "@/lib/brand-assets";

export default function Home() {
  return (
    <div id="top">
      <Header hasLogoColor={hasLogoColor} />
      <main id="main-content">
        <Hero hasIsotype={hasIsotype} />
        <OpportunityAreas />
        <AuditScope />
        <GrowthEcosystem hasIsotype={hasIsotype} />
        <AppliedExperience />
        <Services />
        <Method />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer hasLogoWhite={hasLogoWhite} />
      <StickyMobileCTA />
    </div>
  );
}
