import GridAIPoster from "../assets/projectFiles/GridAI/GridAI_Poster.png";
import ComS472_Project1 from "../assets/projectFiles/COMS472/Project1_report.pdf";
import ComS472_Project2 from "../assets/projectFiles/COMS472/Project2_report.pdf";
import ComS472_Project3 from "../assets/projectFiles/COMS472/Project3_report.pdf";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
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
    tech: ["React", "Next.JS", "Docker", "Kafka", "Firebase", "Tailwind CSS", "TypeScript"],
    link: undefined,
    youtubeLinks: [
      { label: "Demo", url: "https://www.youtube.com/embed/H-c5zdhf0zs" }
    ],
    details: `GridAI is a proprietary platform developed at Iowa State University to address challenges in modern energy distribution 
              systems. It provides solutions for predicting outages, optimizing power flow, and managing distributed energy resources 
              (DERs), enabling operators to maintain grid stability and efficiency.\n\n
    
              While GridAI’s backend was robust, its baseline front-end had limitations that required enhancements to meet diverse user 
              needs. Our senior design team focused on improving existing components and developing new features to deliver a more 
              user-friendly and efficient interface.\n\n
              
              Within the team, I was responsible for designing and implementing a real-time widget system with a built-in code editor. 
              This system allows users to observe live electric grid data and customize widgets using code or settings to suit their 
              specific needs.\n\n
              
              I developed a comprehensive Widget Editor with a four-quadrant layout using React and TypeScript, enabling live code 
              editing with the Monaco Editor and real-time JSX previews powered by Babel. Users can modify widget templates, controller 
              scripts, and metadata such as title, measurement type, and Kafka node key.\n\n
              
              I also built and maintained various components, including the widget list manager, widget creation forms with predefined 
              templates, telemetry subscription handlers, and error-isolated rendering using React boundaries. On the backend, I 
              contributed to the Kafka-based real-time telemetry system, which filters, transforms, and emits live data through 
              WebSocket connections.\n\n
              
              The system implements full CRUD API endpoints for widget management, allowing users to create, read, update, and delete 
              widget configurations. These routes are secured using Firebase token authentication and persist data in Firestore. 
              Real-time updates ensure seamless dashboard integration and immediate feedback when working with live telemetry data.
`,
    pdfs: [
      { name: "Design Doc", url: "/docs/gridai_design.pdf" },
      { name: "Final Report", url: "/docs/gridai_report.pdf" },
    ],
    images: [GridAIPoster]
  },
  {
    title: "Probabilistic Escape-Persuit Planning",
    description: "A pursuit-evasion planning algorithm using probabilistic models and graph search...",
    tech: ["Graph Search", "Adversarial AI", "Python", "Heuristics"],
    link: "https://github.com/jhsotoglz/ComS4720_Project3/tree/main",
    youtubeLinks: undefined,
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
    link: undefined,
    youtubeLinks: [
      { label: "Day 1 - CoSMiC Live", url: "https://www.youtube.com/embed/lsF2a_niRuA" },
      { label: "Day 2 - CoSMiC Live", url: "https://www.youtube.com/embed/ao0e3zGLE_U" },
      { label: "Day 3 - CoSMiC Live", url: "https://www.youtube.com/embed/plyCCqee_GA" },
    ],
    details: `Designed and deployed autonomous and teleoperated systems for lunar mining...`,
    pdfs: [
      { name: "Design Doc", url: "/docs/gridai_design.pdf" },
      { name: "Final Report", url: "/docs/gridai_report.pdf" },
    ],
    images: []
  }
];
