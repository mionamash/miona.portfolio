"use client";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { StickyStack } from "@/components/animations/StickyStack";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="relative mx-auto max-w-4xl">
        <SectionHeading
          label="Projects"
          title="Featured Projects"
          description="A selection of projects I've built to solve real-world problems."
        />

        <StickyStack projects={projects} />
      </div>
    </section>
  );
}
