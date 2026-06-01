import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactSidebar from './ContactSidebar';
import JoinUsModal from './JoinUsModal';

const Layout = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [joinUsOpen, setJoinUsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // For hash links on the homepage, scroll to the target section
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '');
      const scrollToHash = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
      const timer = window.setTimeout(scrollToHash, 80);
      return () => window.clearTimeout(timer);
    }

    // For all other page navigations, always start at the top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname, location.hash]);

  return (
    <div className="app">
      <Navbar
        onContactClick={() => setContactOpen(true)}
        contactOpen={contactOpen}
        onJoinUsClick={() => setJoinUsOpen(true)}
        joinUsOpen={joinUsOpen}
      />
      <ContactSidebar isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      {joinUsOpen && <JoinUsModal onClose={() => setJoinUsOpen(false)} />}
      <main style={{ marginTop: 'var(--header-height)' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
