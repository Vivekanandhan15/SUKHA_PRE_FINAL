import React, { useState } from 'react';
import './Gallery.css';

// Importing gallery images
import btcImg from '../assets/Gallery/BTC.jpg';
import bookClub1Img from '../assets/Gallery/BookCLub1.jpeg';
import bookClub2Img from '../assets/Gallery/BookClub2.jpeg';
import d2d1Img from '../assets/Gallery/D2D1.jpg';
import d2d2Img from '../assets/Gallery/D2D2.jpg';
import d2d3Img from '../assets/Gallery/D2d3.jpg';
import englishProgramImg from '../assets/Gallery/English_Program.jpeg';

const Gallery = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'English Program', 'D2D', 'Book Club', 'BTC'];

    // Gallery items mapped to actual imported images
    const galleryItems = [
        { id: 1, category: 'BTC', label: 'Beyond The Chalkboard', image: btcImg },
        { id: 2, category: 'Book Club', label: 'Book Club Session 1', image: bookClub1Img },
        { id: 3, category: 'Book Club', label: 'Book Club Session 2', image: bookClub2Img },
        { id: 4, category: 'D2D', label: 'Dare to Dream 1', image: d2d1Img },
        { id: 5, category: 'D2D', label: 'Dare to Dream 2', image: d2d2Img },
        { id: 6, category: 'D2D', label: 'Dare to Dream 3', image: d2d3Img },
        { id: 7, category: 'English Program', label: 'English Program Activity', image: englishProgramImg },
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
                                    <div className="gallery-image-container">
                                        <img 
                                            src={item.image} 
                                            alt={item.label} 
                                            className="gallery-image"
                                        />
                                    </div>
                                    <div className="gallery-item-info">
                                        <span className="category-tag">{item.category}</span>
                                        <h4 className="item-label">{item.label}</h4>
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
