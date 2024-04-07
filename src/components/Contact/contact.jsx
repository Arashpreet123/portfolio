import React, { useState } from "react";
import axios from "axios";
import './contact.scss';

const Contact = () => {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5174/send-email", formData);
      console.log("Form Data Submitted:", formData);
      // Clear the form after submission
      setFormData(initialFormData); // Reset the form data to its initial state
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="contact">
      <h2 className="contact-Label">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;