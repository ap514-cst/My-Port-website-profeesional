import { useRef } from "react";

import "./App.css";
import Navbar from "./Compontent/Navbar";
import Home from "./Compontent/Home";
import About from "./Compontent/About";
import Contact from "./Compontent/Contact";
import Skill from "./Compontent/Skill";
import Education from "./Compontent/Education";
import Project from "./Compontent/Project";
import Futter from "./Compontent/Futter";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const SkillRef = useRef(null)
  const contactRef = useRef(null);
  const eductionRef = useRef(null);
  const projectRef = useRef(null)


  const scrollToSection = (section) => {
    if (section === "home") homeRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "about") aboutRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "skill") SkillRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "contact") contactRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "education") eductionRef.current.scrollIntoView({ behavior: "smooth" })
    if (section === "project") projectRef.current.scrollIntoView({ behavior: "smooth" })
  };

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} />
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Skill ref={SkillRef} />
      <Education ref={eductionRef} />
      <Project ref={projectRef} />
      <Contact ref={contactRef} />
      <Futter/>
    </div>
  );
}

export default App;
