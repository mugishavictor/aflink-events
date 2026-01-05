import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="bg-[rgb(var(--bg))]">
      <Container className="py-14">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-black/5 bg-white shadow-[0_18px_70px_rgba(10,16,32,.12)]">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, rgba(22,92,255,.18), rgba(0,210,255,.08) 35%, rgba(255,255,255,.92))",
            }}
          />
          <div className="relative p-10 sm:p-12">
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-[rgb(var(--fg))]/55">
              Next step
            </div>

            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-[rgb(var(--fg))] sm:text-4xl">
              Ready to plan something exceptional?
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[rgb(var(--fg))]/65">
              Tell us your scope and we’ll respond with next steps, timeline, and budget range.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/request-quote">Request a Quote</Button>
              <Button href="/request-quote" variant="secondary">Book Consultation</Button>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium text-[rgb(var(--fg))]/70 hover:text-[rgb(var(--fg))] hover:bg-black/5 transition"
              >
                WhatsApp / Quick Contact →
              </Link>
            </div>

            <div className="mt-8 text-sm text-[rgb(var(--fg))]/55">
              Kigali, Rwanda • info@aflinkevents.rw • +250 …
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
