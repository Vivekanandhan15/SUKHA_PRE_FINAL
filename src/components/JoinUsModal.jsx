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
                    <h2 id="join-modal-title" className="join-modal-heading">How would you like to support us?</h2>
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
                        <h3 className="join-option-title">Become a Volunteer</h3>
                        <p className="join-option-desc">
                            Lend your time, skills, and heart to teach, mentor, and build community with our students.
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
                        <h3 className="join-option-title">Become a Partner</h3>
                        <p className="join-option-desc">
                            Collaborate with us to expand educational centers, provide resources, and create sustainable impact.
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
