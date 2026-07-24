import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";


function App() {
    return (
      <>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </>
    );
}

export default App;