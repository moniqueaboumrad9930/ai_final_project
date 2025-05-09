// CourseCard.jsx
import React from 'react';
import styles from './CourseCard.module.css';

const CourseCard = ({
  title,
  description,
  percent,
  level,
  duration,
  status,
  locked,
  actionText
}) => {
  return (
    <div className={`${styles.card} ${locked ? styles.locked : ''}`}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <p className={styles.level}>{level} • {duration}</p>
      </div>
      <p className={styles.description}>{description}</p>

      {!locked && (
        <div className={styles.progressBarOuter}>
          <div
            className={styles.progressBarInner}
            style={{ width: `${percent}%` }}
          />
        </div>
      )}

      {locked && <div className={styles.lockOverlay}>🔒 Locked</div>}

      <button
        className={locked ? styles.lockedButton : styles.button}
        disabled={locked}
      >
        {actionText}
      </button>
    </div>
  );
};

export default CourseCard;
