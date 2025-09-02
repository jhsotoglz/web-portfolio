// src/components/Projects.tsx
import { FaGithub, FaYoutube, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import type { Project } from "../data/projectData";
import { projects } from "../data/projectData";
import ProjectDetailsModal from "./ProjectDetailsModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [expandedTags, setExpandedTags] = useState<{ [title: string]: boolean }>({});

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

              {/* Tag List with Expand/Collapse */}
              <div className="flex flex-wrap gap-2 text-sm mb-4">
                {(expandedTags[project.title] ? project.tech : project.tech.slice(0, 5)).map(
                  (tech, i) => (
                    <span
                      key={i}
                      className="font-semibold px-2 py-1 rounded-full border border-green-400 text-green-400"
                    >
                      {tech}
                    </span>
                  )
                )}
                {project.tech.length > 5 && (
                  <button
                    onClick={() =>
                      setExpandedTags((prev) => ({
                        ...prev,
                        [project.title]: !prev[project.title],
                      }))
                    }
                    className="font-semibold px-2 py-1 rounded-full border border-white text-white hover:bg-white hover:text-black transition"
                  >
                    {expandedTags[project.title]
                      ? "Show less"
                      : `+${project.tech.length - 5} more`}
                  </button>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-4 items-center">
                {/* Website (external) */}
                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full border border-white text-white font-semibold shadow-md hover:bg-white 
                               hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    aria-label="Visit website"
                  >
                    <span className="flex items-center gap-2">
                      <FaExternalLinkAlt className="text-green-400" aria-hidden="true" />
                      Visit site
                    </span>
                  </a>
                )}

                {/* GitHub */}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full border border-white text-white font-semibold shadow-md hover:bg-white 
                               hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    aria-label="Open GitHub repository"
                  >
                    <span className="flex items-center gap-2">
                      <FaGithub className="text-white" aria-hidden="true" />
                      GitHub
                    </span>
                  </a>
                )}

                {/* YouTube (first link as quick CTA) */}
                {project.youtubeLinks && project.youtubeLinks.length > 0 && (
                  <a
                    href={project.youtubeLinks[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full border border-white text-white font-semibold shadow-md hover:bg-white 
                               hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    aria-label="Watch video"
                  >
                    <span className="flex items-center gap-2">
                      <FaYoutube className="text-red-500" aria-hidden="true" />
                      Watch
                    </span>
                  </a>
                )}

                {/* Learn more opens modal */}
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
