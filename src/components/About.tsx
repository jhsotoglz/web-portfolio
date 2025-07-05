const About = () => {
    return (
        <section
            id="about"
            className="px-4 scroll-mt-16 text-white flex justify-center items-start lg:-mt-36"
        >

            <div className="w-full max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-center">
                    About <span className="text-secondary">Me</span>
                </h1>

                <p className="text-lg leading-relaxed mb-6">
                    Hey there! I'm <strong>Jesus Soto</strong> — a Software Engineer passionate about building interactive applications, real-time systems, and modern web interfaces. I'm currently completing my degree in Software Engineering at <strong>Iowa State University</strong> with a minor in Cybersecurity.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                    Over the years, I've contributed to projects involving AI dashboards, robotics (shoutout to the <strong>Cardinal Space Mining Club</strong>!), real-time data pipelines with Kafka, and user-friendly React-based widget systems. I thrive at the intersection of performance, usability, and systems thinking.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                    When I'm not coding, you'll find me enjoying anime (yes, I grew up on <em>Dragon Ball Z</em>), working out to stay sharp, or helping my friends with their tech setups. I’m an extrovert by nature — I love collaborating, mentoring, and sharing what I learn.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                    Right now, I'm working on <strong>GridAI</strong>, a smart grid assistant that integrates custom widgets, Kafka-based telemetry, and real-time visualizations — all wrapped up in a responsive React frontend. I’m also leading safety efforts in our robotics club and helping my peers succeed.
                </p>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Fun Facts</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>I was a diesel technician before becoming a software engineer.</li>
                        <li>I can navigate both frontend (React, TypeScript) and backend (Node.js, Kafka, Docker) systems with ease.</li>
                        <li>I enjoy explaining complex ideas in simple ways — communication is one of my hidden strengths.</li>
                        <li>My favorite tech stack? React + TypeScript + Firebase (or Kafka when it gets serious).</li>
                        <li>I care deeply about design, performance, and clarity — whether in code or communication.</li>
                    </ul>
                </div>

                <div className="mt-10 text-center">
                    <a
                        href="#contact"
                        className="inline-block px-6 py-3 bg-secondary text-white rounded-2xl shadow-lg hover:bg-accent transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        Let’s Connect!
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
