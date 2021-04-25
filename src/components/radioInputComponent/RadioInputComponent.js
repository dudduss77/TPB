import React from "react";
import "./RadioInputComponent.scss";

const RadioInputComponent = ({ labelFor, name, label, getValue, defaultChecked=false }) => {
  return (
    <div className="radioInputComponent">
      <input
        className="radioInputComponent__input"
        type="radio"
        id={labelFor}
        name={name}
        defaultChecked={defaultChecked}
        value={labelFor}
        onChange={(event) => getValue(event.target.value) }
      />
      <label className="radioInputComponent__label" htmlFor={labelFor}>
        {label}
      </label>
    </div>
  );
};

export default RadioInputComponent;
