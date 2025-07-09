import { useState, useEffect, useRef } from "react";

interface MainNavProps {
  navOpen: boolean;
  setNavOpen: (open: boolean) => void;
}

const sections = ["home", "about", "projects", "contact"];

const MainNav = ({ navOpen, setNavOpen }: MainNavProps) => {
  const [active, setActive] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind 'sm'
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Close on scroll (mobile)
  useEffect(() => {
    if (!isMobile || !navOpen) return;
    const handleScroll = () => setNavOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile, navOpen, setNavOpen]);

  // Close on outside tap (mobile)
  useEffect(() => {
    if (!isMobile || !navOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setNavOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isMobile, navOpen, setNavOpen]);

  const handleScrollToSection = (section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActive(section);
      if (isMobile) setNavOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Closed Toggle */}
      {isMobile && !navOpen && (
        <div
          className="fixed top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full z-50
                      bg-secondary shadow-lg cursor-pointer text-3xl text-gray-800 dark:text-white transition-colors"
          onClick={() => setNavOpen(true)}
          title="Open Navigation"
        >
          ≡
        </div>
      )}

      {/* Main Navigation */}
      {(!isMobile || navOpen) && (
        <div
          ref={navRef}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 inline-flex items-center bg-secondary 
                      shadow-lg rounded-full px-4 py-2 overflow-x-auto gap-2"
        >
          <ul className="flex gap-2 text-sm font-medium">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => handleScrollToSection(section)}
                  className={`px-4 py-1.5 rounded-full transition-colors whitespace-nowrap ${
                    active === section
                      ? "bg-accent text-white"
                      : "text-gray-600 dark:text-gray-300 hover:bg-secondary"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default MainNav;
