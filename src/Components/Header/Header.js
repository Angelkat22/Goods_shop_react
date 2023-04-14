import React from 'react'
import styles from './Header.module.css'
// import { NavLink } from 'react-router-dom'

function Header() {
    return (
    <div className={styles.header_wrapper}>
        <div className={styles.logo}>
            <span>Enjoy!</span>
        </div>
        <div className={styles.menu_wrapper}> 
            <a className={styles.item} href='/'>Home</a>  
            <a className={styles.item} href='/goods'>Goods</a>
            <a className={styles.item} href='/contacts'>Contact Us</a>
        </div>
    </div>
    )
}

export default Header