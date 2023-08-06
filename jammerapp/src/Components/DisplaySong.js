import React, {useState} from "react";
import styles from './components.module.css';



function DisplaySong(props){
    return (
        <li>
            <img />
            <div>
                <h2>{props.songName}</h2>
                <h3>{props.artist} </h3>
                <h3>{props.album} </h3>
            </div>
            <img />
        </li>
    )
};

export default DisplaySong;