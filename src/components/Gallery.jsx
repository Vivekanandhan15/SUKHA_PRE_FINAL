import React, { useState } from 'react';
import './Gallery.css';

// ── English Program ──────────────────────────────
import ep1  from '../assets/Gallery/EP-1.jpg';
import ep2  from '../assets/Gallery/EP-2.jpg';
import ep3  from '../assets/Gallery/EP-3.jpg';
import ep4  from '../assets/Gallery/EP-4.jpg';
import ep5  from '../assets/Gallery/EP-5.jpg';
import ep6  from '../assets/Gallery/EP-6.jpg';
import ep7  from '../assets/Gallery/EP-7.jpeg';
import ep8  from '../assets/Gallery/EP-8.jpeg';
import ep9  from '../assets/Gallery/EP-9.jpeg';
import ep10 from '../assets/Gallery/EP-10.jpeg';
import ep11 from '../assets/Gallery/EP-11.jpeg';
import ep12 from '../assets/Gallery/EP-12.jpeg';
import epMain from '../assets/Gallery/English_Program.jpeg';

// ── Dare to Dream ────────────────────────────────
import d2d1  from '../assets/Gallery/D2D-1.jpg';
import d2d2  from '../assets/Gallery/D2D-2.jpg';
import d2d3  from '../assets/Gallery/D2D-3.jpg';
import d2d4  from '../assets/Gallery/D2D-4.jpg';
import d2d5  from '../assets/Gallery/D2D-5.jpg';
import d2d9  from '../assets/Gallery/D2D-9.jpeg';
import d2d10 from '../assets/Gallery/D2D-10.jpg';
import d2d11 from '../assets/Gallery/D2D-11.jpg';

// ── Beyond The Chalkboard ────────────────────────
import btc1  from '../assets/Gallery/BTC-1.jpg';
import btc2  from '../assets/Gallery/BTC-2.jpg';
import btc16 from '../assets/Gallery/BTC-16.jpeg';
import btc17 from '../assets/Gallery/BTC-17.jpeg';
import btc18 from '../assets/Gallery/BTC-18.jpeg';
import btc19 from '../assets/Gallery/BTC-19.jpeg';
import btc20 from '../assets/Gallery/BTC-20.jpeg';

// ── Book Club ────────────────────────────────────
import bc1 from '../assets/Gallery/BC-1.jpeg';
import bc2 from '../assets/Gallery/BC-2.jpeg';
import bc4 from '../assets/Gallery/BC-4.jpeg';
import bc5 from '../assets/Gallery/BC-5.jpeg';
import bc6 from '../assets/Gallery/BC-6.jpeg';
import bc7 from '../assets/Gallery/BC-7.jpeg';
import bookClub1 from '../assets/Gallery/BookCLub1.jpeg';
import bookClub2 from '../assets/Gallery/BookClub2.jpeg';

const Gallery = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'English Program', 'D2D', 'Book Club', 'BTC'];

    const galleryItems = [
        // English Program
        { id: 1,  category: 'English Program', label: 'English Program',         image: epMain },
        { id: 2,  category: 'English Program', label: 'English Program Session',  image: ep1   },
        { id: 3,  category: 'English Program', label: 'English Program Activity', image: ep2   },
        { id: 4,  category: 'English Program', label: 'English Program Class',    image: ep3   },
        { id: 5,  category: 'English Program', label: 'English Program Moment',   image: ep4   },
        { id: 6,  category: 'English Program', label: 'English Program Practice', image: ep5   },
        { id: 7,  category: 'English Program', label: 'English Program Workshop', image: ep6   },
        { id: 8,  category: 'English Program', label: 'English Program Session',  image: ep7   },
        { id: 9,  category: 'English Program', label: 'English Program Activity', image: ep8   },
        { id: 10, category: 'English Program', label: 'English Program Moment',   image: ep9   },
        { id: 11, category: 'English Program', label: 'English Program Class',    image: ep10  },
        { id: 12, category: 'English Program', label: 'English Program Highlight',image: ep11  },
        { id: 13, category: 'English Program', label: 'English Program Snapshot', image: ep12  },

        // Dare to Dream
        { id: 14, category: 'D2D', label: 'Dare to Dream Session',   image: d2d1  },
        { id: 15, category: 'D2D', label: 'Dare to Dream Activity',  image: d2d2  },
        { id: 16, category: 'D2D', label: 'Dare to Dream Moment',    image: d2d3  },
        { id: 17, category: 'D2D', label: 'Dare to Dream Workshop',  image: d2d4  },
        { id: 18, category: 'D2D', label: 'Dare to Dream Talk',      image: d2d5  },
        { id: 19, category: 'D2D', label: 'Dare to Dream Highlight', image: d2d9  },
        { id: 20, category: 'D2D', label: 'Dare to Dream Snapshot',  image: d2d10 },
        { id: 21, category: 'D2D', label: 'Dare to Dream Class',     image: d2d11 },

        // Beyond The Chalkboard
        { id: 22, category: 'BTC', label: 'Beyond The Chalkboard',         image: btc1  },
        { id: 23, category: 'BTC', label: 'Beyond The Chalkboard Session', image: btc2  },
        { id: 24, category: 'BTC', label: 'BTC Activity',                  image: btc16 },
        { id: 25, category: 'BTC', label: 'BTC Workshop',                  image: btc17 },
        { id: 26, category: 'BTC', label: 'BTC Moment',                    image: btc18 },
        { id: 27, category: 'BTC', label: 'BTC Highlight',                 image: btc19 },
        { id: 28, category: 'BTC', label: 'BTC Snapshot',                  image: btc20 },

        // Book Club
        { id: 29, category: 'Book Club', label: 'Book Club Session 1', image: bookClub1 },
        { id: 30, category: 'Book Club', label: 'Book Club Session 2', image: bookClub2 },
        { id: 31, category: 'Book Club', label: 'Book Club Reading',   image: bc1       },
        { id: 32, category: 'Book Club', label: 'Book Club Activity',  image: bc2       },
        { id: 33, category: 'Book Club', label: 'Book Club Moment',    image: bc4       },
        { id: 34, category: 'Book Club', label: 'Book Club Discussion',image: bc5       },
        { id: 35, category: 'Book Club', label: 'Book Club Highlight', image: bc6       },
        { id: 36, category: 'Book Club', label: 'Book Club Snapshot',  image: bc7       },
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
