import React from "react";

const IconText = ({ icon, text }) => {
  return (
    <div>
      <i className={`fa fa-${icon}`} aria-hidden="true"></i>
      <font
        style={{
          fontStyle: "italic",
          fontSize: "14px",
          marginLeft: "10px",
          color: "#5b5e61"
        }}
      >
        {text}
      </font>
    </div>
  );
};

export default IconText;
