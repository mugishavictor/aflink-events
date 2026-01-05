import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

// Replace with your real MDX loader later (getAllDocs("insights"))
const posts = [
  {
    slug: "conference-planning-checklist",
    title: "Conference Planning in Rwanda: A production-first checklist",
    category: "Planning",
    excerpt: "A checklist that prevents delays, budget creep, and onsite chaos.",
  },
  {
    slug: "stage-flow-show-calling",
    title: "Stage flow: why show calling wins",
    category: "Production",
    excerpt: "The fastest way to make an event feel premium: controlled transitions.",
  },
  {
    slug: "activation-crowd-flow",
    title: "Brand activations: crowd flow that protects the experience",
    category: "Activations",
    excerpt: "How to design engagement without bottlenecks and confusion.",
  },
];

export function InsightsPreview() {
  const [featured, ...rest] = posts;

  return (
    <section className="bg-[rgb(var(--bg))]">
      <Container className="py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-[rgb(var(--fg))]/55">
              Insights
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[rgb(var(--fg))] sm:text-4xl">
              Authority that builds trust.
            </h2>
            <p className="mt-3 text-sm text-[rgb(var(--fg))]/65">
              Planning tips, behind-the-scenes, MICE updates, and case learnings.
            </p>
          </div>

          <div className="hidden sm:block">
            <Button href="/insights" variant="secondary">Explore insights</Button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <Link
            href={`/insights/${featured.slug}`}
            className="group lg:col-span-7 rounded-3xl border border-black/5 bg-white p-7 shadow-[0_14px_50px_rgba(10,16,32,.10)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_70px_rgba(22,92,255,.14)]"
          >
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-[rgb(var(--fg))]/55">
              {featured.category}
            </div>
            <div className="mt-3 text-2xl font-semibold tracking-tight text-[rgb(var(--fg))]">
              {featured.title}
            </div>
            <div className="mt-3 text-sm text-[rgb(var(--fg))]/65">{featured.excerpt}</div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-black/5">
              <div
                className="aspect-[16/9] w-full"
                style={{
                  background:
                    "linear-gradient(120deg, rgba(22,92,255,.16), rgba(0,210,255,.08) 45%, rgba(255,255,255,.96))",
                }}
              />
            </div>
            <div className="mt-5 text-sm font-medium text-[rgb(var(--fg))]/70 group-hover:text-[rgb(var(--fg))]">
              Read →
            </div>
          </Link>

          <div className="lg:col-span-5 grid gap-6">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/insights/${p.slug}`}
                className="group rounded-3xl border border-black/5 bg-white p-6 shadow-[0_12px_40px_rgba(10,16,32,.08)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_70px_rgba(22,92,255,.12)]"
              >
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-[rgb(var(--fg))]/55">
                  {p.category}
                </div>
                <div className="mt-3 text-lg font-semibold tracking-tight text-[rgb(var(--fg))]">
                  {p.title}
                </div>
                <div className="mt-2 text-sm text-[rgb(var(--fg))]/65">{p.excerpt}</div>
                <div className="mt-4 text-sm font-medium text-[rgb(var(--fg))]/70 group-hover:text-[rgb(var(--fg))]">
                  Read →
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 sm:hidden">
          <Button href="/insights" variant="secondary" className="w-full">Explore insights</Button>
        </div>
      </Container>

      <div className="h-px w-full bg-black/5" />
    </section>
  );
}
