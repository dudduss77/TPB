import React, { useContext } from "react";
import "./WeekPlanItem.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AppContext } from "../../context/AppContext";

const WeekPlanItem = ({ background, top, height, data }) => {
  const { actionType, appState, appDispatch } = useContext(AppContext);
  const style = {
    background: `${background}`,
    top: `${top}px`,
    height: `${height}px`,
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
            })
          }
          className="weekPlanItem__iconWrapper__icon weekPlanItem__iconWrapper__icon--edit"
        >
          <FontAwesomeIcon icon="edit" />
        </div>

        <div className="weekPlanItem__iconWrapper__icon weekPlanItem__iconWrapper__icon--delete">
          <FontAwesomeIcon
            // onClick={addClick}
            icon="times"
          />
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
