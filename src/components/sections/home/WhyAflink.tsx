import { Container } from "@/components/ui/Container";

const pillars = [
  {
    title: "Strategy & Planning",
    bullets: ["Objectives → scope → budget control", "Timelines, approvals, risk planning", "Stakeholder alignment"],
  },
  {
    title: "Production Management",
    bullets: ["Vendor control + show calling", "Run-of-show + rehearsals", "Onsite command and calm execution"],
  },
  {
    title: "Creative & Experience Design",
    bullets: ["Stage + environment design", "Guest journey + branding", "Content direction + flow"],
  },
  {
    title: "Technical Control",
    bullets: ["Sound, lighting, LED, staging", "Power planning + redundancy", "Equipment + crew"],
  },
];

const steps = [
  { title: "Discovery", desc: "Understand objectives, stakeholders, constraints, success metrics." },
  { title: "Plan", desc: "Run-of-show, staffing, vendors, risk plan, approvals and timelines." },
  { title: "Produce", desc: "Content, staging, technical setup, rehearsals, show-calling prep." },
  { title: "Deliver", desc: "Onsite execution, comms, transitions, post-event wrap + learning." },
];

export function WhyAflink() {
  return (
    <section className="relative bg-black">
      {/* subtle cinematic glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-72 left-1/2 h-[700px] w-[1200px] -translate-x-1/2 rounded-full blur-3xl opacity-55"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, rgba(22,92,255,.22), transparent 60%), radial-gradient(circle at 60% 30%, rgba(0,210,255,.12), transparent 58%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/75 to-black" />
      </div>

      <Container className="relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left editorial header */}
          <div className="lg:col-span-5">
            <div className="text-xs font-medium uppercase tracking-[0.28em] text-white/60">
              Why Aflink
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Corporate-grade operations with creative excellence.
            </h2>
            <p className="mt-4 max-w-[60ch] text-sm leading-relaxed text-white/70">
              We combine disciplined execution with strong creative direction—so the experience feels premium
              and the delivery stays controlled.
            </p>

            {/* small “proof” lines instead of cards */}
            <div className="mt-10 space-y-6 border-t border-white/10 pt-8">
              {[
                ["Protocol-ready delivery", "Stakeholder control, approvals, VIP flow, governance."],
                ["Production-first mindset", "Run-of-show discipline, rehearsals, cue stacks, calm teams."],
                ["Premium guest journey", "Experience design that feels intentional and smooth."],
              ].map(([t, d]) => (
                <div key={t} className="grid gap-1">
                  <div className="text-sm font-semibold text-white">{t}</div>
                  <div className="text-sm text-white/65">{d}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: “less cardy” pillar list */}
          <div className="lg:col-span-7">
            <div className="grid gap-10">
              {pillars.map((p, idx) => (
                <div key={p.title} className="border-t border-white/10 pt-8">
                  <div className="flex items-baseline justify-between gap-6">
                    <div className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                      {p.title}
                    </div>
                    <div className="text-[11px] font-medium uppercase tracking-[0.26em] text-white/45">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="mt-4 grid gap-2 sm:grid-cols-3">
                    {p.bullets.map((b) => (
                      <div key={b} className="flex gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 rounded-full"
                          style={{ background: "rgba(0,210,255,.75)" }}
                          aria-hidden="true"
                        />
                        <span className="text-sm leading-relaxed text-white/70">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Process: editorial rail, not pills */}
            <div className="mt-14 border-t border-white/10 pt-10">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <div className="text-xs font-medium uppercase tracking-[0.28em] text-white/60">
                    Process
                  </div>
                  <div className="mt-3 text-xl font-semibold tracking-tight text-white">
                    A simple loop—executed with discipline.
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {steps.map((s, i) => (
                  <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                    <div className="flex items-center justify-between gap-6">
                      <div className="text-base font-semibold text-white">{s.title}</div>
                      <div className="text-[11px] font-medium uppercase tracking-[0.26em] text-white/45">
                        Step {i + 1}
                      </div>
                    </div>
                    <div className="mt-3 text-sm leading-relaxed text-white/70">{s.desc}</div>
                    <div className="mt-5 h-px w-full bg-white/10" />
                    <div className="mt-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white/50">
                      Output: {i === 0 ? "Brief + plan" : i === 1 ? "Run-of-show" : i === 2 ? "Rehearsed delivery" : "Clean execution"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="h-px w-full bg-white/10" />
    </section>
  );
}
