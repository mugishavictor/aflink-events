import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const services = [
  { title: "MICE & Conferences", desc: "Summits, multi-day programs, speaker flows, protocol-ready execution.", href: "/services/mice-conferences" },
  { title: "Corporate Events", desc: "Executive-ready events with clean timelines and premium environments.", href: "/services/corporate-events" },
  { title: "Exhibitions", desc: "Booth build, visitor journeys, technical setup, and on-floor ops.", href: "/services/exhibitions" },
  { title: "Brand Activations", desc: "Engagement-driven activations with crowd flow and brand control.", href: "/services/brand-activations" },
  { title: "Creative Production", desc: "Stage design, experience design, content direction, environments.", href: "/services/creative-production" },
  { title: "Equipment & Technical Services", desc: "AV, lighting, LED, power planning, crew, redundancy.", href: "/services/equipment-technical" },
  { title: "Event Consultancy", desc: "Strategy, budgeting, timelines, risk planning, stakeholder alignment.", href: "/services/event-consultancy" },
];

const process = ["Discovery", "Plan", "Produce", "Deliver"];

export function ServicesGrid() {
  return (
    <section className="relative bg-black py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs font-medium tracking-[0.28em] text-white/60">
              SERVICES
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Built for high-stakes events.
            </h2>
            <p className="mt-4 text-white/70">
              Clear deliverables, consistent standards, and disciplined operations—built for Rwanda and the region.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href="/services" variant="secondary">Explore services</Button>
              <Button href="/request-quote">Request a Quote</Button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {services.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
                >
                  <div className="text-lg font-semibold text-white">{s.title}</div>
                  <div className="mt-3 text-sm leading-relaxed text-white/70">{s.desc}</div>
                  <div className="mt-6 text-sm font-medium text-white/70 hover:text-white">
                    Explore service →
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-xs font-medium tracking-[0.28em] text-white/60">
                DELIVERY PROCESS
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-4">
                {process.map((p) => (
                  <div
                    key={p}
                    className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm font-medium text-white/80"
                  >
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
