import React from "react";
import "./smallComponent.css";

function SmallComponent({
  interface_type,
  subinterface_1,
  subinterface_2,
  link1,
  link2,
}) {
  return (
    <div className="interface-box">
      <h2>{interface_type}</h2>
      <a href={link1}>{subinterface_1}</a>
      <br />
      <a href={link2}>{subinterface_2}</a>
    </div>
  );
}

export default SmallComponent;
