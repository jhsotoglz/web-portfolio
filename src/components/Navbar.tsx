const Navbar = () => {
    const sections = ["home", "about", "projects", "contact"];

    return (
        <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="text-xl font-bold text-gray-800 dark:text-white">JH</div>
                    <ul className="flex gap-6 text-sm font-medium">
                        {sections.map((section) => (
                            <li key={section}>
                                <a
                                    href={`#${section}`}
                                    className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors">
                                        {section.charAt(0).toLocaleUpperCase() + section.slice(1)}
                                    </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;