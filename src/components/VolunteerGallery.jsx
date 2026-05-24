import React from 'react';
import './VolunteerGallery.css';
import meeraImg from '../assets/Voluntree/Meera Rajesh.jpg';
import neethaImg from '../assets/Voluntree/Neetha Narresh.jpg';
import priyaImg from '../assets/Voluntree/Priyadarshini.jpg';
import reethikaImg from '../assets/Voluntree/Reethika.jpg';
import sivapriyaImg from '../assets/Voluntree/Sivapriya Krishnan IMG_1821.jpg';
import shirleyImg from '../assets/Voluntree/Shirley.jpg';

const VolunteerGallery = () => {
    const volunteers = [
        { id: 1, name: 'Meera Rajesh', image: meeraImg, objectPosition: 'center 22%' },
        { id: 2, name: 'Neetha Narresh', image: neethaImg, objectPosition: 'center 25%' },
        { id: 3, name: 'Priyadarshini', image: priyaImg, objectPosition: 'center 28%' },
        { id: 4, name: 'Reethika', image: reethikaImg, objectPosition: 'center 88%' },
        { id: 5, name: 'Sivapriya Krishnan', image: sivapriyaImg, objectPosition: 'center 30%' },
        { id: 6, name: 'Shirley', image: shirleyImg, objectPosition: 'center 35%' },
    ];

    return (
        <section id="volunteer-gallery" className="volunteer-gallery-section section-padding">
            <div className="container">
                <h2 className="section-title text-center mb-lg">Our Proud <span className="gradient-text">Volunteers</span></h2>

                <div className="v-gallery-grid">
                    {volunteers.map((v) => (
                        <div key={v.id} className="v-gallery-item">
                            <div className="v-image-container glass-effect">
                                <img
                                    src={v.image}
                                    alt={v.name}
                                    className="v-image"
                                    style={{ objectPosition: v.objectPosition }}
                                />
                                <div className="v-overlay">
                                    <span className="v-name">{v.name}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VolunteerGallery;
