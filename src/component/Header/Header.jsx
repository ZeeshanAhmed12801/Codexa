import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      {/* Logo */}
      <div className="logo">
        <h1>
          CODE<span>XA</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className={menuOpen ? "active" : ""}>
        <ul className="nav-links">

          <li>
            <a href="/" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="/service" onClick={() => setMenuOpen(false)}>
              Services
            </a>
          </li>

          <li>
            <a href="/project" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>

          <li>
            <a href="/about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>

          <li>
            <a href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>

        </ul>
      </nav>

      {/* Get a Quote */}
      <button className="quote-btn">
        Get a Quote
      </button>

      {/* Mobile Menu */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </div>

    </header>
  );
}

export default Header;