import React, {useState} from "react";
import styles from './components.module.css'

function SearchInput(){

    const [userInput,setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input style={styles.SearchInput} type="text" value={userInput} onChange={handleChange}/>
                <button className={styles.searchIcon} type="submit"></button>
            </form>
        </>
    )
}

export default SearchInput