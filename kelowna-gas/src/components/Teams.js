import React from 'react';
import owLogo from '../photos/overwatch.png';
import './Teams.css';


export default function Teams() {
    return (
        <div className='Teams'>
            <h1>Our Teams</h1>
            <div className='GameHeader'>
                <img src={owLogo} className='OwLogo' alt='logo'/>
                <h2 className='GameName'>Overwatch 2</h2>
            </div>
            <p className='GameWriteUp'>Endeavor bachelor but add eat pleasure doubtful sociable. Age forming covered you entered the examine. Blessing scarcely confined her contempt wondered shy. Dashwoods contented sportsmen at up no convinced cordially affection. Am so continued resembled frankness disposing engrossed dashwoods. Earnest greater on no observe fortune norland. Hunted mrs ham wishes stairs. Continued he as so breakfast shameless. All men drew its post knew. Of talking of calling however civilly wishing resolve. </p>
        </div>
    )
    
}