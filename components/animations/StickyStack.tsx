"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { Project } from "@/data/projects";

interface StickyStackProps {
  projects: Project[];
}

export function StickyStack({ projects }: StickyStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative">
      {projects.map((project, index) => (
        <StickyCard
          key={project.id}
          project={project}
          index={index}
          total={projects.length}
        />
      ))}
    </div>
  );
}

interface StickyCardProps {
  project: Project;
  index: number;
  total: number;
}

function StickyCard({ project, index, total }: StickyCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const { scrollYProgress: exitProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const exitScale = useTransform(exitProgress, [0, 1], [1, 0.95]);
  const exitOpacity = useTransform(exitProgress, [0, 0.8], [1, 0]);

  const isLast = index === total - 1;

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale: isLast ? scale : exitScale,
        opacity: isLast ? opacity : exitOpacity,
      }}
      className={`sticky ${index === 0 ? "top-24" : "top-28"}`}
    >
      <div
        style={{
          zIndex: index,
        }}
      >
        <ProjectCard project={project} index={index} />
      </div>
    </motion.div>
  );
}
