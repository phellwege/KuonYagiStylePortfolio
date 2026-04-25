import React from 'react';
import { motion } from 'framer-motion';
import './section.css';

export default function Section1() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text-side">
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Peter<br />Hellwege
          </motion.h1>
          <motion.div
            className="hero-accent-lines"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          >
            <span className="accent-line" />
            <span className="accent-line short" />
          </motion.div>
          <motion.h3
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            Full-Stack Software Engineer &<br />Data Engineer
          </motion.h3>
        </div>
        <motion.div
          className="hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <div className="scroll-line" />
        </motion.div>
      </div>
    </section>
  );
}
