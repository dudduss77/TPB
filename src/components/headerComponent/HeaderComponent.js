import React from "react";
import "./HeaderComponent.scss";

const HeaderComponent = (props) => {
  return (
    <div className="headerComponent">
      <div className="headerComponent__title">{props.headerTitle}</div>
      {props.settingsComponent && (
        <div className="headerComponent__icon">{props.settingsComponent}</div>
      )}
    </div>
  );
};

export default HeaderComponent;
