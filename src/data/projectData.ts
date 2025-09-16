import GridAIPoster from "../assets/projectFiles/GridAI/GridAI_Poster.png";
import GridAIPresentation from "../assets/projectFiles/GridAI/sdmay25-43IRP.pdf"
import FinalReport from "../assets/projectFiles/GridAI/sdmay25-43-DD.pdf"
import ComS4720_image from "../assets/projectFiles/COMS472/COMS4720.jpg"
import ComS472_Project1 from "../assets/projectFiles/COMS472/Project1_report.pdf";
import ComS472_Project2 from "../assets/projectFiles/COMS472/Project2_report.pdf";
import ComS472_Project3 from "../assets/projectFiles/COMS472/Project3_report.pdf";
import LanceBot from "../assets/projectFiles/CSMC/Lance.png"
import COSMIC_Photo1 from "../assets/projectFiles/CSMC/Competition1.png"
import COSMIC_Photo2 from "../assets/projectFiles/CSMC/Competition2.png"
import COSMIC_Photo3 from "../assets/projectFiles/CSMC/Competition3.png"

import gridAIDetails from "../assets/projectFiles/GridAI/gridai-details.md?raw";
import rgdetails from "../assets/projectFiles/RG/rg-details.md?raw";
import coms4720details from "../assets/projectFiles/COMS472/COMS4720-details.md?raw";
import cosmicDetails from "../assets/projectFiles/CSMC/cosmic-details.md?raw";
import KitchenMingleDetails from "../assets/projectFiles/KitchenMingle/KitchenMingle-details.md?raw";
import FaceSecurityDetails from "../assets/projectFiles/FaceSecurityFileSystem/FaceSecurity-details.md?raw";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  websiteUrl?: string;
  githubUrl?: string;
  youtubeLinks?: { label: string; url: string }[];
  details?: string;
  pdfs?: { name: string; url: string }[];
  images?: string[];
}

export const projects: Project[] = [
  {
    title: "GridAI: Electric Grid Management Web Platform",
    description: `Advanced web-based platform for electric grid management,
                  designed to simplify data analytics and provide seamless data interaction.`,
    tech: [
      "React",
      "TypeScript",
      "Kafka",
      "Docker",
      "Firebase",
      "Babel",
      "Monaco Editor",
      "Tailwind CSS",
      "WebSocket",
    ],
    // websiteUrl: undefined,
    // githubUrl: undefined,
    youtubeLinks: [
      { label: "Demo", url: "https://www.youtube.com/embed/H-c5zdhf0zs" }
    ],
    details: gridAIDetails,
    pdfs: [
      { name: "IRP Presentation", url: GridAIPresentation },
      { name: "Final Report", url: FinalReport },
    ],
    images: [GridAIPoster]
  },
  {
    title: "Agropecuaria RG – Web App",
    description: `A full-stack web platform for Agropecuaria RG that unifies a modern public marketing site with a secure, 
                  private admin dashboard for internal finance and operations.`,
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "Zod",
      "Framer Motion"
    ],
    websiteUrl: "https://agropecuariarg.vercel.app/",
    //githubUrl: "undefined",
    //youtubeLinks: [],
    details: rgdetails,
  },

  {
    title: "Probabilistic Escape-Pursuit Planning",
    description: "Multi-agent grid-based planning system that simulates intelligent pursuit and evasion under stochastic movement conditions.",
    tech: [
      "A* Search",
      "Monte Carlo Simulation",
      "Python",
      "Heuristic Design",
      "EMA Estimation",
      "Adversarial AI",
      "Probabilistic Modeling",
    ],
    //websiteUrl: undefined,
    githubUrl: "https://github.com/jhsotoglz/ComS4720_Project3/tree/main",
    //youtubeLinks: undefined,
    details: coms4720details,
    pdfs: [
      { name: "Project 1 Report", url: ComS472_Project1 },
      { name: "Project 2 Report", url: ComS472_Project2 },
      { name: "Project 3 Report", url: ComS472_Project3 },
    ],
    images: [ComS4720_image]
  },
  {
    title: "CoSMiC Competition – hosted by the Cardinal Space Mining Club at ISU",
    description: `A student-led Lunabotics-style robotics competition focused on lunar regolith excavation and delivery, 
                  featuring teams from across the U.S.`,
    tech: ["ROS 2", "Python", "CAN Bus", "Phoenix 6", "Teleop Control", "Autonomous Navigation"],
    //websiteUrl: undefined,
    //githubUrl: undefined,
    youtubeLinks: [
      { label: "Day 1 - CoSMiC Live", url: "https://www.youtube.com/embed/lsF2a_niRuA" },
      { label: "Day 2 - CoSMiC Live", url: "https://www.youtube.com/embed/ao0e3zGLE_U" },
      { label: "Day 3 - CoSMiC Live", url: "https://www.youtube.com/embed/plyCCqee_GA" }
    ],
    details: cosmicDetails,
    pdfs: [],
    images: [LanceBot, COSMIC_Photo1, COSMIC_Photo2, COSMIC_Photo3]
  },
  {
    title: "Kitchen Mingle – Android Recipe Finder App",
    description: "A full-stack mobile app that allows users to search for, save, and manage recipes based on ingredients. Built collaboratively as part of a semester-long team project for COM S 309 (Software Development Practices) at Iowa State University.",
    tech: ["Java", "Android", "Spring Boot", "MySQL", "REST API", "Agile", "CI/CD"],
    //websiteUrl: undefined,
    githubUrl: "https://github.com/jhsotoglz/KitchenMingle_AndroidApp",
    //youtubeLinks: [],
    details: KitchenMingleDetails,
    pdfs: [],
    images: []
  },
  {
    title: "Face Security File System",
    description: "A facial recognition-based CLI tool that protects personal files through biometric access, symmetric encryption, and local authentication, enabling secure file encryption and decryption without needing internet access.",
    tech: [
      "Python",
      "OpenCV",
      "face_recognition",
      "Cryptography",
      "Fernet",
      "CLI",
      "NumPy"
    ],
    //websiteUrl: undefined,
    githubUrl: "https://github.com/jhsotoglz/face_security_system",
    //youtubeLinks: [],
    details: FaceSecurityDetails,
    pdfs: [],
    images: []
  }
];
