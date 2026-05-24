import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactSidebar from './ContactSidebar';

const Layout = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="app">
      <Navbar onContactClick={() => setContactOpen(true)} />
      <ContactSidebar isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      <main key={location.pathname} style={{ marginTop: 'var(--header-height)' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
