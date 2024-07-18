import React, { useState } from "react";
import "./index.css";

function MasterDetail() {
  const [selectedDetail, setSelectedDetail] = useState("Detail1");

  const handleItemClick = (detail) => {
    setSelectedDetail(detail);
  };

  return (
    <div className="container">
      <div className="col-3 master">
        <div className="master-item" onClick={() => handleItemClick("Detail1")}>
          Option 1
        </div>
        <div className="master-item" onClick={() => handleItemClick("Detail2")}>
          Option 2
        </div>
        <div className="master-item" onClick={() => handleItemClick("Detail3")}>
          Option 3
        </div>
        <div className="master-item" onClick={() => handleItemClick("Detail4")}>
          Option 4
        </div>
      </div>
      <div className="col-9 detail">
        <div className="detail-item">{selectedDetail}</div>
      </div>
    </div>
  );
}

export default MasterDetail;
