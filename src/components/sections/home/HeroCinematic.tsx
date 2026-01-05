import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GridOverlay } from "@/components/ui/GridOverlay";

export function HeroCinematic() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-bleed BK glow background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[rgb(var(--bg))]" />
        <div
          className="absolute -top-64 left-1/2 h-[820px] w-[1400px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, rgba(22,92,255,.22), transparent 62%), radial-gradient(circle at 60% 30%, rgba(0,210,255,.12), transparent 60%), radial-gradient(circle at 55% 62%, rgba(120,92,255,.08), transparent 64%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/85" />
      </div>

      <Container size="full" className="relative">
        <GridOverlay className="hidden lg:block" />

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8">
          <div className="grid gap-10 pb-14 pt-16 lg:grid-cols-12 lg:gap-8 lg:pb-20 lg:pt-20">
            {/* Copy */}
            <div className="lg:col-span-5 lg:pt-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[rgb(var(--fg))]/70 shadow-sm">
                Rwanda-based • Region-ready • End-to-end delivery
              </div>

              {/* Tagline */}
              <h1 className="mt-6 text-5xl font-semibold tracking-[-0.03em] text-[rgb(var(--fg))] sm:text-6xl lg:text-7xl xl:text-8xl">
                Strategic experiences.
                <span className="block text-[rgb(var(--fg))]/55">Stunning delivery.</span>
              </h1>

              {/* Quick intro (doc-aligned) */}
              <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-[rgb(var(--fg))]/70 sm:text-lg">
                Aflink Events Ltd is the event management wing of Aflink Rwanda Ltd—an advertising and
                communications agency shaping Rwanda’s marketing landscape since the 2010s—delivering
                world-class, end-to-end event solutions across Rwanda and the region.
              </p>

              {/* Who we serve (doc-aligned) */}
              <p className="mt-4 max-w-[60ch] text-sm leading-relaxed text-[rgb(var(--fg))]/60">
                Serving association, corporate, government, development partners, and private sector clients.
              </p>

              {/* Required CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/request-quote">Request a Quote</Button>
                <Button href="/request-quote" variant="secondary">
                  Book Consultation
                </Button>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-[rgb(var(--fg))]/70 hover:text-[rgb(var(--fg))] transition sm:ml-3"
                >
                  WhatsApp / Quick Contact →
                </Link>
              </div>

              {/* Trust strip */}
              <div className="mt-10 flex items-center gap-4 text-sm text-[rgb(var(--fg))]/55">
                <span className="h-px w-10 bg-black/10" />
                <span>One-stop events management: design • logistics • communications • production.</span>
              </div>

              {/* Micro proof */}
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ["15+ years", "via Aflink Rwanda Ltd"],
                  ["Rwanda + EAC", "regional capability"],
                  ["End-to-end", "creative + ops"],
                ].map(([v, k]) => (
                  <div
                    key={k}
                    className="rounded-2xl border border-black/5 bg-white/70 px-5 py-4 backdrop-blur shadow-[0_10px_28px_rgba(10,16,32,.06)]"
                  >
                    <div className="text-lg font-semibold text-[rgb(var(--fg))]">{v}</div>
                    <div className="mt-1 text-sm text-[rgb(var(--fg))]/60">{k}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Media (edge) */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_18px_60px_rgba(10,16,32,.10)] lg:rounded-l-3xl lg:rounded-r-none">
                <div className="relative min-h-[340px] w-full sm:min-h-[420px] lg:min-h-[560px]">
                  {/* Replace with real video montage later */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(120deg, rgba(22,92,255,.22), rgba(0,210,255,.10) 45%, rgba(255,255,255,.96))",
                    }}
                  />
                  <div className="absolute inset-0 ring-1 ring-black/5" />
                  <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium text-[rgb(var(--fg))]/70">
                    Hero highlights
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-6 border-t border-black/5 bg-white/70 px-6 py-4 text-xs text-[rgb(var(--fg))]/55 backdrop-blur">
                    <span>Event images/video montage</span>
                    <span className="hidden sm:inline">Poster • lazy-load • premium</span>
                  </div>
                </div>
              </div>

              {/* Featured formats (doc categories) */}
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {["Conferences", "Brand Activations", "Exhibitions", "Social Events", "Festivals", "Corporate"].map(
                  (t) => (
                    <div
                      key={t}
                      className="rounded-2xl border border-black/5 bg-white/70 px-4 py-3 text-sm font-medium text-[rgb(var(--fg))]/70 shadow-[0_10px_28px_rgba(10,16,32,.05)]"
                    >
                      {t}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-black/5" />
        </div>
      </Container>
    </section>
  );
}
