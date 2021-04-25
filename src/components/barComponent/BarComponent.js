import React from "react";
import "./BarComponent.scss";

const BarComponent = ({ startValue, actualValue, endValue }) => {
  const tempOne = startValue < endValue ? endValue - startValue : startValue - endValue;
  const tempTwo = startValue < endValue ? actualValue - startValue: actualValue - endValue;
  const percentValue = ((100 * tempTwo) / tempOne).toFixed(2);
  const widthValue = {
    width: percentValue > 100 ? 100 + "%" : percentValue + "%",
  };
  return (
    <div className="barComponent">
      <div className="barComponent__external">
        <div
          style={widthValue}
          className="barComponent__external__internal"
        ></div>
      </div>
      <div className="barComponent__value">{percentValue + "%"}</div>
    </div>
  );
};

export default BarComponent;
