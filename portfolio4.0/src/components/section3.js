import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './section.css';
import HeadShot from '../static/HeadShot.jpeg';

export default function Section3() {
  return (
    <section className="content-section">
      <div className="section-inner about-preview">
        <motion.div
          className="about-preview-image"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <img src={HeadShot} alt="Headshot" />
          <div className="image-glow" />
        </motion.div>
        <motion.div
          className="about-preview-text"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="title-accent" />
          <p className="about-preview-desc">
            I love building something new from the ground up
          </p>
          <Link to="/AboutMe">
            <button className="cta-btn">Learn More</button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
