import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <h2 className="gradient-text">Sukha Education</h2>
                    <p>Modernizing education through professional training and real-world industrial opportunities.</p>
                </div>
                <div className="footer-links">
                    <div className="link-group">
                        <h4>Organization</h4>
                        <ul>
                            <li><a href="#">Our Vision</a></li>
                            <li><a href="#about">Founders</a></li>
                            <li><a href="#team">The Team</a></li>
                        </ul>
                    </div>
                    <div className="link-group">
                        <h4>Impact</h4>
                        <ul>
                            <li><a href="#courses">Programs</a></li>
                            <li><a href="#blog">Student Stories</a></li>
                            <li><a href="#teachers">Partnerships</a></li>
                        </ul>
                    </div>
                    <div className="link-group">
                        <h4>Connect</h4>
                        <ul>
                            <li><a href="mailto:info@sukha.org">info@sukha.org</a></li>
                            <li><span>New Delhi, India</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container bottom-flex">
                    <p>&copy; {new Date().getFullYear()} Sukha Education Foundation. Created with Passion.</p>
                    <div className="social-links">
                        {/* Social icons could go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
