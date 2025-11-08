import React from 'react';
import './Skills.css';

// Add or remove skills as needed
const skillData = {
  frontend: [
    'HTML5',
    'CSS3',
    'JavaScript (ES6+)',
    'React',
    'Redux',
    'Responsive Design',
    'Tailwind CSS' // <-- Added
  ],
  backend: [
    'Node.js',
    'Express',
    'REST APIs',
    'PostgreSQL',
    'JWT'
  ],
  versionControl: [ // <-- New Category
    'Git',
    'GitHub'
  ],
  deployment: [ // <-- New Category
    'Vercel',
    'Netlify',
    'Render'
  ]
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
          <h3>Version Control</h3>
          <ul className="skill-list">
            {skillData.versionControl.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </div>
        <div className="skill-category">
          <h3>Deployment</h3>
          <ul className="skill-list">
            {skillData.deployment.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;