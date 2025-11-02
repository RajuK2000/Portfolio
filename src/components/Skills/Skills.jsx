import React from 'react';
import './Skills.css';

// Add or remove skills as needed
const skillData = {
  frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Redux', 'Responsive Design'],
  backend: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'PostgreSQL', 'JWT'],
  business: ['Project Management', 'Agile Methodologies', 'Market Analysis', 'Business Strategy'],
};

const Skills = () => {
  return (
    <div className="container">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Front-End</h3>
          <ul className="skill-list">
            {skillData.frontend.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </div>
        <div className="skill-category">
          <h3>Back-End</h3>
          <ul className="skill-list">
            {skillData.backend.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </div>
        <div className="skill-category">
          <h3>Business & Other</h3>
          <ul className="skill-list">
            {skillData.business.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;