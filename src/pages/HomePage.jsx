import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Board from '../components/Board';
import Team from '../components/Team';
import Courses from '../components/Courses';
import Gallery from '../components/Gallery';
import VolunteerGallery from '../components/VolunteerGallery';
import Testimonials from '../components/Testimonials';
import Reports from '../components/Reports';

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Board />
    <Team />
    <Courses />
    <VolunteerGallery />
    <Testimonials />
    <Reports />
  </>
);

export default HomePage;
