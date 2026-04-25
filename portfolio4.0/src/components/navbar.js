import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './navbar.css';
import resume from '../static/Peter.Hellwege.Resume.pdf';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const menuItems = [
    { to: '/', label: 'Home' },
    { to: '/Projects', label: 'Projects' },
    { to: '/AboutMe', label: 'About Me' },
  ];

  return (
    <div ref={menuRef} className="nav-container">
      <button className="nav-toggle" onClick={() => setOpen((p) => !p)}>
        {open ? <FiX size={22} /> : <FiMenu size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav-dropdown"
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {menuItems.map((item, i) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <Link to={item.to} className="nav-item" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
            >
              <a href={resume} download="Peter.Hellwege.Resume.pdf" className="nav-item">
                Download CV
              </a>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
