import React from 'react'
import styles from './containers.module.css'
import SearchInput from '../Components/SearchInput'

function SearchContainer(){
    return (
        <div className={styles.searchContainer}>
            <h2>Discover a Track</h2>
            <div className={styles.searchBarContainer}>
                <SearchInput />
            </div>
        </div>
    )
}

export default SearchContainer