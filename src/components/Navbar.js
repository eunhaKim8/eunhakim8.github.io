import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#about");

  const handleNavClick = (href) => {
    setActiveLink(href);
    setIsOpen(false); // 클릭 후 메뉴 닫기
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "#about",
        "#skills",
        "#experience",
        "#education",
        "#awards",
      ];
      let scrollPos = window.scrollY + 100; // 100px 추가하여 위치 조정

      sections.forEach((section) => {
        const sectionElement = document.querySelector(section);
        if (
          sectionElement.offsetTop <= scrollPos &&
          sectionElement.offsetTop + sectionElement.offsetHeight > scrollPos
        ) {
          setActiveLink(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">김은하의 포트폴리오</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile mx-auto mb-2 rounded-circle"
            src={require("../assets/img/me.jpeg")}
            alt="profile"
          />
        </span>
      </a>
      <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          <li className={`nav-item ${activeLink === "#about" ? "active" : ""}`}>
            <a
              className="nav-link js-scroll-trigger"
              href="#about"
              onClick={() => handleNavClick("#about")}
            >
              About Me
            </a>
          </li>
          <li
            className={`nav-item ${activeLink === "#skills" ? "active" : ""}`}
          >
            <a
              className="nav-link js-scroll-trigger"
              href="#skills"
              onClick={() => handleNavClick("#skills")}
            >
              Skills
            </a>
          </li>
          <li
            className={`nav-item ${
              activeLink === "#experience" ? "active" : ""
            }`}
          >
            <a
              className="nav-link js-scroll-trigger"
              href="#experience"
              onClick={() => handleNavClick("#experience")}
            >
              Career & License
            </a>
          </li>
          <li
            className={`nav-item ${
              activeLink === "#education" ? "active" : ""
            }`}
          >
            <a
              className="nav-link js-scroll-trigger"
              href="#education"
              onClick={() => handleNavClick("#education")}
            >
              Education
            </a>
          </li>
          <li
            className={`nav-item ${activeLink === "#awards" ? "active" : ""}`}
          >
            <a
              className="nav-link js-scroll-trigger"
              href="#awards"
              onClick={() => handleNavClick("#awards")}
            >
              Project
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
