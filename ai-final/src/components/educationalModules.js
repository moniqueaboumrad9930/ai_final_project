import React from 'react';
import styles from './educationalModules.module.css';
import imgFairness from './imgFairness.png';



const modules = [
  {
    image: imgFairness,
    title: 'AI Fairness Fundamentals',
    description: 'Learn how to identify and address bias in AI systems to ensure equitable outcomes.',
    lessons: '4 Lessons',
    level: 'Beginner',
  },
  {
    //image: imgTransparency,
    title: 'Transparency in AI',
    description: 'Explore methods for making AI systems more explainable and understandable.',
    lessons: '5 Lessons',
    level: 'Intermediate',
  },
  {
    //image: imgAccountability,
    title: 'AI Accountability',
    description: 'Understand frameworks for ensuring responsible development and use of AI technologies.',
    lessons: '6 Lessons',
    level: 'Advanced',
  },
];

function EducationModules() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Educational Modules</h2>
      <p className={styles.subheading}>
        Structured learning paths to help you understand key concepts in AI governance.
      </p>

      <div className={styles.cardContainer}>
        {modules.map((mod, i) => (
          <div key={i} className={styles.card}>
            <img src={mod.image} alt={mod.title} className={styles.image} />
            <div className={styles.cardContent}>
              <h3 className={styles.title}>{mod.title}</h3>
              <p className={styles.description}>{mod.description}</p>
              <div className={styles.meta}>
                <span>{mod.lessons}</span>
                <span>{mod.level}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationModules;
