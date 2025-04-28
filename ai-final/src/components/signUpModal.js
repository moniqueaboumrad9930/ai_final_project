import React from 'react';
import styles from './signUpModal.module.css';

function SignUpModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.formSection}>
          
          {/* Only tabs now */}
          <div className={styles.tabs}>
            <span className={styles.tab}>Log In</span>
            <span className={`${styles.tab} ${styles.active}`}>Sign Up</span>
          </div>

          {/* Form title */}
          <h3 className={styles.title}>Create Your Account</h3>
          <p className={styles.subtitle}>
            Join our community and start your learning journey today.
          </p>

          {/* Form fields */}
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

            <p className={styles.loginText}>
              Already have an account? <a href="#">Log in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpModal;


