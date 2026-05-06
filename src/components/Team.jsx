import React from 'react';
import './Team.css';

import nikitaImg from '../assets/team/Nikita Co-COO.jpg';
import shivaImg from '../assets/team/Shiva Chandrika Co-COO.png';
import ayushImg from '../assets/team/Ayush CFO.jpg';
import sukanyaImg from '../assets/team/Sukanya HR.jpg';
import vinsImg from '../assets/team/Vinnarasi - Core Team.jpg';
import sripathyImg from '../assets/team/Sripathy - Core Team.jpeg';
import vedhImg from '../assets/team/Vedh Core Team.PNG';
import abishekImg from '../assets/team/Abishek Core team.jpeg';
import chetnaImg from '../assets/team/Chetna.PNG';
import neethaImg from '../assets/team/Neetha Narresh.jpg';

const Team = () => {
    const members = [
        { name: 'Nikita', role: 'Co-COO', image: nikitaImg },
        { name: 'Shiva Chandrika', role: 'Co-COO', image: shivaImg },
        { name: 'Ayush', role: 'CFO', image: ayushImg },
        { name: 'Sukanya', role: 'HR', image: sukanyaImg },
        { name: 'Neetha Narresh', role: 'Core Team', image: neethaImg },
        { name: 'Vinnarasi', role: 'Core Team', image: vinsImg },
        { name: 'Sripathy', role: 'Core Team', image: sripathyImg },
        { name: 'Abishek', role: 'Core Team', image: abishekImg },
        { name: 'Vedh', role: 'Core Team', image: vedhImg },
        { name: 'Chetna', role: 'Content Head', image: chetnaImg },
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
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="member-image"
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
