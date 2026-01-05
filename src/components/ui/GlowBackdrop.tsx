export function GlowBackdrop({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[rgb(var(--bg))]" />
      <div
        className="pointer-events-none absolute -top-56 left-1/2 z-0 h-[700px] w-[1100px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 40% 35%, rgba(22,92,255,.26), transparent 62%), radial-gradient(circle at 60% 30%, rgba(0,210,255,.14), transparent 60%), radial-gradient(circle at 50% 60%, rgba(120,92,255,.10), transparent 64%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
