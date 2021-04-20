import React from "react";
import "./WeekPlanHeader.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WeekPlanHeader = ({ headerTitle, addClick }) => {
  return (
    <div className="weekPlanHeader">
      <div className="weekPlanHeader__title">{headerTitle}</div>
      <div className="weekPlanHeader__wrapper">
        <div className="weekPlanHeader__wrapper__icon">
          <FontAwesomeIcon
            onClick={addClick}
            icon="plus"
          />
        </div>
      </div>
    </div>
  );
};

export default WeekPlanHeader;
