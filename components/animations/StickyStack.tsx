"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { Project } from "@/data/projects";

interface StickyStackProps {
  projects: Project[];
}

export function StickyStack({ projects }: StickyStackProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative">
      {projects.map((project, index) => (
        <StickyCard
          key={project.id}
          project={project}
          index={index}
          total={projects.length}
          prefersReducedMotion={prefersReducedMotion}
        />
      ))}
    </div>
  );
}

interface StickyCardProps {
  project: Project;
  index: number;
  total: number;
  prefersReducedMotion: boolean;
}

function StickyCard({ project, index, total, prefersReducedMotion }: StickyCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const { scrollYProgress: exitProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.6, 1]);
  const exitScale = useTransform(exitProgress, [0, 1], [1, 0.9]);
  const exitOpacity = useTransform(exitProgress, [0, 0.8], [1, 0]);

  const isLast = index === total - 1;

  if (prefersReducedMotion) {
    return (
      <div
        className={`sticky ${index === 0 ? "top-24" : "top-28"}`}
        style={{ zIndex: index }}
      >
        <ProjectCard project={project} index={index} />
      </div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale: isLast ? scale : exitScale,
        opacity: isLast ? opacity : exitOpacity,
        zIndex: index,
      }}
      className={`sticky ${index === 0 ? "top-24" : "top-28"}`}
    >
      <ProjectCard project={project} index={index} />
    </motion.div>
  );
}
