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

export function WhyAflink() {
  return (
    <section className="bg-[rgb(var(--bg))]">
      <Container className="py-14">
        <div>
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-[rgb(var(--fg))]/55">
            Why Aflink
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[rgb(var(--fg))] sm:text-4xl">
            Corporate-grade operations with creative excellence.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[rgb(var(--fg))]/65">
            We combine disciplined execution with strong creative direction—so the experience feels premium and the delivery stays controlled.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-black/5 bg-white p-6 shadow-[0_12px_40px_rgba(10,16,32,.08)]"
            >
              <div className="text-lg font-semibold tracking-tight text-[rgb(var(--fg))]">{p.title}</div>
              <ul className="mt-4 space-y-2 text-sm text-[rgb(var(--fg))]/65">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full" style={{ background: "rgba(22,92,255,.55)" }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-black/5 bg-white p-6 shadow-[0_12px_40px_rgba(10,16,32,.08)]">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-[rgb(var(--fg))]/55">
            Process
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-4">
            {["Discovery", "Plan", "Produce", "Deliver"].map((s) => (
              <div key={s} className="rounded-2xl border border-black/5 bg-[rgb(var(--bg))] px-4 py-3 text-sm font-medium text-[rgb(var(--fg))]/70">
                {s}
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="h-px w-full bg-black/5" />
    </section>
  );
}
