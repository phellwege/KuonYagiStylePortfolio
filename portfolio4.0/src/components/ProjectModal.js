import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './projectModal.css';

// Project details in a dialog: a gallery whose images open full screen,
// the long write-up, the stack, and links to the site and code.
export default function ProjectModal({ project, onClose }) {
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const closeRef = useRef(null);
  const images = project ? project.images || [project.image] : [];

  useEffect(() => {
    setActive(0);
    setZoomed(false);
  }, [project]);

  const step = useCallback(
    (dir) => setActive((i) => (i + dir + images.length) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (!project) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (zoomed) setZoomed(false);
        else onClose();
      } else if (e.key === 'ArrowRight' && images.length > 1) step(1);
      else if (e.key === 'ArrowLeft' && images.length > 1) step(-1);
    };
    window.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [project, zoomed, onClose, step, images.length]);

  const details = project && (project.details || [project.description]);

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          key="backdrop"
          className="pm-backdrop"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="pm-dialog glass-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="pm-title"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <button ref={closeRef} className="pm-close" onClick={onClose} aria-label="Close">
              &times;
            </button>

            <div className="pm-gallery">
              <button
                className="pm-main"
                onClick={() => setZoomed(true)}
                aria-label="Enlarge image"
              >
                <img src={images[active]} alt={active === 0 ? project.alt : `${project.title}, image ${active + 1}`} />
                <span className="pm-zoom-hint">Click to enlarge</span>
              </button>
              {images.length > 1 && (
                <div className="pm-thumbs">
                  {images.map((src, i) => (
                    <button
                      key={i}
                      className={i === active ? 'pm-thumb on' : 'pm-thumb'}
                      onClick={() => setActive(i)}
                      aria-label={`Show image ${i + 1}`}
                    >
                      <img src={src} alt="" loading="lazy" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="pm-body">
              <h2 id="pm-title" className="pm-title">{project.title}</h2>
              {details.map((p, i) => (
                <p key={i} className="pm-text">{p}</p>
              ))}
              {project.stack && (
                <ul className="pm-stack">
                  {project.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              )}
              <div className="card-links pm-links">
                {project.status && <span className="card-link status-badge">{project.status}</span>}
                {project.deployedUrl && (
                  <a href={project.deployedUrl} target="_blank" rel="noreferrer" className="card-link primary">
                    Live Site
                  </a>
                )}
                {project.repoUrl ? (
                  <a href={project.repoUrl} target="_blank" rel="noreferrer" className="card-link">
                    GitHub
                  </a>
                ) : (
                  <span className="card-link status-badge">Private repository</span>
                )}
              </div>
            </div>
          </motion.div>

          <AnimatePresence>
            {zoomed && (
              <motion.div
                key="lightbox"
                className="pm-lightbox"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomed(false);
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <img src={images[active]} alt="" onClick={(e) => e.stopPropagation()} />
                {images.length > 1 && (
                  <>
                    <button
                      className="pm-arrow left"
                      onClick={(e) => { e.stopPropagation(); step(-1); }}
                      aria-label="Previous image"
                    >
                      &#8249;
                    </button>
                    <button
                      className="pm-arrow right"
                      onClick={(e) => { e.stopPropagation(); step(1); }}
                      aria-label="Next image"
                    >
                      &#8250;
                    </button>
                    <span className="pm-count">{active + 1} / {images.length}</span>
                  </>
                )}
                <button
                  className="pm-close pm-lightbox-close"
                  onClick={(e) => { e.stopPropagation(); setZoomed(false); }}
                  aria-label="Close enlarged image"
                >
                  &times;
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
