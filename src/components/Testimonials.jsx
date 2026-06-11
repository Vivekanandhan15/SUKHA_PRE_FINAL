import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Testimonials.css';

// ── Testimonial Images ────────────────────────────────────────
import geethaImg from '../assets/testimonials/Geetha.png';
import priyaImg from '../assets/testimonials/Priya.png';
import shaliniImg from '../assets/testimonials/Shalini.jpg';
import abhiramiImg from '../assets/testimonials/abhirami.png';
import agathiyanImg from '../assets/testimonials/agathiyan.png';
import rajeshwariImg from '../assets/testimonials/rajeshwari.png';
import sandeepImg from '../assets/testimonials/sandeep.png';
import tarunImg from '../assets/testimonials/tarun.png';
import vishalImg from '../assets/testimonials/vishal.png';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const timerRef = useRef(null);

    const testimonials = [
        {
            name: 'Sandeep',
            title: 'Student',
            initials: 'SA',
            image: sandeepImg,
            pos: 'center 12%',
            text: '"Selva Sir\'s class was very helpful. What I liked most about his class is that he said, be it any sport—whether cricket, football, or even silambam—do it with a lot of happiness and joy. This helped me a lot and gave me a brand-new perspective."'
        },
        {
            name: 'Tarun',
            title: 'Student',
            initials: 'TA',
            image: tarunImg,
            pos: 'center 10%',
            text: '"I liked Selva Sir\'s class a lot. I really enjoyed his practical way of teaching, especially where he showed us live skating and everything. He also gave us a lot of important life lessons, like how time is just as important as money, and that we should always have multiple plans (Plan A, B, and C)."'
        },
        {
            name: 'Vishal',
            title: 'Student',
            initials: 'VI',
            image: vishalImg,
            pos: 'center 12%',
            text: '"I liked Shiva Chandrika\'s class very much during our \"Dare to Dream\" session. Multiple points from her class have stuck in my mind ever since, like when she said we should not choose a job only for money, but for what makes us happy, because happiness is what\'s more important."'
        },
        {
            name: 'Shalini',
            title: 'Student',
            initials: 'SH',
            image: shaliniImg,
            pos: 'center 18%',
            text: '"You have shown me what my abilities can be, that I wasn\'t able to see at first.... When I feel like I am not doing well, you boost my confidence level. You are always there for me. I literally feel like this is my little home."'
        },
        {
            name: 'Britto',
            title: 'Student',
            initials: 'BR',
            text: '"Before joining this class I was nervous to speak, but now I have improved a lot. This class makes me very confident to speak even if I sometimes make mistakes. I really liked learning new words in the class."'
        },
        {
            name: 'Geetha',
            title: 'Student',
            initials: 'GE',
            image: geethaImg,
            pos: 'center 12%',
            text: '"All the classes that they have conducted were easy to understand, and the workshop conducted on CVs was very helpful. One thing I wanted to share is that in my initial classes, I was so shy and scared to speak on stage, but Ma\'am encouraged me, which helped me a lot."'
        },
        {
            name: 'Abhirami',
            title: 'Student',
            initials: 'AB',
            image: abhiramiImg,
            pos: 'center 15%',
            text: '"I have been attending Sukha classes for four months, and it has been very helpful. I have developed new patterns for learning, and I thank Ma\'am for helping me and being very approachable for any questions and doubts."'
        },
        {
            name: 'Priya',
            title: 'Student',
            initials: 'PR',
            image: priyaImg,
            pos: 'center 20%',
            text: '"I have been attending Sukha classes for the last three years and have only missed two classes in total, which shows how much I am interested in them! I love the way Ma\'am teaches us—at the end, she has us do an activity which really helps me gain practical knowledge."'
        },
        {
            name: 'Rajeshwari',
            title: 'Student',
            initials: 'RA',
            image: rajeshwariImg,
            pos: 'center 20%',
            text: '"Sukha helped me identify the talents that are within me by giving me the opportunities to showcase them."'
        },
        {
            name: 'Agathiyan',
            title: 'Student',
            initials: 'AG',
            image: agathiyanImg,
            pos: 'center 18%',
            text: '"The classes are very useful to me because I didn\'t learn even basic English during my school days. I feel the curriculum is very well-structured, and the speaking activities are incredibly helpful for me to overcome my fear of speaking in front of an audience."'
        }
    ];

    const total = testimonials.length;

    const goTo = useCallback((index) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveIndex(index);
        setTimeout(() => setIsAnimating(false), 600);
    }, [isAnimating]);

    const goNext = useCallback(() => {
        goTo((activeIndex + 1) % total);
    }, [activeIndex, total, goTo]);

    const goPrev = useCallback(() => {
        goTo((activeIndex - 1 + total) % total);
    }, [activeIndex, total, goTo]);

    // Auto-loop
    useEffect(() => {
        if (isPaused) return;
        timerRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % total);
        }, 5000);
        return () => clearInterval(timerRef.current);
    }, [isPaused, total]);

    const handleManualNav = (fn) => {
        clearInterval(timerRef.current);
        setIsPaused(true);
        fn();
        // Resume auto-loop after 8 seconds of inactivity
        setTimeout(() => setIsPaused(false), 8000);
    };

    return (
        <section className="testimonials-section" id="testimonials">
            <div className="container">
                <div className="section-header text-center testimonials-header">
                    <h2 className="section-title">Success <span className="gradient-text">Stories</span></h2>
                    <p className="section-subtitle">Hear from our students who have transformed their lives.</p>
                </div>

                <div className="testimonials-carousel-wrapper">
                    {/* Prev Arrow */}
                    <button
                        className="carousel-arrow carousel-arrow--prev"
                        onClick={() => handleManualNav(goPrev)}
                        aria-label="Previous testimonial"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>

                    {/* Slides */}
                    <div className="testimonials-track-window">
                        <div
                            className="testimonials-track"
                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                        >
                            {testimonials.map((item, index) => (
                                <div key={index} className="testimonial-slide">
                                    <div className="testimonial-card">
                                        {/* Left: Avatar + Name */}
                                        <div className="testimonial-person">
                                            <div className="person-avatar">
                                                {item.image ? (
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="avatar-img"
                                                        style={{ objectPosition: item.pos || 'center 15%' }}
                                                    />
                                                ) : (
                                                    <span>{item.initials}</span>
                                                )}
                                            </div>
                                            <div className="person-name-tag">
                                                <span className="person-name">{item.name}</span>
                                            </div>
                                        </div>

                                        {/* Right: Quote Box */}
                                        <div className="testimonial-quote-box">
                                            <p className="testimonial-text">{item.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Next Arrow */}
                    <button
                        className="carousel-arrow carousel-arrow--next"
                        onClick={() => handleManualNav(goNext)}
                        aria-label="Next testimonial"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                </div>

                {/* Dots */}
                <div className="testimonials-dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`testimonial-dot ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => handleManualNav(() => goTo(index))}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
