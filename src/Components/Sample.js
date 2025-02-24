import React from "react";
import { Link } from "react-router-dom";
import "./Sample.css"; // Import new CSS file

const Sample = () => {
  return (
    <div className="sample-navbar">
      {/* Link to Home Page */}
      <Link to="/" className="sample-title">AI-VERSE</Link>
      
      <div className="sample-links">
        <Link to="/problem-statements">Problem Statement</Link>
        <Link to="/timeline">Time Line</Link>
        <Link to="/judges">Judges</Link>
        <Link to="/contacts">Contact</Link>
        <Link to="/faq">FAQ</Link>
      </div>
      
      <button className="sample-register-button"
      onClick={() => window.open("https://forms.gle/EP8JoqhBbdp7hSde9", "_blank")}
      >Register Now</button>
    </div>
  );
};

export default Sample;

