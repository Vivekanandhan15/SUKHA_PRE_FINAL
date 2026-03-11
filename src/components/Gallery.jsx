import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'English Program', 'D2D', 'Book Club', 'BTC'];

    // Mock data for gallery items
    const galleryItems = [
        { id: 1, category: 'English Program', label: 'Primary English' },
        { id: 2, category: 'D2D', label: 'D2D Visit' },
        { id: 3, category: 'Book Club', label: 'Reading Session' },
        { id: 4, category: 'BTC', label: 'Tech Workshop' },
        { id: 5, category: 'English Program', label: 'Grammar Class' },
        { id: 6, category: 'D2D', label: 'D2D Outreach' },
        { id: 7, category: 'Book Club', label: 'Literary Event' },
        { id: 8, category: 'BTC', label: 'Coding Camp' },
        { id: 9, category: 'English Program', label: 'Speech Practice' },
        { id: 10, category: 'D2D', label: 'Rural Visit' },
        { id: 11, category: 'Book Club', label: 'Library Opening' },
        { id: 12, category: 'BTC', label: 'Hardware Lab' },
    ];

    const filteredItems = filter === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === filter);

    return (
        <section id="gallery" className="gallery-section section-padding">
            <div className="container">
                <h2 className="section-title text-center mb-lg">Our <span className="gradient-text">Gallery</span></h2>

                <div className="gallery-layout">
                    {/* Left: Sidebar Categories */}
                    <div className="gallery-sidebar">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`gallery-filter-btn ${filter === cat ? 'active' : ''}`}
                                onClick={() => setFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Right: Filtered Grid */}
                    <div className="gallery-main">
                        <div className="gallery-grid">
                            {filteredItems.map((item) => (
                                <div key={item.id} className="gallery-item glass-effect">
                                    <div className="placeholder-box" style={{ height: '180px' }}>
                                        Pic: {item.label}
                                    </div>
                                    <div className="gallery-item-info">
                                        <span>{item.category}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
