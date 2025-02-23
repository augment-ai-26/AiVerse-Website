import React, { useState } from "react";
import "./FAQ.css"; 
import { FaPlus, FaMinus } from "react-icons/fa"; 
import Sample from "./Sample";

const faqData = [
  { question: " Who can participate in AiVerse?", answer: "Engineering students currently enrolled in any college in India"},
  { question: "What is the format of AiVerse?", answer: "AiVerse is a fully online hackathon" },
  { question: "How can I register for AiVerse?", answer: " You can register through the Register link on the website homepage." },
  { question: "Is there a participation fee?", answer: "Yes, the participation fee is ₹200 per team." },
  { question: "Do I need a team to register, or can I participate individually?", answer: "You must have a team of 3-4 members to participate." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Sample/>
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              <span className="faq-checkbox">▢</span> 
              <span className="faq-text">{faq.question}</span>
              {openIndex === index ? <FaMinus className="faq-icon" /> : <FaPlus className="faq-icon" />}
            </div>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQ;

