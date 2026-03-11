import React from 'react';
import './VolunteerGallery.css';

const VolunteerGallery = () => {
    // Large array for 18 items (6x3 as per wireframe)
    const items = Array.from({ length: 18 }, (_, k) => k + 1);

    return (
        <section id="volunteer-gallery" className="volunteer-gallery-section section-padding">
            <div className="container">
                <h2 className="section-title text-center mb-lg">Volunteer <span className="gradient-text">Gallery</span></h2>

                <div className="v-gallery-grid">
                    {items.map((i) => (
                        <div key={i} className="v-gallery-item">
                            <div className="placeholder-box" style={{ height: '140px' }}>
                                Pic {i}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VolunteerGallery;
