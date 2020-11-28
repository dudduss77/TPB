import React, { useState, useEffect } from "react";

import "./PlansAndTasksView.scss";

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

const PlansAndTasksView = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);

  const [dateStartValue, setDateStartValue] = useState();
  const [dateEndValue, setDateEndValue] = useState();
  const [selectHistoryValue, setSelectHistoryValue] = useState("");
  const [checkboxHistoryValue, setCheckboxHistoryValue] = useState(false);

  const [showFilterActive, setShowFilterActive] = useState(false);
  const [showFilterHistory, setShowFilterHistory] = useState(false);

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

              <div className="itemsWrapper">
                <div className="itemsWrapper__filter">
                  <div className="itemsWrapper__filter__header">
                    <div className="itemsWrapper__filter__header__title">
                      Filtry
                    </div>
                    <FontAwesomeIcon
                      onClick={() => setShowFilterActive(!showFilterActive)}
                      className="itemsWrapper__filter__header__icon"
                      icon={showFilterActive ? "angle-up" : "angle-down"}
                    />
                  </div>
                  {showFilterActive && (
                    <>
                      <div className="itemsWrapper__filter__inputs">
                        <LabelComponent labelTitle="Szukaj" labelFor="search" />
                        <InputComponent
                          onValueChange={(val) => setSearchValue(val)}
                          inputType="text"
                          inputName="search"
                          inputPlaceholder="Szukaj"
                        />
                        <CheckboxComponent
                          checkboxName="priority"
                          checkboxTitle="Piorytet"
                          onValueChange={() => setCheckboxValue(!checkboxValue)}
                        />
                      </div>
                      <div className="itemsWrapper__filter__inputs">
                        <SelectComponent
                          optionsData={sortTypeTask}
                          onValueChange={(val) => setSelectValue(val)}
                        />
                      </div>
                    </>
                  )}
                </div>
                <div className="itemsWrapper__items">
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
              </div>
            </ReusableContainerComponent>
          </div>
          <div className="plansAndTasksView__wrapper__tasks__historyTasks">
            <ReusableContainerComponent>
              <HeaderComponent headerTitle="Historia" />

              <div className="itemsWrapper">
                <div className="itemsWrapper__filter">
                  <div className="itemsWrapper__filter__header">
                    <div className="itemsWrapper__filter__header__title">
                      Filtry
                    </div>
                    <FontAwesomeIcon
                      onClick={() => setShowFilterHistory(!showFilterHistory)}
                      className="itemsWrapper__filter__header__icon"
                      icon={showFilterHistory ? "angle-up" : "angle-down"}
                    />
                  </div>
                  {showFilterHistory && (
                    <>
                      <div className="itemsWrapper__filter__inputs">
                        <LabelComponent labelTitle="Od" labelFor="dateStart" />
                        <InputComponent
                          onValueChange={(val) => setDateStartValue(val)}
                          inputType="date"
                          inputName="dateStart"
                          inputPlaceholder="Od daty"
                        />
                        <LabelComponent labelTitle="Do" labelFor="dateEnd" />
                        <InputComponent
                          onValueChange={(val) => setDateEndValue(val)}
                          inputType="date"
                          inputName="dateEnd"
                          inputPlaceholder="Do daty"
                        />
                        <CheckboxComponent
                          checkboxName="notDone"
                          checkboxTitle="Niewykonane"
                          onValueChange={() =>
                            setCheckboxHistoryValue(!checkboxHistoryValue)
                          }
                        />
                      </div>
                      <div className="itemsWrapper__filter__inputs">
                        <SelectComponent
                          optionsData={sortTypeTask}
                          onValueChange={(val) => setSelectHistoryValue(val)}
                        />
                      </div>
                    </>
                  )}
                </div>
                <div className="itemsWrapper__items">
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
