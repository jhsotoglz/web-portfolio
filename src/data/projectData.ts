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
      "Docker",
      "Firebase",
      "Babel",
      "Monaco Editor",
      "Tailwind CSS",
      "WebSocket",
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
              
              The system implements a full set of RESTful API endpoints for widget management, allowing users to create, read, update, 
              and delete widget configurations. These routes are secured using Firebase token authentication and persist data in Firestore. 
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
      "A* Search",
      "Monte Carlo Simulation",
      "Python",
      "Heuristic Design",
      "EMA Estimation",
      "Adversarial AI",
      "Probabilistic Modeling",
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
    images: [ComS4720_image]
  },
  {
    title: "CoSMiC Competition – hosted by the Cardinal Space Mining Club at ISU",
    description: `A student-led Lunabotics-style robotics competition focused on lunar regolith excavation and delivery, 
                  featuring teams from across the U.S.`,
    tech: ["ROS 2", "Python", "CAN Bus", "Phoenix 6", "Teleop Control", "Autonomous Navigation"],
    link: undefined,
    youtubeLinks: [
      { label: "Day 1 - CoSMiC Live", url: "https://www.youtube.com/embed/lsF2a_niRuA" },
      { label: "Day 2 - CoSMiC Live", url: "https://www.youtube.com/embed/ao0e3zGLE_U" },
      { label: "Day 3 - CoSMiC Live", url: "https://www.youtube.com/embed/plyCCqee_GA" }
    ],
    details: `After our team didn’t qualify for NASA’s official Lunabotics competition, the Cardinal Space Mining Club at 
              Iowa State University launched our own event: the Collegiate Space Mining Competition (CoSMiC), a student-run 
              Lunabotics-style competition.\n\n
              
              Hosted from May 21–24, the event brought together student teams from across the U.S. to compete with autonomous and 
              teleoperated robots in a simulated lunar arena, with goals including regolith excavation, delivery, and 
              autonomous navigation.\n\n
              
              I was part of the Controls Team and Motors Subteam, where I helped implement and test the robot's drivetrain system using 
              Phoenix 6 motor controllers, CAN bus communication, and ROS 2. We integrated joystick-based teleoperation 
              and began implementing autonomous mobility for regolith delivery tasks.\n\n
              
              In addition, I served as the club’s Safety Officer, where I ensured EH&S compliance, coordinated personal protective 
              equipment (PPE) protocols, and helped establish safety procedures for battery handling, pit operations, and the Lunar Soil 
              Simulant Arena.\n\n
              
              The event was sponsored by the Iowa Space Grant Consortium (ISGC) and featured three days of live-streamed competition. 
              CoSMiC became a national platform for showcasing engineering talent and a powerful learning experience in robotics and 
              systems integration.`,
    pdfs: [],
    images: [LanceBot, COSMIC_Photo1, COSMIC_Photo2, COSMIC_Photo3]
  },
  {
    title: "Kitchen Mingle – Android Recipe Finder App",
    description: "A full-stack mobile app that allows users to search for, save, and manage recipes based on ingredients. Built collaboratively as part of a semester-long team project for COM S 309 (Software Development Practices) at Iowa State University.",
    tech: ["Java", "Android", "Spring Boot", "MySQL", "REST API", "Agile", "CI/CD"],
    link: "https://github.com/jhsotoglz/KitchenMingle_AndroidApp",
    youtubeLinks: [],
    details: `As part of the Kitchen Mingle team, I worked primarily on the backend, designing and implementing RESTful APIs 
              using Spring Boot and structuring the MySQL database to store recipes, ingredients, and user data. I also supported 
              the frontend team by integrating API endpoints with the Android interface and helping debug UI-to-backend communication issues.\n\n

              This project was developed as part of COM S 309: Software Development Practices, a course designed to simulate 
              real-world industry environments. The class emphasized agile collaboration, requirement gathering, and end-to-end software 
              delivery.\n\n

              Key features:\n\n
              - Ingredient-based recipe search using external APIs\n\n
              - User authentication, recipe saving, and persistent storage\n\n
              - MySQL schema design with proper relational mapping and query optimization\n\n
              - Client-server architecture following REST principles\n\n
              - Weekly scrum meetings, peer accountability, and formal documentation of the software lifecycle (requirements, 
                design, testing, and ethics)\n\n

              The project strengthened my skills in team-based development, communication across roles, and managing both backend 
              logic and frontend integration.`,
    pdfs: [],
    images: []
  },
  {
    title: "Face Security File System",
    description: "A facial recognition-based CLI tool that protects personal files through biometric access and symmetric encryption.",
    tech: [
      "Python",
      "OpenCV",
      "face_recognition",
      "Cryptography",
      "Fernet",
      "CLI",
      "NumPy"
    ],
    link: "https://github.com/jhsotoglz/face_security_system",
    youtubeLinks: [],
    details: `Face Security File System is a privacy-focused command-line application that uses facial recognition to control access 
            to encrypted files. Built in Python, it combines OpenCV for real-time webcam capture, the face_recognition library for 
            biometric identity verification, and the cryptography package for symmetric file encryption with Fernet.\n\n

            Users register with their facial image, which is encoded and stored locally. Once registered, users can log in by 
            presenting their face, and upon successful match, gain access to encrypt or decrypt personal files.\n\n

            Key features include:\n\n
            - Facial image capture and encoding per user\n
            - Real-time facial recognition for user authentication\n
            - Secure file encryption/decryption using Fernet\n
            - Simple CLI interface with support for Ubuntu/Linux\n
            - Auto-generation and use of a shared secret key (initial MVP approach)\n\n

            I designed the project to explore biometric authentication and local data protection. The encryption process deletes 
            the original file after creating an encrypted copy, and vice versa for decryption.\n\n

            Planned future improvements include per-user key management, GUI support (Tkinter or PyQt), gesture-based controls, 
            access logs, and more advanced key lifecycle handling for real-world use cases.\n\n

            This project demonstrates practical knowledge in computer vision, applied cryptography, and CLI tool development while 
            prioritizing modularity and expandability for future features.`,
    pdfs: [],
    images: []
  }
];
