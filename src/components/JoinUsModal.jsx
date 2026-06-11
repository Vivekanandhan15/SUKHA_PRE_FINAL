import React, { useEffect } from 'react';
import './JoinUsModal.css';

const JoinUsModal = ({ onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKey);
        };
    }, [onClose]);

    return (
        <div className="join-modal-overlay" onClick={onClose}>
            <div
                className="join-modal-content"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="join-modal-title"
            >
                <button
                    className="join-modal-close"
                    onClick={onClose}
                    aria-label="Close Join Us modal"
                >
                    ✕
                </button>

                <div className="join-modal-header">
                    <span className="join-modal-eyebrow">Join Our Mission</span>
                    <h2 id="join-modal-title" className="join-modal-heading">Be Part of a Learner's Journey</h2>
                    <p className="join-modal-subtitle" style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginTop: '0.5rem', marginBottom: '1rem' }}>
                        Change begins with people who care. Whether you choose to volunteer, partner with us or support our initiatives, your contribution helps create opportunities to learn, grow and dream bigger. Together, we can build a future where every human feels seen, heard and empowered.
                    </p>
                    <div className="join-modal-divider" />
                </div>

                <div className="join-options-grid">
                    {/* Volunteer Card */}
                    <div className="join-option-card glass-effect">
                        <div className="join-option-icon volunteer-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </div>
                        <h3 className="join-option-title">Volunteer With Us</h3>
                        <p className="join-option-desc">
                            Share your time, skills and compassion. Help mentor, teach, inspire and create meaningful learning experiences for learners who need them most.
                        </p>
                        <a
                            href="https://forms.gle/CrSMZfiaiCrzD7iH9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary join-card-btn"
                            onClick={onClose}
                        >
                            Join as Volunteer
                        </a>
                    </div>

                    {/* Partner Card */}
                    <div className="join-option-card glass-effect">
                        <div className="join-option-icon partner-icon">
                                <span className="handshake-emoji" role="img" aria-label="Handshake">🤝</span>
                            </div>
                        <h3 className="join-option-title">Partner With Us</h3>
                        <p className="join-option-desc">
                            Join hands with us to expand our programs, strengthen communities and create lasting impact. Together, we can reach more people and open more doors to opportunity.
                        </p>
                        <a
                            href="https://forms.gle/fHPrE8BhrYr7EeFU9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary join-card-btn"
                            onClick={onClose}
                        >
                            Join as Partner
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinUsModal;
