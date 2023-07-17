import React from 'react';
import { Linking } from 'react';
import './SignUp.css';
export default function SignUp () {
    return (
        <div className='Form'>
            <div className='Signup'>
                <h1> Sign Up For UFV Esports</h1>
                <p> If you are a student at ufv and are looking to participate in one of our teams or just join a discord with other esports enthusiasts please fill out the form below </p>
                <a href='#' className='SignUpLink'>Sign Up</a>
            </div>
            <div className="ContactUs">
                <h1>Contact Us</h1>
                <p> For business or sponsorship inquiries please email us at</p>
                <button onClick={() => Linking.openURL('mailto:email@email.com')}>email@email.com</button>
            </div>
        </div>
    )
}