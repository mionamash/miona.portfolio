"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { Marquee } from "@/components/animations/Marquee";
import { highlights, technologies, aboutContent } from "@/data/about";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const row1 = technologies.slice(0, 4);
const row2 = technologies.slice(4);

export function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label={aboutContent.greeting}
          title={aboutContent.title}
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right" duration={0.6} className="space-y-6">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
            <p className="text-lg text-primary font-medium">
              {aboutContent.currentFocus}
            </p>
          </Reveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3"
          >
            {highlights.map((highlight) => (
              <motion.div
                key={highlight.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/50 hover:bg-muted/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <highlight.icon className="mb-3 size-8 text-primary transition-colors group-hover:text-accent" />
                <h3 className="mb-1 font-semibold text-foreground">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 space-y-3"
        >
          <h3 className="mb-6 text-center text-lg font-semibold text-foreground">
            Technologies I Work With
          </h3>
          <Marquee direction="left" duration={25}>
            {row1.map((tech) => (
              <div
                key={tech.name}
                className="shrink-0 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
              >
                {tech.name}
              </div>
            ))}
          </Marquee>
          <Marquee direction="right" duration={30}>
            {row2.map((tech) => (
              <div
                key={tech.name}
                className="shrink-0 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
              >
                {tech.name}
              </div>
            ))}
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
}
