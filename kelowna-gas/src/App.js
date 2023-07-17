import React from 'react';
import logo from './photos/kelownagaslogo.jpg';
import Announcement from './components/Announcement.js';
import About from './components/About.js';
import Ufv from './components/Ufv.js';
import Teams from './components/Teams.js';
import SignUp from './components/SignUp.js';
import ContactUs from './components/ContactUs.js';
import ow from './photos/overwatch.png';
import val from './photos/val.png';
import rocket from './photos/rocket.png';
import cs from './photos/cs2.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <img src={logo} className="logo" alt="logo"/>
          <div className='links'>
            <a href='#About' className='nav-button'>About Us</a>
            <a href='#Ufv' className='nav-button'>About UFV esports</a>
            <a href='#Teams' className='nav-button'>Our Teams</a>
            <a href='#SignUp'className='nav-button'>Sign Up to Play</a>
            <a href='#Contact' className='nav-button'>Contact Us</a>
          </div>
          </nav>
          <div className='components'>
            <Announcement />
            <div id="About">
              <About />
            </div>
            <div id="Ufv">
              <Ufv />
            </div>
            <div id="Teams">
              <h1>Our Teams</h1>
              <div className='teamToggle'>
                <button>
                  <img className='logoButton'src ={ow}/>
                </button>
                <button>
                  <img className='logoButton' id='val'src={val}/>
                </button>
                <button>
                  <img className='logoButton'src={rocket}/>
                </button>
                <button>
                  <img className='logoButton' id='cs'src={cs}/>
                </button>
              </div>
              <Teams />
            </div>
            <div id='SignUp'>
              <SignUp />
            </div>
            <div id='Contact'>
              <ContactUs />
            </div>
          </div>
      </header>
    </div>
  );
}

export default App;
