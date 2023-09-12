import React from 'react';
import logo from './photos/kelownagas.png';
import Announcement from './components/Announcement.js';
import Ufv from './components/Ufv.js';
import Teams from './components/Teams.js';
import SignUp from './components/SignUp.js';
import owInfo from './teamData/ow.js';
import valInfo from './teamData/val.js';
import csInfo from './teamData/cs.js';
import gif from "./photos/kgxufv.gif";
import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import { useState, useEffect, useRef} from 'react';
import './App.css';
import rocketInfo from './teamData/rocket';

function App() {
  
  const [open, setOpen]= useState(false);

  let menuRef = useRef();
  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler)
  })
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
        <nav>
          <img src={logo} id="logo" alt="logo"/>
          <div className='links'>
            <Link to="/"><button className='link'>About Us</button></Link>
            <Link to="/Ufv"><button className='link'>About UFV esports</button></Link>
            <div className='menu-container' ref={menuRef}>
              <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
                <button className='link'>Our Teams</button>
              </div>
              <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
                <Link to="/Valorant"><DropdownItem img={valInfo.logo} name = {"Valorant"}/> </Link>
                <Link to="/CounterStrike"><DropdownItem img={csInfo.logo}name = {"Counter Strike"}/> </Link>
                <Link to="/RocketLeague"><DropdownItem img={rocketInfo.logo} name = {"Rocket League"}/> </Link>
                <Link to="/Overwatch"><DropdownItem img={owInfo.logo} name = {"Overwatch"}/> </Link>
              </div>
            </div>
            <Link to="/contact"><button className='link'>Sign Up/Contact</button></Link>
          </div>
        </nav>
          <div className='components'>
            <Routes>
              <Route path="/" element={<Announcement />} />
              <Route path="/contact" element={<SignUp />} />
              <Route path="/" element={<Teams />} />
              <Route path="/ufv" element={<Ufv/>} />
              <Route path="/Valorant" element={<Teams
                logo={valInfo.logo}
                name={valInfo.name}
                writeUp={valInfo.writeUp}
                banner={valInfo.banner}
                roster={valInfo.roster}
                highlight={valInfo.highlight? valInfo.highlight : null}
                />} />
              <Route path="/CounterStrike" element={<Teams
                logo={csInfo.logo}
                name={csInfo.name}
                writeUp={csInfo.writeUp}
                banner={csInfo.banner}
                roster={csInfo.roster}
                highlight={csInfo.highlight? csInfo.highlight : null}
              />} />
              <Route path="/Overwatch" element={<Teams
                logo={owInfo.logo}
                name={owInfo.name}
                writeUp={owInfo.writeUp}
                banner={owInfo.banner}
                roster={owInfo.roster}
                highlight={owInfo.highlight? owInfo.highlight : null}
                />} />
                <Route path="/RocketLeague" element={<Teams
                logo={rocketInfo.logo}
                name={rocketInfo.name}
                writeUp={rocketInfo.writeUp}
                banner={rocketInfo.banner}
                roster={rocketInfo.roster}
                highlight={rocketInfo.highlight? rocketInfo.highlight : null}
                />} />
            </Routes>
          </div>
            {/* </div>
              <div className='teamToggle'>
                <button onClick={() => showTeam(owInfo)}>
                  <img className='logoButton'src ={owInfo.logo}/>
                </button>
                <button onClick={() => showTeam(valInfo)}>
                  <img className='logoButton' src={valInfo.logo}/>
                </button>
                <button onClick={() => showTeam(rocketInfo)}>
                  <img className='logoButton'src={rocketInfo.logo}/>
                </button>
                <button onClick={() => showTeam(csInfo)}>
                  <img className='logoButton' src={csInfo.logo}/>
                </button>
              </div>
              {team? (<Teams
                logo={team.logo}
                name={team.name}
                writeUp={team.writeUp}
                banner={team.banner}
                roster={team.roster}
                highlight={team.highlight? team.highlight : null}
                />) : <Teams/> }
              */} 
                
      </header>
      <footer>
        <p>Kelowna Gas ©</p>
        <p>Made by Denda Web Development, 2023</p>
      </footer>
      </BrowserRouter>
    </div>
  );

}
function DropdownItem(props) {
  return(
    <li className='dropdownItem'>
      <img src={props.img}></img>
      <button className='link'>{props.name}</button>
    </li>
  )
}

export default App;
