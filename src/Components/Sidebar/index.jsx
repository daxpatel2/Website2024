import React from "react";
import "./index.css";
import SmallComponent from "./smallComponent";

function Sidebar() {
  return (
    <div className="sidebar-main">
      <div className="Interface-box">
        <SmallComponent
          interface_type="MAIN"
          subinterface_1="About"
          subinterface_2="Writing"
          link1={"/about"}
          link2={"/writing"}
        />
        <SmallComponent
          interface_type="PERSONAL"
          subinterface_1="Ideas"
          subinterface_2="Bookmarks"
          link1={"/ideas"}
          link2={"/bookmarks"}
        />
        <SmallComponent
          interface_type="PROJECTS"
          subinterface_1="BerkleyTimes"
          subinterface_2="Marketplace"
          link1={"/berkleytimes"}
          link2={"/marketplace"}
        />
      </div>
      <SmallComponent
        interface_type="ONLINE"
        subinterface_1="Mail"
        subinterface_2="Linkedin"
        link1={"/mail"}
        link2={"/linkedin"}
      />
    </div>
  );
}

export default Sidebar;
