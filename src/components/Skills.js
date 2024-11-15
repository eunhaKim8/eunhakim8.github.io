import React from "react";

const Skills = () => {
  return (
    <section
      className="resume-section"
      id="skills"
      style={{ paddingTop: "40px", paddingBottom: "5px" }}
    >
      <div className="resum-section-content">
        <h2 className="mb-5" style={{ marginBottom: "1rem, !important" }}>
          Skills
        </h2>
        {/* 프로그래밍 언어 */}
        <div className="subheading mb-3">
          <i className="fa fa-chevron-circle-down"></i> Programing Languages
        </div>
        <ul>
          <li>
            <h4>JAVA, Python, Java Script, HTML, CSS</h4>
          </li>
        </ul>
        <hr></hr>
        <div className="subheading mb-3">
          <i className="fa fa-chevron-circle-down"></i> DataBase
        </div>
        <ul>
          <li>
            <h4>Oracle, Maria DB</h4>
          </li>
        </ul>
        <hr></hr>
        <div className="subheading mb-3">
          <i className="fa fa-chevron-circle-down"></i> Framework & Library
        </div>
        <ul>
          <li>
            <h4>Spring Framework</h4>
          </li>
          <li>
            <h4>React, My Batis, Spring Security, JWT, Java Mail, Maven</h4>
          </li>
        </ul>
        <hr></hr>
        <div className="subheading mb-3">
          <i className="fa fa-chevron-circle-down"></i> Server
        </div>
        <ul>
          <li>
            <h4>Apache Tomacat</h4>
          </li>
        </ul>
        <hr></hr>
        <div className="subheading mb-3">
          <i className="fa fa-chevron-circle-down"></i> Tooling & DevOps
        </div>
        <ul>
          <li>
            <h4>Intelli J, Eclipse, VS Code</h4>
          </li>
          <li>
            <h4>Git, Docker</h4>
          </li>
        </ul>
        <div className="subheading mb-3">
          <br />
        </div>
      </div>
    </section>
  );
};

export default Skills;
