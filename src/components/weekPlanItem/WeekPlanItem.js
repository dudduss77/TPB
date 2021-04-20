import React from "react";
import "./WeekPlanItem.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WeekPlanItem = ({ background, top, height, data }) => {
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
        <div className="weekPlanItem__iconWrapper__icon weekPlanItem__iconWrapper__icon--edit">
          <FontAwesomeIcon
            // onClick={addClick}
            icon="edit"
          />
        </div>

        <div className="weekPlanItem__iconWrapper__icon weekPlanItem__iconWrapper__icon--delete">
          <FontAwesomeIcon
            // onClick={addClick}
            icon="times"
          />
        </div>
      </div>

      <div className="weekPlanItem__name">{data.name}</div>
      <div className="weekPlanItem__hour">
        {data.hoursStart + ":" + data.hoursEnd}
      </div>
    </div>
  );
};

export default WeekPlanItem;
