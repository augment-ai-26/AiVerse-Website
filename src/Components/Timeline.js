import React from 'react';
import './Timeline.css';
import Sample from './Sample';

function Timeline() {
  const timelineData = [
    {
      date: "25 February 2025",
      items: [
        "Registration Begins"
      ]
    },
    {
      date: "14 March 2025",
      items: [
        "Registration Ends"
      ]
    },
    {
      date: "15 March 2025",
      items: [
        "Online Inauguration"
      ]
    },
    {
      date: "19 March 2025",
      items: [
        "Hackathon Starts"
      ]
    },
    {
      date: "22 March 2025",
      items: [
        "Submissions"
      ]
    },
    {
      date: "25 March 2025",
      items: [
        "Announcement of Winners"
      ]
    }
  ];

  return (
    <div>
      <Sample/>
    <div className="timeline-container">
      <h1 className="timeline-title">Roadmap</h1>
      
      <div className="timeline">
        <div className="timeline-line"></div>
        
        {timelineData.map(function(item, index) {
          return (
            <div key={index} className="timeline-item">
              <div className="timeline-circle">
                <span className="check-icon">{index+1}</span>
              </div>
              
              <div className="connecting-line"></div>
              
              <div className="timeline-content">
                <div className="content-box">
                  <div className="content-date">{item.date}</div>
                  {item.items.map(function(subItem, subIndex) {
                    return (
                      <div key={subIndex} className="content-item">
                        • {subItem}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default Timeline;