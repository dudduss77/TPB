import React from "react";
import "./WeekSettingsComponent.scss";

//Components
import HeaderComponent from "../headerComponent/HeaderComponent";
import SelectComponent from "../selectComponent/SelectComponent";
import ButtonComponent from "../buttonComponent/ButtonComponent";

//Data

import {weekPlanSettings} from '../../data/selectData'

const WeekSettingsComponent = () => {
  return (
    <div className="weekSettingsComponent">
      <HeaderComponent headerTitle="Ustawienia planu" />
      <div className="weekSettingsComponent__wrapper">

        <SelectComponent
          optionsData={weekPlanSettings()}
          initialValue="0:00"
          label="Godzina rozpoczęcia"
          // onValueChange={(val) => setExpenseCategory(val)}
          size="small"
        />

        <ButtonComponent 
        size="small"
          buttonName="Zapisz"
          // buttonClick={}
        />
      </div>
    </div>
  );
};

export default WeekSettingsComponent;
