import React from 'react';
import './Teams.css';


export default function Teams(props) {
    const style = {
        backgroundImage: props.banner, 
    }
    return (
       <div className='Teams' style={{backgroundImage: `url(${props.banner})`}}>
            <div className='GameHeader'>
                <img src={props.logo} className='logo' alt='logo'/>
                <h2 className='GameName'>{props.name}</h2>
            </div>
            <p className='GameWriteUp'>{props.writeUp} </p>
        </div>
    )
    
}