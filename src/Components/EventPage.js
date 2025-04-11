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

            {/* Register Button with Google Form Link */}
            <button 
              className="register-now"
              onClick={() => window.open("https://forms.gle/EP8JoqhBbdp7hSde9", "_blank")}
            >
              Completed!!
            </button>

            {/* Tagline */}
            <p className="tagline">Uniting | Creating | Innovation | Creativity</p>

            {/* Event Details Section */}
            <div className="event-details-container">
              <div className="event-details-card">
                <p className="details"><strong>🏆 Prize Pool</strong></p>
                <p className="details-value">₹45,000</p>
              </div>

              <div className="event-details-card">
                <p className="details"><strong>📝 Registration Fee</strong></p>
                <p className="details-value">₹200 per team</p>
              </div>

              <div className="event-details-card">
                <p className="details"><strong>📄 Brochure</strong></p>
                <button 
                  className="download-button"
                  onClick={() => window.open("https://drive.google.com/file/d/1g2XQH5jd5jD4fzshxU2LNz3o1NJEkLz3/view?usp=sharing", "_blank")}
                >
                  Download
                </button>
              </div>
            </div>

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






