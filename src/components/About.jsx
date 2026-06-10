import React, { useState } from 'react';
import './About.css';
import educationalImpactImg from '../assets/educational-impact/Educational-impact.jpeg';

const About = () => {
    const [activeAccordion, setActiveAccordion] = useState('mission');

    const accordionData = [
        {
            id: 'mission',
            title: 'Our Mission',
            subtitle: 'Building Confidence. Creating Opportunity.',
            content: 'We believe education is about more than lessons and textbooks. Our mission is to empower learners with the communication skills, confidence and exposure they need to navigate the world with courage. Through mentorship-led learning and meaningful experiences, we help students discover their potential and realise that their dreams are within reach.'
        },
        {
            id: 'vision',
            title: 'Our Vision',
            subtitle: 'A World Where Every Human Has a Voice',
            content: 'We envision a future where no one is limited by circumstance, language or access. A future where every learner feels confident expressing themselves, exploring opportunities and pursuing the life they dream of.'
        },
        {
            id: 'culture',
            title: 'Our Culture',
            subtitle: 'Where Learning Begins Without Fear',
            content: 'At Sukha, classrooms are built on trust, encouragement and connection. We celebrate curiosity, embrace diverse perspectives and create spaces where learners feel comfortable making mistakes, asking questions and growing at their own pace. Because confidence flourishes when learning feels safe.'
        }
    ];

    const timelineData = [
        {
            year: '2020',
            title: 'A Dream Takes Root',
            event: 'Sukha Education Foundation begins as a grassroots initiative dedicated to making learning more accessible and meaningful.'
        },
        {
            year: '2021',
            title: 'Learning Beyond Boundaries',
            event: 'Our first digital learning initiative is launched, allowing us to reach and support more students.'
        },
        {
            year: '2022',
            title: '10,000 Lives Touched',
            event: 'A significant milestone that reflects the growing impact of our programs and community.'
        },
        {
            year: '2023',
            title: 'Growing Through Collaboration',
            event: 'Partnerships with educational organisations help us expand our reach and deepen our impact.'
        }
    ];

    return (
        <section id="about" className="about-section section-padding">
            <div className="container">
                <div className="section-header text-center mb-lg animate-fade-in-down">
                    <h2 className="section-title">Our Story</h2>
                    <p className="section-subtitle">It Started With a Simple Question</p>
                </div>

                <div className="story-grid">
                    <div className="story-accordion animate-fade-in-up delay-100">
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
                                        <h4 className="accordion-subtitle" style={{ fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
                                            {item.subtitle}
                                        </h4>
                                        <p style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>{item.content}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="story-text-block glass-effect animate-fade-in-up delay-200">
                        <div className="story-image-wrap">
                            <img
                                src={educationalImpactImg}
                                alt="Educational impact at Sukha Education Foundation"
                                className="story-impact-image"
                            />
                        </div>
                        <div className="story-question-box" style={{ margin: '1.5rem 0', padding: '1rem', borderLeft: '4px solid var(--color-primary)', background: 'rgba(194, 142, 178, 0.05)', borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}>
                            <p style={{ fontStyle: 'italic', fontWeight: '600', fontSize: '1.1rem', color: 'var(--color-primary)', lineHeight: '1.5' }}>
                                "What if one's future wasn't determined by their ability to speak English?"
                            </p>
                        </div>
                        <div className="story-body-paragraphs" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1rem', lineHeight: '1.7', color: 'var(--color-text-dark)' }}>
                            <p>
                                Sukha Education Foundation was founded by Kavya and Sanjana, with a shared belief that countless people possess talent, intelligence and ambition but often miss opportunities because they lack confidence when it comes to communicating in English.
                            </p>
                            <p>
                                Rather than adopting a traditional teacher-student model, they envisioned something different: a space where learning felt welcoming instead of intimidating.
                            </p>
                            <p>
                                A space where mentors became friends, conversations replaced lectures and learners felt empowered to speak without the fear of being judged.
                            </p>
                            <p>
                                What began as a small community initiative has since grown into a thriving ecosystem of learning, mentorship, creativity and exploration. Today, Sukha continues to nurture confident minds both young and old, helping them discover not just a language but their voice.
                            </p>
                        </div>
                    </div>

                    <div className="story-timeline animate-fade-in-up delay-300">
                        <h3 className="timeline-header" style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--color-text-dark)' }}>Our Journey</h3>
                        <div className="timeline-track" style={{ top: '45px' }}></div>
                        {timelineData.map((item, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-dot" style={{ top: '6px' }}></div>
                                <div className="timeline-info">
                                    <span className="timeline-year">{item.year}</span>
                                    <h4 className="timeline-title" style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--color-text-dark)', margin: '2px 0' }}>
                                        {item.title}
                                    </h4>
                                    <p className="timeline-event" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>{item.event}</p>
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
