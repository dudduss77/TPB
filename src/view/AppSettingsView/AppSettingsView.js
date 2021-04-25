import React, { useState, useEffect } from "react";
import "./AppSettingsView.scss";
import { useWindowSize } from "../../customHook/useWindowSize";

//Components
import NotifySettingsComponent from "../../components/notifySettingsComponent/NotifySettingsComponent";
import CategorySettingsComponent from "../../components/categorySettingsComponent/CategorySettingsComponent";
import BudgetSettings from "../../components/budgetSettings/BudgetSettings";
import SaveMoneySettings from "../../components/saveMoneySettings/SaveMoneySettings";
import WeekSettingsComponent from "../../components/weekSettingsComponent/WeekSettingsComponent";
import AppSettingsViewMobile from "../AppSettingsViewMobile/AppSettingsView";

const AppSettingsView = () => {
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

  const leftColumn = (
    <>
      <NotifySettingsComponent />
      <WeekSettingsComponent />
    </>
  );
  const midColumn = <CategorySettingsComponent />;

  const rightColumn = (
    <>
      <BudgetSettings />
      <SaveMoneySettings />
    </>
  );

  return (
    <div className="appSettingsView">
      <div className="appSettingsView__wrapper">
        {!mobile && (
          <>
            <div className="appSettingsView__wrapper__items">{leftColumn}</div>
            <div className="appSettingsView__wrapper__items">{midColumn}</div>
            <div className="appSettingsView__wrapper__items">{rightColumn}</div>
          </>
        )}

        {mobile && (
          <AppSettingsViewMobile
            view={viewNumber}
            leftColumn={leftColumn}
            midColumn={midColumn}
            rightColumn={rightColumn}
          />
        )}
      </div>
      <div className="appSettingsView__subMenu">
        <div
          onClick={() => setViewNumber(1)}
          className="userSettingsView__subMenu__element"
        >
          1
        </div>
        <div
          onClick={() => setViewNumber(2)}
          className="userSettingsView__subMenu__element"
        >
          2
        </div>
        <div
          onClick={() => setViewNumber(3)}
          className="userSettingsView__subMenu__element"
        >
          3
        </div>
      </div>
    </div>
  );
};

export default AppSettingsView;
