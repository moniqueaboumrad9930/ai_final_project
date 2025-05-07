// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqbKgET-qoYSvRqf8K3c7Bbik-CFXYlsY",
  authDomain: "aifinalproject-858e1.firebaseapp.com",
  databaseURL: "https://aifinalproject-858e1-default-rtdb.firebaseio.com",
  projectId: "aifinalproject-858e1",
  storageBucket: "aifinalproject-858e1.firebasestorage.app",
  messagingSenderId: "707002915106",
  appId: "1:707002915106:web:aa76e28171409e1e41ed7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);