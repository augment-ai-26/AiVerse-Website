import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side - Logo & Tagline */}
        <div className="footer-left">
          <h2 className="footer-logo">
             <span className="logo-bold">AI-VERSE</span>
          </h2>
          <p className="footer-tagline">72 Hours Online Hackathon.</p>
        </div>

        {/* Center - Useful Links */}
        <div className="footer-center">
          <h3 className="footer-heading">Useful Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/Contact">contacts</a></li>
          </ul>
        </div>

        {/* Right Side - Contact Info */}
        <div className="footer-right">
          <h3 className="footer-heading">Contact Us</h3>
          <p className="footer-address">
            <strong>Address:</strong> BMS College Of Engineering <br />
             Banglore
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:reachraitacmw@gmail.com">augmentai@gmail.com</a>
          </p>
          
          <p>
            <strong>Website:</strong>{" "}
            <a href="/">Augment.AI</a>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>Copyright © 2025. Developers Team AUGMENT AI</p>
      </div>
    </footer>
  );
};

export default Footer;
