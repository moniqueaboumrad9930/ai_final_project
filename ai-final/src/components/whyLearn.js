import react from "react";
import styles from './whyLearn.module.css';
import infoIcon from './infoIcon.svg';
import linkIcon from './linkIcon.svg';
import gearIcon from './gearIcon.svg';




    const cards = [
        {
          icon: infoIcon,
          title: 'Stay Informed',
          description:
            'Keep up with the latest developments in AI ethics and governance to understand how technology impacts society.',
        },
        {
          icon: linkIcon,
          title: 'Bridge the Gap',
          description:
            'Connect complex technical concepts with everyday implications through accessible learning materials.',
        },
        {
          icon: gearIcon,
          title: 'Practical Knowledge',
          description:
            'Gain skills to evaluate AI systems and participate in discussions about how they should be regulated.',
        },
      ];

      function WhyLearn() {
        return (
          <section className={styles.section}>
            <h2 className={styles.title}>Why Learn About AI Governance?</h2>
            <p className={styles.subtitle}>
              AI is transforming our world. Understanding how it's governed helps ensure it benefits everyone fairly.
            </p>
            <div className={styles.cardContainer}>
              {cards.map((card, index) => (
                <div key={index} className={styles.card}>
                  <img src={card.icon} alt="" className={styles.icon} />
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardText}>{card.description}</p>
                </div>
              ))}
            </div>
          </section>
        );
    }
      
    



export default WhyLearn;