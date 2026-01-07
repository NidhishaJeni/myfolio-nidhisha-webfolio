import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";      // first
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Internship from "./components/Internship";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />

      <About />        
      
      <Skills />
      <Projects />
      <Internship />
      <Contact />
    </>
  );
}

export default App;
