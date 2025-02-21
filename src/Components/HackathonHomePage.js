import React, { useEffect } from "react";
import "./HackathonHomePage.css";

const HackathonHomePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll("section").forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight - 100) {
          section.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="animated-bg"></div>

      <nav className="navbar">
        <div className="logo">🚀 Hackathon 2025</div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Problem Statements</a>
          <a href="#">Contact Us</a>
        </div>
      </nav>

      <header className="hero">
        <h1>Hackathon 2025</h1>
        <p>Innovate. Code. Compete.</p>
        <button className="register-btn">Register Now</button>
      </header>

      <section className="section-box">
        <h2>About</h2>
        <p>The Hackathon 2025 is an event where developers, designers, and innovators solve real-world problems.</p>
      </section>

      <section className="section-box">
        <h2>Problem Statements</h2>
        <ul>
          <li>🌍 Climate Change Solutions</li>
          <li>🔒 Cybersecurity Challenges</li>
          <li>🚀 AI & Automation</li>
        </ul>
      </section>

      <section className="section-box contact">
        <h2>Contact Us</h2>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button>Send Message</button>
      </section>
    </div>
  );
};

export default HackathonHomePage;


