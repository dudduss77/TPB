import React from "react";
import "./App.scss";

import "./fontLibrary";

import LayoutView from "./view/LayoutView/LayoutView";

//Context
import AppProvider from "./context/AppContext";
import UserProvider from "./context/UserContext";
import TaskProvider from "./context/TaskContext";
import GoalProvider from "./context/GoalContext";
import WeekPlanProvider from "./context/WeekPlanContext";
import CategoryProvider from "./context/CategoryContext";
import ExpenseProvider from "./context/ExpenseContext";

const App = () => {
  return (
    <AppProvider>
      <UserProvider>
        <CategoryProvider>
          <TaskProvider>
            <GoalProvider>
              <WeekPlanProvider>
                <ExpenseProvider>
                  <LayoutView />
                </ExpenseProvider>
              </WeekPlanProvider>
            </GoalProvider>
          </TaskProvider>
        </CategoryProvider>
      </UserProvider>
    </AppProvider>
  );
};

export default App;
