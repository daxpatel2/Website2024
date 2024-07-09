import React from "react";
import "./lovetodo.css";
import skydive from "../../assets/skydive.png";
import arch from "../../assets/arch2.jpg";

const LoveToDo = () => {
  return (
    <div className="todo-container">
      <h2 className="todo-title">THINGS I LOVE TO DO</h2>
      <div className="todo-entry">
        <div className="todo-content">
          <ul className="todo-details">
            <li>Visit Asthetic Places</li>
            <li>Skydive in Dubai</li>
            <li>Read good books</li>
          </ul>
        </div>
        <div className="todo-images">
          <img className="image1" src={skydive} alt="skydive" />
          <img className="image2" src={arch} alt="skydive" />
        </div>
      </div>
    </div>
  );
};

export default LoveToDo;
