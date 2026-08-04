"use client";

import { motion } from "framer-motion";
import { ExternalLink, CheckCircle, Clock, AlertCircle } from "lucide-react";
import type { Project } from "@/data/projects";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const statusConfig = {
  completed: {
    label: "Completed",
    icon: CheckCircle,
    className: "bg-success/10 text-success",
  },
  "in-progress": {
    label: "In Progress",
    icon: Clock,
    className: "bg-warning/10 text-warning",
  },
  planned: {
    label: "Planned",
    icon: AlertCircle,
    className: "bg-muted text-muted-foreground",
  },
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const status = statusConfig[project.status];
  const StatusIcon = status.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="mb-4 flex items-start justify-between">
        <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${status.className}`}
        >
          <StatusIcon className="size-3" />
          {status.label}
        </span>
      </div>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        {project.description}
      </p>

      <div className="mb-4">
        <h4 className="mb-2 text-sm font-medium text-foreground">Key Features</h4>
        <ul className="space-y-1">
          {project.features.slice(0, 3).map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className="size-1 shrink-0 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <GithubIcon className="size-4" />
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <ExternalLink className="size-4" />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}
