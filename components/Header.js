"use client";
import React, { useState } from "react";
import "./header.css";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeMobileMenu();
    }
  };

  return (
    <header className="header">
      <div className="desktop-nav">
        <a href="#work">Work Experience</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="#education">Education</a>
      </div>
      <div className="mobile-nav">
        <div className="hamburger" onClick={toggleMobileMenu}>
          ☰
        </div>
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <span className="close-button" onClick={closeMobileMenu}>
              &times;
            </span>
            <a onClick={() => scrollToSection("work")}>Work Experience</a>
            <a onClick={() => scrollToSection("projects")}>Projects</a>
            <a onClick={() => scrollToSection("certifications")}>
              Certifications
            </a>
            <a onClick={() => scrollToSection("education")}>Education</a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
