// Education.jsx
import React from "react";
import "./Education.css"; // Make sure to create an accompanying CSS file
import campusImage from "../../assets/pennstate_campus.jpeg"; // Make sure to import the image";

const Education = () => {
  return (
    <div className="education-container">
      <h2 className="section-title">EDUCATION</h2>
      <div className="education-entry">
        <div className="text-content">
          <h3 className="institution-name">Penn State University</h3>
          <p className="institution-degree">College of Enginnering</p>
          <ul className="degree-details">
            <li>Bachelors of Science in Computer Science</li>
          </ul>
        </div>
        <img
          src={campusImage}
          alt="PSU Main Campus"
          className="institution-image"
        />
      </div>
    </div>
  );
};

export default Education;
