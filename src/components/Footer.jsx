import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo.png';

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const Footer = ({ onJoinUsClick = () => {} }) => {
    return (
        <footer className="main-footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <div className="footer-brand-name">
                        <img src={logo} alt="Sukha Logo" className="footer-logo" />
                        <h2 className="gradient-text">Sukha Education Foundation</h2>
                    </div>
                    <p>At Sukha Education Foundation, we create safe, joyful learning spaces where learners discover their voice, build confidence and unlock opportunities that can shape their future.</p>
                </div>
                <div className="footer-links">
                    <div className="link-group">
                        <h4>Organization</h4>
                        <ul>
                            <li><a href="/#about">Our Story</a></li>
                            <li><a href="/#board">Board of Directors</a></li>
                            <li><a href="/#team">The Team</a></li>
                        </ul>
                    </div>
                    <div className="link-group">
                        <h4>Impact</h4>
                        <ul>
                            <li><Link to="/#courses">Programs</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li>
                                <button
                                    type="button"
                                    className="footer-button-link"
                                    onClick={onJoinUsClick}
                                >
                                    Join Us
                                </button>
                            </li>
                            <li><Link to="/teachers-corner">Teachers Corner</Link></li>
                            <li><Link to="/blog">Student Blog</Link></li>
                        </ul>
                    </div>
                    <div className="link-group">
                        <h4>Connect</h4>
                        <ul>
                            <li><a href="mailto:educationsukha@gmail.com">educationsukha@gmail.com</a></li>
                            <li>
                                <a 
                                    href="https://maps.app.goo.gl/m15tb6gAjZ8MbXsC8" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="address-link"
                                >
                                    73, Venkatakrishna Rd, RA Puram, Jeth Nagar, Raja Annamalaipuram, Chennai, Tamil Nadu 600028
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container bottom-flex">
                    <p>&copy; {new Date().getFullYear()} Sukha Education Foundation. All rights reserved.</p>
                    <button 
                        className="footer-scroll-top"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        aria-label="Scroll to top"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="18 15 12 9 6 15" />
                        </svg>
                    </button>
                    <div className="social-links">
                        <a href="https://www.instagram.com/sukhaeducationfoundation?igsh=ZXh2MjdwZzY2MDg0" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                            <InstagramIcon />
                        </a>
                        <a href="https://www.linkedin.com/company/sukhaeducation/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                            <LinkedInIcon />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
