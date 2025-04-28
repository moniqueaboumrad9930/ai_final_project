import React from 'react';
import styles from './signUpModal.module.css';
//import robotImage from './images/fairness.jpg'; // adjust your image path
////<img src={robotImage} alt="AI Robot" /> line 14
function SignUpModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.content}>
          <div className={styles.imageSection}>
            
            <div className={styles.imageText}>
              <h2>Join the AI Governance Community</h2>
              <p>Learn about fairness, transparency, and accountability in AI systems through expert-led courses and interactive modules.</p>
            </div>
          </div>
          <div className={styles.formSection}>
            <div className={styles.tabs}>
              <span className={styles.tab}>Log In</span>
              <span className={`${styles.tab} ${styles.active}`}>Sign Up</span>
            </div>

            <h3>Create Your Account</h3>
            <p>Join our community and start your learning journey today.</p>

            <form className={styles.form}>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />

              <div className={styles.terms}>
                <input type="checkbox" />
                <label>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
              </div>

              <button type="submit" className={styles.submitButton}>Create Account</button>

              <div className={styles.or}>
                <span>Or sign up with</span>
              </div>

              <div className={styles.socialIcons}>
                <button>G</button>
                <button>F</button>
                <button>A</button>
              </div>

              <p className={styles.loginText}>Already have an account? <a href="#">Log in</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpModal;
