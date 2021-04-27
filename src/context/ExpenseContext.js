import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";

export const ExpenseContext = React.createContext();

/*
id
title
date
cost
category
*/

const initialState = [];

const expenseActionType = {
  update: "UPDATE",
  add: "ADD",
  edit: "EDIT",
  delete: "DELETE",
};

function expenseReducer(prevState, action) {
  switch (action.type) {
    case expenseActionType.update:
      return action.payload;
    case expenseActionType.add:
      return [...prevState, action.payload];
    case expenseActionType.edit:
      return prevState.map((expense) => {
        if (expense.id === action.payload.id) {
          return action.payload.expense;
        }
        return expense;
      });
    case expenseActionType.delete:
      return prevState.filter((expense) => expense.id !== action.payload);
    default:
      return prevState;
  }
}

const ExpenseProvider = ({ children }) => {
  const [expenseStatus, expenseDispatch] = useReducer(
    expenseReducer,
    initialState
  );

  useEffect(() => {
    axios
      .get("http://localhost:5000/expense")
      .then((response) =>
        expenseDispatch({
          type: expenseActionType.update,
          payload: response.data,
        })
      )
      .catch((error) => console.log(error));
  }, []);

  const value = {
    expenseAction: expenseActionType,
    expenseStatus: expenseStatus,
    expenseDispatch: expenseDispatch,
  };
  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
