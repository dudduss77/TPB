import React, { useContext } from "react";
import "./WeekPlanItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

//Context
import { AppContext } from "../../context/AppContext";
import { WeekPlanContext } from "../../context/WeekPlanContext";

const WeekPlanItem = ({ background, top, height, data }) => {
  const { actionType, appState, appDispatch } = useContext(AppContext);
  const { weekPlanAction, weekPlanStatus, weekPlanDispatch } = useContext(
    WeekPlanContext
  );

  const style = {
    background: `${background}`,
    top: `${top}px`,
    height: `${height}px`,
  };

  const remove = (val) => {
    axios
      .delete(`http://localhost:5000/weekPlan/${val}`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    weekPlanDispatch({ type: weekPlanAction.delete, payload: val });
  };

  return (
    <div
      style={style}
      className={`weekPlanItem ${height <= 25 ? "weekPlanItem--small" : ""}`}
    >
      <div className="weekPlanItem__iconWrapper">
        <div
          onClick={() =>
            appDispatch({
              type: actionType.editInPlanMenu,
              payload: data.id,
            })
          }
          className="weekPlanItem__iconWrapper__icon weekPlanItem__iconWrapper__icon--edit"
        >
          <FontAwesomeIcon icon="edit" />
        </div>

        <div
          onClick={() => remove(data.id)}
          className="weekPlanItem__iconWrapper__icon weekPlanItem__iconWrapper__icon--delete"
        >
          <FontAwesomeIcon icon="times" />
        </div>
      </div>

      <div className="weekPlanItem__name">{data.title}</div>
      <div className="weekPlanItem__hour">
        {data.hourStart + ":" + data.hourEnd}
      </div>
    </div>
  );
};

export default WeekPlanItem;
