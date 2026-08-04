export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  status: "ongoing" | "completed";
  description: string;
  coursework: string[];
  achievements: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  skills: string[];
  certificateUrl?: string;
}

export const education: Education[] = [
  {
    id: "maseno-university",
    institution: "Maseno University",
    degree: "Bachelor of Science",
    field: "Information Technology",
    period: "2022 - 2026",
    status: "ongoing",
    description:
      "Pursuing a comprehensive education in information technology with focus on software development, database management, and systems design.",
    coursework: [
      "Software Engineering",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Web Development",
      "Mobile Application Development",
      "Object-Oriented Programming",
      "Computer Networks",
      "Systems Analysis & Design",
    ],
    achievements: [
      "Active member of the Software Development Club",
      "Participated in university hackathons",
      "Maintained consistent academic performance",
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: "emobilis",
    title: "Certificate in Software Development",
    issuer: "eMobilis Technology Training Institute",
    year: "2024",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Android Development",
      "Web Development Fundamentals",
      "Git & Version Control",
    ],
    certificateUrl: "/certificates/emobilis-software-development.pdf",
  },
];
