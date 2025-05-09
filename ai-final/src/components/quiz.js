import React, { useState } from 'react';
import styles from './quiz.module.css';

const Quiz = ({ title, questions, onComplete}) => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  const handleChange = (qIndex, value) => {
    setAnswers(prev => ({ ...prev, [qIndex]: value }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length !== questions.length) {
      alert('Please answer all questions before submitting.');
      return;
    }

    const correctCount = questions.reduce((acc, q, i) => {
      return answers[i] === q.correctAnswer ? acc + 1 : acc;
    }, 0);

    setScore(correctCount);
    setSubmitted(true);
    
    if (correctCount >= 8 && onComplete) onComplete();
  };
  if (!questions || questions.length === 0) {
    return <div className={styles.quizContainer}>Loading quiz...</div>;
  }
  

  return (
    <div className={styles.quizContainer}>
      <h2>{title}</h2>
      <p>Complete all {questions.length} questions to test your understanding.</p>

      {questions.map((q, i) => (
        <div className={styles.questionBlock} key={i}>
          <h4>{i + 1}. {q.question}</h4>
          {q.options.map((opt, idx) => (
            <label key={idx} className={styles.option}>
              <input
                type="radio"
                name={`question-${i}`}
                value={opt}
                checked={answers[i] === opt}
                onChange={() => handleChange(i, opt)}
                disabled={submitted}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}

      {!submitted && (
        <button onClick={() => onComplete(answers)} className={styles.submitButton}>
        Submit Quiz ({Object.keys(answers).length}/{questions.length} Answered)
      </button>
      
       
      )}

      {submitted && (
        <p className={styles.result}>
          You scored {score}/10 — {score >= 8 ? 'Well done!' : 'Try again to pass.'}
        </p>
      )}
    </div>
  );
};

export default Quiz;

