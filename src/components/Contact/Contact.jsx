import React, { useState } from "react";
import Footer from "../Footer/Footer";
import "./Contact.css";
import { FaWhatsapp } from "react-icons/fa";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send email using formData
    console.log(formData);
  };

  return (
    <div>
      <div className="contact-form-container">
        <div className="whatsapp">
          <h2 className="title">Mándame un mensaje por Whatsapp</h2>
          <a
            href="https://api.whatsapp.com/send?phone=+51931772562&text=Hola%2C%20quiero%20hacer%20una%20consulta"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
        <h2 className="title">Envíame un correo electrónico</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactForm;
