import React from "react";
import "./App.scss";

import "./fontLibrary";

import LayoutView from "./view/LayoutView/LayoutView";

//Context
import AppProvider from "./context/AppContext";
import TaskProvider from "./context/TaskContext";
import GoalProvider from "./context/GoalContext";
import WeekPlanProvider from "./context/WeekPlanContext";

const App = () => {
  return (
    <AppProvider>
      <TaskProvider>
        <GoalProvider>
          <WeekPlanProvider>
            <LayoutView />
          </WeekPlanProvider>
        </GoalProvider>
      </TaskProvider>
    </AppProvider>
  );
};

export default App;
