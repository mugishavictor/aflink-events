import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GridOverlay } from "@/components/ui/GridOverlay";

const featuredCase = {
  slug: "regional-conference-production",
  title: "Regional Conference Production",
  category: "Conferences",
  location: "Kigali, Rwanda",
  objective: "Deliver a multi-day program with executive-grade flow and controlled stage transitions.",
  constraints: "Tight turnaround, multiple stakeholders, live agenda changes, VIP protocol requirements.",
  scope: ["Program & content support", "Logistics + delegate management", "Technical setup + show calling", "Onsite execution"],
  results: ["On-time show delivery", "Clean transitions + rehearsed run-of-show", "Premium guest journey"],
};

const featuredPastEvents = [
  { slug: "activation-campaign", title: "City Brand Activation", category: "Brand Activations", location: "Kigali" },
  { slug: "expo-exhibition", title: "Exhibition Build & Management", category: "Exhibitions", location: "Rwanda" },
  { slug: "corporate-gala", title: "Corporate Gala Dinner", category: "Corporate Events", location: "Kigali" },
  { slug: "cultural-festival", title: "Cultural Festival Production", category: "Festivals", location: "Rwanda" },
  { slug: "social-vip", title: "VIP Social Function", category: "Social Events", location: "Kigali" },
  { slug: "conference-delegate", title: "Delegate Management Program", category: "Conferences", location: "Rwanda + Region" },
];

const categories = ["Conferences", "Brand Activations", "Exhibitions", "Social Events", "Festivals"];

export function FeaturedWork() {
  return (
    <section className="relative bg-[rgb(var(--bg))]">
      <Container size="full" className="relative">
        <GridOverlay className="hidden lg:block" />

        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 py-16 lg:py-20">
          {/* Header */}
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-[rgb(var(--fg))]/55">
                Portfolio / Past Events
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[rgb(var(--fg))] sm:text-4xl lg:text-5xl">
                Featured past events—built like premium case studies.
              </h2>
              <p className="mt-4 max-w-[70ch] text-sm leading-relaxed text-[rgb(var(--fg))]/65">
                Explore conferences, activations, exhibitions, social events, and festivals—delivered with creative control and disciplined execution.
              </p>
            </div>

            <div className="lg:col-span-4 flex gap-3 lg:justify-end">
              <Button href="/work" variant="secondary">View all work</Button>
              <Button href="/request-quote">Request a Quote</Button>
            </div>
          </div>

          {/* Category chips (doc categories) */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <Link
                key={c}
                href={`/work?category=${encodeURIComponent(c)}`}
                className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[rgb(var(--fg))]/70 hover:bg-white transition"
              >
                {c}
              </Link>
            ))}
          </div>

          {/* Featured case row */}
          <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:gap-8">
            {/* Media */}
            <Link
              href={`/work/${featuredCase.slug}`}
              className="group relative lg:col-span-7 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_18px_60px_rgba(10,16,32,.10)] transition hover:shadow-[0_26px_90px_rgba(22,92,255,.16)]"
            >
              <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[520px]">
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{
                    background:
                      "linear-gradient(120deg, rgba(22,92,255,.22), rgba(0,210,255,.10) 45%, rgba(255,255,255,.96))",
                  }}
                />
                <div className="absolute inset-0 ring-1 ring-black/5" />

                <div className="absolute left-6 top-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[rgb(var(--fg))]/60">
                  <span className="rounded-full border border-black/10 bg-white/80 px-3 py-1">{featuredCase.category}</span>
                  <span>•</span>
                  <span className="rounded-full border border-black/10 bg-white/80 px-3 py-1">{featuredCase.location}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 border-t border-black/5 bg-white/80 px-6 py-5 backdrop-blur">
                  <div className="text-xl font-semibold tracking-tight text-[rgb(var(--fg))] sm:text-2xl">
                    {featuredCase.title}
                  </div>
                  <div className="mt-1 text-sm font-medium text-[rgb(var(--fg))]/65">
                    Open case study →
                  </div>
                </div>
              </div>
            </Link>

            {/* Case structure blocks (matches your MDX plan) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-black/5 bg-white/70 p-7 backdrop-blur shadow-[0_12px_40px_rgba(10,16,32,.08)]">
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-[rgb(var(--fg))]/55">
                  Case study snapshot
                </div>

                <div className="mt-6 space-y-5">
                  <div>
                    <div className="text-sm font-semibold text-[rgb(var(--fg))]">Objective</div>
                    <div className="mt-1 text-sm leading-relaxed text-[rgb(var(--fg))]/65">{featuredCase.objective}</div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-[rgb(var(--fg))]">Constraints</div>
                    <div className="mt-1 text-sm leading-relaxed text-[rgb(var(--fg))]/65">{featuredCase.constraints}</div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-[rgb(var(--fg))]">Scope</div>
                    <ul className="mt-2 space-y-2 text-sm text-[rgb(var(--fg))]/65">
                      {featuredCase.scope.map((s) => (
                        <li key={s} className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full" style={{ background: "rgba(22,92,255,.60)" }} />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-[rgb(var(--fg))]">Results</div>
                    <ul className="mt-2 space-y-2 text-sm text-[rgb(var(--fg))]/65">
                      {featuredCase.results.map((r) => (
                        <li key={r} className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full" style={{ background: "rgba(0,210,255,.60)" }} />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  <Button href={`/work/${featuredCase.slug}`} variant="secondary">View details</Button>
                  <Button href="/request-quote">Plan a similar event</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Featured past events grid (explicit doc requirement) */}
          <div className="mt-14">
            <div className="flex items-end justify-between gap-6">
              <div>
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-[rgb(var(--fg))]/55">
                  Featured past events
                </div>
                <div className="mt-2 text-lg font-semibold tracking-tight text-[rgb(var(--fg))]">
                  A selection across formats and audiences.
                </div>
              </div>

              <Link href="/work" className="hidden sm:inline text-sm font-medium text-[rgb(var(--fg))]/70 hover:text-[rgb(var(--fg))] transition">
                View all →
              </Link>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featuredPastEvents.map((e) => (
                <Link
                  key={e.slug}
                  href={`/work/${e.slug}`}
                  className="group rounded-2xl border border-black/5 bg-white p-5 shadow-[0_10px_30px_rgba(10,16,32,.06)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_60px_rgba(22,92,255,.12)]"
                >
                  <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[rgb(var(--fg))]/55">
                    <span className="rounded-full border border-black/10 bg-[rgb(var(--bg))] px-3 py-1">{e.category}</span>
                    <span className="truncate">• {e.location}</span>
                  </div>

                  <div className="mt-4 text-base font-semibold tracking-tight text-[rgb(var(--fg))]">{e.title}</div>

                  <div className="mt-4 overflow-hidden rounded-xl border border-black/5">
                    <div
                      className="aspect-[16/10] w-full transition-transform duration-500 group-hover:scale-[1.03]"
                      style={{
                        background:
                          "linear-gradient(120deg, rgba(22,92,255,.14), rgba(0,210,255,.07) 45%, rgba(255,255,255,.98))",
                      }}
                    />
                  </div>

                  <div className="mt-4 text-sm font-medium text-[rgb(var(--fg))]/70 group-hover:text-[rgb(var(--fg))]">
                    Open →
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-16 h-px w-full bg-black/5" />
        </div>
      </Container>
    </section>
  );
}
