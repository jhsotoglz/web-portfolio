import { FaGithub, FaYoutube } from "react-icons/fa";
import { useState } from "react";
import type { Project } from "../data/projectData";
import { projects } from "../data/projectData";
import ProjectDetailsModal from "./ProjectDetailsModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="px-4 scroll-mt-16 text-white flex flex-col items-center mb-16"
    >
      <div className="max-w-6xl w-full mt-6">
        <h1 className="text-4xl font-bold text-center mb-12">
          My <span className="text-green-400">Projects</span>
        </h1>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-main backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/10"
            >
              <h2 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h2>

              <p className="text-white/80 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 text-sm mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="font-semibold px-2 py-1 rounded-full border border-green-400 text-green-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full border border-white text-white font-semibold shadow-md hover:bg-white 
                    hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <span className="flex items-center gap-2">
                      <FaGithub /> GitHub
                    </span>
                  </a>
                )}
                {project.youtube && (
                  <a
                    href={project.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full border border-white text-white font-semibold shadow-md hover:bg-white 
                    hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <span className="flex items-center gap-2">
                      <FaYoutube className="text-red-500" /> Watch
                    </span>
                  </a>
                )}
                {project.details && (
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="ml-auto px-4 py-2 rounded-full bg-green-400 text-black font-semibold shadow-md hover:bg-green-300 
                    transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Learn More
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
