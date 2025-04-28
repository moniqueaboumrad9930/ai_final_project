import react from "react";
import styles from './joinCommunity.module.css'

function JoinCommunity () {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>
                Join Our Community Today
            </h2>
            <p className={styles.subtitle}>
                Start your journey understanding AI governance and contribute to shaping a future where AI benefits everyone.
            </p>
            <button className={styles.button}>Sign Up for Free</button>
        </section>
    );
}

export default JoinCommunity;