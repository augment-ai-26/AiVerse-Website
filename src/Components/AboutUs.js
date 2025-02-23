import React from "react";
import Countdown from "react-countdown";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AboutUs.css";
// import about1 from '../Images/1.webp';
import about2 from '../Images/2.webp';
import about3 from '../Images/3.webp';
import about4 from '../Images/4.webp';
import about5 from '../Images/5.webp';

// import aboutImg3 from "../Images/about_img3.jpeg";  

// Countdown Renderer with Hexagonal UI
const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="countdown">
      <div className="hexagon">
        <span className="time">{days}</span>
        <span className="label">day</span>
      </div>
      <div className="hexagon">
        <span className="time">{hours}</span>
        <span className="label">hou</span>
      </div>
      <div className="hexagon">
        <span className="time">{minutes}</span>
        <span className="label">min</span>
      </div>
      <div className="hexagon">
        <span className="time">{seconds}</span>
        <span className="label">sec</span>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      <div className="content">
        {/* Left Side - Image Carousel */}
        <div className="image-slider">
          <Slider {...settings}>
            {/* <img src={about1} alt="Event 1" className="event" /> */}
            <img src={about2} alt="Event 2" className="event" />
            <img src={about3} alt="Event 3" className="event" />
            <img src={about4} alt="Event 4" className="event" />
            <img src={about5} alt="Event 5" className="event" />
            {/* <img src={aboutImg3} alt="Event 3" className="event-image" /> */}
          </Slider>
        </div>

        {/* Right Side - Event Details */}
        <div className="event-box">
          <h2 className="event-name">AUGMENT AI</h2>
          <p className="event-description">
          Augment.AI, an initiative by the Information Science Department at BMS College of Engineering, is a thriving community dedicated to Artificial Intelligence. Our vision is to bring together like-minded individuals who are passionate about AI, fostering learning, collaboration, and innovation. Through workshops, projects, and events, we aim to equip students with hands-on experience in AI and its real-world applications. This hackathon is a testament to our mission, challenging participants to develop AI-driven solutions that enhance existing services. We believe in pushing the boundaries of what AI can achieve, encouraging creativity and problem-solving. By participating, you’ll not only sharpen your technical skills but also contribute to impactful innovations. Join us in shaping the future of AI and be part of a movement that blends technology with purpose. Let’s innovate, collaborate, and augment the world with AI!
          </p>
          <h3 className="event-start-text">Events Starts in</h3>
          <Countdown date={new Date("2025-02-25T00:00:00")} renderer={renderer} />


        </div>
      </div>
    </div>
  );
};

export default AboutUs;




