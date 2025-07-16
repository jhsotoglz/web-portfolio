import GridAIPoster from "../assets/projectFiles/GridAI/GridAI_Poster.png";
import GridAIPresentation from "../assets/projectFiles/GridAI/sdmay25-43IRP.pdf"
import FinalReport from "../assets/projectFiles/GridAI/sdmay25-43-DD.pdf"
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
    tech: [
      "React",
      "TypeScript",
      "Kafka",
      "WebSocket",
      "Firebase",
      "Monaco Editor",
      "Tailwind CSS",
      "Docker",
      "Babel"
    ],
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
              Real-time updates ensure seamless dashboard integration and immediate feedback when working with live telemetry data.`,
    pdfs: [
      { name: "IRP Presentation", url: GridAIPresentation },
      { name: "Final Report", url: FinalReport },
    ],
    images: [GridAIPoster]
  },
  {
    title: "Probabilistic Escape-Pursuit Planning",
    description: "Multi-agent grid-based planning system that simulates intelligent pursuit and evasion under stochastic movement conditions.",
    tech: [
      "Python",
      "A* Search",
      "Monte Carlo Simulation",
      "Heuristic Design",
      "Probabilistic Modeling",
      "EMA Estimation",
      "Adversarial AI"
    ],
    link: "https://github.com/jhsotoglz/ComS4720_Project3/tree/main",
    youtubeLinks: undefined,
    details: `Probabilistic Escape-Pursuit Planning was the final project in a 3-part AI path planning series for COM S 4720 
              (Principles of Artificial Intelligence) at Iowa State University. The task simulated a competitive multi-agent environment 
              where three agents had to pursue their targets and evade pursuers on a shared grid with static obstacles and probabilistic 
              movement uncertainty.\n\n

              Each student’s planner agent competed head-to-head. I developed a rotation-aware agent that earned first place, outperforming 
              all others in both pursuit efficiency and evasion, and achieving the highest score in the class playoff.\n\n

              The agent combines A* pathfinding with intelligent adaptation to unpredictable movement, where actions may randomly rotate 
              left, right, or stay on course. I implemented a hybrid estimator using exponential moving averages (EMAs) and a sliding window 
              to track rotation probabilities and inform real-time decisions.\n\n

              The agent dynamically switches between three modes:\n\n

              - Offensive: Pursues the target with pathfinding and noise correction.\n\n
              - Defensive: Escapes threats while maximizing mobility.\n\n
              - Normal: Maintains central positioning for flexibility.\n\n

              A heuristic scoring system rewards center control, penalizes corners and dead ends, and evaluates all move variants for 
              safety and effectiveness.\n\n

              Tested across 100+ grid environments, the planner demonstrated strong adaptability and performance under uncertainty. 
              It was built entirely in Python using NumPy and standard libraries, with an emphasis on efficient, self-contained AI logic.`,
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
