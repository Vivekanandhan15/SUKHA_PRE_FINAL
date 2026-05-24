import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import successStoryVideo from '../assets/video/Success-story.mp4';
import heroCoverImage from '../assets/Hero/Cover-image.jpeg';

const Hero = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = videoOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [videoOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setVideoOpen(false);
    };
    if (videoOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [videoOpen]);

  useEffect(() => {
    if (videoOpen && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
    if (!videoOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [videoOpen]);

  const closeVideo = () => setVideoOpen(false);

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              Educating a Better Tomorrow<br />
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
                <span className="stat-value">2000+</span>
                <span className="stat-label">Students Reached</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-value">25+</span>
                <span className="stat-label">Center</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-main-image">
              <img
                src={heroCoverImage}
                alt="Sukha Education Foundation — students and learning"
                className="hero-cover-img"
              />
            </div>
            <button
              type="button"
              className="video-trigger glass-effect"
              onClick={() => setVideoOpen(true)}
              aria-label="Watch success story video"
            >
              <div className="play-icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              </div>
              <span className="video-trigger-label">Watch Success Story</span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`video-modal-overlay ${videoOpen ? 'open' : ''}`}
        onClick={closeVideo}
        role="presentation"
        aria-hidden={!videoOpen}
      >
        <div
          className="video-modal"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Success story video"
        >
          <button
            type="button"
            className="video-modal-close"
            onClick={closeVideo}
            aria-label="Close video"
          >
            &times;
          </button>
          <div className="video-modal-player">
            <video
              ref={videoRef}
              src={successStoryVideo}
              controls
              playsInline
              className="success-story-video"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
