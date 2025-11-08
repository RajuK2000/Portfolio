import React, { useState } from 'react';
import ProjectCard from './ProjectCard'; // We will create this
import './Experience.css';
import Oraddo from "../../assets/projects/oraddoLogin.jpg"
import VSDL from "../../assets/projects/VSDL.png"
import SapinceMinds from "../../assets/projects/SapinceMinds.png"
import Vanstalam from "../../assets/projects/Vanstalam.png"

// --- THIS IS YOUR DATA ---
// Update this array with your actual project details.
// const projectsData = [
// {id: 1,
//     categoryTitle: 'SaaS & Application Development',
//     projects: [
//   {
//   id: 1,
//   "title": "Oraddo (SaaS Base Application)",
//   "company": "TriDizi Digital Innovations LLP",
//   "description": "A SaaS-based application for managing employee attendance (punch-in/punch-out), salaries, leaves, company financials, and project management established based on user roles.",
//   "technologies": [
//     "React",
//     "Context API",
//     "Node.js",
//     "Express",
//     "PostgreSQL"
//   ],
//   "image": Oraddo
// },
//   {
//     id: 2,
//     title: 'Project Beta (e.g., Internal Dashboard)',
//     company: 'Your Company Name',
//     description:
//       'Contributed to a back-end Node.js microservice for handling user authentication and data processing. Built REST APIs consumed by the main application.',
//     technologies: ['Node.js', 'Express', 'JWT', 'PostgreSQL'],
//     image: Oraddo
//   },
//   {
//     id: 3,
//     title: 'Project Gamma (e.g., CMS Feature)',
//     company: 'Your Company Name',
//     description:
//       'Refactored legacy code, improving component reusability and page load performance by 20%. Collaborated with the team to integrate a new CMS feature.',
//     technologies: ['React', 'JavaScript (ES6+)', 'CSS-in-JS', 'REST APIs'],
//     image: Oraddo
//   },
// ]
// },
// {
//   id: 2,
//     categoryTitle: 'SaaS & Applicatio',
//     projects: [
//       {
//     id: 21,
//     title: 'Project Gamma (e.g., CMS Feature)',
//     company: 'Your Company Name',
//     description:
//       'Refactored legacy code, improving component reusability and page load performance by 20%. Collaborated with the team to integrate a new CMS feature.',
//     technologies: ['React', 'JavaScript (ES6+)', 'CSS-in-JS', 'REST APIs'],
//     image: Oraddo
//   },
//     ]
// }
// ];

const projectsData =[
   {
    id: 2,
    categoryTitle: 'Client Websites',
    projects: [
      {
        id: 201,
        title: 'VSDL Website',
        company: 'TriDizi Digital Innovations LLP',
        description:
          'Created responsive Home and Careers pages, developed a reusable pre-footer component for consistency, and integrated dynamic functionalities.',
        technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)','React', 'Vercel', 'Responsive Design', 'Git'],
        image: VSDL,
        link:"https://vsdl.vercel.app/"
      },
      {
        id: 202,
        title: 'Sapience Minds',
        company: 'TriDizi Digital Innovations LLP',
        description:
          'Built a responsive single-page React site with dynamic components for all main pages. Deployed on Netlify with CI/CD via GitHub.',
        technologies: ['React.js','Responsive Design', 'Netlify', 'CI/CD', 'Git'],
        image: SapinceMinds,
        link:"https://sapienceminds.com/"
      },
      {
        id: 203,
        title: 'Vansthalam',
        company: 'TriDizi Digital Innovations LLP',
        description:
          'Built responsive Campaign and Products pages with "Add to Cart" state management. Currently developing the admin-side management screens.',
        technologies: ['React.js','Responsive Design', 'Node.js','Netlify', 'CI/CD', 'Git','Render'],
        image: Vanstalam, 
        link:"https://vansthalam.com/"
      },
      // {
      //   id: 204,
      //   title: 'Global Tech Force Website',
      //   company: 'TriDizi Digital Innovations LLP',
      //   description:
      //     'Developed core sections (Home, About, Contact) using React. Implemented media queries to ensure full responsiveness on mobile for all pages.',
      //   technologies: ['React', 'CSS Media Queries', 'Responsive Design'],
      //   image: Oraddo, 
      // },
    ],
  },
  {
    id: 1,
    categoryTitle: 'Application Development',
    projects: [
      {
        id: 101,
        title: 'BPMS (Business Process Management System)',
        company: 'TriDizi Digital Innovations LLP',
        description:
          'Designed and implemented frontend functionalities for HR, Lead Generation, Marketing, and Finance modules. Collaborated on backend API routes and implemented frontend RBAC.',
        technologies: [
          'React',
          'Node.js',
          'Express',
          'PostgreSQL',
          'REST APIs',
          'RBAC',
        ],
        // image: Oraddo,
        
      },
      {
        id: 102,
        title: 'PMS (Property Management System)',
        company: 'TriDizi Digital Innovations LLP',
        description:
          'Implemented responsive frontend modules for Sellers, Buyers, Staff, and Agents. Added features to match Buyers/Sellers, filter data, and incorporated RBAC.',
        technologies: ['React','Node.js','Express', 'REST APIs','PostgreSQL', 'RBAC'],
        // image: Oraddo, 
      },
    ],
  },
 
];

const Experience = () => {
const allCategoryTitles = [
  ...projectsData.map((cat) => cat.categoryTitle),
];

  const [selectedCategory, setSelectedCategory] = useState('Client Websites');
const filteredCategories = projectsData.filter((category) => {
    return category.categoryTitle === selectedCategory;
  });

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
      <div className="category-toggle-buttons">
        {allCategoryTitles.map((title) => (
          <button
            key={title}
            className={`toggle-btn ${
              selectedCategory === title ? 'active' : ''
            }`}
            onClick={() => setSelectedCategory(title)}
          >
            {title}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {/* We map over the data and render a card for each project */}
        {filteredCategories[0]?.projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;