export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  status: "completed" | "in-progress" | "planned";
  type: "personal" | "portfolio";
  github?: string;
  liveUrl?: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: "hearthaven",
    title: "HeartHaven",
    description: "A platform for reuniting missing persons with their families through community-driven reporting and AI-powered matching.",
    longDescription:
      "HeartHaven is a missing persons platform that leverages technology to help reunite families. It features community-driven reporting, AI-powered face matching, and real-time notifications to alert users when potential matches are found.",
    technologies: ["Flutter", "Dart", "Firebase", "AI/ML", "Cloud Functions"],
    status: "in-progress",
    type: "personal",
    github: "https://github.com/mionamash",
    features: [
      "Community-driven missing person reports",
      "AI-powered face matching",
      "Real-time notifications",
      "Interactive map for sighting locations",
      "Secure user authentication",
    ],
  },
  {
    id: "nomikunot",
    title: "Nomikunot",
    description: "A business management platform designed to streamline operations and improve productivity for small businesses.",
    longDescription:
      "Nomikunot is a comprehensive business platform that helps small businesses manage their operations efficiently. It includes inventory management, customer tracking, financial reporting, and team collaboration tools.",
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    status: "in-progress",
    type: "personal",
    github: "https://github.com/mionamash",
    features: [
      "Inventory management system",
      "Customer relationship tracking",
      "Financial reporting dashboard",
      "Team collaboration tools",
      "Automated notifications",
    ],
  },
  {
    id: "foods",
    title: "Foods",
    description: "A food ordering platform with a seamless user experience, real-time order tracking, and restaurant management features.",
    longDescription:
      "Foods is a modern food ordering application that connects customers with local restaurants. It features a seamless ordering experience, real-time order tracking, restaurant dashboard, and delivery management.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Google Maps API"],
    status: "completed",
    type: "personal",
    github: "https://github.com/mionamash",
    liveUrl: "https://foods-app.vercel.app",
    features: [
      "Restaurant browsing and search",
      "Real-time order tracking",
      "Secure payment integration",
      "Restaurant management dashboard",
      "Delivery route optimization",
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "This portfolio website — built with Next.js, TypeScript, and Framer Motion to showcase my work and skills.",
    longDescription:
      "A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features smooth animations, sticky project cards, and a clean, professional design.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    status: "completed",
    type: "portfolio",
    github: "https://github.com/mionamash",
    features: [
      "Responsive design",
      "Smooth animations",
      "Sticky stack project cards",
      "SEO optimized",
      "High performance",
    ],
  },
];
