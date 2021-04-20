import React from "react";
import "./WeekSettingsComponent.scss";

import HeaderComponent from "../headerComponent/HeaderComponent";
import SelectComponent from "../selectComponent/SelectComponent";
import ButtonComponent from "../buttonComponent/ButtonComponent";

const generateHours = () => {
  let hours = []
  for(let i = 0; i < 24; i++) {
    hours.push(
      {
        selectHeader: i + ':00',
        selectValue: i + ':00'
      }
    );
  }
  console.log(hours)
  return hours;
}

const hoursSelect = [
  {
    selectHeader: '1:00',
    selectValue: '1:00'
  },
  {
    selectHeader: '2:00',
    selectValue: '2:00'
  },
  {
    selectHeader: '3:00',
    selectValue: '3:00'
  },
  {
    selectHeader: '4:00',
    selectValue: '4:00'
  },
  {
    selectHeader: '5:00',
    selectValue: '5:00'
  }
]

const WeekSettingsComponent = () => {
  return (
    <div className="weekSettingsComponent">
      <HeaderComponent headerTitle="Ustawienia planu" />
      <div className="weekSettingsComponent__wrapper">

        <SelectComponent
          optionsData={generateHours()}
          label="Godzina rozpoczęcia"
          // onValueChange={(val) => setExpenseCategory(val)}
          size="small"
        />

        <ButtonComponent 
          buttonName="Zapisz"
          // buttonClick={}
        />
      </div>
    </div>
  );
};

export default WeekSettingsComponent;
