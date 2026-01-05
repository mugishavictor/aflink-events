import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const services = [
  { slug: "mice-conferences", title: "MICE & Conferences", blurb: "Summits, multi-day programs, speaker flows, protocol-ready execution." },
  { slug: "corporate-events", title: "Corporate Events", blurb: "Executive-ready events with clean timelines and premium environments." },
  { slug: "exhibitions", title: "Exhibitions", blurb: "Booth build, visitor journeys, technical setup, and on-floor ops." },
  { slug: "brand-activations", title: "Brand Activations", blurb: "Engagement-driven activations with crowd flow and brand control." },
  { slug: "creative-production", title: "Creative Production", blurb: "Stage design, experience design, content direction, environments." },
  { slug: "equipment-technical", title: "Equipment & Technical Services", blurb: "AV, lighting, LED, power planning, crew, redundancy." },
  { slug: "event-consultancy", title: "Event Consultancy", blurb: "Strategy, budgeting, timelines, risk planning, stakeholder alignment." },
];

export function ServicesOverview() {
  return (
    <section className="bg-[rgb(var(--bg))]">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-[rgb(var(--fg))]/55">
              Services
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[rgb(var(--fg))] sm:text-4xl">
              Built for high-stakes events.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--fg))]/65">
              Clear deliverables, consistent standards, and disciplined operations—built for Rwanda and the region.
            </p>

            <div className="mt-6 flex gap-3">
              <Button href="/services" variant="secondary">Explore services</Button>
              <Button href="/request-quote">Request a Quote</Button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group rounded-3xl border border-black/5 bg-white p-6 shadow-[0_12px_40px_rgba(10,16,32,.08)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_70px_rgba(22,92,255,.14)]"
                >
                  <div className="text-lg font-semibold tracking-tight text-[rgb(var(--fg))]">
                    {s.title}
                  </div>
                  <div className="mt-2 text-sm text-[rgb(var(--fg))]/65">{s.blurb}</div>
                  <div className="mt-4 text-sm font-medium text-[rgb(var(--fg))]/70 group-hover:text-[rgb(var(--fg))]">
                    Explore service →
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-black/5 bg-white p-6 shadow-[0_12px_40px_rgba(10,16,32,.08)]">
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-[rgb(var(--fg))]/55">
                Delivery process
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-4">
                {["Discovery", "Plan", "Produce", "Deliver"].map((p) => (
                  <div key={p} className="rounded-2xl border border-black/5 bg-[rgb(var(--bg))] px-4 py-3 text-sm font-medium text-[rgb(var(--fg))]/70">
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="h-px w-full bg-black/5" />
    </section>
  );
}
