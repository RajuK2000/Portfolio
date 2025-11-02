// src/App.js
import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      
      {/* Each section component is self-contained */}
      <main>
        <div id="about" className="section">
          <About />
        </div>
        
        <div id="experience" className="section" style={{backgroundColor: '#f9f9f9'}}>
          <Experience />
        </div>

        <div id="skills" className="section">
          <Skills />
        </div>

        <div id="contact" className="section" style={{backgroundColor: '#f9f9f9'}}>
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;