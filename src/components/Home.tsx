const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen-dynamic flex justify-center items-center bg-white dark:bg-gray-700"
    >
      <div className="global-content text-center animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
          Welcome to my portfolio
        </h1>
        <h2 className="text-xl text-gray-600 dark:text-gray-300 mt-4">
          Software Engineer | AI Enthusiast | Maker
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-gray-500 dark:text-gray-400">
          I build responsive, real-time applications with a focus on user experience and performance.
        </p>
        <a
          href="#projects"
          className="mt-8 inline-block px-6 py-3 bg-gray-900 text-white rounded-2xl shadow hover:bg-gray-800 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Home;
