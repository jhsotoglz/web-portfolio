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
      <div className="bg-main border border-white/10 rounded-2xl max-w-3xl w-full p-6 relative shadow-2xl overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-1 right-3 text-2xl text-red-500 transition-transform duration-300 transform hover:scale-125"
        >
          ✕
        </button>

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
  );
};

export default ProjectDetailsModal;
