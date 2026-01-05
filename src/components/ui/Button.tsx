import Link from "next/link";

type Variant = "primary" | "secondary";
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
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium tracking-tight transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(0,210,255,.8)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))]";
  const styles =
    variant === "primary"
      ? "text-white bg-[linear-gradient(135deg,rgba(22,92,255,1),rgba(0,210,255,1))] hover:opacity-95 shadow-[0_14px_40px_rgba(22,92,255,.22)]"
      : "border border-black/10 bg-white text-[rgb(var(--fg))] hover:bg-black/5 shadow-[0_10px_30px_rgba(10,16,32,.06)]";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
