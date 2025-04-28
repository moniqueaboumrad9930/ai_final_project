import react from "react";
import styles from './learnFromExperts.module.css';

function LearnFromExperts (){
    const expertCards = [
        {
            //image: sarah,
            name: 'Dr. Sarah Chen',
            title: 'AI Ethics Researcher',
          },
          {
            //image: james,
            name: 'James Wilson',
            title: 'AI Policy Advisor',
          },
          {
           // image: maya,
            name: 'Dr. Maya Patel',
            title: 'AI Governance Specialist',
          },
          {
           // image: thomas,
            name: 'Dr. Thomas Lee',
            title: 'Technical AI Safety Expert',
          },

    ];
    return(
        <section className={styles.section}>
            <h2 className={styles.title}>
                Learn from Experts
            </h2>
            <p className={styles.subtitle}>Our platform features insights from leading professionals in AI ethics, policy, and governance.</p>

            <div className={styles.expertsGrid}>
                {expertCards.map((expert, i) =>(
                    <div key={i} className={styles.card}>
                        <img src ={expert.image} alt={expert.name} className = {styles.image}/>
                        <h3 className={styles.name}>{expert.name}</h3>
                        <p className={styles.jobTitle}>{expert.title}</p>
                        <button className={styles.button}>View Profile</button>

            </div>
                 ))}
            </div>
        </section>
    )
   
}

export default LearnFromExperts;