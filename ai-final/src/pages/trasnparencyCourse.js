import React from 'react';
import styles from './transparencyCourse.module.css';

const TransparencyCourse = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Transparency in AI</h1>
        <p>Explore methods for making AI systems more explainable and understandable.</p>
      </header>

      <section className={styles.objectives}>
        <h2>Learning Objectives</h2>
        <ul>
          <li>Understand the importance of transparency in AI systems</li>
          <li>Learn different approaches to explainable AI (XAI)</li>
          <li>Explore techniques for interpreting complex machine learning models</li>
          <li>Identify challenges in implementing transparent AI systems</li>
          <li>Apply transparency principles to real-world AI applications</li>
        </ul>
      </section>

      {/* Module 1 */}
      <section className={styles.module}>
        <h3>1. Fundamentals of AI Transparency</h3>
        <p>
          Transparency in AI refers to the ability to understand, interpret, and explain how AI systems make decisions...
        </p>
        <div className={styles.card}>
          <h4>Key Concept: The Black Box Problem</h4>
          <p>
            Many modern AI systems, particularly deep learning models, function as "black boxes"...
          </p>
        </div>
      </section>

      {/* Module 2 */}
      <section className={styles.module}>
        <h3>2. Methods for Explainable AI</h3>
        <p>
          Explainable AI (XAI) encompasses various techniques designed to make AI systems more interpretable...
        </p>
        <div className={styles.card}>
          <h4>Visualization Techniques</h4>
          <ul>
            <li>Saliency Maps</li>
            <li>Activation Visualization</li>
            <li>Decision Boundaries</li>
          </ul>
        </div>
      </section>

      {/* Module 3 */}
      <section className={styles.module}>
        <h3>3. Challenges in AI Transparency</h3>
        <p>Despite the importance of transparency, implementing it often poses several challenges...</p>
        <div className={styles.card}>
          <h4>Real-World Example</h4>
          <p>
            In healthcare, an AI system might accurately predict patient outcomes but if doctors can’t understand...
          </p>
        </div>
      </section>

      {/* Module 4 */}
      <section className={styles.module}>
        <h3>4. Best Practices for Transparent AI</h3>
        <p>
          Implementing transparent AI systems requires a holistic approach that considers technical, organizational...
        </p>
        <div className={styles.card}>
          <h4>Regulatory Landscape</h4>
          <ul>
            <li>EU AI Act</li>
            <li>GDPR</li>
            <li>FDA Guidelines</li>
          </ul>
        </div>
      </section>

      {/* Quiz Button */}
      <section className={styles.quizSection}>
        <h3>Knowledge Check Quiz</h3>
        <p>Test your understanding of AI transparency concepts. You need to score at least 80% to unlock the next course.</p>
        <button className={styles.quizButton} onClick={() => window.location.href = '/quiz/transparency'}>
          Start Quiz
        </button>
      </section>
    </div>
  );
};

export default TransparencyCourse;
