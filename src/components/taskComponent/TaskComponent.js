import React, { useState, useContext } from "react";
import "./TaskComponent.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Context
import { TaskContext } from "../../App";

//Actions
import { ACTIONS } from "../../reducers/taskReducer";

const TaskComponent = (props) => {
  const [showMore, setShowMore] = useState(false);
  const taskContext = useContext(TaskContext);
  return (
    <div className="taskComponent">
      <div className="taskComponent__header">
        {props.taskCheck && (
          <div className="taskComponent__header__icon">
            <FontAwesomeIcon icon="check" />
          </div>
        )}
        {props.taskCheck && (
          <div className="taskComponent__header__icon">
            <FontAwesomeIcon icon="times" />
          </div>
        )}
        <div className="taskComponent__header__title">{props.taskTitle}</div>
        <div className="taskComponent__header__date">{props.taskDate}</div>

        {props.taskEdit && (
          <div className="taskComponent__header__icon">
            <FontAwesomeIcon icon="edit" />
          </div>
        )}
        {props.taskTrash && (
          <div className="taskComponent__header__icon">
            <FontAwesomeIcon
              icon="trash-alt"
              onClick={() =>
                taskContext.tasksDispatch({
                  type: ACTIONS.DELTASK,
                  payload: { id: props.id },
                })
              }
            />
          </div>
        )}

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
            {props.taskDesc}
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
