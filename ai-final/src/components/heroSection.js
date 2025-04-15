import React from 'react';
import styles from './heroSection.module.css';

const HeroSection  = () => {
    return (
        <section className={styles.hero}>
            <h1 className={styles.h1}> Understanding AI Governance Made Simple</h1>
            <p className={styles.p}>Learn about fairness, transparency, and accountability in AI. </p>
            <button className={styles.button}>Start Learning</button>
        </section>
    );

};
export default HeroSection;