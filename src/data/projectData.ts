export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  youtube?: string;
  details?: string;
  pdfs?: { name: string; url: string }[];
}

export const projects: Project[] = [
  {
    title: "GridAI: Electric Grid Management Web Application",
    description: "An all-in-one web app for electric grid monitoring...",
    tech: ["React", "Kafka", "Firebase", "Tailwind CSS", "TypeScript"],
    link: undefined,
    youtube: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    details: `GridAI is a real-time dashboard...`,
    pdfs: [
      { name: "Design Doc", url: "/docs/gridai_design.pdf" },
      { name: "Final Report", url: "/docs/gridai_report.pdf" },
    ],
  },
  // Add more projects here...
];