import React, { useLayoutEffect } from "react";
import type { Project } from "../data/projectData";
import Markdown from "./Markdown";

interface Props {
  project: Project;
  onClose: () => void;
}

const ProjectDetailsModal: React.FC<Props> = ({ project, onClose }) => {
  // Prevent background scroll
  useLayoutEffect(() => {
    const original = document.body.style.overflow;
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.body.style.overflow = original;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex justify-center items-center p-4 touch-none">
      {/* Modal wrapper with relative positioning */}
      <div className="relative w-full sm:w-[45vw] mx-auto mt-2 sm:mt-0">

        {/* Close Button (outside modal top-right corner) */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-2 z-[60] text-2xl font-bold text-red-500 bg-main border border-red-500
                     rounded-full w-10 h-10 flex items-center justify-center shadow-md 
                     transition-transform duration-300 transform hover:scale-125"
          title="Close"
        >
          ✕
        </button>

        {/* Modal content box */}
        <div className="bg-main border border-white/10 rounded-2xl p-6 shadow-2xl 
                overflow-y-auto sm:max-h-[90vh] sm:max-w-[50vw] max-h-[80vh]">

          {/* Title */}
          <h2 className="text-3xl font-bold mt-2 mb-4 text-green-400">{project.title}</h2>

          {/* Details (Markdown) */}
          {project.details && (
            <div className="mb-6">
              <Markdown>{project.details}</Markdown>
            </div>
          )}

          {/* Project Images */}
          {Array.isArray(project.images) && project.images.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-green-400 text-center mb-8">Project Images</h3>
              <div className="flex flex-col items-center gap-6">
                {project.images.map((src, idx) => (
                  <a
                    key={idx}
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-105 duration-300"
                  >
                    <img
                      src={src}
                      alt={`Screenshot ${idx + 1}`}
                      className="mx-auto max-w-full md:max-w-[80%] rounded-lg border border-white/20 shadow-md mb-4"
                    />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* YouTube Embeds */}
          {Array.isArray(project.youtubeLinks) && project.youtubeLinks.length > 0 && (
            <div className="mb-6 space-y-6">
              <h3 className="text-xl font-bold text-green-400 text-center mb-4">Project Videos</h3>
              {project.youtubeLinks.map((video, idx) => (
                <div key={idx} className="w-full">
                  <p className="text-white text-sm font-medium mb-2">{video.label}</p>
                  <iframe
                    src={video.url}
                    title={video.label}
                    className="w-full aspect-video rounded-lg"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          )}

          {/* PDF Downloads */}
          {Array.isArray(project.pdfs) && project.pdfs.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-green-400 text-center mb-4">
                Project Documents
              </h3>
              <ul className="flex flex-wrap gap-4 justify-center">
                {project.pdfs.map((pdf, idx) => (
                  <li key={idx}>
                    <a
                      href={pdf.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bo bg-green-400 text-black font-semibold rounded-full shadow hover:scale-110 transition duration-300"
                    >
                      {pdf.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
