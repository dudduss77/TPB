import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";

export const TaskContext = React.createContext();

/*
  id: '',
  title: '',
  desc: '',
  date: '',
  status: null,
*/

const initialState = [];

const taskActionType = {
  update: "UPDATE",
  add: "ADD",
  checkPositive: "CHECK_POSITIVE",
  checkNegative: "CHECK_NEGATIVE",
  edit: "EDIT",
  delete: "DELETE",
};

function taskReducer(prevState, action) {
  switch (action.type) {
    case taskActionType.update:
      return action.payload;
    case taskActionType.add:
      return [...prevState, action.payload];
    case taskActionType.edit:
      return prevState.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload.task;
        }
        return task;
      });
    case taskActionType.checkPositive:
      return prevState.map((task) => {
        if (task.id === action.payload) {
          return { ...task, status: true };
        }
        return task;
      });
    case taskActionType.checkNegative:
      return prevState.map((task) => {
        if (task.id === action.payload) {
          return { ...task, status: false };
        }
        return task;
      });
    case taskActionType.delete:
      return prevState.filter((task) => task.id !== action.payload);

    default:
      return prevState;
  }
}

const TaskProvider = ({ children }) => {
  const [taskStatus, taskDispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tasks")
      .then((response) => {
        taskDispatch({ type: taskActionType.update, payload: response.data });
      })
      .catch((error) => console.log(error));
  }, []);

  const value = {
    taskAction: taskActionType,
    taskStatus: taskStatus,
    taskDispatch: taskDispatch,
  };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export default TaskProvider;
