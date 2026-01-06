import { Container } from "@/components/ui/Container";

const metrics = [
  { value: "150+", label: "events delivered", sub: "production + coordination" },
  { value: "Rwanda + EAC", label: "regional capability", sub: "cross-border readiness" },
  { value: "End-to-end", label: "creative + ops", sub: "design → showtime" },
  { value: "Protocol-ready", label: "VIP + government flow", sub: "run-of-show control" },
];

const logos = [
  "Client Logo",
  "Client Logo",
  "Client Logo",
  "Client Logo",
  "Client Logo",
  "Client Logo",
  "Client Logo",
  "Client Logo",
];

export function ProofCredibility() {
  return (
    <section className="relative bg-black py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left copy + metrics */}
          <div className="lg:col-span-5">
            <div className="text-xs font-medium tracking-[0.28em] text-white/60">
              PROOF
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Credibility at a glance.
            </h2>
            <p className="mt-4 max-w-[55ch] text-white/70">
              Clear metrics, consistent delivery, and partners who trust us with high-stakes execution.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 backdrop-blur"
                >
                  <div className="text-xl font-semibold text-white">{m.value}</div>
                  <div className="mt-1 text-sm text-white/70">{m.label}</div>
                  <div className="mt-1 text-xs text-white/50">{m.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: clients panel */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-xs font-medium tracking-[0.28em] text-white/60">
                CLIENTS & PARTNERS
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {logos.map((t, i) => (
                  <div
                    key={`${t}-${i}`}
                    className="flex items-center justify-center rounded-2xl border border-white/10 bg-black/30 px-4 py-6 text-xs font-medium text-white/60"
                  >
                    {t}
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs text-white/50">
                Replace placeholders with real logos (monochrome works best on dark).
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
