export function Container({
  children,
  className = "",
  size = "wide",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "full";
}) {
  const sizes = {
    default: "max-w-6xl",
    wide: "max-w-[1440px]",
    full: "max-w-none",
  };

  return (
    <div className={`w-full px-5 sm:px-8 ${sizes[size]} ${size !== "full" ? "mx-auto" : ""} ${className}`}>
      {children}
    </div>
  );
}
