import React, { useState } from "react";
import "./GoalComponent.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BarComponent from "../barComponent/BarComponent";

const GoalComponent = (props) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="goalComponent">
      <div className="goalComponent__header">
        {props.goalEditValue && (
          <div className="goalComponent__header__icon">
            <FontAwesomeIcon icon="pen" />
          </div>
        )}

        <div className="goalComponent__header__title">{props.goalTitle}</div>
        {props.goalEdit && (
          <div className="goalComponent__header__icon">
            <FontAwesomeIcon icon="edit" />
          </div>
        )}

        {props.goalTrash && (
          <div className="goalComponent__header__icon">
            <FontAwesomeIcon icon="trash-alt" />
          </div>
        )}

        <div className="goalComponent__header__icon">
          <FontAwesomeIcon
            onClick={() => setShowMore(!showMore)}
            icon={showMore ? "angle-up" : "angle-down"}
          />
        </div>
      </div>

      <div className="goalComponent__bar">
        <BarComponent
          actualValue={props.goalActualValue}
          endValue={props.goalEndValue}
        />
      </div>

      {showMore && (
        <div>
          <div className="goalComponent__description">{props.goalDesc}</div>
          <div className="goalComponent__goalValue">
            <span>Wartość końcowa:</span>
            <span className="goalComponent__goalValue__value">
              {props.goalEndValue}
            </span>
          </div>
          <div className="goalComponent__goalValue">
            <span>Wartość aktualna:</span>
            <span className="goalComponent__goalValue__value">
              {props.goalActualValue}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoalComponent;
