import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <h2 className="gradient-text">Sukha Education</h2>
                    <p>Empowering the next generation through quality education, innovation, and leadership.</p>
                </div>
                <div className="footer-links">
                    <div className="link-group">
                        <h4>Organization</h4>
                        <ul>
                            <li><a href="#about">Our Story</a></li>
                            <li><a href="#board">Board of Directors</a></li>
                            <li><a href="#team">The Team</a></li>
                        </ul>
                    </div>
                    <div className="link-group">
                        <h4>Impact</h4>
                        <ul>
                            <li><a href="#courses">Programs</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#teachers">Teachers Corner</a></li>
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
                    <div className="social-links">
                        <a href="https://www.instagram.com/sukhaeducationfoundation?igsh=ZXh2MjdwZzY2MDg0" target="_blank" rel="noopener noreferrer" className="social-icon">
                            Instagram
                        </a>
                        <a href="https://www.linkedin.com/company/sukhaeducation/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
