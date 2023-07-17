import React from 'react';
import logo from './photos/kelownagas.png';
import Announcement from './components/Announcement.js';
import About from './components/About.js';
import Ufv from './components/Ufv.js';
import Teams from './components/Teams.js';
import SignUp from './components/SignUp.js';
import ContactUs from './components/ContactUs.js';
import owInfo from './teamData/ow.js';
import valInfo from './teamData/val.js';
import csInfo from './teamData/cs.js';
import gif from "./photos/kgxufv.gif";
import { useState } from 'react';
import './App.css';
import rocketInfo from './teamData/rocket';

function App() {
  const [team, setTeam]= useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <img src={logo} id="logo" alt="logo"/>
          <div className='links'>
            <a href='#About' className='nav-button'>About Us</a>
            <a href='#Ufv' className='nav-button'>About UFV esports</a>
            <a href='#Teams' className='nav-button'>Our Teams</a>
            <a href='#SignUp'className='nav-button'>Sign Up to Play</a>
            <a href='#Contact' className='nav-button'>Contact Us</a>
          </div>
          </nav>
          <div className='components'>
            <img src={gif} className='coverImg'/>
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
                <button onClick={() => {setTeam(owInfo); console.log(team);}}>
                  <img className='logoButton'src ={owInfo.logo}/>
                </button>
                <button onClick={() => setTeam(valInfo)}>
                  <img className='logoButton' src={valInfo.logo}/>
                </button>
                <button onClick={() => setTeam(rocketInfo)}>
                  <img className='logoButton'src={rocketInfo.logo}/>
                </button>
                <button onClick={() => setTeam(csInfo)}>
                  <img className='logoButton' src={csInfo.logo}/>
                </button>
              </div>
              {team? (<Teams
                logo={team.logo}
                name={team.name}
                writeUp={team.writeUp}
                banner={team.banner}
                />) : null }
                
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
