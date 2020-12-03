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

import InputComponent from "../../components/inputComponent/InputComponent";
import LabelComponent from "../../components/labelComponent/LabelComponent";
import CheckboxComponent from "../../components/checkboxComponent/CheckboxComponent";
import SelectComponent from "../../components/selectComponent/SelectComponent";

import sortTypeTask from "../../data/sortTypeTask.json";

import TasksActiveFilter from "../../components/tasksActiveFilter/TasksActiveFilter";
import TasksHistoryFilter from "../../components/taskHistoryFilter/TaskHistoryFilter";

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
        <div className="plansAndTasksView__wrapper__plans">
          <div className="plansAndTasksView__wrapper__plans__monthPlans">
            <ReusableContainerComponent>
              <HeaderComponent headerTitle="Plan Miesięczny" />
            </ReusableContainerComponent>
          </div>
          <div
            onClick={() => setTransformValue(50)}
            className="plansAndTasksView__wrapper__plans__rightArrow"
          >
            <FontAwesomeIcon icon="angle-right" />
          </div>
        </div>
        <div className="plansAndTasksView__wrapper__tasks">
          <div
            onClick={() => setTransformValue(0)}
            className="plansAndTasksView__wrapper__tasks__leftArrow"
          >
            <FontAwesomeIcon icon="angle-left" />
          </div>
          <div className="plansAndTasksView__wrapper__tasks__activeTasks">
            <ReusableContainerComponent>
              <HeaderComponent
                headerTitle="Aktywne zadania"
                settingsComponent={<ReusableSettingsComponent />}
              />
              <TasksActiveFilter
                setSearch={setSearchActiveValue}
                setPriority={() =>
                  setCheckboxPriorityValue(!checkboxPriorityValue)
                }
                setSelect={setSelectActiveValue}
              />
              <div className="itemsWrapperTwo">
                <TaskComponent
                  id="1"
                  taskCheck={true}
                  taskTitle={"test"}
                  taskDate="14.11.2020"
                  taskDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                    euismod facilisis neque, quis finibus ipsum imperdiet a. Sed
                    bibendum orci ornare, eleifend urna sed, tristique nulla. Vivamus
                    eget nisl eu lacus pulvinar semper eget in libero."
                  taskEdit={true}
                  taskStatus={false}
                />
              </div>
            </ReusableContainerComponent>
          </div>
          <div className="plansAndTasksView__wrapper__tasks__historyTasks">
            <ReusableContainerComponent>
              <HeaderComponent headerTitle="Historia" />
              <TasksHistoryFilter 
                setStartDate={setDateStartValue}
                setEndDate={setDateEndValue}
                setNotDone={() => setCheckboxNotDoneValue(!checkboxNotDoneValue)}
                setSelect={setSelectHistoryValue}
              />
              <div className="itemsWrapperTwo">
                <TaskComponent
                  id="1"
                  taskCheck={false}
                  taskTitle={"test"}
                  taskDate="14.11.2020"
                  taskDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                    euismod facilisis neque, quis finibus ipsum imperdiet a. Sed
                    bibendum orci ornare, eleifend urna sed, tristique nulla. Vivamus
                    eget nisl eu lacus pulvinar semper eget in libero."
                  taskEdit={false}
                  taskStatus={false}
                />
              </div>
            </ReusableContainerComponent>
          </div>
        </div>
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
