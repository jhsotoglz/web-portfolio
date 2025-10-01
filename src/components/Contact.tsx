import { useState } from "react";
import resume from "../assets/resume/Jesus_Soto_Resume.pdf";

type Status = "idle" | "sending" | "ok" | "error";

const Contact = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();                // prevent redirect
    setStatus("sending");
    setMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot, if filled, treat as success without sending
    if ((data.get("_gotcha") as string)?.trim()) {
      setStatus("ok");
      setMsg("Thanks! I’ll get back to you soon.");
      form.reset();
      return;
    }

    // Ensure Formspree receives a lowercase 'email' field
    if (data.get("email") == null && data.get("Email")) {
      data.set("email", String(data.get("Email")));
    }

    // Optional, adds a subject that shows up in Formspree emails
    if (!data.get("_subject")) {
      data.set("_subject", "New message from web portfolio");
    }

    try {
      const res = await fetch("https://formspree.io/f/mrbkwwew", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("ok");
        setMsg("Thanks! I’ll get back to you soon.");
        form.reset();
      } else {
        setStatus("error");
        setMsg("There was an error sending your message. Please try again.");
      }
    } catch {
      setStatus("error");
      setMsg("Network error. Check your connection and try again.");
    }
  }

  return (
    <section
      id="contact"
      className="px-4 scroll-mt-16 text-white flex flex-col items-center min-h-screen-dynamic mb-8"
    >
      <div className="w-full max-w-3xl mt-6 bg-main backdrop-blur-md p-8 rounded-3xl shadow-xl border border-green-400">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-6">
          <span className="text-green-400">Contact</span> Me
        </h1>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm sm:text-base mt-10 mb-8 text-center">
          <a
            href="mailto:jhsotoglz@gmail.com"
            className="px-6 py-3 rounded-full bg-green-400 text-black font-bold shadow-md hover:bg-green-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Email Me
          </a>

          <a
            href={resume}
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

        {/* Description */}
        <p className="text-lg text-gray-300 text-center mb-2">
          Have a question, opportunity, or just want to say hi? I'd love to hear from you!
        </p>

        {/* Inline status banner (no layout shift) */}
        <div aria-live="polite" className="min-h-6 text-center mb-6">
          {status === "sending" && <p className="text-sm text-gray-300">Sending…</p>}
          {msg && (
            <p
              className={
                "text-sm " +
                (status === "ok"
                  ? "text-emerald-300"
                  : status === "error"
                  ? "text-red-300"
                  : "text-gray-300")
              }
            >
              {msg}
            </p>
          )}
        </div>

        {/* Contact Form — same UI, JS handles submit */}
        <form
          onSubmit={onSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-black"
          autoComplete="on"
        >
          {/* Hidden fields */}
          <input type="hidden" name="_subject" value="New message from web portfolio" />
          {/* Honeypot */}
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

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
              disabled={status === "sending"}
              className="mt-2 px-8 py-3 border-2 border-black rounded-full bg-white hover:bg-green-300 transition-all font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending…" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
