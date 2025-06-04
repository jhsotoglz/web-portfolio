import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Scrollbar from "./components/Scrollbar";
import { useState } from "react";

function App() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  return (
    <>
      <Navbar isVisible={isNavVisible} setIsVisible={setIsNavVisible} />
      <Scrollbar />
      <main
        className={`scroll-smooth transition-all duration-300 ${
          isNavVisible ? "ml-48" : "ml-0"
        }`}
      >
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
