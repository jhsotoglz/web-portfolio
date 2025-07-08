const Contact = () => {
  return (
    <section
      id="contact"
      className="px-4 scroll-mt-16 text-white flex flex-col items-center min-h-screen-dynamic mb-2"
    >
      <div className="w-full max-w-3xl mt-6 bg-[#1e293b]/50 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/10 text-center">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-6">
          <span className="text-green-400">Contact</span> Me
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-300 mb-8">
          Have a question, opportunity, or just want to say hi? I'd love to hear from you!
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm sm:text-base">

          <a
            href="mailto:jhsotoglz@gmail.com"
            className="px-6 py-3 rounded-full bg-green-400 text-black font-bold shadow-md hover:bg-green-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Email Me
          </a>

          <a
            href="/resume.pdf" // Replace with your actual path
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-green-400 text-green-400 font-bold shadow-md hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            View Resume
          </a>

          <a
            href="https://github.com/jhsotoglz" // Adjust to your GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white text-white font-bold shadow-md hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
