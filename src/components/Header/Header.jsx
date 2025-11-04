import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header id="home" className="header">
      <div className="header-content">
        <h1>Hi, I'm Kasarapu Rajukumar</h1>
        <p className="header-subtitle">
          Full-Stack Developer
        </p>
        <p className="header-desc">
          I build efficient and scalable web applications, focusing on 
          clean code for both front-end and back-end development.
        </p>
        <a href="#experience" className="btn">
          View My Work
        </a>
      </div>
    </header>
  );
};

export default Header;