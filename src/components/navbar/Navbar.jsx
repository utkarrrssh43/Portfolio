// import { useState, useEffect } from "react";
// import NavLinks from "./NavLinks";
// import MobileMenu from "./MobileMenu";

import "../../styles/navbar.css";
const NAV_LINKS = [
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <span className="navbar-logo__icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1.5c.9 3.6 2.9 5.6 6.5 6.5-3.6.9-5.6 2.9-6.5 6.5-.9-3.6-2.9-5.6-6.5-6.5 3.6-.9 5.6-2.9 6.5-6.5Z" />
              <path d="M19.5 15c.45 1.8 1.45 2.8 3.25 3.25-1.8.45-2.8 1.45-3.25 3.25-.45-1.8-1.45-2.8-3.25-3.25 1.8-.45 2.8-1.45 3.25-3.25Z" />
            </svg>
          </span>
          Utkarsh Sinha
        </a>

        <ul className="navbar-links">
          {NAV_LINKS.map((item) => (
            <li key={item.label}>
              <a href={item.href} className={item.active ? "active" : ""}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="navbar-btn">
          <span className="navbar-btn__text">Let&rsquo;s Connect</span>

          <svg
            className="navbar-btn__arrow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14m-6-6 6 6-6 6"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}
