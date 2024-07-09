import React from "react";
import "./foundation.css";

const Foundation = () => {
  return (
    <div className="foundation-container">
      <h2 className="foundation-title">DESIGN FOUNDATIONS</h2>
      <div className="foundation-entry">
        <div className="foundation-content1">
          <h3>Design Thinking</h3>
          <p>
            Design thinking is a problem-solving process that involves
            understanding the problem, empathizing with the people experiencing
            the problem, brainstorming solutions, prototyping, and testing. This
            process is iterative and can be applied to a wide range of problems.
          </p>
        </div>
        <div className="foundation-content2">
          <h3>Typography</h3>
          <p>
            Visual design is the practice of creating visual compositions that
            communicate a message. It involves the use of typography, color,
            imagery, and layout to create a visual hierarchy that guides the
            viewer through the content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Foundation;
