import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = React.createContext();

/*
id
name
surname
email
password
taskNotify: true/false
expenseNotify: true/false
goalNotify: true/false
budgetValue
weekPlanStart
*/
const initialState = {};

const userActionType = {
  update: "UPDATE",
  add: "ADD",
  editMail: "EDIT_MAIL",
  editPassword: "EDIT_PASSWORD",
  editNotify: "EDIT_NOTIFY",
  editWeekPlanStart: "EDIT_WEEK_PLAN_START",
  editBudget: "EDIT_BUDGET",
  editSaveMoney: "EDIT_SAVE_MONEY",
  delete: "DELETE",
};

function userReducer(prevState, action) {
  switch (action.type) {
    case userActionType.update:
      return action.payload;
    case userActionType.add:
      return action.payload;
    case userActionType.editMail:
      return { ...prevState, email: action.payload };
    case userActionType.editPassword:
      return { ...prevState, password: action.payload };
    case userActionType.editNotify:
      return {
        ...prevState,
        taskNotify: action.payload.taskNotify,
        expenseNotify: action.payload.expenseNotify,
        goalNotify: action.payload.goalNotify,
      };
    case userActionType.editWeekPlanStart:
      return { ...prevState, weekPlanStart: action.payload };
    case userActionType.editBudget:
      return {
        ...prevState,
        budgetValue: action.payload.budgetValue,
        budgetStartDay: action.payload.budgetStartDay,
      };
    case userActionType.editSaveMoney:
      return {...prevState, saveMoneySettings: action.payload}
    case userActionType.delete:
      return {};
    default:
      return prevState;
  }
}

const UserProvider = ({ children }) => {
  const [userStatus, userDispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    axios
      .get("http://localhost:5000/user")
      .then((response) => {
        userDispatch({ type: userActionType.update, payload: response.data });
      })
      .catch((error) => console.log(error));
  }, []);

  const value = {
    userAction: userActionType,
    userStatus: userStatus,
    userDispatch: userDispatch,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
