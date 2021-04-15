import React, { useState } from "react";

import "./CheckboxComponent.scss";

const CheckboxComponent = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className={`checkboxComponent checkboxComponent--${props.size}`}>
      <div
        className={`checkboxComponent__checkbox ${
          isChecked ? "checkboxComponent__checkbox__checked" : ""
        }`}
      ></div>
      <input
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
          props.onValueChange();
        }}
        className="checkboxComponent__input"
        type="checkbox"
        id={props.checkboxName}
      />
      <label className="checkboxComponent__label" htmlFor={props.checkboxName}>
        <div
          className={`checkboxComponent__label__checkbox ${
            isChecked ? "checkboxComponent__label__checkbox__checked" : ""
          }`}
        ></div>
        <div
          style={{ color: props.customColor }}
          className="checkboxComponent__label__text"
        >
          {props.checkboxTitle}
        </div>
      </label>
    </div>
  );
};

export default CheckboxComponent;
