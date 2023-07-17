import React from 'react';
import owLogo from '../photos/overwatch.png';
import val from '../photos/val.png';
import rocket from '../photos/rocket.png';
import cs from '../photos/cs2.jpg';
import './Teams.css';


export default function Teams(props) {
    return (
        <div className='Teams'>
            <div className='GameHeader'>
                <img src={props.logo} className='logo' alt='logo'/>
                <h2 className='GameName'>Overwatch 2</h2>
            </div>
            <p className='GameWriteUp'>Endeavor bachelor but add eat pleasure doubtful sociable. Age forming covered you entered the examine. Blessing scarcely confined her contempt wondered shy. Dashwoods contented sportsmen at up no convinced cordially affection. Am so continued resembled frankness disposing engrossed dashwoods. Earnest greater on no observe fortune norland. Hunted mrs ham wishes stairs. Continued he as so breakfast shameless. All men drew its post knew. Of talking of calling however civilly wishing resolve. </p>
            <div className='GameHeader'>
                <img src={val} className='Val' alt='logo'/>
                <h2 className='GameName'>Valorant</h2>
            </div>
            <p className='GameWriteUp'>Endeavor bachelor but add eat pleasure doubtful sociable. Age forming covered you entered the examine. Blessing scarcely confined her contempt wondered shy. Dashwoods contented sportsmen at up no convinced cordially affection. Am so continued resembled frankness disposing engrossed dashwoods. Earnest greater on no observe fortune norland. Hunted mrs ham wishes stairs. Continued he as so breakfast shameless. All men drew its post knew. Of talking of calling however civilly wishing resolve. </p>
            <div className='GameHeader'>
                <img src={rocket} className='Rocket' alt='logo'/>
                <h2 className='GameName'>Rocket League</h2>
            </div>
            <p className='GameWriteUp'>Endeavor bachelor but add eat pleasure doubtful sociable. Age forming covered you entered the examine. Blessing scarcely confined her contempt wondered shy. Dashwoods contented sportsmen at up no convinced cordially affection. Am so continued resembled frankness disposing engrossed dashwoods. Earnest greater on no observe fortune norland. Hunted mrs ham wishes stairs. Continued he as so breakfast shameless. All men drew its post knew. Of talking of calling however civilly wishing resolve. </p>
            <div className='GameHeader'>
                <img src={cs} className='Cs' alt='logo'/>
                <h2 className='GameName'>Counter Strike</h2>
            </div>
            <p className='GameWriteUp'>Endeavor bachelor but add eat pleasure doubtful sociable. Age forming covered you entered the examine. Blessing scarcely confined her contempt wondered shy. Dashwoods contented sportsmen at up no convinced cordially affection. Am so continued resembled frankness disposing engrossed dashwoods. Earnest greater on no observe fortune norland. Hunted mrs ham wishes stairs. Continued he as so breakfast shameless. All men drew its post knew. Of talking of calling however civilly wishing resolve. </p>
        </div>
    )
    
}