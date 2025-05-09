import React, { use } from 'react';
import styles from './fairnessCourse.module.css';
import { useNavigate } from 'react-router-dom';


const FairnessCourse = () => {
    const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>AI Fairness Fundamentals</h1>
        <p>Learn how to identify and address bias in AI systems to ensure equitable outcomes.</p>
      </header>

      <section className={styles.objectives}>
        <h2>Learning Objectives</h2>
        <ul>
          <li>Understand the fundamental concepts of fairness in AI systems</li>
          <li>Identify different types of bias that can occur in AI development and deployment</li>
          <li>Learn techniques to measure and quantify bias in AI models</li>
          <li>Develop strategies to mitigate bias and create more equitable AI systems</li>
          <li>Apply fairness principles in real-world AI applications</li>
        </ul>
      </section>

      <section className={styles.module}>
        <h3>1. Understanding AI Fairness</h3>
        <p>AI fairness refers to the absence of prejudice or favoritism toward individuals or groups based on their inherent or acquired characteristics. This section introduces key fairness definitions and discusses the importance of fairness in AI.</p>
        <div className={styles.card}>
          <h4>Key Concept: Fairness Definitions</h4>
          <ul>
            <li><strong>Demographic Parity:</strong> Outcomes should be independent of protected attributes</li>
            <li><strong>Equal Opportunity:</strong> Positive results should be equal across groups</li>
            <li><strong>Predictive Parity:</strong> Precision should be equal across groups</li>
          </ul>
        </div>
      </section>

      <section className={styles.module}>
        <h3>2. Types of Bias in AI</h3>
        <p>Bias in AI systems can manifest in various ways and at different stages of the AI development lifecycle. Understanding these biases is the first step toward addressing them.</p>
        <ul>
          <li><strong>Data Bias:</strong> When training data doesn’t represent the population it will serve</li>
          <li><strong>Algorithmic Bias:</strong> When the algorithm itself produces unfair outcomes</li>
          <li><strong>Interpretation Bias:</strong> When the features chosen don’t accurately represent what you're trying to predict</li>
          <li><strong>Interaction Bias:</strong> When the way users interact with the system causes or amplifies bias</li>
        </ul>
        <div className={styles.card}>
          <h4>Real-World Example</h4>
          <p>In 2019, Amazon discontinued their AI recruiting tool as it showed bias against women. The model was trained on resumes submitted to the company over a ten-year period, most of which came from men. As a result, the system downgraded resumes that included terms associated with women, such as "women’s chess club" or "women’s college."</p>
        </div>
      </section>

      <section className={styles.module}>
        <h3>3. Measuring and Quantifying Bias</h3>
        <p>To address bias, we must be able to measure it. Various metrics and techniques have been developed to quantify bias in AI systems.</p>
        <ul>
          <li><strong>Demographic Parity Difference:</strong> Difference in positive rates across groups</li>
          <li><strong>Equal Opportunity Difference:</strong> Difference in true positive rates across groups</li>
          <li><strong>Statistical Parity Difference:</strong> Measures the difference in selection rates between groups</li>
          <li><strong>Thiel Index:</strong> Measures inequality in benefit distribution</li>
        </ul>
        <div className={styles.card}>
          <h4>Fairness Toolkits</h4>
          <ul>
            <li>AI Fairness 360</li>
            <li>Google’s What-If Tool</li>
            <li>Microsoft’s Fairlearn</li>
            <li>Aequitas by the University of Chicago</li>
          </ul>
        </div>
      </section>

      <section className={styles.module}>
        <h3>4. Mitigating Bias in AI Systems</h3>
        <p>Once bias has been identified, there are various approaches to mitigate it. These interventions can occur at different stages of the AI development lifecycle.</p>
        <ul>
          <li><strong>Pre-processing:</strong> Modifying training data to remove or reduce bias before model training</li>
          <li><strong>In-processing:</strong> Modifying learning algorithms during model training</li>
          <li><strong>Post-processing:</strong> Adjusting model outputs to correct for predictions</li>
          <li><strong>Diverse Teams:</strong> Ensuring diversity in AI development teams to bring multiple perspectives</li>
        </ul>
        <div className={styles.card}>
          <h4>Best Practices</h4>
          <ul>
            <li>Test for bias at all stages</li>
            <li>Collect diverse and representative training data</li>
            <li>Document model limitations and mitigation decisions</li>
            <li>Establish clear governance frameworks for AI systems</li>
            <li>Engage with affected communities and stakeholders</li>
          </ul>
        </div>
      </section>

      <section className={styles.quizSection}>
        <h3>Knowledge Check Quiz</h3>
        <p>Test your understanding of AI fairness concepts. You need to score at least 80% to unlock the next course.</p>
        <button
        className={styles.quizButton}
        onClick={() => navigate('/quiz/fairness')}
      >
        Start Quiz
      </button>

      </section>
    </div>
  );
};

export default FairnessCourse;

