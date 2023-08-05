import React from 'react';
import styles from './banner.module.css';

function Banner(){
    return (
        <div className={styles.banner}>
            <h1 className={styles.logo}>Ja<span className={styles.logoHighlight}>mm</span>er</h1>
        </div>
    )
}

export default Banner; 