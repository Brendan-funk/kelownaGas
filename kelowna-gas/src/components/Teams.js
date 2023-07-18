import React from 'react';
import './Teams.css';


export default function Teams(props) {
    return (
            <div className='Teams'  id='gunga'style={{backgroundImage: `url(${props.banner})`}}>
                <div className='GameInfo' id='ginga'>
                   {props ? (
                        <div className='GameHeader'> 
                            <img src={props.logo} className='logo' alt='logo'/>
                            <h2 className='GameName'>{props.name}</h2> 
                        </div>) : <></>
                    }
                    {props  && <p className='GameWriteUp'>{props.writeUp} </p>}
                    {props && <img src={props.roster}className='Roster' alt=''/>}
                    {props.highlight ? (
                        <div className='Highlight-Div'>
                            <h1>Highlights</h1>
                            <video className='Highlight' alt='' autoPlay loop>
                                <source src={props.highlight} type='video/mp4'/>
                            </video>
                        </div>) : <></>
                }
                </div>
            </div>
    )
    
}