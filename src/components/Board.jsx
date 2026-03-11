import React, { useState } from 'react';
import './Board.css';

const Board = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    const directors = [
        {
            id: 1,
            name: 'Kavya',
            role: 'Co-Founder',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid nihil numquam expedita ipsam dolorem ullam nulla quam architecto praesentium.',
            linkedin: '#'
        },
        
        {
            id: 2,
            name: 'Sanjana',
            role: 'Co-Founder',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid nihil numquam expedita ipsam dolorem ullam nulla quam architecto praesentium.',
            linkedin: '#'
        }
    ];

    return (
        <section className="board-section section-padding" id="board">
            <div className="container">
                <div className="section-header text-center mb-lg">
                    <h2 className="section-title">Board of <span className="gradient-text">Directors</span></h2>
                    <p className="section-subtitle">Leadership dedicated to transforming lives through education.</p>
                </div>

                <div className="board-grid">
                    {directors.map((director) => (
                        <div
                            key={director.id}
                            className={`director-card clickable-box ${selectedMember === director.id ? 'active' : ''}`}
                            onClick={() => setSelectedMember(selectedMember === director.id ? null : director.id)}
                        >
                            <div className="director-visual">
                                <div className="pic-circle placeholder-box">Pic</div>
                            </div>

                            <div className="director-info">
                                <div className="name-desig">
                                    <h3>{director.name}</h3>
                                    <p className="role-tag">{director.role}</p>
                                </div>

                                <div className={`director-bio ${selectedMember === director.id ? 'show' : ''}`}>
                                    <p>{director.content}</p>
                                    <a href={director.linkedin} className="linkedin-link mt-sm">
                                        View Professional Profile →
                                    </a>
                                </div>

                                <div className="click-hint">
                                    {selectedMember === director.id ? 'Click to Close' : 'Click to read bio'}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Board;
