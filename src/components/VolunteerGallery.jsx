import React from 'react';
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
    ];

    return (
        <section id="volunteer-gallery" className="volunteer-gallery-section section-padding">
            <div className="container">
                <div className="section-header text-center volunteer-header">
                    <h2 className="section-title">Our Proud <span className="gradient-text">Volunteers</span></h2>
                    <p className="section-subtitle">The hearts behind Sukha — making a difference every day.</p>
                </div>

                <div className="collage-wrapper">
                    <div className="collage-grid">
                        {volunteers.map((v) => (
                            <div key={v.id} className="collage-cell">
                                <img
                                    src={v.image}
                                    alt={v.name}
                                    className="collage-img"
                                    style={{ objectPosition: v.pos }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VolunteerGallery;
