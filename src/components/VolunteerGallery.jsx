import React, { useState, useEffect } from 'react';
import './VolunteerGallery.css';

// ── Named volunteers ──────────────────────────────────────────
import meeraImg       from '../assets/Voluntree/Meera Rajesh.jpg';
import neethaImg      from '../assets/Voluntree/Neetha Narresh.jpg';
import priyaImg       from '../assets/Voluntree/Priyadarshini.jpg';
import reethikaImg    from '../assets/Voluntree/Reethika.jpg';
import sivapriyaImg   from '../assets/Voluntree/Sivapriya Krishnan IMG_1821.jpg';
import shirleyImg     from '../assets/Voluntree/Shirley.jpg';
import aarchishaImg   from '../assets/Voluntree/Aarchisha.PNG';
import img20171204    from '../assets/Voluntree/IMG-20171204-WA0037.jpg';
import img20231022    from '../assets/Voluntree/IMG-20231022-WA0071.jpg';
import img20240307    from '../assets/Voluntree/IMG-20240307-WA0008.jpg';
import img2492        from '../assets/Voluntree/IMG_2492.jpg';
import imgA918        from '../assets/Voluntree/a918156c-923c-4494-881b-c0d1217d65c2.jpg';
import img06b2        from '../assets/Voluntree/06b2f250-bdf5-43b2-924a-ee93daff1584.jpg';
import img0d7f        from '../assets/Voluntree/0d7fad71-45cb-494c-8c73-8a559bf544d0 (1).jpg';
import img4aac        from '../assets/Voluntree/4aacad27-4fe3-4db0-9b93-b634e8e6299f.jpg';
import img6886        from '../assets/Voluntree/6886747e-1e77-4290-945c-b919580e5536.jpg';
import img6b76        from '../assets/Voluntree/6b76845e-a782-47ad-9e0c-a3bf3c68aa4a.jpg';
import img7ba0        from '../assets/Voluntree/7ba02922-d941-4636-8899-1d03ae3aece3.jpg';
import img8f43        from '../assets/Voluntree/8f439cfc-ea0f-470e-abce-2447f4a549fe.jpg';
import imgD4df        from '../assets/Voluntree/d4dfc1cf-0449-498f-9615-f517c57cf4ac.jpg';
import imgImage50     from '../assets/Voluntree/image_50364673.JPG';

// ── New Untracked Volunteers ────────────────────────────────────
import img4154        from '../assets/Voluntree/IMG_4154.JPG.jpeg';
import img4162        from '../assets/Voluntree/IMG_4162.JPG.jpeg';
import img4164        from '../assets/Voluntree/IMG_4164.JPG.jpeg';
import imgWA1         from '../assets/Voluntree/WhatsApp Image 2026-06-09 at 4.35.59 PM (1).jpeg';
import imgWA2         from '../assets/Voluntree/WhatsApp Image 2026-06-09 at 4.35.59 PM (2).jpeg';
import imgWA3         from '../assets/Voluntree/WhatsApp Image 2026-06-09 at 4.35.59 PM.jpeg';
import imgWA4         from '../assets/Voluntree/WhatsApp Image 2026-06-09 at 4.36.00 PM.jpeg';
import imgWA5         from '../assets/Voluntree/WhatsApp Image 2026-06-09 at 5.38.29 PM.jpeg';

// Helper to calculate grid spans and aspect ratios for the last row to prevent awkward empty spaces
const getGridStyle = (index, total, cols) => {
    const remainder = total % cols;
    if (remainder === 0) return {};

    const lastRowStartIndex = total - remainder;
    if (index < lastRowStartIndex) return {};

    const itemPositionInLastRow = index - lastRowStartIndex;

    if (remainder === 1) {
        return {
            gridColumn: `span ${cols}`,
            aspectRatio: `${cols} / 1`
        };
    }

    if (remainder === 2) {
        if (cols === 6) {
            return { gridColumn: 'span 3', aspectRatio: '3 / 1' };
        }
        if (cols === 4) {
            return { gridColumn: 'span 2', aspectRatio: '2 / 1' };
        }
        if (cols === 5) {
            return itemPositionInLastRow === 0 
                ? { gridColumn: 'span 2', aspectRatio: '2 / 1' } 
                : { gridColumn: 'span 3', aspectRatio: '3 / 1' };
        }
        if (cols === 3) {
            return itemPositionInLastRow === 0
                ? {} 
                : { gridColumn: 'span 2', aspectRatio: '2 / 1' };
        }
    }

    if (remainder === 3) {
        if (cols === 6) {
            return { gridColumn: 'span 2', aspectRatio: '2 / 1' };
        }
        if (cols === 5) {
            return itemPositionInLastRow < 2
                ? { gridColumn: 'span 2', aspectRatio: '2 / 1' }
                : {};
        }
        if (cols === 4) {
            return itemPositionInLastRow === 2
                ? { gridColumn: 'span 2', aspectRatio: '2 / 1' }
                : {};
        }
    }

    if (remainder === 4) {
        if (cols === 6) {
            return itemPositionInLastRow >= 2
                ? { gridColumn: 'span 2', aspectRatio: '2 / 1' }
                : {};
        }
        if (cols === 5) {
            return itemPositionInLastRow === 3
                ? { gridColumn: 'span 2', aspectRatio: '2 / 1' }
                : {};
        }
    }

    if (remainder === 5) {
        if (cols === 6) {
            return itemPositionInLastRow === 4
                ? { gridColumn: 'span 2', aspectRatio: '2 / 1' }
                : {};
        }
    }

    return {};
};

const VolunteerGallery = () => {
    const volunteers = [
        { id: 1,  name: 'Meera Rajesh',       image: meeraImg,    pos: 'center 22%' },
        { id: 2,  name: 'Neetha Narresh',      image: neethaImg,   pos: 'center 25%' },
        { id: 3,  name: 'Priyadarshini',       image: priyaImg,    pos: 'center 28%' },
        { id: 4,  name: 'Reethika',            image: reethikaImg, pos: 'center 20%' },
        { id: 5,  name: 'Sivapriya Krishnan',  image: sivapriyaImg,pos: 'center 30%' },
        { id: 6,  name: 'Shirley',             image: shirleyImg,  pos: 'center 45%' },
        { id: 7,  name: 'Aarchisha',           image: aarchishaImg,pos: 'center 20%' },
        { id: 8,  name: 'Volunteer',           image: img20171204, pos: 'center 25%' },
        { id: 9,  name: 'Volunteer',           image: img20231022, pos: 'center 20%' },
        { id: 10, name: 'Volunteer',           image: img20240307, pos: 'center 25%' },
        { id: 11, name: 'Volunteer',           image: img2492,     pos: 'center 20%' },
        { id: 12, name: 'Volunteer',           image: imgA918,     pos: 'center 25%' },
        { id: 13, name: 'Volunteer',           image: img06b2,     pos: 'center 20%' },
        { id: 14, name: 'Volunteer',           image: img0d7f,     pos: 'center 25%' },
        { id: 15, name: 'Volunteer',           image: img4aac,     pos: 'center 20%' },
        { id: 16, name: 'Volunteer',           image: img6886,     pos: 'center 25%' },
        { id: 17, name: 'Volunteer',           image: img6b76,     pos: 'center 20%' },
        { id: 18, name: 'Volunteer',           image: img7ba0,     pos: 'center 25%' },
        { id: 19, name: 'Volunteer',           image: img8f43,     pos: 'center 20%' },
        { id: 20, name: 'Volunteer',           image: imgD4df,     pos: 'center 25%' },
        { id: 21, name: 'Volunteer',           image: imgImage50,  pos: 'center 20%' },
        { id: 22, name: 'Volunteer',           image: img4154,     pos: 'center 20%' },
        { id: 23, name: 'Volunteer',           image: img4162,     pos: 'center 20%' },
        { id: 24, name: 'Volunteer',           image: img4164,     pos: 'center 20%' },
        { id: 25, name: 'Volunteer',           image: imgWA1,      pos: 'center 20%' },
        { id: 26, name: 'Volunteer',           image: imgWA2,      pos: 'center 20%', scale: 1.55 }, // Zoomed to crop out top/bottom white bars
        { id: 27, name: 'Volunteer',           image: imgWA3,      pos: 'center 20%' },
        { id: 28, name: 'Volunteer',           image: imgWA4,      pos: 'center 20%' },
        { id: 29, name: 'Volunteer',           image: imgWA5,      pos: 'center 75%' },
    ];

    // Responsive grid column detection
    const [cols, setCols] = useState(6);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 400) {
                setCols(3);
            } else if (width <= 640) {
                setCols(4);
            } else if (width <= 1024) {
                setCols(5);
            } else {
                setCols(6);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="volunteer-gallery" className="volunteer-gallery-section section-padding">
            <div className="container">
                <div className="section-header text-center volunteer-header" style={{ marginBottom: '3rem' }}>
                    <h2 className="section-title">Our Volunteers</h2>
                    <h3 className="section-subtitle-secondary" style={{ fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--color-primary)', fontWeight: '600', marginBottom: '0.5rem' }}>The Heart of Sukha</h3>
                    <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        Every smile, every conversation, every moment of encouragement matters. Our volunteers bring time, talent, patience and kindness into the lives of our students, creating meaningful relationships that often leave a lasting impact on both sides. They are not just volunteers. They are mentors, role models, cheerleaders and friends.
                    </p>
                </div>

                <div className="collage-wrapper">
                    <div className="collage-grid">
                        {volunteers.map((v, index) => {
                            const gridStyle = getGridStyle(index, volunteers.length, cols);
                            return (
                                <div key={v.id} className="collage-cell" style={gridStyle}>
                                    <img
                                        src={v.image}
                                        alt={v.name}
                                        className="collage-img"
                                        style={{ 
                                            objectPosition: v.pos,
                                            '--base-scale': String(v.scale || 1)
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VolunteerGallery;
