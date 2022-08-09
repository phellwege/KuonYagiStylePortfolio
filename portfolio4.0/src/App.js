import './App.css';
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './views/home';
import ProjectsPage from './views/projectsPage';

function App() {
  return (
    <div className="App">
      <React.Fragment>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Projects" element={<ProjectsPage/>}/>
          </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
