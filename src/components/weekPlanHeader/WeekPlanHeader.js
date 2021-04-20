import React from "react";
import "./WeekPlanHeader.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WeekPlanHeader = ({ headerTitle, addClick, leftClick, rightClick }) => {
  return (
    <div className="weekPlanHeader">
      <div className="weekPlanHeader__title">{headerTitle}</div>

      <div className="weekPlanHeader__wrapper weekPlanHeader__wrapper--left">
        <div className="weekPlanHeader__wrapper__icon">
          <FontAwesomeIcon onClick={leftClick} icon="angle-left" />
        </div>
      </div>

      <div className="weekPlanHeader__wrapper">
        <div className="weekPlanHeader__wrapper__icon">
          <FontAwesomeIcon onClick={addClick} icon="plus" />
        </div>

        <div className="weekPlanHeader__wrapper__icon weekPlanHeader__wrapper__icon--right">
          <FontAwesomeIcon onClick={rightClick} icon="angle-right" />
        </div>
      </div>
    </div>
  );
};

export default WeekPlanHeader;
