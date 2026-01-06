"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  posterSrc: string;
  videoSrcMp4: string;

  priorityPoster?: boolean;
  className?: string;

  // ✅ new (reusable)
  aspect?: "16/9" | "16/7";
  rounded?: "xl" | "2xl" | "3xl";
  overlayClassName?: string;
  ariaLabel?: string;
};

export function HeroVideo({
  posterSrc,
  videoSrcMp4,
  priorityPoster,
  className,
  aspect = "16/7",
  rounded = "2xl",
  overlayClassName = "bg-gradient-to-b from-black/25 via-black/55 to-black/80",
  ariaLabel = "Video preview",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(!!mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), {
      rootMargin: "200px",
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const aspectClass = aspect === "16/9" ? "aspect-video" : "aspect-[16/7]";
  const roundedClass =
    rounded === "xl" ? "rounded-xl" : rounded === "3xl" ? "rounded-3xl" : "rounded-2xl";

  return (
    <div ref={ref} className={className}>
      <div className={`relative w-full overflow-hidden ${roundedClass} bg-black/40 ${aspectClass}`}>
        <Image
          src={posterSrc}
          alt=""
          aria-hidden
          fill
          className="object-cover"
          priority={!!priorityPoster}
        />

        {!reduceMotion && inView ? (
          <video
            className="absolute inset-0 h-full w-full object-cover brightness-[.85] contrast-[1.12] saturate-[1.05]"
            autoPlay
            muted
            playsInline
            loop
            preload="none"
            aria-label={ariaLabel}
          >
            <source src={videoSrcMp4} type="video/mp4" />
          </video>
        ) : null}

        <div className={`absolute inset-0 ${overlayClassName}`} />
      </div>
    </div>
  );
}
