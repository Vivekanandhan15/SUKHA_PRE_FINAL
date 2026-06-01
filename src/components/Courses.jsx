import React, { useState } from 'react';
import './Courses.css';

import englishImg from '../assets/course/English.jpeg';
import btcImg from '../assets/course/BTC.jpg';
import bookImg from '../assets/course/BOOK_Reading.jpeg';
import d2dImg from '../assets/course/D2D.jpg';

const Courses = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const coursesData = [
        {
            id: 1,
            title: 'English programme',
            image: englishImg,
            summary: 'A carefully designed curriculum, this 6 month programme places spoken English at its core. By focusing on grammar and LSRW we help to strengthen their communication skills by mitigating the fear associated with the English language.',
            details: 'Our primary program uses interactive play-based learning to engage students in English, Mathematics, and Science. We focus on building confidence and a love for learning that lasts a lifetime.'
        },
        {
            id: 2,
            title: 'Beyond The Chalk Board',
            image: btcImg,
            summary: 'This short-term programme offers students activities beyond the classroom. From football, dance, music, theatre and more. With experts from diverse fields leading each session, students explore new skills and passions.',
            details: 'Students gain hands-on experience in computer science, sustainable agriculture, and basic engineering. We partner with local industries to provide real-world internship opportunities.'
        },
        {
            id: 3,
            title: 'Book Club Project',
            image: bookImg,
            summary: 'The Book Club Project aims to bring stories closer to our students through our story tellers. A six month programme, where the students develop curiosity, dabble with their imagination and inculcate a love for reading.',
            details: 'This course covers critical thinking, effective communication, financial literacy, and social-emotional learning. We prepare students for the challenges of adulthood and leadership.'
        },
        {
            id: 4,
            title: 'Dare to Dream',
            image: d2dImg,
            summary: 'Through interactive sessions with professionals across industries, students discover new career paths, inspiring them to dream bigger.',
            details: 'Courses in basic coding, digital safety, and productivity tools. We ensure our students are competent in navigating the modern digital landscape for education and future careers.'
        }
    ];

    const toggleExpand = (id) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    return (
        <section id="courses" className="courses-section section-padding">
            <div className="container">
                <h2 className="section-title text-center mb-lg">Our Courses</h2>

                <div className="courses-grid">
                    {coursesData.map((course) => (
                        <div
                            key={course.id}
                            className={`course-card ${expandedCard === course.id ? 'expanded' : ''}`}
                        >
                            <div className="course-image-container">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="course-image"
                                />
                            </div>
                            <div className="course-content">
                                <h3>{course.title}</h3>
                                <p className="course-summary">{course.summary}</p>

                                {/* <div className={`course-details ${expandedCard === course.id ? 'show' : ''}`}>
                                    <p>{course.details}</p>
                                </div> */}

                                {/* <button
                                    className="btn-text-link mt-sm"
                                    onClick={() => toggleExpand(course.id)}
                                >
                                    {expandedCard === course.id ? 'Read Less ↑' : 'Read More ↓'}
                                </button> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
