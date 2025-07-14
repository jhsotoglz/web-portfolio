import GridAIPoster from "../assets/projectFiles/GridAI/GridAI_Poster.png"

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  youtube?: string;
  details?: string;
  pdfs?: { name: string; url: string }[];
  images?: string[];
}

export const projects: Project[] = [
  {
    title: "GridAI: Electric Grid Management Web Application",
    description: "An all-in-one web app for electric grid monitoring...",
    tech: ["React", "Kafka", "Firebase", "Tailwind CSS", "TypeScript"],
    link: undefined,
    youtube: "https://www.youtube.com/embed/H-c5zdhf0zs",
    details: `GridAI is a real-time dashboard...`,
    pdfs: [
      { name: "Design Doc", url: "/docs/gridai_design.pdf" },
      { name: "Final Report", url: "/docs/gridai_report.pdf" },
    ],
    images: [GridAIPoster]
  },
  {
    title: "Probabilistic Escape-Persuit Planning",
    description: "An all-in-one web app for electric grid monitoring...",
    tech: ["React", "Kafka", "Firebase", "Tailwind CSS", "TypeScript"],
    link: "https://github.com/jhsotoglz/ComS4720_Project3/tree/main",
    youtube: undefined,
    details: `GridAI is a real-time dashboard...`,
    pdfs: [
      { name: "Assigment 1 Report", url: "/docs/gridai_design.pdf" },
      { name: "Assignment 2 Report", url: "/docs/gridai_report.pdf" },
      { name: "Assignment 3 Report", url: "/docs/gridai_report.pdf" },
    ],
    images: [GridAIPoster]
  },
  {
    title: "CoSMiC Competition - hoster by the Cardinal Space Mining Club of ISU",
    description: "An all-in-one web app for electric grid monitoring...",
    tech: ["React", "Kafka", "Firebase", "Tailwind CSS", "TypeScript"],
    link: "https://github.com/jhsotoglz/ComS4720_Project3/tree/main",
    youtube: undefined,
    details: `GridAI is a real-time dashboard...`,
    pdfs: [
      { name: "Design Doc", url: "/docs/gridai_design.pdf" },
      { name: "Final Report", url: "/docs/gridai_report.pdf" },
    ],
    images: [GridAIPoster]
  },
];