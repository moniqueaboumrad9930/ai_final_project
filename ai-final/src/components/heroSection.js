import React from 'react';
import { useState } from 'react';
import styles from './heroSection.module.css';
import SignUpModal from './signUpModal';
const HeroSection  = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <><section className={styles.hero}>
            <h1 className={styles.h1}> Understanding AI Governance Made Simple</h1>
            <p className={styles.p}>Learn about fairness, transparency, and accountability in AI. </p>
            <button className={styles.button} onClick={() => setModalOpen(true)}>Start Learning</button>
        </section>
        <SignUpModal isOpen={modalOpen} onClose={() => setModalOpen(false)} /></>

    );

};
export default HeroSection;