import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* You can add social media icons here */}
        <div className="footer-links">
          <a href="https://github.com/RajuK2000" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/rajukumar-kasarapu" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Rajukumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;