import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Courses', href: '#courses' },
        { name: 'Student blog', href: '#blog' },
        { name: 'Teachers Corner', href: '#teachers' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Reports', href: '#reports' },
        { name: 'Join us', href: '#join' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <div className="brand">
                    <h1 className="logo-text">Sukha Education <br /> Foundation</h1>
                </div>
                <ul className="nav-menu">
                    {navLinks.map((link) => (
                        <li key={link.name} className="nav-item">
                            <a href={link.href} className="nav-link">{link.name}</a>
                        </li>
                    ))}
                </ul>
                <div className="mobile-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
