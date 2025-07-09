import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const SocialPill = () => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="inline-flex items-center gap-4 px-5 py-2 bg-gray-900 border border-green-400 shadow-lg rounded-full text-xl
                      text-green-400">
        <a
          href="https://www.linkedin.com/in/jhsoto/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.youtube.com/@Jhsotoglz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-600"
        >
          <FaYoutube />
        </a>
        <a
          href="https://github.com/jhsotoglz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialPill;
