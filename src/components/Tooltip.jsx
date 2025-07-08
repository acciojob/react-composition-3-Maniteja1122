import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <div className="tooltip">
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
    </div>
  );
};

export default Tooltip;
