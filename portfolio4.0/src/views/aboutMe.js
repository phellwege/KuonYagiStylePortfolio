import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/header';
import './aboutMe.css';
import AboutMe1 from '../components/aboutMe1';
import AboutMe2 from '../components/aboutMe2';

export default function AboutMe() {
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Header />
      <div className="about-body">
        <AboutMe1 />
        <AboutMe2 />
      </div>
    </motion.div>
  );
}
