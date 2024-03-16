import React, { useState } from "react";
import "./ContactUs.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Footer from "../Footer/Footer";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form Submitted successfully");
  };

  return (
    <>
    <div className="contact-body">
      <div className="contact-container">
        <Typography
          component="h1"
          variant="h5"
          fontFamily={"monospace"}
          fontWeight={"Bold"}
        >
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit} className="contact-form">
          <TextField
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            className="contact-name"
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            className="contact-email"
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            multiline
            rows={4}
            className="contact-message"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="contact-submit"
          >
            Submit
          </Button>
        </form>
      </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default ContactUs;
