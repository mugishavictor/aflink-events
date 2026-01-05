import { Container } from "@/components/ui/Container";

const quotes = [
  {
    quote:
      "“Aflink Events transformed our expectations—they delivered world-class production and perfect coordination.”",
    by: "Corporate Client",
  },
  {
    quote:
      "“Professional, creative, and highly reliable. We look forward to working with them again.”",
    by: "International NGO",
  },
];

export function Testimonials() {
  return (
    <section className="bg-[rgb(var(--bg))]">
      <Container className="py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-[rgb(var(--fg))]/55">
              Testimonials
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[rgb(var(--fg))] sm:text-4xl">
              Trusted delivery. Real partners.
            </h2>
            <p className="mt-3 text-sm text-[rgb(var(--fg))]/65">
              Corporate & NGO partners.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {quotes.map((q) => (
            <div
              key={q.by}
              className="rounded-3xl border border-black/5 bg-white p-8 shadow-[0_14px_50px_rgba(10,16,32,.10)]"
            >
              <div className="text-lg leading-relaxed text-[rgb(var(--fg))]">{q.quote}</div>
              <div className="mt-6 text-sm font-medium text-[rgb(var(--fg))]/60">— {q.by}</div>
            </div>
          ))}
        </div>
      </Container>

      <div className="h-px w-full bg-black/5" />
    </section>
  );
}
