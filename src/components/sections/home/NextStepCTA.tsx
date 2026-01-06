import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function NextStepCTA() {
  return (
    <section className="relative bg-black py-16 sm:py-20">
      <Container>
        <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10 backdrop-blur sm:p-14">
          <div className="text-xs font-medium tracking-[0.28em] text-white/60">
            NEXT STEP
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to plan something exceptional?
          </h2>

          <p className="mt-4 max-w-[75ch] text-white/70">
            Tell us your scope and we’ll respond with next steps, timeline, and budget range.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/request-quote">Request a Quote</Button>
            <Button href="/request-quote" variant="secondary">Book Consultation</Button>
            <Link
              href="/contact"
              className="text-sm font-medium text-white/75 hover:text-white transition sm:ml-3"
            >
              WhatsApp / Quick Contact →
            </Link>
          </div>

          <div className="mt-10 text-sm text-white/60">
            Kigali, Rwanda • info@aflinkevents.rw • +250 …
          </div>
        </div>
      </Container>
    </section>
  );
}
