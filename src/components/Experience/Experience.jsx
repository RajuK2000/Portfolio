import React from 'react';
import ProjectCard from './ProjectCard'; // We will create this
import './Experience.css';

// --- THIS IS YOUR DATA ---
// Update this array with your actual project details.
const projectsData = [
  {
    id: 1,
    title: 'Project Alpha (e.g., E-commerce Platform)',
    company: 'Your Company Name',
    description:
      'Developed key front-end features for a customer-facing e-commerce site using React, Redux, and React Router. Implemented a secure checkout flow.',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    // image: '/images/project-alpha.jpg' // <-- Add image to public/images folder
  },
  {
    id: 2,
    title: 'Project Beta (e.g., Internal Dashboard)',
    company: 'Your Company Name',
    description:
      'Contributed to a back-end Node.js microservice for handling user authentication and data processing. Built REST APIs consumed by the main application.',
    technologies: ['Node.js', 'Express', 'JWT', 'PostgreSQL'],
    // image: '/images/project-beta.jpg'
  },
  {
    id: 3,
    title: 'Project Gamma (e.g., CMS Feature)',
    company: 'Your Company Name',
    description:
      'Refactored legacy code, improving component reusability and page load performance by 20%. Collaborated with the team to integrate a new CMS feature.',
    technologies: ['React', 'JavaScript (ES6+)', 'CSS-in-JS', 'REST APIs'],
    // image: '/images/project-gamma.jpg'
  },
];

const Experience = () => {
  return (
    <div className="container">
      <h2 className="section-title">Experience & Projects</h2>
      <div className="experience-intro">
        <h3>
          Frontend Developer & Node.js Contributor
        </h3>
        <p className="company-name" onClick={()=>window.open("https://tridizi.com")}>
          @ TriDizi Digital Innovations LLP (Jul 2024 - Aug 2025)
        </p>
        <p className="experience-summary">
          During my year at TriDizi Digital Innovations LLP, I had the opportunity to contribute
          to several key projects, enhancing my skills in both front-end and
          back-end development.
        </p>
      </div>
      
      <div className="project-grid">
        {/* We map over the data and render a card for each project */}
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            // image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;