import React from "react";
import { Linking } from 'react';
import './ContactUs.css';

export default function ContactUs () {
    return (
        <div className="Contact">
            <h1>Contact Us</h1>
            <p> For business or sponsorship inquiries please email us at</p>
            <button onPress={() => Linking.openURL('mailto:email@email.com')}>email@email.com</button>
        </div>
    )
}