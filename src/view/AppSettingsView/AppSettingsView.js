import React, { useState, useEffect } from "react";
import "./AppSettingsView.scss";

import { useWindowSize } from "../../customHook/useWindowSize";

import NotifySettingsComponent from "../../components/notifySettingsComponent/NotifySettingsComponent";
import CategorySettingsComponent from "../../components/categorySettingsComponent/CategorySettingsComponent";
import BudgetSettings from "../../components/budgetSettings/BudgetSettings";
import SaveMoneySettings from "../../components/saveMoneySettings/SaveMoneySettings";
import WeekSettingsComponent from '../../components/weekSettingsComponent/WeekSettingsComponent'

const AppSettingsView = () => {
  const [transformValue, setTransformValue] = useState(0);
  const size = useWindowSize();

  const trasnformSettings = {
    transform: "translateX(-" + transformValue + "vw)",
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
    <div className="appSettingsView">
      <div className="appSettingsView__wrapper" style={trasnformSettings}>
        <div className="appSettingsView__wrapper__items">
          <NotifySettingsComponent />
          <WeekSettingsComponent />
        </div>
        <div className="appSettingsView__wrapper__items">
          <CategorySettingsComponent />
        </div>
        <div className="appSettingsView__wrapper__items">
          <BudgetSettings />
          <SaveMoneySettings />
        </div>
      </div>
      <div className="appSettingsView__subMenu">
        <div onClick={() => setTransformValue(0)} className="userSettingsView__subMenu__element">1</div>
        <div onClick={() => setTransformValue(100)} className="userSettingsView__subMenu__element">2</div>
        <div onClick={() => setTransformValue(200)} className="userSettingsView__subMenu__element">3</div>
      </div>
    </div>
  );
};

export default AppSettingsView;
