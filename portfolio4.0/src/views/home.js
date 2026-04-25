import React, { Suspense, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './home.css';
import Header from '../components/header';
import Section1 from '../components/section1';
import Section2 from '../components/section2';
import Section3 from '../components/section3';
import Section4 from '../components/section4';
import ProjectionOverlay from '../components/ProjectionOverlay';

const Scene3D = React.lazy(() => import('../components/Scene3D'));

export default function Home() {
  const sceneRef = useRef(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const zoom = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  useEffect(() => {
    return zoom.on('change', (v) => {
      if (sceneRef.current) {
        sceneRef.current.setZoom(v);
      }
    });
  }, [zoom]);

  return (
    <motion.div
      className="home-wrapper"
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="scene-fixed">
        <Suspense fallback={null}>
          <Scene3D ref={sceneRef} />
        </Suspense>
      </div>
      <ProjectionOverlay scrollProgress={scrollYProgress} sceneRef={sceneRef} />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </motion.div>
  );
}
