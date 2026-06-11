import React from 'react';
import './Board.css';
import kavyaImg from '../assets/Team/kavya.jpeg';
import sanjanaImg from '../assets/Team/Sanjana (Co-Founder).png';

const Board = () => {
    const directors = [
        {
            id: 1,
            name: 'Kavya',
            role: 'Co-Founder',
            image: kavyaImg,
            imgPosition: 'center',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid nihil numquam expedita ipsam dolorem ullam nulla quam architecto praesentium.',
            linkedin: '#'
        },
        {
            id: 2,
            name: 'Sanjana',
            role: 'Co-Founder',
            image: sanjanaImg,
            imgPosition: 'top',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid nihil numquam expedita ipsam dolorem ullam nulla quam architecto praesentium.',
            linkedin: '#'
        }
    ];

    return (
        <section className="board-section section-padding" id="board">
            <div className="container">
                <div className="section-header text-center mb-lg">
                    <h2 className="section-title">Board of Directors</h2>
                    <h3 className="section-subtitle-secondary" style={{ fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--color-primary)', fontWeight: '600', marginBottom: '0.5rem' }}>Guided by Purpose</h3>
                    <p className="section-subtitle" style={{ maxWidth: '700px', margin: '0 auto' }}>
                        Two leaders united by one belief: everyone deserves the chance to learn, grow and succeed. Their vision and commitment continue to shape Sukha's journey and impact.
                    </p>
                </div>

                <div className="board-grid">
                    {directors.map((director) => (
                        <div key={director.id} className="director-card">
                            <div className="director-visual">
                                <img
                                    src={director.image}
                                    alt={director.name}
                                    className="pic-circle"
                                    style={{ objectPosition: director.imgPosition || 'center' }}
                                />
                            </div>

                            <div className="director-info">
                                <div className="name-desig">
                                    <h3>{director.name}</h3>
                                    <p className="role-tag">{director.role}</p>
                                </div>

                                {/* Bio expand — disabled for now
                                <div className="director-bio">
                                    <p>{director.content}</p>
                                    <a href={director.linkedin} className="linkedin-link mt-sm">
                                        View Professional Profile →
                                    </a>
                                </div>
                                <div className="click-hint">Click to read bio</div>
                                */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Board;
