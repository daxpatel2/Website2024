import React from "react";
import Education from "./Education.jsx";
import MainAbout from "./MainAbout.jsx";
import LoveToDo from "./lovetodo.jsx";
import Foundation from "./foundations.jsx";
import "./about.css";

const About = () => {
  return (
    <div className="about-page">
      <MainAbout />
      <Education />
      <Foundation />
      <LoveToDo />
    </div>
  );
};

export default About;
