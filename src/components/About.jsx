import React, { useState } from 'react';
import './About.css';

const About = () => {
    const [activeAccordion, setActiveAccordion] = useState('mission');

    const accordionData = [
        {
            id: 'mission',
            title: 'Mission',
            content: 'Our mission is to empower students through quality education, fostering innovation and leadership in the next generation.'
        },
        {
            id: 'vision',
            title: 'Vision',
            content: 'To be a global leader in educational excellence, creating a world where every child has the opportunity to thrive and succeed.'
        },
        {
            id: 'culture',
            title: 'Culture',
            content: 'We cultivate an environment of inclusivity, curiosity, and respect, where diversity is celebrated and collaboration is key.'
        }
    ];

    const timelineData = [
        { year: '2020', event: 'Foundation established in local community' },
        { year: '2021', event: 'Launched first digital learning initiative' },
        { year: '2022', event: 'Reached milestone of 10,000 students' },
        { year: '2023', event: 'Partnered with international educational NGOs' }
    ];

    return (
        <section id="about" className="about-section section-padding">
            <div className="container">
                <h2 className="section-title text-center mb-lg">Our Story</h2>

                <div className="story-grid">
                    {/* Left: Expandable List */}
                    <div className="story-accordion">
                        {accordionData.map((item) => (
                            <div
                                key={item.id}
                                className={`accordion-item ${activeAccordion === item.id ? 'active' : ''}`}
                                onClick={() => setActiveAccordion(item.id)}
                            >
                                <div className="accordion-header">
                                    <h3>{item.title}</h3>
                                    <span className="accordion-icon">{activeAccordion === item.id ? '−' : '+'}</span>
                                </div>
                                {activeAccordion === item.id && (
                                    <div className="accordion-content">
                                        <p>{item.content}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Middle: Text Block */}
                    <div className="story-text-block glass-effect">
                        <div className="story-image-placeholder">
                            <div className="placeholder-box" style={{ height: '200px' }}>Educational Impact</div>
                        </div>
                        <p className="mt-md">
                            Sukha Education Foundation was born from a simple belief: that education is the most powerful tool to change the world. What started as a small community initiative has grown into a multi-faceted organization dedicated to breaking barriers and building futures.
                        </p>
                        <p className="mt-sm">
                            We focus on holistic development, ensuring that our students are not just academically proficient, but also socially conscious and emotionally resilient.
                        </p>
                    </div>

                    {/* Right: Up to Down Timeline */}
                    <div className="story-timeline">
                        <div className="timeline-track"></div>
                        {timelineData.map((item, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-info">
                                    <span className="timeline-year">{item.year}</span>
                                    <p className="timeline-event">{item.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
