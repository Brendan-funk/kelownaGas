import React from "react";
import gif from "../photos/kgxufv.gif";
import './Announcement.css'

export default function Announcement(props) {
    return (
        <main className="announcemnet">
            <h1>Announcement!</h1>
            <img src={gif}className="gif"/>
            <p>We are proud to announce our partnership with UFV esports</p>
        </main>
    )
}

