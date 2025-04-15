import React from 'react';
import styles from './header.module.css';



const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logContainer}>
                <img
                src = '/ailogo.svg'
                alt = "AI Governance Hub Logo"
                className={styles.logo}
                />
                <span className={styles.logoText}>AI Governance Hub</span>
            </div>
            <nav className={styles.nav}>
                <a href= "#"> Home</a>
                <a href= "#"> Modules</a>
                <a href= "#"> Resources</a>
                <a href= "#"> Community</a>
                <a href= "#"> About Us</a>
            </nav>
            <div className={styles.authButtons}>
                <button className={styles.login}>Log In</button>
                <button className={styles.signup}>Sign Up</button>
            </div>
        </header>
    );
}

export default Header;