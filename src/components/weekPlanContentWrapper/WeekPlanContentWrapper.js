import React from "react";
import "./WeekPlanContentWrapper.scss";

import WeekPlanItem from "../weekPlanItem/WeekPlanItem";

const hoursToFloat = (value, planHourStart) => {
  let temp;
  temp = value.split(":");
  temp[0] = temp[0] - planHourStart + 1;
  temp[1] =
    temp[1] / 60 === 0 ? 0 : parseFloat((temp[1] / 60).toString().slice(1));
  temp = temp[0] + temp[1];
  return temp;
};

const createPlan = (dayNumber, planHourStart, data) => {
  let modData;
  let items = [];
  modData = data.filter((value) => value.day === dayNumber);

  for (let i = 0; i < modData.length; i++) {
    let itemsLen = modData[i].items.length;
    for (let j = 0; j < itemsLen; j++) {
      let hoursStart = modData[i].items[j].hoursStart;
      let hoursEnd = modData[i].items[j].hoursEnd;

      hoursStart = hoursToFloat(hoursStart, planHourStart);
      hoursEnd = hoursToFloat(hoursEnd, planHourStart);

      let hoursDiff = hoursEnd - hoursStart;

      items.push(
        <WeekPlanItem
          key={modData[i].items[j].id}
          background={modData[i].items[j].color}
          top={hoursStart * 100}
          height={hoursDiff * 100}

          data={modData[i].items[j]}
        />
      );
    }
  }

  console.log(items);
  return items;
};

const WeekPlanContentWrapper = ({ planHourStart, dayNumber, data }) => {
  console.log(dayNumber)
  const createHours = () => {
    const items = [];
    for (let i = planHourStart-1; i <= 23; i++) {
      items.push(
        [
          <div className="weekPlanContentWrapper__hours__item">{i}:00</div>
        ]
      );

    }
    return items;
  };

  return (
    <div className="weekPlanContentWrapper">
      <div className="weekPlanContentWrapper__items">
        {createPlan(dayNumber, planHourStart, data)}
      </div>
      <div className="weekPlanContentWrapper__hours">{createHours()}</div>
    </div>
  );
};

export default WeekPlanContentWrapper;
