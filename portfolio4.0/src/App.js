import './App.css';
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './views/home';
import ProjectsPage from './views/projectsPage';
import AboutMe from './views/aboutMe';

function App() {
  return (
    <div className="App">
      <React.Fragment>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Projects" element={<ProjectsPage/>}/>
            <Route exact path="/AboutMe" element={<AboutMe/>}/>
          </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
