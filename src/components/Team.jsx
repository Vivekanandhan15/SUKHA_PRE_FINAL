import React from 'react';
import './Team.css';

const Team = () => {
    const members = [
        { name: 'Niki', role: 'Program Coordinator' },
        { name: 'Shiva', role: 'Lead Educator' },
        { name: 'Ayush', role: 'Tech Mentor' },
        { name: 'Sukanya', role: 'Operations' },
        { name: 'Vins', role: 'Student Success' },
        { name: 'Abi', role: 'Community Lead' },
        { name: 'Sripathy', role: 'Strategic Advisor' },
        { name: 'Chetna', role: 'Content Head' },
    ];

    return (
        <section className="team-section" id="team">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Our Dedicated <span className="gradient-text">Team</span></h2>
                    <p className="section-subtitle">Meet the passionate individuals driving our mission forward.</p>
                </div>
                <div className="team-grid">
                    {members.map((member, index) => (
                        <div key={index} className="team-card glass-effect">
                            <div className="member-image-container">
                                <div className="member-image placeholder-box">
                                    <span>Photo</span>
                                </div>
                            </div>
                            <div className="member-info">
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
