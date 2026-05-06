import React, { useState } from 'react';
import './TeachersCorner.css';

const TeachersCorner = () => {
    const [faqOpen, setFaqOpen] = useState(0);

    const faqs = [
        { q: 'How can I join the teaching program?', a: 'You can apply through our "Join Us" section or send your CV to careers@sukha.org' },
        { q: 'What are the required qualifications?', a: 'A graduate degree and a passion for rural education are our primary requirements.' },
        { q: 'Do you offer remote teaching opportunities?', a: 'Yes, we have several digital literacy programs that can be taught remotely.' },
        { q: 'Is there a training period for new teachers?', a: 'Yes, every teacher undergoes a 2-week orientation program before starting.' },
        { q: 'Do you provide certificates and what is the refund policy?', a: 'Yes, we provide official certificates upon course completion. Regarding our refund policy, please contact our support team for detailed terms and conditions.' },
    ];

    return (
        <section id="teachers" className="teachers-section section-padding">
            <div className="container">
                <h2 className="section-title text-center mb-lg">Teachers Corner</h2>

                <div className="teachers-layout">
                    {/* Left: Two Teacher Cards (Expandable/Video) */}
                    <div className="teacher-featured">
                        <div className="teacher-card glass-effect">
                            <div className="teacher-visual">
                                <div className="placeholder-box" style={{ height: '220px' }}>Teacher Picture / Video</div>
                            </div>
                            <div className="teacher-content">
                                <div className="teacher-meta-badges">
                                    <span className="badge">12 Oct 2023</span>
                                    <span className="badge">Rural Centre</span>
                                </div>
                                <p className="mt-sm">
                                    "Teaching at Sukha has been the most fulfilling journey of my career. Seeing the spark of
                                    understanding in a child's eyes makes every kilometer traveled worth it."
                                </p>
                                <button className="btn-text-link mt-sm">Watch Story ↑</button>
                            </div>
                        </div>

                        <div className="teacher-card glass-effect">
                            <div className="teacher-visual">
                                <div className="placeholder-box" style={{ height: '220px' }}>Picture</div>
                            </div>
                            <div className="teacher-content">
                                <div className="teacher-meta-badges">
                                    <span className="badge">05 Nov 2023</span>
                                    <span className="badge">Urban Hub</span>
                                </div>
                                <p className="mt-sm">
                                    "Our hybrid learning model has bridged gaps we never thought possible. Technology is
                                    just a tool, but in the right hands, it's a bridge to the future."
                                </p>
                                <button className="btn-text-link mt-sm">Read Article ↑</button>
                            </div>
                        </div>
                    </div>

                    {/* Right: FAQ Section */}
                    <div className="faq-section">
                        <h3 className="faq-title">Faq</h3>
                        <div className="faq-list">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`faq-item ${faqOpen === index ? 'active' : ''}`}
                                    onClick={() => setFaqOpen(faqOpen === index ? -1 : index)}
                                >
                                    <div className="faq-question">
                                        <span>{faq.q}</span>
                                        <div className="faq-line"></div>
                                    </div>
                                    {faqOpen === index && (
                                        <div className="faq-answer">
                                            <p>{faq.a}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeachersCorner;
