import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HackathonHomePage from "./Components/HackathonHomePage";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Ensures animations happen only once
      easing: "ease-in-out", // Smooth animations
    });
  }, []);

  return (
    <div>
      <HackathonHomePage />
    </div>
  );
}

export default App;

