import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <div className="main-container">
      <nav className="navbar">
        <Link to="/" className="logo-link">MyServices</Link>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li><Link to="/Services" className="nav-link">SERVICES</Link></li>
            <li><Link to="/blogs" className="nav-link">BLOGS</Link></li>
            <li><Link to="/terms" className="nav-link">TERMS & CONDITIONS</Link></li>
            <li><Link to="/contact" className="nav-link">CONTACT US</Link></li>
            <li><Link to="/login" className="login-link">Login</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
