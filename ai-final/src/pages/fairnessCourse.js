import React from 'react';
import styles from './fairnessCourse.module.css';

const FairnessCourse = () => {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1>AI Fairness Fundamentals</h1>
        <p>Learn how to identify and address bias in AI systems to ensure equitable outcomes.</p>
      </header>

      <section className={styles.objectives}>
        <h2>Learning Objectives</h2>
        <ul>
          <li>Understand the fundamental concepts of fairness in AI systems</li>
          <li>Identify different types of bias that can occur in AI development and deployment</li>
          <li>Learn techniques to measure and quantify bias in AI models</li>
          <li>Develop strategies to mitigate and create more equitable AI systems</li>
          <li>Apply fairness principles in real-world AI applications</li>
        </ul>
      </section>

      <section className={styles.module}>
        <h3>1. Understanding AI Fairness</h3>
        <p>
          AI fairness refers to the absence of any prejudice or favoritism toward individuals or groups based on their inherent or acquired characteristics. In the context of artificial intelligence, fairness means that an AI system should make decisions that don’t discriminate against specific individuals or social groups.
        </p>
        <div className={styles.card}>
          <h4>Key Concept: Fairness Definitions</h4>
          <ul>
            <li><strong>Demographic Parity</strong>: Outcomes should be independent of protected attributes</li>
            <li><strong>Equal Opportunity</strong>: True positive rate should be equal across groups</li>
            <li><strong>Predictive Parity</strong>: Precision should be equal across groups</li>
          </ul>
        </div>
      </section>

      <section className={styles.module}>
        <h3>2. Types of Bias in AI</h3>
        <p>
          Bias in AI systems can manifest in various ways and at different stages of the AI development lifecycle. Understanding these biases is the first step toward addressing them.
        </p>
        <ul>
          <li><strong>Data Bias</strong>: When training data doesn’t represent the population it will serve</li>
          <li><strong>Algorithmic Bias</strong>: When the algorithm itself produces unfair outcomes</li>
          <li><strong>Measurement Bias</strong>: When the features chosen don’t correctly represent what you’re trying to predict</li>
          <li><strong>Interaction Bias</strong>: When the way users interact with the system causes or amplifies bias</li>
        </ul>
        <div className={styles.card}>
          <h4>Real-World Example</h4>
          <p>
            In 2019, Amazon discovered that their AI recruiting tool was biased against women... [example continues as in figma]
          </p>
        </div>
      </section>

      <section className={styles.module}>
        <h3>3. Measuring and Quantifying Bias</h3>
        <p>To address bias, we must first be able to measure it...</p>
        <ul>
          <li><strong>Equal Opportunity Difference</strong>: Compares true positive rates</li>
          <li><strong>Statistical Parity Difference</strong>: Measures the difference in selection rates</li>
          <li><strong>Theil Index</strong>: Measures inequality</li>
        </ul>
        <div className={styles.card}>
          <h4>Fairness Toolkits</h4>
          <ul>
            <li>AI Fairness 360</li>
            <li>Google’s What-If Tool</li>
            <li>Microsoft’s InterpretML</li>
            <li>Aequitas by the University of Chicago</li>
          </ul>
        </div>
      </section>

      <section className={styles.module}>
        <h3>4. Mitigating Bias in AI Systems</h3>
        <p>One bias has been identified, there are various approaches to mitigate it.</p>
        <ul>
          <li><strong>Pre-processing</strong>: Modify training data</li>
          <li><strong>In-processing</strong>: Modify training procedures</li>
          <li><strong>Post-processing</strong>: Adjust predictions after model is trained</li>
          <li><strong>Diverse Teams</strong>: Ensure representation</li>
        </ul>
        <div className={styles.card}>
          <h4>Best Practices</h4>
          <ul>
            <li>To build fairer AI systems...</li>
            <li>Calibrate models</li>
            <li>Document model limitations</li>
            <li>Engage with affected communities</li>
          </ul>
        </div>
      </section>

      <section className={styles.quizSection}>
        <h3>Knowledge Check Quiz</h3>
        <p>Test your understanding of AI fairness concepts. You must score at least 80% to unlock the next course.</p>
        <button className={styles.quizButton}>Start Quiz</button>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2025 AI Education Platform. All rights reserved.</p>
        <div>
          <a href="#">Cookie Settings</a>
          <a href="#">My Learning Path</a>
          <a href="#">Help & Support</a>
        </div>
      </footer>
    </div>
  );
};

export default FairnessCourse;
