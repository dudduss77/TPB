import React, { useState, useEffect } from "react";

import "./SelectComponent.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectComponent = (props) => {
  const [showOptions, setShowOptions] = useState(false);
  const [actualValue, setActualValue] = useState(props.optionsData[0].selectHeader);

  // props.onValueChange(props.optionsData[0].selectValue);

  const onSelectChange = (val) => {
    props.onValueChange(val.target.getAttribute("value"));
  };

  return (
    <div className={`selectComponent selectComponent--${props.size}`}>
      <div className="selectComponent__wrapper">
        <div className="selectComponent__wrapper__actual">{actualValue}</div>
        <div
          onClick={() => setShowOptions(!showOptions)}
          className="selectComponent__wrapper__arrow"
        >
          <FontAwesomeIcon icon="angle-down" />
        </div>
      </div>
      {showOptions && (
        <div className="selectComponent__optionWrapper">
          {props.optionsData.map((option) => {
            return (
              <div
                key={option.selectValue}
                value={option.selectValue}
                onClick={(e) => {
                  setActualValue(e.target.innerHTML);
                  setShowOptions(!showOptions);
                  onSelectChange(e);
                }}
                className="selectComponent__optionWrapper__option"
              >
                {option.selectHeader}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SelectComponent;
