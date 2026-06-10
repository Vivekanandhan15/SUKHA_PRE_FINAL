import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = ({ onContactClick, contactOpen, onJoinUsClick, joinUsOpen }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    // Scroll shadow effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Track which section is in view on the homepage
    useEffect(() => {
        if (location.pathname !== '/') {
            setActiveSection('');
            return;
        }

        const sectionIds = ['about', 'courses', 'gallery', 'testimonials', 'reports'];

        const updateActive = () => {
            const scrollPos = window.scrollY + 120;
            let current = '';
            let maxTop = -1;
            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= scrollPos && el.offsetTop > maxTop) {
                    maxTop = el.offsetTop;
                    current = id;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', updateActive, { passive: true });
        updateActive();
        return () => window.removeEventListener('scroll', updateActive);
    }, [location.pathname]);

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname, location.hash]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };
        if (menuOpen) {
            window.addEventListener('keydown', handleEscape);
        }
        return () => window.removeEventListener('keydown', handleEscape);
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    const scrollToSection = (hash) => {
        const id = hash.replace('#', '');
        closeMenu();

        if (location.pathname === '/') {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            window.history.replaceState(null, '', `/#${id}`);
        } else {
            navigate({ pathname: '/', hash: `#${id}` });
        }
    };

    const navLinks = [
        { name: 'Home', to: '/', route: true },
        { name: 'About', hash: '#about' },
        { name: 'Courses', hash: '#courses' },
        { name: 'Student blog', to: '/blog', route: true },
        { name: 'Teacher\'s Corner', to: '/teachers-corner', route: true },
        { name: 'Gallery', to: '/gallery', route: true },
        { name: 'Testimonials', hash: '#testimonials' },
        { name: 'Reports', hash: '#reports' },
        { name: 'Join us', popup: 'join' },
    ];

    // Determine if a nav link should be highlighted
    const isActive = (link) => {
        if (link.popup === 'join') {
            return joinUsOpen;
        }
        if (link.route) {
            if (link.to === '/') {
                // Home: active only when on homepage AND no section is scrolled into view
                return location.pathname === '/' && !activeSection;
            }
            return location.pathname === link.to;
        } else {
            // Section buttons: active when on homepage and this section is in view
            const id = link.hash.replace('#', '');
            return location.pathname === '/' && activeSection === id;
        }
    };

    const handleJoinUsClick = (e) => {
        e.preventDefault();
        closeMenu();
        onJoinUsClick?.();
    };

    const handleContactClick = (e) => {
        e.preventDefault();
        closeMenu();
        onContactClick?.();
    };

    const handleHomeClick = (e) => {
        closeMenu();
        if (location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.history.replaceState(null, '', '/');
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
            <div className="container navbar-content">
                <Link to="/" className="brand" onClick={handleHomeClick}>
                    <img src={logo} alt="Sukha Education Logo" className="navbar-logo" />
                    <span className="logo-text">Sukha Education <br /> Foundation</span>
                </Link>

                <button
                    type="button"
                    className={`mobile-toggle ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-nav-menu"
                >
                    <span />
                    <span />
                    <span />
                </button>

                <div
                    className={`nav-overlay ${menuOpen ? 'open' : ''}`}
                    onClick={closeMenu}
                    aria-hidden={!menuOpen}
                />

                <ul id="mobile-nav-menu" className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.name} className="nav-item">
                            {link.route ? (
                                <Link
                                    to={link.to}
                                    className={`nav-link ${isActive(link) ? 'active' : ''}`}
                                    onClick={closeMenu}
                                >
                                    {link.name}
                                </Link>
                            ) : link.popup === 'join' ? (
                                <button
                                    type="button"
                                    className={`nav-link nav-link-section ${isActive(link) ? 'active' : ''}`}
                                    onClick={handleJoinUsClick}
                                >
                                    {link.name}
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className={`nav-link nav-link-section ${isActive(link) ? 'active' : ''}`}
                                    onClick={() => scrollToSection(link.hash)}
                                >
                                    {link.name}
                                </button>
                            )}
                        </li>
                    ))}
                    <li className="nav-item">
                        <button
                            type="button"
                            className={`nav-link nav-link-contact ${contactOpen ? 'active' : ''}`}
                            onClick={handleContactClick}
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
