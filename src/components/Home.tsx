const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen-dynamic flex justify-center items-center bg-gradient-to-b from-main via-black to-gray-900 text-white overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="absolute w-[500px] h-[500px] bg-secondary rounded-full blur-[120px] opacity-20 top-1/3 left-1/2 -translate-x-1/2 -z-10" />

      <div className="global-content text-center animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Welcome to my <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">portfolio</span>
        </h1>
        <h2 className="text-xl text-white/80 mt-4">
          Software Engineer | AI Enthusiast | Maker
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-white/70">
          I build responsive, real-time applications with a focus on user experience and performance.
        </p>
        <a
          href="#projects"
          className="mt-8 inline-block px-6 py-3 bg-extra text-white rounded-2xl shadow-lg hover:bg-secondary transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Home;
