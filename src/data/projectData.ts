import GridAIPoster from "../assets/projectFiles/GridAI/GridAI_Poster.png";
import ComS472_Project1 from "../assets/projectFiles/COMS472/Project1_report.pdf";
import ComS472_Project2 from "../assets/projectFiles/COMS472/Project2_report.pdf";
import ComS472_Project3 from "../assets/projectFiles/COMS472/Project3_report.pdf";

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
    description: "A pursuit-evasion planning algorithm using probabilistic models and graph search...",
    tech: ["Graph Search", "Adversarial AI", "Phyton", "Heuristics"],
    link: "https://github.com/jhsotoglz/ComS4720_Project3/tree/main",
    youtube: undefined,
    details: `Explores decision-making under uncertainty...`,
    pdfs: [
      { name: "Project 1 Report", url: ComS472_Project1 },
      { name: "Project 2 Report", url: ComS472_Project2 },
      { name: "Project 3 Report", url: ComS472_Project3 },
    ],
    images: []
  },
  {
    title: "CoSMiC Competition - hosted by the Cardinal Space Mining Club of ISU",
    description: "Robotic mining competition focused on excavation and regolith delivery in a simulated lunar environment...",
    tech: ["ROS2", "Python", "CAN", "Phoenix 6"],
    link: "https://github.com/jhsotoglz/ComS4720_Project3/tree/main",
    youtube: undefined,
    details: `Designed and deployed autonomous and teleoperated systems for lunar mining...`,
    pdfs: [
      { name: "Design Doc", url: "/docs/gridai_design.pdf" },
      { name: "Final Report", url: "/docs/gridai_report.pdf" },
    ],
    images: [GridAIPoster]
  },
];
