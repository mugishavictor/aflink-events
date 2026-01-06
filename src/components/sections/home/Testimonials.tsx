import { Container } from "@/components/ui/Container";

const quotes = [
  {
    quote:
      "Aflink Events transformed our expectations—they delivered world-class production and perfect coordination.",
    by: "Corporate Client",
    meta: "Corporate partner",
  },
  {
    quote:
      "Professional, creative, and highly reliable. We look forward to working with them again.",
    by: "International NGO",
    meta: "Development partner",
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-black">
      {/* subtle editorial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-64 left-1/2 h-[640px] w-[1100px] -translate-x-1/2 rounded-full blur-3xl opacity-55"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, rgba(22,92,255,.22), transparent 60%), radial-gradient(circle at 60% 30%, rgba(0,210,255,.12), transparent 58%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/75 to-black" />
        {/* super light grid vibe */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.18) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />
      </div>

      <Container className="relative py-16 sm:py-20">
        {/* Header row */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="text-xs font-medium uppercase tracking-[0.28em] text-white/60">
              Testimonials
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Trusted delivery. Real partners.
            </h2>
            <p className="mt-4 max-w-[65ch] text-sm leading-relaxed text-white/70">
              Short, direct words from corporate and NGO partners—focused on what matters: coordination,
              production quality, and calm execution.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
              <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/55">
                What clients mention most
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Coordination", "Production", "Reliability", "On-time delivery"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Editorial layout */}
        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          {/* Left: big pull quote */}
          <figure className="lg:col-span-7">
            <div className="relative">
              {/* big quote mark */}
              <div
                className="pointer-events-none absolute -left-2 -top-6 text-[96px] leading-none opacity-25"
                style={{
                  color: "rgba(0,210,255,.35)",
                }}
                aria-hidden="true"
              >
                “
              </div>

              <blockquote className="text-[26px] leading-[1.15] tracking-[-0.02em] text-white sm:text-[34px] lg:text-[40px]">
                {quotes[0].quote}
              </blockquote>

              <figcaption className="mt-6 flex items-center justify-between gap-6 border-t border-white/10 pt-5">
                <div>
                  <div className="text-sm font-medium text-white/75">— {quotes[0].by}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-[0.22em] text-white/45">
                    {quotes[0].meta}
                  </div>
                </div>

                {/* thin accent rule */}
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              </figcaption>
            </div>
          </figure>

          {/* Right: stacked short quotes */}
          <div className="lg:col-span-5">
            <div className="grid gap-6">
              {quotes.slice(1).map((q, idx) => (
                <figure
                  key={q.by}
                  className="relative rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur"
                >
                  <div
                    className="absolute left-0 top-0 h-full w-[2px]"
                    style={{
                      background: idx % 2 === 0 ? "rgba(22,92,255,.9)" : "rgba(0,210,255,.9)",
                    }}
                  />
                  <blockquote className="pl-3 text-base leading-relaxed text-white/85">
                    “{q.quote}”
                  </blockquote>
                  <figcaption className="mt-5 pl-3">
                    <div className="text-sm font-medium text-white/70">— {q.by}</div>
                    {q.meta ? (
                      <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.22em] text-white/45">
                        {q.meta}
                      </div>
                    ) : null}
                  </figcaption>
                </figure>
              ))}

              {/* optional: tiny note like Sparks */}
              <div className="text-xs leading-relaxed text-white/45">
                Want references or a portfolio deck? Request a quote and we’ll share relevant case studies.
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="h-px w-full bg-white/10" />
    </section>
  );
}
