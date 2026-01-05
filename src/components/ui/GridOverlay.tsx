export function GridOverlay({
  className = "",
  columns = 12,
}: {
  className?: string;
  columns?: number;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 opacity-[0.06] ${className}`}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(10,16,32,.35) 1px, transparent 1px)`,
        backgroundSize: `${100 / columns}% 100%`,
      }}
    />
  );
}
