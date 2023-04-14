import React from 'react'
import styles from './HomePage.module.css'


function HomePage() {

    return (
    <div className={styles.homepage}>
        <h2>You are welcome...</h2>
        <img src="https://images.unsplash.com/photo-1583922606661-0822ed0bd916?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="goods" ></img>
    </div>
    )
}


export default HomePage