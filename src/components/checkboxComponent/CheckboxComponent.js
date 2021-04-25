import React, { useState, useEffect } from "react";

import "./CheckboxComponent.scss";

const CheckboxComponent = ({
  size = "auto",
  checkboxName,
  customColor,
  checkboxTitle,
  onValueChange,
  initialValue = false,
  align,
}) => {
  const [isChecked, setIsChecked] = useState(initialValue);

  useEffect(() => {
    setIsChecked(initialValue);
  }, [initialValue]);

  return (
    <div
      className={`checkboxComponent checkboxComponent--${size} 
      ${align ? `checkboxComponent--${align}` : '' } `}
    >
      <div
        className={`checkboxComponent__checkbox ${
          isChecked ? "checkboxComponent__checkbox__checked" : ""
        }`}
      ></div>
      <input
        checked={isChecked}
        onChange={() => {
          console.log("Czy to działa");
          setIsChecked(!isChecked);
          onValueChange();
        }}
        className="checkboxComponent__input"
        type="checkbox"
        id={checkboxName}
      />
      <label className="checkboxComponent__label" htmlFor={checkboxName}>
        <div
          className={`checkboxComponent__label__checkbox ${
            isChecked ? "checkboxComponent__label__checkbox__checked" : ""
          }`}
        ></div>
        <div
          style={{ color: customColor }}
          className="checkboxComponent__label__text"
        >
          {checkboxTitle}
        </div>
      </label>
    </div>
  );
};

export default CheckboxComponent;
