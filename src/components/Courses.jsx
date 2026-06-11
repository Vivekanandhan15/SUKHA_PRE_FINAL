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
            title: 'English Programme',
            subtitle: 'Finding Confidence, One Conversation at a Time',
            image: englishImg,
            summary: 'Our six-month English Programme places spoken communication at its heart. Through engaging activities focused on grammar, listening, speaking, reading and writing, students gradually overcome their fear of English and begin expressing themselves with confidence. Because language is not just about words, it is about being heard.'
        },
        {
            id: 2,
            title: 'Beyond The Chalkboard',
            subtitle: 'Discovering Passions Beyond the Classroom',
            image: btcImg,
            summary: "Learning doesn't end when the lesson does. Beyond The Chalkboard introduces students to experiences such as football, dance, music, theatre, art and more. Guided by professionals from diverse fields, students explore new interests, uncover hidden talent and build confidence through creativity and play."
        },
        {
            id: 3,
            title: 'Book Club Project',
            subtitle: 'Where Stories Spark Possibilities',
            image: bookImg,
            summary: 'Every story opens a new world. Through storytelling sessions led by passionate storytellers, students develop imagination, curiosity, empathy and a lifelong love for reading. Over six months, books become more than pages. They become windows to endless possibilities.'
        },
        {
            id: 4,
            title: 'Dare To Dream',
            subtitle: 'If They Can See It, They Can Become It',
            image: d2dImg,
            summary: "Many children don't dream big simply because they haven't been shown what's possible. Through interactive conversations with professionals from different walks of life, students gain exposure to diverse careers, inspiring journeys and real-world experiences. The goal is simple: help every child dream a little bigger than they did yesterday."
        }
    ];

    const toggleExpand = (id) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    return (
        <section id="courses" className="courses-section section-padding">
            <div className="container">
                <div className="section-header text-center mb-lg animate-fade-in-down">
                    <h2 className="section-title">Our Programmes</h2>
                    <p className="section-subtitle">Creating Experiences That Shape Futures</p>
                </div>

                <div className="courses-grid animate-fade-in-up delay-100">
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
                                <p className="course-subtitle">{course.subtitle}</p>
                                <p className="course-summary">{course.summary}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
