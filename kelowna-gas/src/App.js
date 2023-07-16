import React from 'react';
import logo from './photos/kelowna_gas_logo_green.png';
import Home from './components/Home.js';
import './App.css';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  }
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <img src={logo} className="logo" alt="logo" />
          <div className='links'>
            <p>About Us</p>
            <div className='dropdown'>
              <button onClick={handleOpen} className='ufv-button'>UFV esports</button>
              {open ? (
                <ul className='menu'>
                <li className='menu-item'>
                  <button>About UFV</button>
                </li>
                <li className='menu-item'>
                  <button>Our Teams</button>
                </li>
                <li className='menu-item'>
                  <button>Sign Up to Play</button>
                </li>
              </ul>) : null}
            </div> 
            <p>Contact Us</p>
          </div>
        </nav>
        <Home />
      </header>
    </div>
  );
}

export default App;
