import React from "react";
import gif from "../photos/jersey.png";
import './Announcement.css'

export default function Announcement(props) {
    return (
        <main className="announcemnet">
            <h1>Announcements</h1>
            <img src={gif}className="gif"/>
            <p>We have our new alternate jersey's coming out soon!!</p>
        </main>
    )
}

