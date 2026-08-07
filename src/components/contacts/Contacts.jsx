import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { IoSend } from "react-icons/io5";

import "../../styles/contacts.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // hook up your form submission logic here (EmailJS, API, etc.)
  };

  return (
    <section className="contact-section" id="contact">
      <p className="section-tag">
        <span className="tag-dot">07 · </span> CONTACTS
      </p>

      <h2 className="contact-heading">Let's Build Something Together</h2>

      <div className="contact-content">
        {/* Left info card */}
        <div className="contact-info-card">
          <div className="info-item">
            <div className="info-icon">
              <FaEnvelope />
            </div>
            <div>
              <p className="info-label">Email</p>
              <p className="info-value">utkarrrssh43@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="info-label">Phone</p>
              <p className="info-value">+91-8797840086</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="info-label">Location</p>
              <p className="info-value">Bhubaneswar, India</p>
            </div>
          </div>

          <div className="info-item connect-item">
            <div>
              <p className="info-label">Connect</p>
              <div className="social-icons">
                <a href="https://github.com/utkarrrssh43" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/utkarsh-sinha-8251a7308" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href="https://codeforces.com/profile/utkarrrssh43" aria-label="Codeforces">
                  <SiCodeforces />
                </a>
                <a href="#" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right form card */}
        <form className="contact-form-card" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="send-btn">
            Send Message <IoSend />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;