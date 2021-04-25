import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";

export const WeekPlanContext = React.createContext();

/*
id
title
dayNumber
hourStart
hourEnd
background
*/

const initialState = [];

const weekPlanActionType = {
  update: "UPDATE",
  add: "ADD",
  edit: "EDIT",
  delete: "DELETE",
};

function weekPlanReducer(prevState, action) {
  switch (action.type) {
    case weekPlanActionType.update:
      return action.payload;
    case weekPlanActionType.add:
      return [...prevState, action.payload];
    case weekPlanActionType.edit:
      return prevState.map((planBlock) => {
        if (planBlock.id === action.payload.id) {
          return action.payload.planBlock;
        }
        return planBlock;
      });
    case weekPlanActionType.delete:
      return prevState.filter((planBlock) => planBlock.id !== action.payload);
    default:
      return prevState;
  }
}

const WeekPlanProvider = ({children}) => {
  const [weekPlanStatus, weekPlanDispatch] = useReducer(weekPlanReducer, initialState)

  useEffect(() => {
    axios.get('http://localhost:5000/weekPlan')
      .then(response => weekPlanDispatch({type: weekPlanActionType.update, payload: response.data}))
      .catch(error => console.log(error))
  }, [])

  const value = {
    weekPlanAction: weekPlanActionType,
    weekPlanStatus: weekPlanStatus,
    weekPlanDispatch: weekPlanDispatch
  }
  return <WeekPlanContext.Provider value={value}>{children}</WeekPlanContext.Provider>
}

export default WeekPlanProvider