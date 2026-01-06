import React from "react";

export function Container({
  children,
  className = "",
  innerClassName = "",
  size = "wide",
}: {
  children: React.ReactNode;
  className?: string;         // outer wrapper (full width)
  innerClassName?: string;    // inner content wrapper
  size?: "default" | "wide" | "full";
}) {
  const innerSizes = {
    default: "max-w-6xl",
    wide: "max-w-[1440px]",
    full: "max-w-none",
  };

  return (
    <div className={`w-full ${className}`}>
      <div
        className={`mx-auto w-full ${innerSizes[size]} px-6 sm:px-10 ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
