import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './section.css';
import projects from '../data/projects';

export default function Section2() {
  return (
    <section className="content-section">
      <div className="section-inner">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projects</h2>
          <div className="title-accent" />
        </motion.div>
        <motion.div
          className="projects-preview-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {projects.slice(0, 4).map((project, i) => (
            <motion.div
              key={i}
              className="preview-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
            >
              <img src={project.image} alt={project.alt} loading="lazy" />
              <div className="preview-overlay">
                <span>{project.title}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="section-cta"
        >
          <Link to="/Projects">
            <button className="cta-btn">View All Projects</button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
