import React, { useState } from "react";
import "./Ins.css";

const Ins = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactDetails: "",
    academicQualifications: "",
    teachingExperience: "",
    certifications: "", // Will store the file information
    preferredSubjects: "",
    subjectOfInterest: "",
    yearsOfExperience: "",
    additionalSkill: "",
    whyTeaching: "",
    // Add more fields as needed
  });

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    // You can handle the file as needed, e.g., save it to state or perform other actions
    setFormData({ ...formData, certifications: file });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (
      !formData.fullName ||
      !formData.contactDetails ||
      !formData.academicQualifications
    ) {
      alert(
        "Please fill in all required fields (Full Name, Contact Details, Academic Qualifications)."
      );
      return; // Stop form submission
    }

    // Additional custom conditions
    if (formData.yearsOfExperience && isNaN(formData.yearsOfExperience)) {
      alert("Years of Experience must be a number.");
      return; // Stop form submission
    }

    // If all conditions are met, proceed with form submission
    console.log("Form submitted:", formData);
    // You can add logic here to send data to a server, etc.
  };

  return (
    <div className="Ins-form">
      <div className="con">
        <h2 className="tagh2"> Application Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Personal Information */}
          <label className="form-label">
            Full Name:
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <br />

          <label className="form-label">
            Contact Details:
            <input
              type="text"
              name="contactDetails"
              value={formData.contactDetails}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <br />

          {/* Educational Background */}
          <label className="form-label">
            Academic Qualifications:
            <input
              type="text"
              name="academicQualifications"
              value={formData.academicQualifications}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <br />

          {/* Professional Experience */}
          <label className="form-label">
            Teaching Experience:
            <input
              type="text"
              name="teachingExperience"
              value={formData.teachingExperience}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <br />

          {/* Teaching Certifications and Licenses */}
          <label className="form-label">
            Certifications (Upload PDF, DOC, DOCX):
            <input
              type="file"
              accept=".pdf, .doc, .docx"
              onChange={handleFileUpload}
              className="form-input"
            />
          </label>
          <br />

          {/* Subject Areas and Grade Levels */}
          <label className="form-label">
            Preferred Subjects:
            <input
              type="text"
              name="preferredSubjects"
              value={formData.preferredSubjects}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <br />

          {/* More Details */}
          <label className="form-label">
            Additional Skill:
            <input
              type="text"
              name="additionalSkill"
              value={formData.additionalSkill}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <br />

          <label className="form-label">
            Why do you want to pursue teaching?
            <textarea
              name="whyTeaching"
              value={formData.whyTeaching}
              onChange={handleChange}
              className="form-input"
            ></textarea>
          </label>
          <br />

          <br />
          <button type="submit" className="form-button">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Ins;
