import React from 'react';
import logo from './photos/kelownagaslogo.jpg';
import Home from './components/Announcement.js';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
        <img src={logo} className="logo" alt="logo" />
          <div className='links'>
            <button onClick={null} className='nav-button'>About Us</button>
            <button onClick={null} className='nav-button'>About UFV esports</button>
            <button onClick={null} className='nav-button'>Our Teams</button>
            <button onClick={null} className='nav-button'>Sign Up to Play</button>
            <button onClick={null} className='nav-button'>Contact Us</button>
          </div>
          </nav>
          <div className='components'>
            <Home />
          </div>
      </header>
    </div>
  );
}

export default App;
