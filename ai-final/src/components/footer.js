import react from "react";
import styles from './footer.module.css';

function Footer ()  {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.column}>
                    <h4>
                        AI Governance
                    </h4>
                    <p>Bridging the gap between complex AI concepts and everyday understanding. </p>
                </div>
                <div className={styles.column}>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#"> Home </a></li>
                        <li><a href="#"> Modules </a></li>
                        <li><a href="#"> Resources </a></li>
                        <li><a href="#"> Community </a></li>
                        <li><a href="#"> About Us </a></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#"> Blog </a></li>
                        <li><a href="#"> Case Studies </a></li>
                        <li><a href="#"> Research Papers </a></li>
                        <li><a href="#"> Glossary </a></li>
                        <li><a href="#"> FAQ </a></li>
                    </ul>
                </div>
                <div className={styles.column}>
                <h4>Contact</h4>
                    <ul>
                        <li><a href= "mailto:support@aigovernancehub.org">support@aigovernancehub.org </a></li>
                        <li><a href="tel:+15551234567">+1 (555) 123-4567 </a></li>
                        <li><a href="#"> Contact Form </a></li>
                    </ul>
                </div>
                <div className={styles.bottom}>
                    <p>© 2025 AI Governance Hub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );

}


export default Footer;