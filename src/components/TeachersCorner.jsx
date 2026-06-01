import React, { useState } from 'react';
import './TeachersCorner.css';

const TeachersCorner = () => {
    const [faqOpen, setFaqOpen] = useState(0);

    const faqs = [
        {
            q: 'How can I join the teaching program?',
            a: 'You can apply through our "Join Us" section or email us at educationsukha@gmail.com.'
        },
        {
            q: 'What qualifications do I need to have?',
            a: 'All volunteers must be 18 years or older. A passion for teaching, being open to feedback and long term commitment is what we look for in our mentors.'
        },
        {
            q: 'Do you offer remote teaching opportunities?',
            a: 'No, we do not offer any remote teaching opportunities. But if you are interested in contributing for non-teaching remote opportunities, email us at educationsukha@gmail.com or reach out to us on Instagram/LinkedIn. '
        },
        {
            q: 'Is there a training period for new teachers?',
            a: 'Yes, all teacher mentors will be trained in the orientation, followed by monthly online/offline sessions. Additionally, some classes will be observed and helpful feedback will be shared to make you a better mentor. '
        },
        {
            q: 'Do you provide certificates?',
            a: "We provide an official program completion letter that outlines the details of your volunteer experience. This letter can be used for certification or documentation purposes. Volunteers are eligible to receive this letter provided they adhere to the program's non-negotiable requirements, which will be explained during the orientation."
        },
        {
            q: 'Do you provide reimbursements for transport?',
            a: 'We offer reimbursements only for printing expenses incurred during the program. The process will be explained during the orientation session.'
        },
    ];

    // Add teacher story cards here when ready — leave empty until then
    const teacherStories = [
        // Example entry:
        // {
        //     id: 1,
        //     date: '12 Oct 2023',
        //     tag: 'Rural Centre',
        //     quote: '"Teaching at Sukha has been the most fulfilling journey..."',
        //     action: 'Watch Story',
        // },
    ];

    return (
        <section id="teachers" className="teachers-section section-padding">
            <div className="container">
                <h2 className="section-title text-center mb-lg">Teacher's Corner</h2>

                {/* FAQ — always full-width */}
                <div className="faq-section faq-full">
                    <h3 className="faq-title">FAQ</h3>
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

                {/* Teacher story cards — only renders when entries exist */}
                {teacherStories.length > 0 && (
                    <div className="teacher-stories-grid">
                        {teacherStories.map((story) => (
                            <div key={story.id} className="teacher-card glass-effect">
                                <div className="teacher-meta-badges">
                                    <span className="badge">{story.date}</span>
                                    <span className="badge">{story.tag}</span>
                                </div>
                                <p className="mt-sm">{story.quote}</p>
                                <button className="btn-text-link mt-sm">{story.action} ↑</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default TeachersCorner;
