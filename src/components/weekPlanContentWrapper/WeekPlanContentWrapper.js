import React, { useState, useEffect, useContext } from "react";
import "./WeekPlanContentWrapper.scss";

//Components
import WeekPlanItem from "../weekPlanItem/WeekPlanItem";

//Functions
import {hoursToFloat} from '../../functions/functions'

//Context
import { WeekPlanContext } from "../../context/WeekPlanContext";
import { UserContext } from "../../context/UserContext";


const createPlan = (dayNumber, planHourStart, data) => {
  let modData;
  let items = [];
  modData = data.filter((value) => parseInt(value.dayNumber) === dayNumber);
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

const WeekPlanContentWrapper = ({ dayNumber }) => {
  const { weekPlanAction, weekPlanStatus, weekPlanDispatch } = useContext(
    WeekPlanContext
  );
  const { userAction, userStatus, userDispatch } = useContext(UserContext);

  const [planHourStart, setPlanHourStart] = useState(0);
  const [generateBlock, setGenerateBlock] = useState([]);

  
  useEffect(() => {
    setPlanHourStart(userStatus.weekPlanStart)
  }, [userStatus.weekPlanStart])


  useEffect(() => {
    setGenerateBlock(createPlan(dayNumber, planHourStart, weekPlanStatus));
  }, [weekPlanStatus, dayNumber, planHourStart]);

  const createHours = () => {
    const items = [];
    for (let i = planHourStart; i <= 23; i++) {
      items.push([
        <div key={i} className="weekPlanContentWrapper__hours__item">
          {i}:00
        </div>,
      ]);
    }
    return items;
  };

  return (
    <div className="weekPlanContentWrapper">
      <div className="weekPlanContentWrapper__items">{generateBlock}</div>
      <div className="weekPlanContentWrapper__hours">{createHours()}</div>
    </div>
  );
};

export default WeekPlanContentWrapper;
