import React, { useEffect } from 'react';
import './ProblemStatements.css';
import Sample from './Sample';

function ProblemStatements() {
    const problemStatements = [
        {
            title: "AI/ML-Based Detection of Face-Swap Deep Fake Videos",
            description: "The rise of AI-generated deep fake videos has introduced significant threats, including misinformation, identity fraud, and reputational harm. Face-swapping deep fakes, in particular, pose challenges for security agencies in detecting manipulated content. Due to rapid advancements in AI/ML and generative models, identifying such deep fakes has become increasingly complex. The goal is to develop an AI/ML-powered forensic solution to analyze videos and authenticate their legitimacy by detecting face-swapped manipulations."
        },
        {
            title: "AI Bot with Voice Assistant",
            description: "Develop an AI bot with a Voice assistant that listens to end-user questions/queries and replies back with a proper response(S2S) system. The challenge here would be that the end user can speak in any language and the bot should be able to respond in the same language. The AI bot should have a character and a back story (For example, A rude banker who hesitates to answer the query to the customer or a soft and humble actor who loves to respond to his fans) and should stick to it. The bot should answer only related to its backstory and character."
        },
        {
            title: "Real-Time Emotion Detection from Voice Signals",
            description: "Develop a system capable of detecting and categorizing emotions (e.g., happiness, sadness, anger, neutrality) from voice inputs in real time. This technology can be applied in customer service, mental health monitoring, and human-computer interaction. The system should accurately extract emotional features from voice signals and provide immediate feedback for live applications."
        }
    ];

    useEffect(() => {
        // Animation for cards to fade in sequentially
        const cards = document.querySelectorAll('.problem-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, 300 * index);
        });
    }, []);

    return (
        <div>
            <Sample />
            
            <div className="problem-statement">
                <div className="problem-statements-content">
                    {problemStatements.map((problem, index) => (
                        <div key={index} className={`problem-card ${index === 2 ? 'third-card' : ''}`}>
                            <div className="problem-card-inner">
                                <h2 className="problem-title">{problem.title}</h2>
                                <div className="glow-line"></div>
                                <p className="problem-description">{problem.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* <Footer/> */}
        </div>
    );
}

export default ProblemStatements;