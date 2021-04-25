import React, { useState, useContext, useEffect } from "react";
import "./DashboardView.scss";
import moment from "moment";

//Components
import SubMenuComponent from "../../components/subMenuComponent/SubMenuComponent";
import TasksWrapper from "../../components/tasksWrapper/TasksWrapper";
import SmallBlock from "../../components/smallBlock/SmallBlock";
import GoalsWrapperComponent from "../../components/goalsWrapperComponent/GoalsWrapperComponent";
import WeekPlanComponent from "../../components/weekPlanComponent/WeekPlanComponent";
import DashboardViewMobile from "../DashboardViewMobile/DashboardViewMobile";

//Custom hook
import { useWindowSize } from "../../customHook/useWindowSize";

//Context
import { TaskContext } from "../../context/TaskContext";
import { GoalContext } from "../../context/GoalContext";

const DashboardView = () => {
  const { taskStatus } = useContext(TaskContext);
  const { goalStatus } = useContext(GoalContext);

  const [taskData, setTaskData] = useState([]);
  const [goalData, setGoalData] = useState([]);

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

  useEffect(() => {
    setTaskData(
      taskStatus.filter(
        (task) =>
          task.status === null && task.date === moment().format("YYYY-MM-DD")
      )
    );
  }, [taskStatus]);

  useEffect(() => {
    setGoalData(goalStatus.sort((a, b) => a.actualValue > b.actualValue).filter((goal) => goal.done === false).slice(0, 5));
  }, [goalStatus]);

  const weekPlan = <WeekPlanComponent />;
  // const weekPlan = <></>;

  const taskWrapper = (
    <TasksWrapper
      header="Zadania na dziś"
      check={true}
      edit={true}
      trash={true}
      data={taskData}
    />
  );

  const smallBlock = (
    <>
      <SmallBlock header="Twój budżet" value="123" currency={true} />
      <SmallBlock header="Dzisiaj wydałeś" value="123.45" currency={true} />
    </>
  );

  const goalWrapper = (
    <GoalsWrapperComponent
      header="Cele"
      editValue={true}
      edit={true}
      trash={true}
      data={goalData}
    />
  );
  return (
    <div className="dashboardView">
      <div className="dashboardView__wrapper">
        {!mobile && (
          <>
            <div className="dashboardView__wrapper__plan">{weekPlan}</div>

            <div className="dashboardView__wrapper__task">{taskWrapper}</div>

            <div className="dashboardView__wrapper__budgetOne">
              <SmallBlock header="Twój budżet" value="123" currency={true} />
            </div>

            <div className="dashboardView__wrapper__budgetTwo">
              <SmallBlock
                header="Dzisiaj wydałeś"
                value="123.45"
                currency={true}
              />
            </div>

            <div className="dashboardView__wrapper__goals">{goalWrapper}</div>
          </>
        )}

        {mobile && (
          <DashboardViewMobile
            view={viewNumber}
            weekPlan={weekPlan}
            taskWrapper={taskWrapper}
            smallBlock={smallBlock}
            goalWrapper={goalWrapper}
          />
        )}
      </div>
      <div className="dashboardView__subMenu">
        <SubMenuComponent
          onSubMenuClick={() => setViewNumber(1)}
          subMenuIcon="calendar"
        />
        <SubMenuComponent
          onSubMenuClick={() => setViewNumber(2)}
          subMenuIcon="tasks"
        />
        <SubMenuComponent
          onSubMenuClick={() => setViewNumber(3)}
          subMenuIcon="dollar-sign"
        />
        <SubMenuComponent
          onSubMenuClick={() => setViewNumber(4)}
          subMenuIcon="bullseye"
        />
      </div>
    </div>
  );
};

export default DashboardView;
