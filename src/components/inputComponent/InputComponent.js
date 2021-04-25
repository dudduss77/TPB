import React from "react";
import "./InputComponent.scss";

const InputComponent = ({
  orientation = "vertical",
  size = "auto",
  labelFor,
  label,
  type,
  placeholder,
  getValue,
  initialValue = "",
}) => {
  const getInputValue = (event) => {
    event.preventDefault();
    getValue(event.target.value);
  };

  return (
    <div
      className={`inputComponent inputComponent--${orientation} inputComponent--${size}`}
    >
      {label && (
        <label className="inputComponent__label" htmlFor={labelFor}>
          {label}
        </label>
      )}

      <input
        className="inputComponent__input"
        type={type}
        id={labelFor}
        placeholder={placeholder}
        onChange={getInputValue}
        value={initialValue}
      />
    </div>
  );
};

export default InputComponent;
