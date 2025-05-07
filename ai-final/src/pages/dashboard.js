import React from "react";
import { useAuth } from "../context/AuthContext";
import styles from './dashboard.module.css';



const Dashboard = () => {
    const {currentUser} = useAuth();

    return(
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                <h2>AI Governance Hub</h2>
                <ul>
                    <li>Dashboard</li>
                    <li>Courses</li>
                    <li>Settings</li>
                    <li>Logout</li>
                </ul>
            </aside>
            <main className={styles.main}>
                <h1>Welcome back, {currentUser.displayName || 'Scholar'}!</h1>
                <p>Continue your learning journey</p>
            </main>
        </div>
    )
};

export default Dashboard;