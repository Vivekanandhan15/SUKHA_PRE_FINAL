import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import successStoryVideo from '../assets/video/Success-story.mp4';

// ── Banner images (loop automatically) ───────────────────────────
import banner1 from '../assets/Sukha_Banner/IMG_5788.JPG';
import banner2 from '../assets/Sukha_Banner/Screenshot 2026-06-09 141559.png';
import banner3 from '../assets/Sukha_Banner/Screenshot 2026-06-09 193028.png';
import banner4 from '../assets/Sukha_Banner/Screenshot 2026-06-09 193121.png';
import banner5 from '../assets/Sukha_Banner/l1.png';

const banners = [banner1, banner2, banner3, banner4, banner5];

// ── Easing ────────────────────────────────────────────────────────
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

// ── Animated counter ─────────────────────────────────────────────
const AnimatedCounter = ({ target, duration = 1800, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const end = parseInt(target, 10);
    if (isNaN(end)) return;
    let startTs = null;
    let frameId;
    const step = (ts) => {
      if (!startTs) startTs = ts;
      const raw = Math.min((ts - startTs) / duration, 1);
      setCount(Math.floor(easeOut(raw) * end));
      if (raw < 1) frameId = requestAnimationFrame(step);
      else setCount(end);
    };
    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [started, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// ── Hero ─────────────────────────────────────────────────────────
const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideshowRunning, setSlideshowRunning] = useState(true);
  const [videoOpen, setVideoOpen] = useState(false);
  const videoRef = useRef(null);

  // Auto-advance slides every 4 s (only when running)
  useEffect(() => {
    if (!slideshowRunning) return;
    const id = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(id);
  }, [slideshowRunning]);

  // Lock scroll when video is open
  useEffect(() => {
    document.body.style.overflow = videoOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [videoOpen]);

  // Escape key closes video
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setVideoOpen(false); };
    if (videoOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [videoOpen]);

  // Play / pause video element
  useEffect(() => {
    if (!videoRef.current) return;
    if (videoOpen) videoRef.current.play().catch(() => { });
    else { videoRef.current.pause(); videoRef.current.currentTime = 0; }
  }, [videoOpen]);

  const closeVideo = () => setVideoOpen(false);

  return (
    <section className="hero-section" id="hero">

      {/* ── Background slideshow ───────────────────────────────── */}
      <div className="hero-bg-slides" aria-hidden="true">
        {banners.map((src, i) => (
          <div
            key={i}
            className={`hero-bg-slide ${i === activeSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="hero-bg-overlay" />
      </div>

      {/* ── Slide dots ──────────────────────────────────────────── */}
      <div className="hero-slide-dots" aria-label="Slideshow navigation">
        {banners.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === activeSlide ? 'active' : ''}`}
            onClick={() => setActiveSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Content ────────────────────────────────────────────── */}
      <div className="container hero-container">
          <div className="hero-content animate-fade-in-up">
            <h1 className="hero-title">
              Educurating a Better Tomorrow
            </h1>
            <p className="hero-subtitle delay-100">
              Every human deserves the confidence to be heard, the courage to dream and the opportunity to thrive.
            </p>
            <p className="hero-description delay-200">
              At Sukha Education Foundation, we create safe, joyful learning spaces where learners discover their voice, build confidence and unlock opportunities that can shape their future.
            </p>
            <p className="hero-tagline delay-300">
              Join us in nurturing a generation that believes in itself.
            </p>

            <div className="hero-cta delay-400">
              <a
                href="https://forms.gle/CrSMZfiaiCrzD7iH9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Volunteer With Us
              </a>
              <a
                href="https://forms.gle/fHPrE8BhrYr7EeFU9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary-light"
              >
                Partner With Us
              </a>
              <button
                type="button"
                className="hero-video-btn delay-400"
                onClick={() => setVideoOpen(true)}
                aria-label="Watch success story video"
              >
                <div className="play-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                </div>
                <span>Watch Success Story</span>
              </button>
            </div>

            <div className="hero-stats glass-effect-dark delay-500">
              <div className="stat-item">
                <span className="stat-value">
                  <AnimatedCounter target="2000" suffix="+" />
                </span>
                <span className="stat-label">Students Reached</span>
              </div>
              <div className="stat-divider-dark" />
              <div className="stat-item">
                <span className="stat-value">
                  <AnimatedCounter target="25" suffix="+" />
                </span>
                <span className="stat-label">Centers</span>
              </div>
            </div>
          </div>
      </div>

      {/* ── Video modal ───────────────────────────────────────── */}
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
