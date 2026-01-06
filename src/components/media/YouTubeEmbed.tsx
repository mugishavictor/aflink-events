"use client";

import { useState } from "react";

export function YouTubeEmbed({
  videoId,
  title = "Video",
  poster,
  className = "",
}: {
  videoId: string;
  title?: string;
  poster?: string;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative aspect-video w-full overflow-hidden rounded-3xl ${className}`}>
      {!loaded && (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="absolute inset-0 flex items-center justify-center bg-black/5"
          aria-label="Play video"
        >
          {poster ? (
            <img src={poster} alt={title} className="absolute inset-0 h-full w-full object-cover" />
          ) : null}

          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg">
            ▶
          </div>
        </button>
      )}

      {loaded && (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}
