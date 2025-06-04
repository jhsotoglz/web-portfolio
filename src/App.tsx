import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Scrollbar from "./components/Scrollbar";

function App() {
  return (
    <>
      <Navbar />
      <Scrollbar />
      <main className="scroll-smooth">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
