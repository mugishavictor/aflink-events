"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const filters = ["All", "Conferences", "Brand Activations", "Exhibitions", "Social Events", "Festivals"] as const;
type Filter = (typeof filters)[number];

type Card = {
  tag: string;
  location: string;
  title: string;
  href: string;
  image: string;
};

const cards: Card[] = [
  {
    tag: "Brand Activations",
    location: "Kigali",
    title: "City Brand Activation",
    href: "/work/city-brand-activation",
    image: "/images/event1.jpeg",
  },
  {
    tag: "Exhibitions",
    location: "Rwanda",
    title: "Exhibition Build & Management",
    href: "/work/exhibition-build",
    image: "/images/event2.png",
  },
  {
    tag: "Corporate Events",
    location: "Kigali",
    title: "Corporate Gala Dinner",
    href: "/work/corporate-gala",
    image: "/images/event3.png",
  },
  {
    tag: "Festivals",
    location: "Rwanda",
    title: "Cultural Festival Production",
    href: "/work/cultural-festival",
    image: "/images/event4.png",
  },
  {
    tag: "Social Events",
    location: "Kigali",
    title: "VIP Social Function",
    href: "/work/vip-social",
    image: "/images/event5.png",
  },
  {
    tag: "Conferences",
    location: "Rwanda + Region",
    title: "Delegate Management Program",
    href: "/work/conference-delegate",
    image: "/images/event6.png",
  },
  {
    tag: "Conferences",
    location: "Kigali",
    title: "Leadership Summit Production",
    href: "/work/leadership-summit",
    image: "/images/event7.png",
  },
  {
    tag: "Brand Activations",
    location: "Rwanda",
    title: "Product Launch Activation",
    href: "/work/product-launch",
    image: "/images/event8.png",
  },
  {
    tag: "Exhibitions",
    location: "Kigali",
    title: "Expo Booth Build",
    href: "/work/expo-booth",
    image: "/images/event9.png",
  },
  {
    tag: "Social Events",
    location: "Kigali",
    title: "Private VIP Reception",
    href: "/work/vip-reception",
    image: "/images/event10.png",
  },
];

export function PortfolioFeatured() {
  const [active, setActive] = useState<Filter>("All");

  const visible = useMemo(() => {
    if (active === "All") return cards;
    // strict match to tag
    return cards.filter((c) => c.tag === active);
  }, [active]);

  return (
    <section className="relative bg-black py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[70ch]">
            <div className="text-xs font-medium tracking-[0.28em] text-white/60">
              PORTFOLIO / PAST EVENTS
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Featured past events—built like premium case studies.
            </h2>
            <p className="mt-4 text-white/70">
              Explore conferences, activations, exhibitions, social events, and festivals—delivered with creative control and disciplined execution.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/work" variant="secondary">
              View all work
            </Button>
            <Button href="/request-quote">Request a Quote</Button>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={[
                  "rounded-full px-4 py-2 text-xs font-medium tracking-[0.22em] transition",
                  "border border-white/15",
                  isActive ? "bg-white text-black" : "bg-white/5 text-white/75 hover:bg-white/10",
                ].join(" ")}
                aria-pressed={isActive}
              >
                {f.toUpperCase()}
              </button>
            );
          })}
        </div>

        {/* Optional: result count */}
        <div className="mt-4 text-sm text-white/60">
          Showing <span className="text-white">{visible.length}</span>{" "}
          {visible.length === 1 ? "event" : "events"}
          {active !== "All" ? (
            <>
              {" "}
              for <span className="text-white">{active}</span>
            </>
          ) : null}
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition hover:bg-white/10"
            >
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium tracking-[0.24em] text-white/60">
                  <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1">
                    {c.tag.toUpperCase()}
                  </span>
                  <span>•</span>
                  <span>{c.location.toUpperCase()}</span>
                </div>

                <div className="mt-5 text-lg font-semibold text-white">{c.title}</div>

                {/* Image */}
                <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      priority={false}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute inset-0 ring-1 ring-white/10" />
                  </div>
                </div>

                <div className="mt-6 text-sm font-medium text-white/70 group-hover:text-white">
                  Open →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {visible.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 text-white/70">
            No events found for <span className="text-white">{active}</span>.
          </div>
        ) : null}
      </Container>
    </section>
  );
}
