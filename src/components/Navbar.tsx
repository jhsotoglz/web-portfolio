import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

interface NavbarProps {
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}


const Navbar = ({ isVisible, setIsVisible }: NavbarProps) => {


    const sections = ["home", "about", "projects", "contact"];

    return (
        <>
            {/* Hover zone triggers sidebar open */}
            <div
                className="fixed top-0 left-0 h-screen w-16 z-[60] bg-transparent"  // w-16 changes hover zone detection size to the right
                onMouseEnter={() => setIsVisible(true)}
            />

            {/* Sidebar */}
            <nav
                className={`fixed top-0 left-0 h-screen w-48 bg-white dark:bg-gray-900 shadow-md 
        transition-transform duration-300 z-[59]
        ${isVisible ? "translate-x-0" : "-translate-x-32"}`}
                onMouseLeave={() => setIsVisible(false)}
            >

                {/* Logo on hidden sidebar */}
                {!isVisible && (
                    <div className="absolute top-14 right-[16px] -translate-y-1/2 text-2xl font-bold text-gray-800 dark:text-white mb-10">
                        JH
                    </div>
                )}

                {/* Vertical NAVIGATION Label (only when hidden) */}
                {!isVisible && (
                    <div className="absolute top-1/2 right-[16px] -translate-y-1/2 text-2xl tracking-widest text-gray-600 dark:text-gray-300">
                        ≡
                    </div>
                )}

                {/* Close button (mobile only) */}
                {isVisible && (
                    <button
                        className="absolute top-4 right-4 text-2xl text-gray-600 dark:text-gray-300 md:hidden z-10"
                        onClick={() => setIsVisible(false)}
                        aria-label="Close Sidebar"
                    >
                        ←
                    </button>
                )}

                <div className="h-full flex flex-col justify-between items-center py-10">
                    {/* Top Section */}
                    <div className="flex flex-col items-center">
                        <div className="text-2xl font-bold text-gray-800 dark:text-white mb-10 hidden md:block">
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

                    {/* Bottom Social Icons (always visible on edge) */}
                    <div
                        className={`absolute bottom-10 flex flex-col gap-4 
    ${isVisible ? "left-15 items-start" : "right-[23px] items-center"}`}
                    >
                        <a
                            href="https://www.linkedin.com/in/jhsoto/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                        >
                            <FaLinkedin className="text-xl" />
                            {isVisible && (
                                <span className="ml-2 text-sm font-medium">jhsoto</span>
                            )}
                        </a>

                        <a
                            href="https://www.youtube.com/@Jhsotoglz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors"
                        >
                            <FaYoutube className="text-xl" />
                            {isVisible && (
                                <span className="ml-2 text-sm font-medium">Jhsotoglz</span>
                            )}
                        </a>

                        <a
                            href="https://github.com/jhsotoglz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-black transition-colors"
                        >
                            <FaGithub className="text-xl" />
                            {isVisible && (
                                <span className="ml-2 text-sm font-medium">jhsotoglz</span>
                            )}
                        </a>
                    </div>


                </div>
            </nav>
        </>
    );
};

export default Navbar;
