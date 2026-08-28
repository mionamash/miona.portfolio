"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  duration?: number;
  className?: string;
}

export function Marquee({
  children,
  direction = "left",
  duration = 20,
  className,
}: MarqueeProps) {
  const prefersReducedMotion = useReducedMotion();

  const animationDirection = direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className={`overflow-hidden ${className ?? ""}`} aria-hidden="true">
      <div
        className="flex w-max gap-3"
        style={
          prefersReducedMotion
            ? undefined
            : {
                animation: `${animationDirection} ${duration}s linear infinite`,
              }
        }
      >
        {children}
        {children}
      </div>
    </div>
  );
}
