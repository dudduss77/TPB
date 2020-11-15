import React, { useState } from "react";
import "./TaskComponent.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TaskComponent = (props) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="taskComponent">
      <div className="taskComponent__header">
        {props.taskCheck && (
          <div className="taskComponent__header__icon">
            <FontAwesomeIcon icon="check" />
          </div>
        )}
        {!props.taskCheck && (
          <div className="taskComponent__header__icon">
            <FontAwesomeIcon icon="reply" />
          </div>
        )}
        <div className="taskComponent__header__title">{props.taskTitle}</div>
        <div className="taskComponent__header__date">{props.taskDate}</div>

        {props.taskEdit && (
          <div className="taskComponent__header__icon">
            <FontAwesomeIcon icon="edit" />
          </div>
        )}

        <div className="taskComponent__header__icon">
          <FontAwesomeIcon icon="trash-alt" />
        </div>
        <div className="taskComponent__header__icon">
          <FontAwesomeIcon
            onClick={() => setShowMore(!showMore)}
            icon={showMore ? "angle-up" : "angle-down"}
          />
        </div>
      </div>

      {showMore && (
        <div className="taskComponent__description">
          <div className="taskComponent__description__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            euismod facilisis neque, quis finibus ipsum imperdiet a. Sed
            bibendum orci ornare, eleifend urna sed, tristique nulla. Vivamus
            eget nisl eu lacus pulvinar semper eget in libero.
          </div>
          {!props.taskCheck && (
            <div
              className={`taskComponent__description__message  ${
                props.taskStatus
                  ? "taskComponent__description__message--good"
                  : "taskComponent__description__message--bad"
              }`}
            >
              {props.taskStatus
                ? "Potwierdzone przez użytkownika"
                : "Upłynął czas nie potwiedzone"}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskComponent;
