"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface FloatingOrbProps {
  className?: string;
  duration?: number;
  delay?: number;
}

export function FloatingOrb({ className, duration = 6, delay = 0 }: FloatingOrbProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      animate={
        prefersReducedMotion
          ? undefined
          : { y: [0, -20, 0], x: [0, 10, 0], scale: [1, 1.05, 1] }
      }
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      aria-hidden="true"
    />
  );
}
