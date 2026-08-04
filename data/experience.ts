export interface Experience {
  id: string;
  company: string;
  role: string;
  type: "company" | "personal";
  period: string;
  description: string;
  technologies: string[];
  contributions: string[];
  isPrivate: boolean;
  repository?: string;
  liveUrl?: string;
}

export const experiences: Experience[] = [
  {
    id: "yohpal-mesh",
    company: "YohPal Mesh",
    role: "Junior Software Engineer",
    type: "company",
    period: "2024 - Present",
    description:
      "Contributed to the development of a comprehensive business management platform, working on both frontend and backend features to deliver scalable solutions.",
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "REST APIs"],
    contributions: [
      "Developed and maintained core platform features using React and TypeScript",
      "Built RESTful APIs for efficient data management and communication",
      "Collaborated with cross-functional teams to deliver high-quality software",
      "Participated in code reviews and contributed to code quality improvements",
      "Implemented responsive UI components following design system guidelines",
    ],
    isPrivate: true,
  },
  {
    id: "rapid-ai-hospital",
    company: "Rapid AI Hospital",
    role: "Junior Software Engineer",
    type: "company",
    period: "2024 - Present",
    description:
      "Worked on an AI-powered healthcare platform, contributing to features that leverage artificial intelligence to improve hospital management and patient care.",
    technologies: ["React", "Python", "Firebase", "Tailwind CSS", "AI/ML"],
    contributions: [
      "Developed frontend components for the hospital management system",
      "Integrated AI-powered features for automated diagnostics assistance",
      "Implemented real-time data synchronization using Firebase",
      "Built responsive interfaces for healthcare professionals",
      "Collaborated on API integration for AI model deployment",
    ],
    isPrivate: true,
  },
];
