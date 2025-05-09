import React from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../Firebase';
import { useAuth } from '../context/AuthContext';
import Quiz from '../components/quiz';
import fairnessQuestions from '../data/fairnessQuestions';
import { useNavigate } from 'react-router-dom';

const FairnessQuizPage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const markCourseCompleted = async (userAnswers, questions) => {
    if (!questions || questions.length === 0) {
      console.error("Quiz questions not loaded.");
      return;
    }

    let score = 0;
    questions.forEach((q, i) => {
      if (userAnswers[i] === q.correctAnswer) score++;
    });

    console.log("User scored:", score);

    if (score >= 8) {
      try {
        const userRef = doc(db, 'users', currentUser.uid);
        await setDoc(userRef, {
            'progress.beginner.completed': true,
            'progress.beginner.percent': 100,
        }, {merge: true});
        alert('🎉 Passed! Redirecting you to dashboard...');
        setTimeout(() => {
          navigate('/dashboard');
        }, 250);
      } catch (err) {
        console.error('Error updating progress:', err);
        alert('Error saving your progress.');
      }
    } else {
      alert(`You scored ${score}/10. You need at least 8 to pass.`);
    }
  };

  return (
    <Quiz
      title="AI Fairness Quiz"
      questions={fairnessQuestions}
      onComplete={(answers) => markCourseCompleted(answers, fairnessQuestions)}
    />
  );
};

export default FairnessQuizPage;


