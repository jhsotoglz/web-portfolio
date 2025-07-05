const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen-dynamic flex justify-center items-center overflow-hidden"
    >
      <div className="global-content text-center flex flex-col items-center">
        {/* Profile Picture */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 mb-6">
          <img
            src="../src/assets/jesus_soto.jpg" 
            alt="Profile"
            className="w-full h-full object-cover rounded-full border-4 border-secondary shadow-lg"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          Welcome to my{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
            Portfolio!
          </span>
        </h1>

        <h2 className="text-xl text-white/90 mt-6">
          Software Engineer & AI Enthusiast
        </h2>

        <p className="mt-6 max-w-xl mx-auto text-white/70">
          I build responsive, real-time applications with a focus on user experience and performance.
        </p>

        <a
          href="#projects"
          className="mt-8 inline-block px-6 py-3 bg-secondary text-white rounded-2xl shadow-lg hover:bg-accent transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Home;
