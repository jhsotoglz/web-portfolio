import React from "react";

interface LogoBubbleProps {
  navOpen: boolean;
}

const LogoBubble: React.FC<LogoBubbleProps> = ({ navOpen }) => {
  if (navOpen) return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed top-4 left-4 z-[70] dark:bg-gray-800 text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer select-none hover:bg-blue-800 transition-colors"
      onClick={scrollToTop}
      title="Back to Top"
    >
      JH
    </div>
  );
};

export default LogoBubble;
