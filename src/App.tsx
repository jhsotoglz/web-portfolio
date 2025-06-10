import "./App.css"
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
        className={`scroll-smooth transition-all duration-300 min-h-screen-dynamic ${
          isNavVisible ? "ml-48" : "ml-4 sm:ml-0"
        }`}
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
