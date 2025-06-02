import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const sections = ["home", "about", "projects", "contact"];

  return (
    <nav className="fixed top-0 left-0 h-screen w-48 bg-white dark:bg-gray-900 shadow-md z-50 flex flex-col justify-between">
      <div className="flex flex-col items-center py-10">
        <div className="text-2xl font-bold text-gray-800 dark:text-white mb-10">
          JH
        </div>
        <ul className="flex flex-col gap-6 text-sm font-medium">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>

    {/* Bottom Social Icons */}
    <div className="flex flex-col items-center gap-4 pb-6">
        <a
            href="https://www.linkedin.com/in/jhsoto/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 text-xl">
                <FaLinkedin />
        </a>

        <a 
            href="https://www.youtube.com/@Jhsotoglz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 text-xl">
                <FaYoutube />
        </a>

        <a 
            href="https://github.com/jhsotoglz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 text-xl">
                <FaGithub />
        </a>
    </div>
    </nav>
  );
};
export default Navbar;