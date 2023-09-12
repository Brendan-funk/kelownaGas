import React from "react";
import gif from "../photos/jersey.png";
import logo from "../photos/kelownaGasXUFV.gif"
import AboutUs from "./About.js"
import './Announcement.css'

export default function Announcement(props) {
    return (
        <div className="AboutUs">
            <AboutUs/>
            <div className="announcement">
                <h1>Announcements</h1>
                <img src={gif}className="gif"/>
                <p className="description">We have our new alternate jersey's coming out soon!!</p>
            </div>
        </div>
    )
}

