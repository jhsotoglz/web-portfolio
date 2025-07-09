const Contact = () => {
  return (
    <section
      id="contact"
      className="px-4 scroll-mt-16 text-white flex flex-col items-center min-h-screen-dynamic mb-2"
    >
      <div className="w-full max-w-3xl mt-6 bg-main backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/10">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-6">
          <span className="text-green-400">Contact</span> Me
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-300 text-center mb-8">
          Have a question, opportunity, or just want to say hi? I'd love to hear from you!
        </p>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/mrbkwwew"
          method="POST"
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-black"
        >
          <input
            type="text"
            name="First Name"
            required
            placeholder="First Name *"
            className="bg-white border-2 border-transparent rounded px-4 py-2 w-full"
          />
          <input
            type="text"
            name="Last Name"
            required
            placeholder="Last Name *"
            className="bg-white border-2 border-transparen rounded px-4 py-2 w-full"
          />
          <input
            type="email"
            name="Email"
            required
            placeholder="Email *"
            className="bg-white border-2 border-transparent rounded px-4 py-2 w-full"
          />
          <input
            type="text"
            name="Subject"
            required
            placeholder="Subject *"
            className="bg-white border-2 border-transparent rounded px-4 py-2 w-full"
          />
          <textarea
            name="Message"
            required
            placeholder="Leave a message... *"
            className="col-span-1 sm:col-span-2 bg-white border-2 border-transparent rounded px-4 py-2 w-full h-32 resize-none"
          />
          <div className="col-span-1 sm:col-span-2 flex justify-center">
            <button
              type="submit"
              className="mt-2 px-8 py-3 border-2 border-black rounded-full bg-white hover:bg-green-300 transition-all font-semibold"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm sm:text-base mt-10 text-center">
          <a
            href="mailto:jhsotoglz@gmail.com"
            className="px-6 py-3 rounded-full bg-green-400 text-black font-bold shadow-md hover:bg-green-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Email Me
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-green-400 text-green-400 font-bold shadow-md hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            View Resume
          </a>

          <a
            href="https://github.com/jhsotoglz"
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
