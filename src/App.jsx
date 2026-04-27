import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Board from './components/Board';
import Team from './components/Team';
import Courses from './components/Courses';
import Blog from './components/Blog';
import TeachersCorner from './components/TeachersCorner';
import Gallery from './components/Gallery';
import VolunteerGallery from './components/VolunteerGallery';
import Reports from './components/Reports';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main style={{ marginTop: 'var(--header-height)' }}>
        <Hero />
        <About />
        <Board />
        <Team />
        <Courses />
        <Blog />
        <TeachersCorner />
        <Gallery />
        <VolunteerGallery />
        <Reports />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
