import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium tracking-tight transition " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(0,210,255,.75)] focus-visible:ring-offset-2 focus-visible:ring-offset-black";

  const styles =
    variant === "primary"
      ? "text-white bg-[linear-gradient(135deg,rgba(22,92,255,1),rgba(0,210,255,1))] " +
        "hover:brightness-[1.02] shadow-[0_18px_55px_rgba(22,92,255,.35)]"
      : variant === "secondary"
      ? "text-white border border-white/20 bg-white/5 backdrop-blur " +
        "hover:bg-white/10 hover:border-white/30 shadow-[0_18px_55px_rgba(0,0,0,.25)]"
      : "text-white/80 hover:text-white underline-offset-4 hover:underline";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
