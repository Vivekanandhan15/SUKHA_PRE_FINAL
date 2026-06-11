import React, { useEffect } from 'react';
import './FounderNoteModal.css';

const FounderNoteModal = ({ onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handleKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKey);
        };
    }, [onClose]);

    return (
        <div className="founder-modal-overlay" onClick={onClose}>
            <div
                className="founder-modal-content"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="founder-note-title"
            >
                <button
                    className="founder-modal-close"
                    onClick={onClose}
                    aria-label="Close founder's note"
                >
                    ✕
                </button>

                <div className="founder-modal-header">
                    <span className="founder-modal-eyebrow">A Note From Our Founder</span>
                    <div className="founder-modal-divider" />
                </div>

                <div className="founder-modal-body" id="founder-note-title">
                    <p>
                        Education is a loaded word, often framed as the bare minimum for a dignified human existence.
                        We're told it is the need of the hour, that it equips us with tools no one can take away.
                    </p>
                    <p>
                        But perhaps what we're really speaking about is <em>experience</em>.
                    </p>
                    <p>
                        The experience of learning. Of being seen. Of building spaces where we feel like we belong.
                    </p>
                    <p>
                        At Sukha, it is true that we teach English. It is also true that we believe it can unlock
                        myriad opportunities. But beyond that, we believe deeply in the power of community — in
                        holding our mission quietly in our hearts, while never losing sight of what our students
                        truly need: listening ears, free of judgment.
                    </p>
                    <p>
                        Our hope is to build an environment where students are no longer intimidated by the English
                        language, nor apologetic when they make mistakes.
                    </p>
                    <p>
                        We hope every student leaves with the understanding that no language is above or below
                        another, and that each language opens the door to a new kind of potential.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FounderNoteModal;
