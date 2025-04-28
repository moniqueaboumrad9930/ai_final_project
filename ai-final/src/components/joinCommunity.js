import { useState } from "react";
import styles from './joinCommunity.module.css'
import SignUpModal from "./signUpModal";

function JoinCommunity () {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <><section className={styles.section}>
            <h2 className={styles.title}>
                Join Our Community Today
            </h2>
            <p className={styles.subtitle}>
                Start your journey understanding AI governance and contribute to shaping a future where AI benefits everyone.
            </p>
            <button className={styles.button} onClick={() => setModalOpen(true)}>Sign Up for Free</button>
        </section>
        <SignUpModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    );
}

export default JoinCommunity;