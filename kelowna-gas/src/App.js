import React from 'react';
import logo from './photos/kelownagaslogo.jpg';
import Announcement from './components/Announcement.js';
import About from './components/About.js';
import Ufv from './components/Ufv.js';
import Teams from './components/Teams.js';
import './App.css';

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
            <Announcement />
            <About />
            <Ufv />
            <Teams />
          </div>
      </header>
    </div>
  );
}

export default App;
