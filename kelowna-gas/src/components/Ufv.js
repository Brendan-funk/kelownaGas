import React from 'react';
import logo from '../photos/ufvLogo.png';
import './Ufv.css';

export default function Ufv() {
    return (
        <div className='Ufv'>
            <h1>About UFV Esports</h1>
            <div className='body'>
                <img src={logo} className='ufvLogo'/>
                <div className='writing'>
                    <p>Our Vision:</p>
                    <p>We want to be a part of creating an environment where people who grow up gamers are excited about the legitimate, achievable opportunities they have to play on competitive teams, find jobs, and pursue their professional esports dreams.</p>
                    <p>Mission:</p>
                    <p>To Develop Generational Talent in the Rapidly Growing Competitive Esports Environment</p>
                </div>
            </div>
        </div>
    )
}