import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiDocker,
  SiPython,
  SiCplusplus,
  SiMysql,
  SiGit,
  SiMongodb,
} from "react-icons/si";

const About = () => {
  const skills = [
    { Icon: SiCplusplus, name: "C++", color: "#00599C" },
    { Icon: SiPython, name: "Python", color: "#3776AB" },
    { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { Icon: SiReact, name: "React", color: "#61DAFB" },
    { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { Icon: SiMysql, name: "MySQL", color: "#4479A1" },
    { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { Icon: SiDocker, name: "Docker", color: "#2496ED" },
    { Icon: SiGit, name: "Git", color: "#F05032" },
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
          I'm a <span className="font-semibold text-green-400">Software Engineering student</span> at{" "}
          <strong>Iowa State University</strong>, currently in my final semester and pursuing a minor in{" "}
          <strong>Artificial Intelligence</strong>.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          Before diving into software, I earned a degree in <strong>Diesel Technology</strong> and worked as a
          certified diesel technician. This gave me a strong foundation in troubleshooting, mechanical systems, and
          real-world problem solving. These are skills that I now bring to every engineering challenge.
        </p>

        <p className="text-lg leading-relaxed">
          My background spans both digital and physical systems, from embedded robotics and real-time platforms to
          full-stack web development. I'm eager to contribute to <strong>meaningful projects</strong> and grow in
          teams that value <strong>collaboration</strong>, <strong>innovation</strong>, and{" "}
          <strong>real-world impact</strong>.
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
