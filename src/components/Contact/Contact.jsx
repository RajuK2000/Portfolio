import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="container">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-subtitle">
        I'm open to new opportunities. Let's build something great together.
      </p>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Email: you@email.com</p>
          <p>LinkedIn: linkedin.com/in/yourprofile</p>
          <p>GitHub: github.com/yourusername</p>
        </div>
        <form 
          className="contact-form"
          // --- FOR FORMSPREE ---
          // action="https://formspree.io/f/YOUR_UNIQUE_ID" 
          // method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;