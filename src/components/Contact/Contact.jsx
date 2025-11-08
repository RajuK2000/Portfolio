import React, { useState } from 'react';
import './Contact.css';

// ****** PASTE YOUR DEPLOYED WEB APP URL HERE ******
const SCRIPT_URL = 
"https://script.google.com/macros/s/AKfycbw9hcGe2QvmWO6Ne7ej4h6FpM-JEplIZChltsVaUD4nGQEnmyusCs2VaRoEc9p0XRJG/exec"
const Contact = () => {
 const [formdata, setfordata] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    Message: ""
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handlechnage = (e) => {
    const { name, value } = e.target;
    setfordata({ ...formdata, [name]: value });
  };

  const formsubmit = (e) => {
    e.preventDefault();
    
    setIsLoading(true);
    setStatusMessage("Sending...");

    fetch(SCRIPT_URL, {
      method: 'POST',
      
      // Send the 'formdata' object as a plain text string
      body: JSON.stringify(formdata), 
      
      // This header bypasses the CORS preflight (OPTIONS) request
      headers: {
        'Content-Type': 'Application/json',
      },
    })
    .then(response => response.json()) // Now we can safely parse the JSON response
    .then(data => {
      setIsLoading(false);
      if (data.status === "success") {
        setStatusMessage("Success! Your message was sent.");
        setfordata({
          Name: "",
          Email: "",
          Mobile: "",
          Message: ""
        });
      } else {
        // This will catch errors from your Apps Script (e.g., "Sheet not found")
        throw new Error(data.message);
      }
    })
    .catch(error => {
      // This will catch network errors or errors from the .then() block
      setIsLoading(false);
      setStatusMessage("Error: " + error.message);
      console.error('Error!', error.message);
    });
  };

  return (
    <div className="container">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-subtitle">
        I'm open to new opportunities. Let's build something great together.
      </p>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Email: kasarapurajukumar@email.com</p>
          <p>LinkedIn: https://linkedin.com/in/rajukumar-kasarapu</p>
          <p>GitHub: https://github.com/RajuK2000</p>
        </div>
        <form 
          className="contact-form"
          onSubmit={formsubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="Name" value={formdata.Name} required onChange={handlechnage}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="Email" value={formdata.Email} required onChange={handlechnage}/>
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input type="tel" id="mobile" name="Mobile" value={formdata.Mobile} required onChange={handlechnage}/>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="Message" rows="5" value={formdata.Message} required onChange={handlechnage}></textarea>
          </div>
          
          {/* Display status message */}
          {/* {statusMessage && <p className="status-message">{statusMessage}</p>} */}
          
          <button type="submit" className="btn" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;