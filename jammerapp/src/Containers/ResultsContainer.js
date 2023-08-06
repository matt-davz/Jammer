import React, {useState} from 'react'
import styles from './containers.module.css'
import DisplaySong from '../Components/DisplaySong'

const songObj =[
    {
        song: 'Light',
        artist: 'San Holo',
        album: 'Lights Remix'
    },
    {
        song: 'Wriggle',
        artist: 'Cosmos Sheldrake',
        album: 'Wriggle Original'
    }
]


function ResultsContainer() {
    return (
        <div className={styles.containers}>
             <ul className={styles.songContainer}>
                <DisplaySong />
             </ul>
        </div>
    )
};

export default ResultsContainer;