import React from 'react';
import { motion } from 'framer-motion';
import './aboutMe.css';
import Headshot from '../static/HeadShot.jpeg';

export default function AboutMe1() {
  return (
    <section className="about-hero-section">
      <motion.div
        className="about-hero-inner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="about-hero-text">
          <motion.h1
            className="about-hero-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Peter Hellwege
          </motion.h1>
          <motion.h3
            className="about-hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Passionate About Software<br />And Data Engineering
          </motion.h3>
        </div>
        <motion.div
          className="about-hero-image-wrap"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <img src={Headshot} alt="headshot" className="about-headshot" />
          <div className="about-image-glow" />
        </motion.div>
      </motion.div>
      <motion.div
        className="about-bio glass-panel"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h3>A Bit About Me</h3>
        <p>
          In my spare time I enjoy art, fishing, riding my bike, or just reading a book.
          I'm located in scenic Boise ID, but love to travel.
        </p>
      </motion.div>
    </section>
  );
}
