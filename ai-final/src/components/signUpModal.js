import React, { use } from 'react';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import { updateProfile } from 'firebase/auth';
import {doc, setDoc} from 'firebase/firestore';
import {auth, db} from '../Firebase';
import styles from './signUpModal.module.css';


function SignUpModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  
  const [mode, setMode] = useState('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  
  

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

      onAuthStateChanged(auth, (user) => {
        if(user){
           

      console.log("Navigating to dashboard");
      setTimeout(() => {
        navigate('/dashboard');
        onClose();

      }, 100);
      
        }
      });
     
   
    }catch(error){
      console.error('Sign Up Error:', error.message);
      //setError(error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // reset error
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
      onClose();
    } catch (err) {
      console.error('Login Error:', err.message);
      switch (err.code) {
        case 'auth/user-not-found':
          setError('No account found with this email.');
          break;
        case 'auth/wrong-password':
          setError('Incorrect password.');
          break;
        case 'auth/invalid-email':
          setError('Please enter a valid email.');
          break;
        default:
          setError('Failed to log in. Please try again.');
      }
    }
  };
  


  
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.formSection}>
          
          {/* Only tabs now */}
          <div className={styles.tabs}>
          <span className={`${styles.tab} ${mode === 'login' ? styles.active : ''}`}
          onClick={() => setMode('login')}
          >
          Log In
         </span>
         <span className={`${styles.tab} ${mode === 'signup' ? styles.active : ''}`}
          onClick={() => setMode('signup')}
         >
         Sign Up
        </span>
        </div>

       

          {/* Form title */}
          {mode === 'signup' && (
          <>
          <h3 className={styles.title}>Create Your Account</h3><p className={styles.subtitle}>
              Join our community and start your learning journey today.
            </p>
            </>

          )}
          {mode === 'login' && (
            <>
            <h3  className={styles.title}>Continue your Learning Journey</h3>
            <p className={styles.subtitle}>Pick up where you left off</p>
            </>
          )}
       

          {/* Form fields */}
          <form className={styles.form} onSubmit={mode === 'signup' ? handleSignUp : handleLogin}>
          {mode === 'signup' && (
            <input type="text" 
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            />
          )}
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
            {mode === 'signup' && (
            <input type="password" 
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            />
            )}
            {mode === 'signup' && (
            <div className={styles.terms}>
              <input type="checkbox" />
              <label>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
            </div>
            )}

            {error && <p className={styles.error}>{error}</p>}

            <button type="submit" className={styles.submitButton}>
            {mode === 'signup' ? 'Create Account' : 'Log In'}
           </button>
        
           {mode === 'signup' && (
          <p className={styles.loginText}>
               Already have an account?{" "}
           <a href="#" onClick={(e) => { e.preventDefault(); setMode('login'); }}>
            Log in
          </a>
           </p>
          )}

        {mode === 'login' && (
        <p className={styles.loginText}>
          Don’t have an account?{" "}
          <a href="#" onClick={(e) => { e.preventDefault(); setMode('signup'); }}>
          Sign up
          </a>
        </p>
        )}


          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpModal;


