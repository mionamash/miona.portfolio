"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { education } from "@/data/education";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function Education() {
  return (
    <section id="education" className="relative py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="Education"
          title="Academic Background"
          description="My educational journey and academic achievements."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-6 flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <GraduationCap className="size-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {edu.degree} in {edu.field}
                  </h3>
                  <p className="text-lg text-primary">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </div>
              </div>

              <p className="mb-6 text-muted-foreground leading-relaxed">
                {edu.description}
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <BookOpen className="size-4 text-accent" />
                    <h4 className="font-medium text-foreground">
                      Relevant Coursework
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <Award className="size-4 text-accent" />
                    <h4 className="font-medium text-foreground">Achievements</h4>
                  </div>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
