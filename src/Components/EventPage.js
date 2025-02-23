import React from "react";
import "./EventPage.css";
import Image1 from '../Images/home_img1.png';
import AboutUs from "./AboutUs";
import OrganizingTeam from "./OrganizingTeam";
import Footer from "./Footer";
import Sample from "./Sample";

const EventPage = () => {
  return (
    <div>
      <Sample/>
      
      <div className="event-container">
        <div className="main-section">
          <div className="event-info">
            <h1>
              A 72-Hour <br />
              Online Hackathon  <br />
              Presented By <br />
              Augment AI
            </h1>
            <button className="register-now">Register Now</button>
            <p className="tagline">Uniting | Creating | Innovation</p>
          </div>
          <img className="event-image" src={Image1} alt="Event" />
        </div>
      </div>
      
      <AboutUs />
      <OrganizingTeam />
      <Footer />
    </div>
  );
};

export default EventPage;




