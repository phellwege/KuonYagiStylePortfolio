import './App.css';
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './views/home';

function App() {
  return (
    <div className="App">
      <React.Fragment>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
          </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
