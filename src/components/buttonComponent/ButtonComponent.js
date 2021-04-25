import React from "react";
import "./ButtonComponent.scss";

const ButtonComponent = ({ buttonClick, size = "auto", buttonName, align }) => {
  return (
    <button
      onClick={buttonClick}
      className={`buttonComponent buttonComponent--${size} buttonComponent--${align}`}
    >
      {buttonName}
    </button>
  );
};

export default ButtonComponent;
