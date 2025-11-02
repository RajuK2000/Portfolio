// src/components/About/About.js
import React from 'react';
import './About.css';
import profilePic from '../../assets/mine.jpg'; // <-- Add a professional photo to src/assets

const About = () => {
  return (
    <div className="container">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          {/* <img src={profilePic} alt="Your Name" /> */}
          
          <div className="image-placeholder"><img src={profilePic} alt="Your Name" /></div>
        </div>
        <div className="about-text">
          <h3>Driven by Code and Quality</h3>
          <p>
            For the past year, I've been working professionally as a full-stack developer,
            specializing in **React** for building dynamic user interfaces and **Node.js**
            for creating robust, scalable backend services.
          </p>
          <p>
            My role at **TriDizi Digital Innovations LLP** involved hands-on contributions to
            several key projects. I'm comfortable taking a feature from concept
            to completion, whether it's designing a new component in React or
            building a new REST API endpoint with Express.
          </p>
          <p>
            I'm a strong believer in clean code, collaboration, and finding the
            most efficient solution to a problem. I'm actively seeking new
            opportunities to grow my skills and help build impactful software.
          </p>
          <a href="#contact" className="btn">Get In Touch</a>
        </div>
      </div>
    </div>
  );
};

export default About;