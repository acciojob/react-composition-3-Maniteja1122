import React, { useState } from "react";
import '../styles/App.css'; 

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      <span
        className="tooltiptext"
        style={{
          visibility: show ? "visible" : "hidden",
          opacity: show ? 1 : 0,
          transition: "opacity 0.3s ease, visibility 0s 0.3s",
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
