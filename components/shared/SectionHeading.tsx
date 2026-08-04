"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-primary">
        {label}
      </span>
      <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto max-w-2xl text-lg text-muted-foreground ${
            align === "center" ? "text-center" : "text-left"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
