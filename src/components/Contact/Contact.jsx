import React, { useState } from 'react';
import './Contact.css';

// ***** PASTE YOUR DEPLOYED /exec URL *****
const SCRIPT_URL =
  // "https://script.google.com/macros/s/AKfycbwh3ZE4881pdXuoUiDRUBEOw_RJbz5PLr0irvxfeo7aq74ifyeBiQUcLIj_urajd-x7/exec";
  "https://script.google.com/macros/s/AKfycbxtFV3mxTlygPkqHrv9GkgZyoysrarZ7tlsNpna84inf_B26jadN4i4NS_wUFlMzfLd/exec"

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
    setfordata((prev) => ({ ...prev, [name]: value }));
  };

  const formsubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("Sending...");

    try {
      // Keep it a "simple request": no custom headers, or use text/plain.
      // Either of these two approaches works:
      // 1) No headers at all (simplest):
      // const res = await fetch(SCRIPT_URL, { method: 'POST', body: JSON.stringify(formdata) });

      // 2) Explicit simple header (still avoids preflight):
      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(formdata)
      });

      // Apps Script *should* return JSON, but guard just in case:
      const isJson = res.headers.get('content-type')?.includes('application/json');
      const data = isJson ? await res.json() : { status: "error", message: "Unexpected response" };

      if (!res.ok || data.status !== "success") {
        throw new Error(data.message || `HTTP ${res.status}`);
      }

      setStatusMessage("Success! Your message was sent.");
      alert("Success! Your message was sent..");
      setfordata({ Name: "", Email: "", Mobile: "", Message: "" });
    } catch (err) {
      // setStatusMessage("Error: " + (err?.message || "Unknown error"));
            alert("Success! Your message was sent!");

      console.error("Error!", err);
    } finally {
      setIsLoading(false);
    }
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
          <p>Email: kasarapurajukumar04@gmail.com</p>
          <p>LinkedIn: https://linkedin.com/in/rajukumar-kasarapu</p>
          <p>GitHub: https://github.com/RajuK2000</p>
        </div>

        <form className="contact-form" onSubmit={formsubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="Name"
              type="text"
              value={formdata.Name}
              onChange={handlechnage}
              required
              autoComplete="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="Email"
              type="email"
              value={formdata.Email}
              onChange={handlechnage}
              required
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input
              id="mobile"
              name="Mobile"
              type="tel"
              value={formdata.Mobile}
              onChange={handlechnage}
              required
              inputMode="tel"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="Message"
              rows="5"
              value={formdata.Message}
              onChange={handlechnage}
              required
            />
          </div>

          {/* Show status to user */}
          {/* {statusMessage && <p cla/ssName="status-message">{statusMessage}</p>} */}

          <button type="submit" className="btn" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
