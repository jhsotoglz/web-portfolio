import React, { useEffect } from "react";
import type { Project } from "../data/projectData";

interface Props {
  project: Project;
  onClose: () => void;
}

const ProjectDetailsModal: React.FC<Props> = ({ project, onClose }) => {
  // Prevent background scroll
  useEffect(() => {
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle; // Reset on unmount
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex justify-center items-center p-4">
      {/* Modal wrapper with relative positioning */}
      <div className="relative max-w-3xl mt-2 sm:mt-0">
        
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
                overflow-y-auto sm:max-h-[90vh] max-h-[80vh]">

          {/* Title */}
          <h2 className="text-3xl font-bold mt-2 mb-4 text-white">{project.title}</h2>

          {/* Details Text */}
          {project.details && (
            <p className="text-green-400 whitespace-pre-line mb-6">
              {project.details}
            </p>
          )}

          {/* Project Images */}
          {Array.isArray(project.images) && project.images.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold mb-4 text-white text-center">Project Images</h3>
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
                      className="max-w-full md:max-w-md rounded-lg border border-white/20 shadow-md"
                    />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* YouTube Embed */}
          {project.youtube && (
            <div className="mb-6">
              <iframe
                src={project.youtube}
                title="YouTube Demo"
                className="w-full aspect-video rounded-lg"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {/* PDF Downloads */}
          {Array.isArray(project.pdfs) && project.pdfs.length > 0 && (
            <div>
              <h3 className="font-semibold mb-2 text-white">Project Documents</h3>
              <ul className="list-disc pl-5 text-blue-600">
                {project.pdfs.map((pdf, idx) => (
                  <li key={idx}>
                    <a
                      href={pdf.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
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
