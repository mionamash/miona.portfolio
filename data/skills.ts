export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    description: "Programming and markup languages",
    skills: [
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Java" },
      { name: "Kotlin" },
      { name: "Dart" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    description: "Web frameworks and libraries",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    description: "Mobile app development",
    skills: [
      { name: "Flutter" },
      { name: "React Native" },
      { name: "Android" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description: "Server-side technologies",
    skills: [
      { name: "Node.js" },
      { name: "REST APIs" },
      { name: "Firebase" },
      { name: "Express" },
    ],
  },
  {
    id: "database",
    label: "Databases",
    description: "Data storage solutions",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Firestore" },
      { name: "MongoDB" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    description: "Development tools and platforms",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Android Studio" },
      { name: "Figma" },
      { name: "Vercel" },
    ],
  },
];
