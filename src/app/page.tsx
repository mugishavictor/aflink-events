import { HeroCinematic } from "@/components/sections/home/HeroCinematic";
import { ProofStrip } from "@/components/sections/home/ProofStrip";
import { FeaturedWork } from "@/components/sections/home/FeaturedWork";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { WhyAflink } from "@/components/sections/home/WhyAflink";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { InsightsPreview } from "@/components/sections/home/InsightsPreview";
import { FinalCTA } from "@/components/sections/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroCinematic />
      <ProofStrip />
      <FeaturedWork />
      <ServicesOverview />
      <WhyAflink />
      <Testimonials />
      <InsightsPreview />
      <FinalCTA />
    </>
  );
}
