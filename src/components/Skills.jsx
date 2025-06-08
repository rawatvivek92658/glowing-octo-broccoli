import React from 'react';
import styles from './Skills.module.css';
import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5 } from 'react-icons/fa';

const skills = [
  { name: "React", icon: <FaReact color="#61DBFB" /> },
  { name: "JavaScript", icon: <FaJsSquare color="#F0DB4F" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#264de4" /> },
  { name: "HTML", icon: <FaHtml5 color="#F1502F" /> },
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.title}>Skills Overview</h2>
      <div className={styles.skillsContainer}>
        {skills.map(({ name, icon }, index) => (
          <div key={index} className={styles.skillBadge} title={name}>
            <div className={styles.icon}>{icon}</div>
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
