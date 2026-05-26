import React from 'react';
import './Team.css';

import nikitaImg from '../assets/Team/Nikita Co-COO.jpg';
import shivaImg from '../assets/Team/Shiva Chandrika Co-COO.png';
import ayushImg from '../assets/Team/Ayush CFO.jpg';
import sukanyaImg from '../assets/Team/Sukanya HR.jpg';
import vinsImg from '../assets/Team/Vinnarasi - Core Team.jpg';
import sripathyImg from '../assets/Team/Sripathy - Core Team.jpeg';
import vedhImg from '../assets/Team/Vedh Core Team.png';
import abishekImg from '../assets/Team/Abishek Core team.jpeg';
import chetnaImg from '../assets/Team/Chetna.png';

const Team = () => {
    const members = [
        { name: 'Nikitha', role: 'Co-COO', image: nikitaImg, objectPosition: 'center 15%' },
        { name: 'Shiva Chandrika', role: 'Co-COO', image: shivaImg, objectPosition: 'center 20%' },
        { name: 'Ayush', role: 'CFO', image: ayushImg, objectPosition: 'center 20%' },
        { name: 'Sukanya', role: 'HR', image: sukanyaImg, objectPosition: 'center 25%' },
        { name: 'Vinnarasi', role: 'Core Team', image: vinsImg, objectPosition: 'center 20%' },
        { name: 'Sripathy', role: 'Core Team', image: sripathyImg, objectPosition: 'center 25%' },
        { name: 'Abishek', role: 'Core Team', image: abishekImg, objectPosition: 'center 20%' },
        { name: 'Vedh', role: 'Core Team', image: vedhImg, objectPosition: 'center 20%' },
        { name: 'Chetna', role: 'Content Head', image: chetnaImg, objectPosition: 'center 25%' },
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
                        <div
                            key={index}
                            className={`team-card glass-effect${index === members.length - 1 ? ' team-card--solo' : ''}`}
                        >
                            <div className="member-image-container">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="member-image"
                                    style={{ objectPosition: member.objectPosition }}
                                />
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
