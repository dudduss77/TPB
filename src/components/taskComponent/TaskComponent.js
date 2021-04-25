import React, { useState, useContext, useEffect } from "react";
import "./TaskComponent.scss";

import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AppContext } from "../../context/AppContext";
import { TaskContext } from "../../context/TaskContext";

const TaskComponent = ({
  id,
  taskCheck,
  taskTitle,
  taskDate,
  taskEdit,
  taskTrash,
  taskDesc,
  taskStatus,
}) => {
  const [showMore, setShowMore] = useState(false);
  const { actionType, appState, appDispatch } = useContext(AppContext);
  const { taskAction, taskDispatch } = useContext(TaskContext);

  const checkPositive = (val) => {
    taskDispatch({ type: taskAction.checkPositive, payload: val });

    axios
      .patch(`http://localhost:5000/tasks/${val}`, { status: true })
      .then((results) => console.log(results))
      .catch((error) => console.log(error));
  };

  const checkNegative = (val) => {
    taskDispatch({ type: taskAction.checkNegative, payload: val });

    axios
      .patch(`http://localhost:5000/tasks/${val}`, { status: false })
      .then((results) => console.log(results))
      .catch((error) => console.log(error));
  };

  const removeItem = (val) => {
    taskDispatch({ type: taskAction.delete, payload: val });

    axios
      .delete(`http://localhost:5000/tasks/${val}`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div className="taskComponent">
      <div className="taskComponent__header">
        {taskCheck && (
          <div
            onClick={() => checkPositive(id)}
            className="taskComponent__header__icon"
          >
            <FontAwesomeIcon icon="check" />
          </div>
        )}
        {taskCheck && (
          <div
            onClick={() => checkNegative(id)}
            className="taskComponent__header__icon"
          >
            <FontAwesomeIcon icon="times" />
          </div>
        )}
        <div className="taskComponent__header__title">{taskTitle}</div>
        <div className="taskComponent__header__date">{taskDate}</div>

        {taskEdit && (
          <div
            onClick={() =>
              appDispatch({ type: actionType.editTaskMenu, payload: id })
            }
            className="taskComponent__header__icon"
          >
            <FontAwesomeIcon icon="edit" />
          </div>
        )}
        {taskTrash && (
          <div
            onClick={() => removeItem(id)}
            className="taskComponent__header__icon"
          >
            <FontAwesomeIcon icon="trash-alt" />
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
          <div className="taskComponent__description__content">{taskDesc}</div>
          {!taskCheck && (
            <div
              className={`taskComponent__description__message  ${
                taskStatus
                  ? "taskComponent__description__message--good"
                  : "taskComponent__description__message--bad"
              }`}
            >
              {taskStatus
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
