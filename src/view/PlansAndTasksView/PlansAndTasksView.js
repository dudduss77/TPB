import React, { useState, useEffect } from "react";

import "./PlansAndTasksView.scss";
import "../../globalStyle/wrappers.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowSize } from "../../customHook/useWindowSize";

import ReusableContainerComponent from "../../components/reusableContainerComponent/ReusableContainerComponent";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import ReusableSettingsComponent from "../../components/reusableSettingsComponent/ReusableSettingsComponent";
import SubMenuComponent from "../../components/subMenuComponent/SubMenuComponent";
import TaskComponent from "../../components/taskComponent/TaskComponent";
import TasksActiveFilter from "../../components/tasksActiveFilter/TasksActiveFilter";
import TasksHistoryFilter from "../../components/taskHistoryFilter/TaskHistoryFilter";
import WeekPlanComponent from '../../components/weekPlanComponent/WeekPlanComponent'

import TasksWrapper from '../../components/tasksWrapper/TasksWrapper'


import tempTaskData from '../../data/tempTaskData.json'

const PlansAndTasksView = () => {
  //Var for active tasks
  const [searchActiveValue, setSearchActiveValue] = useState("");
  const [selectActiveValue, setSelectActiveValue] = useState("");
  const [checkboxPriorityValue, setCheckboxPriorityValue] = useState(false);

  //Var for history tasks
  const [dateStartValue, setDateStartValue] = useState();
  const [dateEndValue, setDateEndValue] = useState();
  const [selectHistoryValue, setSelectHistoryValue] = useState("");
  const [checkboxNotDoneValue, setCheckboxNotDoneValue] = useState(false);

  //Transform wrapper
  const [transformValue, setTransformValue] = useState(0);
  const size = useWindowSize();

  const trasnformSettings = {
    transform: "translateX(-" + transformValue + "%)",
    transitionDuration: "2s",
  };

  useEffect(() => {
    if (size.width <= 1230) {
      setTransformValue(0);
    } else if (size.width > 1230) {
      setTransformValue(0);
    }
  }, [size.width]);

  return (
    <div className="plansAndTasksView">
      <div className="plansAndTasksView__wrapper" style={trasnformSettings}>
      <TasksWrapper
              header="Aktywne zadania"
              filter={
                <TasksActiveFilter
                  setSearch={setSearchActiveValue}
                  setPriority={() =>
                    setCheckboxPriorityValue(!checkboxPriorityValue)
                  }
                  setSelect={setSelectActiveValue}
                />
              }
              check={true}
              edit={true}
              trash={true}
              data={tempTaskData}
            />

<TasksWrapper
              header="Historia zadań"
              filter={
                <TasksHistoryFilter
                  setStartDate={setDateStartValue}
                  setEndDate={setDateEndValue}
                  setNotDone={() =>
                    setCheckboxNotDoneValue(!checkboxNotDoneValue)
                  }
                  setSelect={setSelectHistoryValue}
                />
              }
              check={false}
              edit={false}
              trash={true}
              data={tempTaskData}
            />

        {/* <div className="plansAndTasksView__wrapper__tasks">
          <div className="plansAndTasksView__wrapper__tasks__activeTasks">
            <TasksWrapper
              header="Aktywne zadania"
              filter={
                <TasksActiveFilter
                  setSearch={setSearchActiveValue}
                  setPriority={() =>
                    setCheckboxPriorityValue(!checkboxPriorityValue)
                  }
                  setSelect={setSelectActiveValue}
                />
              }
              check={true}
              edit={true}
              trash={true}
              data={tempTaskData}
            />
          </div>
          <div className="plansAndTasksView__wrapper__tasks__historyTasks">
            
          </div>
        </div> */}
      </div>
      <div className="plansAndTasksView__subMenu">
        <SubMenuComponent
          onSubMenuClick={() => setTransformValue(0)}
          subMenuIcon="calendar"
        />
        <SubMenuComponent
          onSubMenuClick={() => setTransformValue(33.3)}
          subMenuIcon="tasks"
        />
        <SubMenuComponent
          onSubMenuClick={() => setTransformValue(66.6)}
          subMenuIcon="history"
        />
      </div>
    </div>
  );
};

export default PlansAndTasksView;
