import React, { useState } from "react";

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
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
