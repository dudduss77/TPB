import React, { useState, useContext } from "react";
import "./DashboardView.scss";

import { useWindowSize } from "../../customHook/useWindowSize";

import { TaskContext } from '../../App'

import ReusableContainerComponent from "../../components/reusableContainerComponent/ReusableContainerComponent";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import ReusableSettingsComponent from "../../components/reusableSettingsComponent/ReusableSettingsComponent";
import ValueComponent from "../../components/valueComponent/ValueComponent";
import TaskComponent from "../../components/taskComponent/TaskComponent";
import GoalComponent from "../../components/goalComponent/GoalComponent";
import SubMenuComponent from "../../components/subMenuComponent/SubMenuComponent";


const DashboardView = () => {
  const taskContext = useContext(TaskContext);

  // taskContext.tasksDispatch({type: ACTIONS.ADDTASK, payload: {taskTitle: 'Test'}});

  console.log(taskContext);

  const [transformValue, setTransformValue] = useState(0);
  const size = useWindowSize();

  const trasnformSettings = {
    transform: "translateX(-" + transformValue + "vw)",
    transitionDuration: "2s",
  };

  return (
    <div className="dashboardView">
      <div
        className="dashboardView__wrapper"
        style={size.width <= 1230 ? trasnformSettings : null}
      >
        <div className="dashboardView__wrapper__plan">
          <ReusableContainerComponent>
            <HeaderComponent
              headerTitle="Plan tygodniowy"
              settingsComponent={<ReusableSettingsComponent />}
            />
          </ReusableContainerComponent>
        </div>

        <div className="dashboardView__wrapper__task">
          <ReusableContainerComponent>
            <HeaderComponent
              headerTitle="Zadania na dziś"
              settingsComponent={<ReusableSettingsComponent />}
            />
            <div className="itemsWrapper">
              {/* <TaskComponent
                taskCheck={true}
                taskTitle="Testowe Zadanie"
                taskDate="14.11.2020"
                taskDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                euismod facilisis neque, quis finibus ipsum imperdiet a. Sed
                bibendum orci ornare, eleifend urna sed, tristique nulla. Vivamus
                eget nisl eu lacus pulvinar semper eget in libero."
                taskEdit={true}
                taskStatus={false}
              /> */}
              {taskContext.tasksData.map(task => {
                return <TaskComponent
                key={task.id}
                id={task.id}
                taskCheck={true}
                taskTitle={task.taskTitle}
                taskDate="14.11.2020"
                taskDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                euismod facilisis neque, quis finibus ipsum imperdiet a. Sed
                bibendum orci ornare, eleifend urna sed, tristique nulla. Vivamus
                eget nisl eu lacus pulvinar semper eget in libero."
                taskEdit={true}
                taskStatus={false}
              />
              })}
            </div>
          </ReusableContainerComponent>
        </div>

        <div className="dashboardView__wrapper__budgetOne">
          <ReusableContainerComponent>
            <HeaderComponent
              headerTitle="Twój budżet"
              settingsComponent={<ReusableSettingsComponent />}
            />
            <ValueComponent moneyValue="123" />
          </ReusableContainerComponent>
        </div>

        <div className="dashboardView__wrapper__budgetTwo">
          <ReusableContainerComponent>
            <HeaderComponent headerTitle="Dzisiaj wydałeś" />
            <ValueComponent moneyValue="999999.99" />
          </ReusableContainerComponent>
        </div>

        <div className="dashboardView__wrapper__goals">
          <ReusableContainerComponent>
            <HeaderComponent headerTitle="Cele" />
            <div className="itemsWrapper">
              <GoalComponent
                goalTitle="Kupić samochód"
                goalDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                euismod facilisis neque, quis finibus ipsum imperdiet a. Sed
                bibendum orci ornare, eleifend urna sed, tristique nulla. Vivamus
                eget nisl eu lacus pulvinar semper eget in libero."
                goalActualValue={0}
                goalEndValue={100}
                goalEdit={false}
                goalHistory={false}
              />
            </div>
          </ReusableContainerComponent>
        </div>
      </div>
      <div className="dashboardView__subMenu">
        <SubMenuComponent
          onSubMenuClick={() => setTransformValue(0)}
          subMenuIcon="calendar"
        />
        <SubMenuComponent
          onSubMenuClick={() => setTransformValue(100)}
          subMenuIcon="tasks"
        />
        <SubMenuComponent
          onSubMenuClick={() => setTransformValue(200)}
          subMenuIcon="dollar-sign"
        />
        <SubMenuComponent
          onSubMenuClick={() => setTransformValue(300)}
          subMenuIcon="bullseye"
        />
      </div>
    </div>
  );
};

export default DashboardView;
