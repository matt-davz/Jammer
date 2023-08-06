import React from 'react'
import styles from './containers.module.css'
import ResultsContainer from './ResultsContainer'
import AddPlaylistContainer from './AddPlaylistContainer'

function FunctionContainer() {
    return(
        <div className={styles.functionContainer}>
          <ResultsContainer />
          <AddPlaylistContainer />
        </div>
    )
}

export default FunctionContainer