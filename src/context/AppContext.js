import React, { useState, useReducer } from "react";

export const AppContext = React.createContext();

const initialState = {
  addEdit: {
    value: false,
    editMode: false,
    whatEdit: null,
    id: null,
  },
  showNotify: {
    value: false,
  },
  planAddEdit: {
    value: false,
    editMode: false,
    id: null,
  },
};

const appActionType = {
  addTaskMenu: "ADD_TASK_MENU",
  editTaskMenu: "EDIT_TASK_MENU",
  editExpenseMenu: "EDIT_EXPENSE_MENU",
  editGoalMenu: "EDIT_GOAL_MENU",
  editSaveMoneyMenu: "EDIT_SAVE_MONEY_MENU",
  updateGoalValueMenu: "UPDATE_GOAL_VALUE_MENU",
  closeAddEdit: "CLOSE_ADD_EDIT",
  showNotifyMenu: "SHOW_NOTIFY_MENU",
  addToPlanMenu: "ADD_TO_PLAN_MENU",
  editInPlanMenu: "EDIT_IN_PLAN_MENU",
  closeAddEditPlan: "CLOSE_ADD_EDIT_PLAN",
};

function appReducer(prevState = initialState, action) {
  switch (action.type) {
    case appActionType.addTaskMenu:
      return {
        ...prevState,
        addEdit: {
          value: !prevState.addEdit.value,
          whatEdit: null,
          editMode: false,
          id: null,
        },
      };
    case appActionType.editTaskMenu:
      return {
        ...prevState,
        addEdit: {
          value: !prevState.addEdit.value,
          whatEdit: "task",
          editMode: true,
          id: action.payload,
        },
      };
    case appActionType.editExpenseMenu:
      return {
        ...prevState,
        addEdit: {
          value: !prevState.addEdit.value,
          whatEdit: "expense",
          editMode: true,
          id: action.payload,
        },
      };
    case appActionType.editGoalMenu:
      return {
        ...prevState,
        addEdit: {
          value: !prevState.addEdit.value,
          whatEdit: "goal",
          editMode: true,
          id: action.payload,
        },
      };
    case appActionType.editSaveMoneyMenu:
      return {
        ...prevState,
        addEdit: {
          value: !prevState.addEdit.value,
          whatEdit: "save-money",
          editMode: true,
          id: action.payload,
        },
      };
    case appActionType.updateGoalValueMenu:
      return {
        ...prevState,
        addEdit: {
          value: !prevState.addEdit.value,
          whatEdit: "update-goal-value",
          editMode: true,
          id: action.payload,
        },
      };

    case appActionType.closeAddEdit:
      return {
        ...prevState,
        addEdit: {
          value: false,
        },
      };
    case appActionType.showNotifyMenu:
      return {
        ...prevState,
        showNotify: {
          value: !prevState.showNotify.value,
        },
      };
    case appActionType.addToPlanMenu:
      return {
        ...prevState,
        planAddEdit: {
          value: !prevState.planAddEdit.value,
        },
      };
    case appActionType.editInPlanMenu:
      return {
        ...prevState,
        planAddEdit: {
          value: !prevState.planAddEdit.value,
          editMode: true,
          id: action.payload,
        },
      };
    case appActionType.closeAddEditPlan:
      return {
        ...prevState,
        planAddEdit: {
          value: false,
        },
      };
    default:
      return prevState;
  }
}

const AppProvider = ({ children }) => {
  const [appState, appDispatch] = useReducer(appReducer, initialState);
  const value = {
    actionType: appActionType,
    appState: appState,
    appDispatch: appDispatch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
