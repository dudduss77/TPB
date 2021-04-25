import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

export const GoalContext = React.createContext();

/* 
  id
  title
  desc
  endDate
  actualValue
  toValue
  isInRaport
*/

const initialState = [];

const goalActionType = {
  update: "UPDATE",
  updateValue: "UPDATE_VALUE",
  add: "ADD",
  edit: "EDIT",
  delete: "DELETE",
  done: "DONE",
};

function goalReducer(prevState, action) {
  switch (action.type) {
    case goalActionType.update:
      return action.payload;
    case goalActionType.updateValue:
      return prevState.map((goal) => {
        if (goal.id === action.payload.id) {
          return { ...goal, actualValue: action.payload.updateValue };
        }
        return goal;
      });
    case goalActionType.add:
      return [...prevState, action.payload];
    case goalActionType.edit:
      return prevState.map((goal) => {
        if (goal.id === action.payload.id) {
          return action.payload.goal;
        }
        return goal;
      });
    case goalActionType.delete:
      return prevState.filter((goal) => goal.id !== action.payload);
    case goalActionType.done:
      return prevState.map((goal) => {
        if (goal.id === action.payload) {
          return { ...goal, done: true };
        }
        return goal;
      });
    default:
      return prevState;
  }
}

const GoalProvider = ({ children }) => {
  const [goalStatus, goalDispatch] = useReducer(goalReducer, initialState);

  useEffect(() => {
    axios
      .get("http://localhost:5000/goals")
      .then((resnponse) => {
        goalDispatch({ type: goalActionType.update, payload: resnponse.data });
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    goalStatus.forEach((goal) => {
      if (moment(goal.endDate).format("YYYY-MM-DD") < moment().format("YYYY-MM-DD") && goal.done === false) {
        axios
          .patch(`http://localhost:5000/goals/${goal.id}`, { done: true })
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
        goalDispatch({ type: goalActionType.done, payload: goal.id });
      }
    });
  }, [goalStatus]);

  const value = {
    goalActionType: goalActionType,
    goalStatus: goalStatus,
    goalDispatch: goalDispatch,
  };
  return <GoalContext.Provider value={value}>{children}</GoalContext.Provider>;
};

export default GoalProvider;
