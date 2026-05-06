import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              Educurating a Better Tomorrow<br />
      
            </h1>
            <p className="hero-subtitle">
              Empowering the next generation with modern skills and real-world opportunities. Join us in our mission to transform lives through education.
            </p>
            <div className="hero-cta">
              <a
                href="https://forms.gle/CrSMZfiaiCrzD7iH9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Join as Volunteer
              </a>
              <a
                href="https://forms.gle/fHPrE8BhrYr7EeFU9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Join as Partner
              </a>
            </div>
            <div className="hero-stats glass-effect">
              <div className="stat-item">
                <span className="stat-value">100+</span>
                <span className="stat-label">Students Reached</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-value">50+</span>
                <span className="stat-label">Partner Teachers</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-main-image placeholder-box">
              <span>Main Hero Visual</span>
            </div>
            <div className="video-trigger glass-effect">
              <div className="play-icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              </div>
              <span>Watch Success Story</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

