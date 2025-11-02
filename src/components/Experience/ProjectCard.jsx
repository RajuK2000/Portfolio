// This is the reusable card component
import React from 'react';
import './Experience.css'; // Uses the same CSS file

const ProjectCard = ({ title, description, technologies, image }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-image-placeholder"></div>
      
      <div className="project-content">
        <h4 className="project-title">{title}</h4>
        <p className="project-description">{description}</p>
        <ul className="project-tech-list">
          {technologies.map((tech, index) => (
            <li key={index} className="tech-tag">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;