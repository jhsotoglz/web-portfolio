const Home = () => {
  return (
    <section
      id="home"
      className="
        min-h-screen-dynamic 
        flex justify-center items-center 
        overflow-hidden 
        landscape-short:block 
        landscape-short:pt-6 
        landscape-short:pb-10
      "
    >
      <div className="landscape-short:mt-12 max-w-screen-sm mx-auto">
        <div className="global-content text-center flex flex-col items-center">

          {/* Profile Picture */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 mb-8">
            <img
              src="../src/assets/jesus_soto.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-extra shadow-lg"
            />
          </div>

          {/* Headline with name */}
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Hi, I'm Jesus Soto
            <br />
            <span className="bg-clip-text text-3xl text-transparent bg-gradient-to-r from-gray-400 to-green-500">
              Software Engineer & AI Enthusiast
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-xl mx-auto text-white text-lg">
            I build responsive, real-time applications with a focus on user experience, performance, and clean design. Welcome to my portfolio!
          </p>

          {/* Call to Action */}
          <a
            href="#projects"
            className="mt-8 font-black inline-block px-6 py-3 bg-green-400 text-black rounded-2xl shadow-lg hover:bg-green-200 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
