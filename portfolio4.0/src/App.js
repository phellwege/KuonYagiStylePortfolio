import './App.css';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './views/home';
import ProjectsPage from './views/projectsPage';
import AboutMe from './views/aboutMe';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Projects" element={<ProjectsPage />} />
          <Route exact path="/AboutMe" element={<AboutMe />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
