import React from "react";
import "./smallComponent.css";

function SmallComponent({
  interface_type,
  subinterface_1,
  subinterface_2,
  link1,
  link2,
  active,
}) {
  return (
    <div className="interface-box">
      <h2>{interface_type}</h2>
      <div className="links">
        <a className={`link1 ${active && "link_option"}`} href={link1}>
          {subinterface_1}
        </a>
        <br />
        <a className={`link2 ${active && "link_option"}`} href={link2}>
          {subinterface_2}
        </a>
      </div>
    </div>
  );
}

export default SmallComponent;
