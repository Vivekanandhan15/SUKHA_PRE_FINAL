import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactSidebar from './ContactSidebar';

const Layout = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/' || !location.hash) return;

    const id = location.hash.replace('#', '');
    const scrollToHash = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const timer = window.setTimeout(scrollToHash, 80);
    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return (
    <div className="app">
      <Navbar onContactClick={() => setContactOpen(true)} />
      <ContactSidebar isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      <main style={{ marginTop: 'var(--header-height)' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
