import {
    SiReact,
    SiTypescript,
    SiJavascript,
    SiNodedotjs,
    SiFirebase,
    SiTailwindcss,
    SiDocker,
    SiPython,
} from "react-icons/si";

const About = () => {
    const skills = [
        { Icon: SiReact, name: "React", color: "#61DAFB" },
        { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
        { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
        { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
        { Icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
        { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#38BDF8" },
        { Icon: SiDocker, name: "Docker", color: "#2496ED" },
        { Icon: SiPython, name: "Python", color: "#3776AB" },
    ];

    return (
        <section
            id="about"
            className="px-4 scroll-mt-16 text-white flex flex-col items-center lg:-mt-40 mb-20 border rounded-3xl border-green-400"
        >
            <div className="w-full max-w-4xl text-center">
                <h1 className="text-4xl font-bold mb-6 mt-6">
                    About <span className="text-green-400">Me</span>
                </h1>

                <p className="text-lg leading-relaxed mb-4">
                    I'm a <span className="font-semibold text-green-400">Software Engineering student</span> at <strong>Iowa State University</strong>, currently in my final semester and pursuing a minor in <strong>Artificial Intelligence</strong>.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                    My academic background and personal projects have introduced me to <strong>real-time systems</strong> and <strong>robotics</strong>, areas I’m genuinely passionate about and continue to explore.
                </p>

                <p className="text-lg leading-relaxed">
                    I'm eager to keep learning, contribute to <strong>meaningful projects</strong>, and grow within a team that values <strong>collaboration</strong>, <strong>innovation</strong>, and <strong>real-world impact</strong>.
                </p>


                <h2 className="inline-block px-6 py-2 text-green-400 text-2xl font-semibold uppercase tracking-wide rounded-full mt-10 mb-6">
                    Tools & Technologies
                </h2>

                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-4xl mb-4">
                    {skills.map(({ Icon, name, color }, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center group cursor-pointer hover:scale-110 transition-transform duration-300"
                        >
                            <Icon color={color} />
                            <span className="text-sm text-white mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
