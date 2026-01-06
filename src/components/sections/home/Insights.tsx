import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroVideo } from "@/components/media/HeroVideo";

type InsightCard = {
  tag: string;
  title: string;
  excerpt: string;
  href: string;

  // ✅ new
  posterSrc: string;
  videoSrcMp4: string;
};


const featured: InsightCard = {
  tag: "PLANNING",
  title: "Conference Planning in Rwanda: A production-first checklist",
  excerpt:
    "A checklist that prevents delays, budget creep, and onsite chaos—built for executive-grade events.",
  href: "/blog/conference-planning-rwanda-production-checklist",
  posterSrc: "/images/hero.jpeg",
  videoSrcMp4: "/media/hero.mp4",
};

const rightRail: InsightCard[] = [
  {
    tag: "PRODUCTION",
    title: "Stage flow: why show calling wins",
    excerpt: "The fastest way to make an event feel premium: controlled transitions.",
    href: "/blog/stage-flow-show-calling",
    posterSrc: "/images/hero.jpeg",
    videoSrcMp4: "/media/hero.mp4",
  },
  {
    tag: "MICE",
    title: "Delegate management: the hidden lever of guest experience",
    excerpt: "Check-in, seating, movement, and comms—designed like a system.",
    href: "/blog/delegate-management-guest-experience",
    posterSrc: "/images/hero.jpeg",
    videoSrcMp4: "/media/hero.mp4",
  },
  {
    tag: "BEHIND THE SCENES",
    title: "What ‘run-of-show discipline’ actually looks like",
    excerpt: "From rehearsals to cue stacks—how teams stay calm under pressure.",
    href: "/blog/run-of-show-discipline",
    posterSrc: "/images/hero.jpeg",
    videoSrcMp4: "/media/hero.mp4",
  },
];


export function Insights() {
  return (
    <section className="relative bg-black py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[72ch]">
            <div className="text-xs font-medium tracking-[0.28em] text-white/60">
              INSIGHTS
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Authority that builds trust.
            </h2>
            <p className="mt-4 text-white/70">
              Planning tips, behind-the-scenes notes, MICE updates, and case learnings.
              Built to help clients make better decisions—and improve SEO over time.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/blog" variant="secondary">
              Explore insights
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Featured editorial card */}
          <Link
            href={featured.href}
            className="group lg:col-span-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition hover:bg-white/10"
          >
            <div className="p-7 sm:p-8">
              <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.24em] text-white/60">
                <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1">
                  {featured.tag}
                </span>
                <span className="text-white/35">•</span>
                <span className="text-white/55">Featured</span>
              </div>

              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-4 max-w-[70ch] text-sm leading-relaxed text-white/70">
                {featured.excerpt}
              </p>

              <div className="mt-7 overflow-hidden rounded-2xl border border-white/10">
                <HeroVideo
                  posterSrc={featured.posterSrc}
                  videoSrcMp4={featured.videoSrcMp4}
                  aspect="16/9"
                  rounded="2xl"
                  overlayClassName="bg-gradient-to-t from-black/70 via-black/25 to-transparent"
                  ariaLabel={featured.title}
                  className=""
                />
              </div>

              <div className="mt-7 text-sm font-medium text-white/70 group-hover:text-white">
                Read →
              </div>
            </div>
          </Link>

          {/* Right rail cards */}
          <div className="lg:col-span-5 grid gap-6">
            {rightRail.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:bg-white/10"
              >
                <div className="text-[11px] font-medium tracking-[0.24em] text-white/60">
                  <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1">
                    {c.tag}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-white">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {c.excerpt}
                </p>

                <div className="mt-6 text-sm font-medium text-white/70 group-hover:text-white">
                  Read →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
