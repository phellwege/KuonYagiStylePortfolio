import React, { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/header';
import './projectPage.css';
import projects from '../data/projects';
import ImageCycler from '../components/ImageCycler';

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    }
  }, []);

  return (
    <motion.div
      className="project-card-wrapper"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div
        ref={cardRef}
        className="project-card glass-panel"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-img-container">
          <ImageCycler
            images={project.images || [project.image]}
            alt={project.alt}
            startDelay={index * 1200}
          />
        </div>
        <div className="card-body">
          <h3 className="card-title">{project.title}</h3>
          <p className="card-desc">{project.description}</p>
          <div className="card-links">
            {project.status && (
              <span className="card-link status-badge">{project.status}</span>
            )}
            {project.deployedUrl && (
              <a href={project.deployedUrl} target="_blank" rel="noreferrer" className="card-link primary">
                Live Site
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer" className="card-link">
                GitHub
              </a>
            )}
          </div>
        </div>
        <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  return (
    <motion.div
      className="projects-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Header />
      <div className="projects-hero">
        <motion.h1
          className="projects-hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Projects
        </motion.h1>
        <motion.div
          className="title-accent"
          style={{ margin: '0.75rem auto 0' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
