import React from 'react';
import './About.css';
import kelowna from '../photos/kelownagas.png'

export default function About(props) {
    return(
        <div className='About'>
            <h1>About Us</h1>
            <div className='body'>
                <img src={kelowna} />
                <p>Kelowna Gas is a local semi-pro esports organization that we have partnered with, which has helped us to get esports started at UFV by subsidizing jerseys, covering preliminary fees, and providing organizational assistance. </p>
            </div>
        </div>
    );
}