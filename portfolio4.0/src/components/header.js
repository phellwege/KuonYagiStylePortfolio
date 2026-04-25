import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './header.css';
import Navbar from './navbar';
import resume from '../static/Peter.Hellwege.Resume.pdf';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Header() {
  return (
    <motion.header
      className="header"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="header-left">
        <a href={resume} download="Peter.Hellwege.Resume.pdf" className="header-name">
          Peter Hellwege
        </a>
      </div>
      <div className="header-right">
        <Link to="/" className="header-link">Home</Link>
        <a href="https://github.com/phellwege" target="_blank" rel="noreferrer" className="header-icon">
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/peter-hellwege/" target="_blank" rel="noreferrer" className="header-icon">
          <FiLinkedin />
        </a>
        <Navbar />
      </div>
    </motion.header>
  );
}
