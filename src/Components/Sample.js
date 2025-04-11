import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sample.css"; // Import existing CSS

const Sample = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sample-navbar">
      {/* Logo */}
      <Link to="/" className="sample-title">AI-VERSE</Link>

      {/* Hamburger Button (Visible Only on Mobile) */}
      <button 
        className="hamburger-button" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Navbar Links - Always visible on laptop, toggled on mobile */}
      <div className={`sample-links ${menuOpen ? "show-menu" : ""}`}>
        <Link to="/problem-statements" onClick={() => setMenuOpen(false)}>Problem Statement</Link>
        <Link to="/timeline" onClick={() => setMenuOpen(false)}>Time Line</Link>
        <Link to="/judges" onClick={() => setMenuOpen(false)}>Judges</Link>
        <Link to="/contacts" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>

        {/* Register Button - Now inside the mobile menu */}
        <button className="sample-register-button"
          onClick={() => {
            window.open("https://forms.gle/EP8JoqhBbdp7hSde9", "_blank");
            setMenuOpen(false); // Close menu after clicking register
          }}
        >
          Completed !!
        </button>
      </div>
    </div>
  );
};

export default Sample;




// 
