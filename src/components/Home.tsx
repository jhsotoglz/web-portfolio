const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen-dynamic flex justify-center items-center bg-background text-text"
    >
      <div className="global-content text-center animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl font-bold text-accent">Welcome to my portfolio</h1>
        <h2 className="text-xl text-secondary mt-4">
          Software Engineer | AI Enthusiast | Maker
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-accent/80">
          I build responsive, real-time applications with a focus on user experience and performance.
        </p>
        <a
          href="#projects"
          className="mt-8 inline-block px-6 py-3 bg-primary text-white rounded-2xl shadow hover:bg-secondary transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Home;
