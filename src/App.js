import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Make sure all components are imported correctly
import EventPage from "./Components/EventPage";
import Timeline from "./Components/Timeline";
import Judges from "./Components/Judges";
import FAQ from "./Components/FAQ";
import Contact from "./Components/Contact";
import ProblemStatements from "./Components/ProblemStatements";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventPage />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/judges" element={<Judges />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/problem-statements" element={<ProblemStatements />} />
      </Routes>
    </Router>
  );
}

export default App;



