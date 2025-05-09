import React from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../Firebase';
import { useAuth } from '../context/AuthContext';
import Quiz from '../components/quiz';
import fairnessQuestions from '../data/fairnessQuestions';

const FairnessQuizPage = () => {
  const { currentUser } = useAuth();

  const markCourseCompleted = async () => {
    const ref = doc(db, 'users', currentUser.uid);
    await updateDoc(ref, {
      'progress.beginner.completed': true,
      'progress.beginner.percent': 100
    });
  };
  console.log("Fairness Questions:", fairnessQuestions);
  return (
    <Quiz
      title="AI Fairness Quiz"
      questions={fairnessQuestions}
      onComplete={markCourseCompleted}
    />
  );
};

export default FairnessQuizPage;

