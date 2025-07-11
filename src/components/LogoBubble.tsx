import React, { useEffect, useState } from "react";

interface LogoBubbleProps {
  navOpen: boolean;
}

const LogoBubble: React.FC<LogoBubbleProps> = ({ navOpen }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind 'sm' breakpoint
    };

    updateSize(); // initial check
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed left-4 bg-gray-900 text-green-400 border border-green-400 font-bold text-xl w-12 h-12 
      rounded-full flex items-center justify-center shadow-lg cursor-pointer select-none z-50
      hover:bg-secondary transition-all duration-300
      ${isMobile && navOpen ? "top-20 pointer-events-none opacity-50" : "top-4"}`}
      onClick={scrollToTop}
      title="Back to Top"
    >
      JH
    </div>
  );
};

export default LogoBubble;
