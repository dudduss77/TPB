import React from "react";
import "./RaportView.scss";

import tempTaskData from "../../data/tempTaskData.json";

import TasksWrapper from "../../components/tasksWrapper/TasksWrapper";
import ButtonComponent from "../../components/buttonComponent/ButtonComponent";
import SmallBlock from "../../components/smallBlock/SmallBlock";
import GoalsWrapperComponent from "../../components/goalsWrapperComponent/GoalsWrapperComponent";
import RaportChartComponent from '../../components/raportChartComponent/RaportChartComponent'

const RaportView = () => {
  return (
    <div className="raportView">
      <h1 className="raportView__header">Raport</h1>
      <div className="raportView__wrapper">
        <div className="raportView__wrapper__task">
          <TasksWrapper
            header="Zadania na dziś"
            check={true}
            replay={false}
            edit={false}
            trash={false}
            
            data={tempTaskData}
          />
        </div>
        <div className="raportView__wrapper__expense">
          <SmallBlock header="Wczoraj wydano" value="200" currency="true" />
        </div>
        <div className="raportView__wrapper__saveMoney">
          <SmallBlock
            header="Wczoraj zaoszczędzono"
            value="200"
            currency="true"
          />
        </div>
        <div className="raportView__wrapper__goal">
          <GoalsWrapperComponent
            header="Czy coś zrealizowałeś?"
            editValue={true}
            edit={false}
            trash={false}
          />
        </div>
        <div className="raportView__wrapper__chart">
          <RaportChartComponent/>
        </div>
        <div className="raportView__wrapper__button">
          <ButtonComponent buttonName="Zapisz" size="auto" />
        </div>
      </div>
    </div>
  );
};

export default RaportView;
