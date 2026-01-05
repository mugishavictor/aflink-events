import { Container } from "@/components/ui/Container";

const logos = [
  "Client Logo", "Client Logo", "Client Logo", "Client Logo",
  "Client Logo", "Client Logo", "Client Logo", "Client Logo",
];

const metrics = [
  { v: "150+", k: "events delivered" },
  { v: "Rwanda + EAC", k: "regional capability" },
  { v: "Corporate-ready", k: "protocol + governance" },
  { v: "On-time delivery", k: "show control" },
];

export function ProofStrip() {
  return (
    <section className="bg-[rgb(var(--bg))]">
      <Container className="py-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-[rgb(var(--fg))]/55">
              Proof
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[rgb(var(--fg))] sm:text-3xl">
              Credibility at a glance.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[rgb(var(--fg))]/65">
              Clear metrics, consistent delivery, and partners who trust us with high-stakes execution.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {metrics.map((m) => (
                <div
                  key={m.k}
                  className="rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-[0_10px_30px_rgba(10,16,32,.06)]"
                >
                  <div className="text-lg font-semibold text-[rgb(var(--fg))]">{m.v}</div>
                  <div className="mt-1 text-sm text-[rgb(var(--fg))]/60">{m.k}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-[0_12px_40px_rgba(10,16,32,.08)]">
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-[rgb(var(--fg))]/55">
                Clients & Partners
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {logos.map((l, i) => (
                  <div
                    key={`${l}-${i}`}
                    className="flex h-14 items-center justify-center rounded-2xl border border-black/5 bg-[rgb(var(--bg))] text-sm text-[rgb(var(--fg))]/55"
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div className="mt-5 text-xs text-[rgb(var(--fg))]/50">
                Replace placeholders with real logos (monochrome works best).
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="h-px w-full bg-black/5" />
    </section>
  );
}
