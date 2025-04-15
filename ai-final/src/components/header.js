import React from 'react';
import styles from './header.module.css';
import logo from './ailogo.svg';
import { useState } from 'react';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className={styles.header}>
            <div className={styles.logContainer}>
                <img
                src = {logo}
                alt = "AI Governance Hub Logo"
                className={styles.logo}
                />
                <span className={styles.logoText}>AI Governance Hub</span>
            </div>

            <div className={styles.hamburger} onClick={toggleMenu}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
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

            {isOpen && (
            <div className={styles.mobileMenu}>
                <a href= "#"> Home</a>
                <a href= "#"> Modules</a>
                <a href= "#"> Resources</a>
                <a href= "#"> Community</a>
                <a href= "#"> About Us</a>
                <div className={styles.mobileButtons}>
                <button className={styles.login}>Log In</button>
                <button className={styles.signup}>Sign Up</button>
                </div>
            </div>

        )
        }
    </header>
    );
}

export default Header;