import React, {useEffect, useState} from "react";
import { useAuth } from "../context/AuthContext";
import styles from './dashboard.module.css';
import {doc, getDoc} from 'firebase/firestore';
import {db} from '../Firebase';
import Sidebar from "../components/sidebar";
import CourseCard from "../components/CourseCard";
import { useNavigate } from "react-router-dom";




const Dashboard = () => {
    const { currentUser } = useAuth();
    const [progress, setProgress] = useState(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchProgress = async () => {
        if (!currentUser) return;
        const docRef = doc(db, 'users', currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProgress(docSnap.data().progress || {});
        } else {
          setProgress({});
        }
      };
      fetchProgress();
    }, [currentUser]);
  
    if (!progress) return <div className={styles.content}>Loading progress...</div>;
  
    const totalCompleted = Object.values(progress).filter(p => p.completed).length;
  
    return (
      <div className={styles.dashboardContainer}>
        <Sidebar />
        <div className={styles.content}>
          <h3>Welcome back, {currentUser?.displayName || 'User'}!</h3>
          <p>Continue your learning journey</p>
  
          <div className={styles.dashboardHeader}>
            <h2>My Learning Dashboard</h2>
            <p>Complete each course to unlock the next one</p>
  
            <div className={styles.learningBar}>
              <p>Your Learning Journey</p>
              <div className={styles.progressBarOuter}>
                <div
                  className={styles.progressBarInner}
                  style={{ width: `${(totalCompleted / 3) * 100}%` }}
                />
              </div>
              <span>{totalCompleted} of 3 courses completed</span>
            </div>
          </div>
  
          <div className={styles.courseCards}>
            <CourseCard
              title="AI Ethics Fundamentals"
              description="Learn the core principles of ethical AI development and implementation in this comprehensive course."
              status={progress.beginner?.completed ? 'Completed' : 'Continue'}
              percent={progress.beginner?.percent || 0}
              level="Beginner"
              duration="8 hours"
              actionText={progress.beginner?.completed ? 'Review' : 'Continue'}
              onClick={() => navigate('/courses/fairness')}
            />
            <CourseCard
              title="AI Governance Frameworks"
              description="Explore global AI governance frameworks and learn how to implement them in your organization."
              status={progress.intermediate?.completed ? 'Completed' : progress.beginner?.completed ? 'Continue' : 'Locked'}
              percent={progress.intermediate?.percent || 0}
              level="Intermediate"
              duration="12 hours"
              moduleProgress="Module 3 of 8"
              locked={!progress.beginner?.completed}
              actionText={progress.beginner?.completed ? 'Continue' : 'Locked'}
            />
            <CourseCard
              title="Responsible AI Development"
              description="Master the techniques and best practices for developing AI systems that are fair, transparent, and accountable."
              status={progress.advanced?.completed ? 'Completed' : progress.intermediate?.completed ? 'Continue' : 'Locked'}
              percent={progress.advanced?.percent || 0}
              level="Advanced"
              duration="10 hours"
              locked={!progress.beginner?.completed || !progress.intermediate?.completed}
              actionText={progress.beginner?.completed && progress.intermediate?.completed ? 'Continue' : 'Locked'}
            />
          </div>
        </div>
      </div>
    );
  };

  export default Dashboard;