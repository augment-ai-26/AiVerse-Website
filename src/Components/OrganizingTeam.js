import React from "react";
import "./OrganizingTeam.css";

import mentor from "../Images/rutajit.webp"
import core1 from '../Images/siri.webp'
import core2 from '../Images/dhanya.webp'
import core3 from '../Images/kalyan.webp'
import core4 from '../Images/sanchitha.webp'
import core5 from '../Images/nidhi.webp'
import core6 from '../Images/vishesh.webp'



const organizingHead = { name: "Rutajit", role: "Mentor", image: mentor };

const teamMembers = [
  
  { name: "Dhanya", role: "Club Coordinator", image: core2 },
  { name: "Kalyan", role: "Club Coordinator", image: core3 },
  { name: "Sanchitha", role: "Design Head", image: core4 },
  { name: "Siri", role: "Sponshorship Head", image: core1 },
  { name: "Nidhi", role: "Marketing Head", image: core5 },
  { name: "Vishesh", role: "Technical Head", image: core6 },
];

const OrganizingTeam = () => {
  return (
    <div className="organizing-team-container">
      <h1 className="team-title">Organizing Team</h1>

      {/* First Row - 1 Card (Centered) */}
      <div className="team-row first-row">
        <div className="team-card">
          <img src={organizingHead.image} alt={organizingHead.name} className="team-image" />
          <h2 className="team-name">{organizingHead.name}</h2>
          <p className="team-role">{organizingHead.role}</p>
        </div>
      </div>

      {/* Second Row - 5 Cards */}
      <div className="team-row second-row">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-image" />
            <h2 className="team-name">{member.name}</h2>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizingTeam;

