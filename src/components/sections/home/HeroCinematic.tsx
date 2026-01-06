import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GridOverlay } from "@/components/ui/GridOverlay";
import { HeroVideo } from "@/components/media/HeroVideo"; // the MP4/WebM autoplay component

export function HeroCinematic() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-black">
      {/* Background video */}
      <div className="absolute inset-0">
        <HeroVideo
          posterSrc="/images/hero.jpeg"
          videoSrcMp4="/media/hero.mp4"
          priorityPoster
          className="mt-12 sm:mt-16"
        />

        {/* Strong cinematic overlays (Sparks-like) */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/10 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/15 to-transparent" />

        {/* Optional noise for premium feel */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-overlay"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22240%22 height=%22240%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22240%22 height=%22240%22 filter=%22url(%23n)%22 opacity=%220.25%22/%3E%3C/svg%3E')",
          }}
        />
      </div>

      {/* Foreground content */}
      <Container size="full" className="relative">
        <GridOverlay className="hidden lg:block opacity-30" />

        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 pt-24 pb-16">
          <div className="max-w-[780px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.20em] text-white/80 backdrop-blur">
              Rwanda-based • Region-ready • End-to-end delivery
            </div>

            <h1 className="mt-8 text-[54px] leading-[0.95] font-semibold tracking-[-0.03em] text-white sm:text-[72px] lg:text-[88px]">
              Strategic experiences.
              <span className="block text-white/65">Stunning delivery.</span>
            </h1>

            <p className="mt-7 max-w-[60ch] text-base leading-relaxed text-white/75 sm:text-lg">
              Aflink Events Ltd is the event management wing of Aflink Rwanda Ltd—delivering world-class,
              end-to-end event solutions across Rwanda and the region.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/request-quote">Request a Quote</Button>
              <Button href="/request-quote" variant="secondary">
                Book Consultation
              </Button>
              <Link
                href="/contact"
                className="text-sm font-medium text-white/75 hover:text-white transition sm:ml-3"
              >
                WhatsApp / Quick Contact →
              </Link>
            </div>

            {/* Micro proof (Sparks-style: less “cardy”) */}
            <div className="mt-12 grid gap-6 sm:grid-cols-3 border-t border-white/10 pt-8">
              {[
                ["15+ years", "via Aflink Rwanda Ltd"],
                ["Rwanda + EAC", "regional capability"],
                ["End-to-end", "creative + ops"],
              ].map(([v, k]) => (
                <div key={k} className="showline">
                  <div className="text-lg font-semibold text-white">{v}</div>
                  <div className="mt-1 text-sm text-white/65">{k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
