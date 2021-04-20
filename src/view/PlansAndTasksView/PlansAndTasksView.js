import React, { useState, useEffect } from "react";

import "./PlansAndTasksView.scss";
import "../../globalStyle/wrappers.scss";

import { useWindowSize } from "../../customHook/useWindowSize";

import SubMenuComponent from "../../components/subMenuComponent/SubMenuComponent";
import TasksActiveFilter from "../../components/tasksActiveFilter/TasksActiveFilter";
import TasksHistoryFilter from "../../components/taskHistoryFilter/TaskHistoryFilter";

import TasksWrapper from "../../components/tasksWrapper/TasksWrapper";

import PlansAndTasksViewMobile from "../PlansAndTasksViewMobile/PlansAndTasksViewMobile";

import tempTaskData from "../../data/tempTaskData.json";

const PlansAndTasksView = () => {
  const [mobile, setMobile] = useState(false);
  const [viewNumber, setViewNumber] = useState(1);

  const size = useWindowSize();

  useEffect(() => {
    if (size.width <= 1230) {
      setMobile(true);
    } else if (size.width > 1230) {
      setMobile(false);
    }
  }, [size.width]);

  //Var for active tasks
  const [searchActiveValue, setSearchActiveValue] = useState("");
  const [selectActiveValue, setSelectActiveValue] = useState("");
  const [checkboxPriorityValue, setCheckboxPriorityValue] = useState(false);

  //Var for history tasks
  const [dateStartValue, setDateStartValue] = useState();
  const [dateEndValue, setDateEndValue] = useState();
  const [selectHistoryValue, setSelectHistoryValue] = useState("");
  const [checkboxNotDoneValue, setCheckboxNotDoneValue] = useState(false);

  const activeTask = (
    <TasksWrapper
      header="Aktywne zadania"
      filter={
        <TasksActiveFilter
          setSearch={setSearchActiveValue}
          setPriority={() => setCheckboxPriorityValue(!checkboxPriorityValue)}
          setSelect={setSelectActiveValue}
        />
      }
      check={true}
      edit={true}
      trash={true}
      data={tempTaskData}
    />
  );

  const historyTask = (
    <TasksWrapper
      header="Historia zadań"
      filter={
        <TasksHistoryFilter
          setStartDate={setDateStartValue}
          setEndDate={setDateEndValue}
          setNotDone={() => setCheckboxNotDoneValue(!checkboxNotDoneValue)}
          setSelect={setSelectHistoryValue}
        />
      }
      check={false}
      edit={false}
      trash={true}
      data={tempTaskData}
    />
  );

  return (
    <div className="plansAndTasksView">
      <div className="plansAndTasksView__wrapper">
        {!mobile && (
          <>
            {activeTask}
            {historyTask}
          </>
        )}

        {mobile && (
          <PlansAndTasksViewMobile
            view={viewNumber}
            activeTask={activeTask}
            historyTask={historyTask}
          />
        )}
      </div>
      <div className="plansAndTasksView__subMenu">
        <SubMenuComponent
          onSubMenuClick={() => setViewNumber(1)}
          subMenuIcon="tasks"
        />
        <SubMenuComponent
          onSubMenuClick={() => setViewNumber(2)}
          subMenuIcon="history"
        />
      </div>
    </div>
  );
};

export default PlansAndTasksView;
