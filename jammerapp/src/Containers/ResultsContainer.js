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
    },
    {
        song: 'I drink wine',
        artist: 'adele',
        album: 'english album idk'
    }
]


function ResultsContainer() {
    const [songs,setSongs] = useState(songObj)
    
    return (
        <div className={styles.containers}>
             <ul className={styles.songContainer}>
                {songs.map((song) => (
                    <DisplaySong songName={song.song} artist={song.artist} album={song.album} />
                ))}
             </ul>
        </div>
    )
};

export default ResultsContainer;