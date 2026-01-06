import { HeroCinematic } from "@/components/sections/home/HeroCinematic";
import { ProofCredibility } from "@/components/sections/home/ProofCredibility";
import { PortfolioFeatured } from "@/components/sections/home/PortfolioFeatured";
import { ServicesGrid } from "@/components/sections/home/ServicesGrid";
import { WhyAflink } from "@/components/sections/home/WhyAflink";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { Insights } from "@/components/sections/home/Insights";
import { NextStepCTA } from "@/components/sections/home/NextStepCTA";
import { SiteFooter } from "@/components/sections/home/SiteFooter";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      {/* Hero: full-bleed, video background */}
      <HeroCinematic />

      {/* Everything below: keep dark baseline and use subtle section separators */}
      <div className="relative">
        {/* Subtle divider between hero and content */}
        <div className="h-px w-full bg-white/10" />

        <section className="bg-black">
          <ProofCredibility />
        </section>

        <div className="h-px w-full bg-white/10" />

        <section className="bg-black">
          <PortfolioFeatured />
        </section>

        <div className="h-px w-full bg-white/10" />

        <section className="bg-black">
          <ServicesGrid />
        </section>

        <div className="h-px w-full bg-white/10" />

        <section className="bg-black">
          <WhyAflink />
        </section>

        <div className="h-px w-full bg-white/10" />

        <section className="bg-black">
          <Testimonials />
        </section>

        <div className="h-px w-full bg-white/10" />

        <section className="bg-black">
          <Insights />
        </section>

        <div className="h-px w-full bg-white/10" />

        <section className="bg-black">
          <NextStepCTA />
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
