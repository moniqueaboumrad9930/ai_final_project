import React from 'react';
import styles from './sidebar.module.css';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {auth} from '../Firebase';

const Sidebar = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try{
            await signOut(auth);
            navigate('/');
        } catch(error){
            console.log('Logout error: ', error);
        }
    };
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>AI Governance Hub</h2>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.active}>Dashboard</li>
          <li>Courses</li>
          <li>Settings</li>
          <li onClick={handleLogout} className={styles.navItem}>Logout</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;