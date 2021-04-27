import React, { useState, useEffect } from "react";

import "./SelectComponent.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectComponent = ({
  size,
  label,
  optionsData,
  initialValue,
  onValueChange,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [actualValue, setActualValue] = useState();

  useEffect(() => {
    if (initialValue) {
      if (
        optionsData.filter((item) => item.selectValue === initialValue).length
      ) {
        let [{ selectHeader }] = optionsData.filter(
          (item) => item.selectValue === initialValue
        );

        setActualValue(selectHeader);
      } else {
        setActualValue(optionsData[0].selectHeader);
      }
    } else {
      setActualValue(optionsData[0].selectHeader);
    }
  }, [initialValue, optionsData]);

  const onSelectChange = (val) => {
    onValueChange(val.target.getAttribute("value"));
  };

  return (
    <div className={`selectComponent selectComponent--${size}`}>
      {label && <label className="selectComponent__label">{label}</label>}

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
          {optionsData.map((option) => {
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
