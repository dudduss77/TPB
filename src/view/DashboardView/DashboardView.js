import React from "react";
import "./DashboardView.scss";

import ReusableContainerComponent from "../../components/reusableContainerComponent/ReusableContainerComponent";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import ReusableSettingsComponent from "../../components/reusableSettingsComponent/ReusableSettingsComponent";
import ValueComponent from '../../components/valueComponent/ValueComponent'
import TaskComponent from '../../components/taskComponent/TaskComponent'
import GoalComponent from '../../components/goalComponent/GoalComponent'

const DashboardView = () => {
  return (
    <div className="dashboardView">
      <div className="dashboardView__plan">
        <ReusableContainerComponent>
            <HeaderComponent
              headerTitle="Plan tygodniowy"
              settingsComponent={<ReusableSettingsComponent />}
            />
          </ReusableContainerComponent>
      </div>

      <div className="dashboardView__task">
        <ReusableContainerComponent>
          <HeaderComponent
            headerTitle="Zadania na dziś"
            settingsComponent={<ReusableSettingsComponent />}
          />
          <div className="itemsWrapper">
            <TaskComponent 
              taskCheck={true}
              taskTitle="Testowe Zadanie"
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

      <div className="dashboardView__budgetOne">
        <ReusableContainerComponent>
          <HeaderComponent
            headerTitle="Twój budżet"
            settingsComponent={<ReusableSettingsComponent />}
          />
          <ValueComponent moneyValue="123"/>
        </ReusableContainerComponent>
      </div>

      <div className="dashboardView__budgetTwo">
        <ReusableContainerComponent>
          <HeaderComponent headerTitle="Dzisiaj wydałeś" />
          <ValueComponent moneyValue="999999.99"/>
        </ReusableContainerComponent>
      </div>

      <div className="dashboardView__goals">
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
              goalHistory={false}
            />
          </div>
        </ReusableContainerComponent>
      </div>
    </div>
  );
};

export default DashboardView;
