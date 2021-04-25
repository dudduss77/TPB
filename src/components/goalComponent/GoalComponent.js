import React, { useContext, useState } from "react";
import "./GoalComponent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import axios from "axios";

//Components
import BarComponent from "../barComponent/BarComponent";

//Context
import { AppContext } from "../../context/AppContext";
import { GoalContext } from "../../context/GoalContext";

const GoalComponent = ({
  goalId,
  goalEditValue,
  goalTitle,
  goalEdit,
  goalTrash,
  goalStartValue,
  goalActualValue,
  goalEndValue,
  goalDesc,
  goalEndDate,
  goalDone,
}) => {
  const [showMore, setShowMore] = useState(false);
  const { actionType, appDispatch } = useContext(AppContext);
  const { goalActionType, goalStatus, goalDispatch } = useContext(GoalContext);

  const remove = (val) => {
    goalDispatch({ type: goalActionType.delete, payload: val });

    axios
      .delete(`http://localhost:5000/goals/${val}`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div className="goalComponent">
      <div className="goalComponent__header">
        {goalEditValue && (
          <div
            onClick={() =>
              appDispatch({
                type: actionType.updateGoalValueMenu,
                payload: goalId,
              })
            }
            className="goalComponent__header__icon"
          >
            <FontAwesomeIcon icon="pen" />
          </div>
        )}

        <div className="goalComponent__header__title">{goalTitle}</div>
        {goalEdit && (
          <div
            onClick={() =>
              appDispatch({ type: actionType.editGoalMenu, payload: goalId })
            }
            className="goalComponent__header__icon"
          >
            <FontAwesomeIcon icon="edit" />
          </div>
        )}

        {goalTrash && (
          <div
            onClick={() => remove(goalId)}
            className="goalComponent__header__icon"
          >
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
          startValue={goalStartValue}
          actualValue={goalActualValue}
          endValue={goalEndValue}
        />
      </div>

      {showMore && (
        <div>
          <div className="goalComponent__description">{goalDesc}</div>
          <div className="goalComponent__goalValue">
            <span>Wartość początkowa:</span>
            <span className="goalComponent__goalValue__value">
              {goalStartValue}
            </span>
          </div>
          <div className="goalComponent__goalValue">
            <span>Wartość końcowa:</span>
            <span className="goalComponent__goalValue__value">
              {goalEndValue}
            </span>
          </div>
          <div className="goalComponent__goalValue">
            <span>Wartość aktualna:</span>
            <span className="goalComponent__goalValue__value">
              {goalActualValue}
            </span>
          </div>
          <div className="goalComponent__goalValue">
            <span>{goalDone ? "Od zakończenia upłynęło:" : "Do zakończenia:"}</span>
            <span className="goalComponent__goalValue__value">
              {Math.abs(
                moment(goalEndDate).diff(moment().format("YYYY-MM-DD"), "days")
              ) + " dni"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoalComponent;
