import React, { use } from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { updateProfile } from 'firebase/auth';
import {doc, setDoc} from 'firebase/firestore';
import {auth, db} from '../Firebase';
import styles from './signUpModal.module.css';

function SignUpModal({ isOpen, onClose }) {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  if(!isOpen) return null;
  
  const handleSignUp = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      setError("Passwords do not match");
      return;
    }
    try{
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: fullName,
      });
  
      //save inital user progress to db 
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        name: fullName,
        email: email,
        progress: {
          begginner: {completed : false, percent: 0},
          intermediate: {completed: false, percent: 0},
          advanced: {completed: false, percent: 0}
        }
      });
      //add navigation to dashboard 
      onClose();
      navigate('/dashboard');
    }catch(error){
      console.error('Sign Up Error:', error.message);
      //setError(error.message);
    }
  };


  
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
          <form className={styles.form} onSubmit={handleSignUp}>
            <input type="text" 
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            />
            <input type="email"
             placeholder="Email Address"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password"
             placeholder="Password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
            />
            <input type="password" 
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div className={styles.terms}>
              <input type="checkbox" />
              <label>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
            </div>

            {error && <p className={styles.error}>{error}</p>}

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


