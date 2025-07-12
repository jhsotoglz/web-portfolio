import "./App.css"
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MainNav from "./components/MainNav";
import LogoBubble from "./components/LogoBubble";
import SocialPill from "./components/SocialPill";
import { useState } from "react";

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <LogoBubble navOpen={navOpen} />
      <MainNav navOpen={navOpen} setNavOpen={setNavOpen} />
      <SocialPill />
      <main
        className={`scroll-smooth transition-all duration-300 min-h-screen-dynamic`}
      >
        <div className="max-w-screen-lg mx-auto px-4">
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      </main>
    </>
  );
}

export default App;
