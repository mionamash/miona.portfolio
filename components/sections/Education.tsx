"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, BadgeCheck, FileText } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { education, certifications } from "@/data/education";

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
          label="Education & Certifications"
          title="Academic Background"
          description="My educational journey, training, and professional certifications."
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
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
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
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-warning/10 px-2.5 py-0.5 text-xs font-medium text-warning">
                  <span className="size-1.5 animate-pulse rounded-full bg-warning" />
                  Ongoing
                </span>
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

          <div className="pt-4">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <BadgeCheck className="size-5 text-primary" />
              Certifications
            </h3>

            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-success/10">
                      <BadgeCheck className="size-6 text-success" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">
                        {cert.title}
                      </h4>
                      <p className="text-primary">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground">
                        {cert.year}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="mb-2 text-sm font-medium text-foreground">
                    Skills Gained
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {cert.certificateUrl ? (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <FileText className="size-4" />
                    View Certificate
                  </a>
                ) : (
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FileText className="size-4" />
                    Certificate available upon request.
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
