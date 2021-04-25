import React, {useState, useEffect, useContext} from "react";
import "./WeekPlanContentWrapper.scss";

import WeekPlanItem from "../weekPlanItem/WeekPlanItem";

import { WeekPlanContext } from "../../context/WeekPlanContext";

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
  modData = data.filter((value) => parseInt(value.dayNumber) === dayNumber);
  // console.log("data",data)
  // console.log("modDat", modData)
  for (let i = 0; i < modData.length; i++) {
      let hoursStart = modData[i].hourStart;
      let hoursEnd = modData[i].hourEnd;

      hoursStart = hoursToFloat(hoursStart, planHourStart);
      hoursEnd = hoursToFloat(hoursEnd, planHourStart);

      let hoursDiff = hoursEnd - hoursStart;

      items.push(
        <WeekPlanItem
          key={modData[i].id}
          background={modData[i].background}
          top={hoursStart * 100}
          height={hoursDiff * 100}

          data={modData[i]}
        />
      );
  }

  console.log(items);
  return items;
};

const WeekPlanContentWrapper = ({ planHourStart, dayNumber }) => {
  const [data, setData] = useState([])
  const [generateBlock, setGenerateBlock] = useState([]);
  const { weekPlanAction, weekPlanStatus, weekPlanDispatch } = useContext(
    WeekPlanContext
  );

  useEffect(() => {
    setGenerateBlock(createPlan(dayNumber, planHourStart, weekPlanStatus))
  }, [weekPlanStatus, dayNumber, planHourStart])

  console.log(planHourStart, dayNumber)

  const createHours = () => {
    const items = [];
    for (let i = planHourStart-1; i <= 23; i++) {
      items.push(
        [
          <div key={i} className="weekPlanContentWrapper__hours__item">{i}:00</div>
        ]
      );

    }
    return items;
  };

  return (
    <div className="weekPlanContentWrapper">
      <div className="weekPlanContentWrapper__items">
        {generateBlock}
      </div>
      <div className="weekPlanContentWrapper__hours">{createHours()}</div>
    </div>
  );
};

export default WeekPlanContentWrapper;
