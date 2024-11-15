import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Project from "./components/Project";

function App() {
  return (
    <div id="page-top">
      <Navbar />
      <div className="container-fluid p-0">
        <About />
        <hr className="m-0" />
        <Skills />
        <hr className="m-0" />
        <Experience />
        <hr className="m-0" />
        <Education />
        <hr className="m-0" />
        <Project />
      </div>
    </div>
  );
}

export default App;
