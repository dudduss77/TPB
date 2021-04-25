import React, { useState, useEffect, useContext } from "react";
import "./PlansAndTasksView.scss";

import { useWindowSize } from "../../customHook/useWindowSize";

//Components
import SubMenuComponent from "../../components/subMenuComponent/SubMenuComponent";
import TasksActiveFilter from "../../components/tasksActiveFilter/TasksActiveFilter";
import TasksHistoryFilter from "../../components/taskHistoryFilter/TaskHistoryFilter";
import TasksWrapper from "../../components/tasksWrapper/TasksWrapper";
import PlansAndTasksViewMobile from "../PlansAndTasksViewMobile/PlansAndTasksViewMobile";

//Context
import { TaskContext } from "../../context/TaskContext";

//SortFilter
import {
  sortFilterActive,
  sortFilterHistory,
} from "../../sortFilterFunctions/sortFilterTasks";

const PlansAndTasksView = () => {
  const { taskStatus } = useContext(TaskContext);
  
  //Mobile view
  const [mobile, setMobile] = useState(false);
  const [viewNumber, setViewNumber] = useState(1);

  //Data
  const [activeData, setActiveData] = useState([]);
  const [historyData, setHistoryData] = useState([]);

  //Var for active tasks
  const [searchActiveValue, setSearchActiveValue] = useState("");
  const [selectActiveValue, setSelectActiveValue] = useState("");
  const [checkboxPriorityValue, setCheckboxPriorityValue] = useState(false);

  //Var for history tasks
  const [dateStartValue, setDateStartValue] = useState();
  const [dateEndValue, setDateEndValue] = useState();
  const [selectHistoryValue, setSelectHistoryValue] = useState("");
  const [checkboxNotDoneValue, setCheckboxNotDoneValue] = useState(false);

  const size = useWindowSize();

  useEffect(() => {
    if (size.width <= 1230) {
      setMobile(true);
    } else if (size.width > 1230) {
      setMobile(false);
    }
  }, [size.width]);

  useEffect(() => {
    setActiveData(
      sortFilterActive(
        taskStatus,
        searchActiveValue,
        checkboxPriorityValue,
        selectActiveValue
      )
    );
  }, [taskStatus, searchActiveValue, checkboxPriorityValue, selectActiveValue]);

  useEffect(() => {
    setHistoryData(
      sortFilterHistory(
        taskStatus,
        checkboxNotDoneValue,
        dateStartValue,
        dateEndValue,
        selectHistoryValue
      )
    );
  }, [
    taskStatus,
    checkboxNotDoneValue,
    dateStartValue,
    dateEndValue,
    selectHistoryValue,
  ]);

  const activeTask = (
    <TasksWrapper
      header="Aktywne zadania"
      filter={
        <TasksActiveFilter
          setSearch={setSearchActiveValue}
          setPriority={() => setCheckboxPriorityValue(!checkboxPriorityValue)}
          setSelect={setSelectActiveValue}
          initialValue="name-up"
        />
      }
      check={true}
      edit={true}
      trash={true}
      data={activeData}
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
          initialValue="name-up"
          dateStartInitial={dateStartValue}
          dateEndInitial={dateEndValue}
        />
      }
      check={false}
      edit={false}
      trash={true}
      data={historyData}
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
