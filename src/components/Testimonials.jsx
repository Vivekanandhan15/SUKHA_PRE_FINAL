import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            name: 'John Doe',
            degree: 'Computer Science',
            text: '“Sukha has fundamentally changed my career trajectory by providing real-world opportunities.”',
            company: 'Tech Solutions Inc.'
        },
        {
            name: 'Jane Smith',
            degree: 'B.Ed Graduate',
            text: '“The level of mentorship and community support at Sukha is unparalleled in the industry.”',
            company: 'Educational Board'
        },
        {
            name: 'Alex Lee',
            degree: 'Mechanical Eng.',
            text: '“Bridging the gap is more than a slogan here; it is a life-changing reality.”',
            company: 'Global Auto Works'
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Success <span className="gradient-text">Stories</span></h2>
                    <p className="section-subtitle">Hear from our students who have transformed their lives.</p>
                </div>

                <div className="carousel-container glass-effect">
                    <div className="carousel-window">
                        <div className="carousel-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                            {testimonials.map((item, index) => (
                                <div key={index} className="testimonial-slide">
                                    <div className="testimonial-grid">
                                        <div className="testimonial-image-panel">
                                            <div className="placeholder-box" style={{ height: '400px', width: '100%' }}>
                                                Large Student Portrait
                                            </div>
                                        </div>
                                        <div className="testimonial-content-panel">
                                            <div className="testimonial-quote">
                                                <p>{item.text}</p>
                                            </div>
                                            <div className="testimonial-author">
                                                <div className="author-info">
                                                    <h4>{item.name}</h4>
                                                    <p className="author-meta">{item.degree} • {item.company}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="carousel-nav">
                        <div className="carousel-dots">
                            {testimonials.map((_, index) => (
                                <span
                                    key={index}
                                    className={`dot ${index === activeIndex ? 'active' : ''}`}
                                    onClick={() => setActiveIndex(index)}
                                ></span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
