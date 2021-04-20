import React, {useState, useEffect} from "react";
import "./WeekPlanAdd.scss";
import { CirclePicker  } from 'react-color';

import HeaderComponent from "../headerComponent/HeaderComponent";
import InputComponent from "../inputComponent/InputComponent";
import SelectComponent from "../selectComponent/SelectComponent";
import ButtonComponent from "../buttonComponent/ButtonComponent";

const generateHours = () => {
  let hours = []
  for(let i = 0; i < 24; i++) {
    hours.push(
      {
        selectHeader: i + ':00',
        selectValue: i + ':00'
      },
      {
        selectHeader: i + ':15',
        selectValue: i + ':15'
      },
      {
        selectHeader: i + ':30',
        selectValue: i + ':30'
      },
      {
        selectHeader: i + ':45',
        selectValue: i + ':45'
      },
    );
  }
  console.log(hours)
  return hours;
}

// const hoursSelect = [
//   {
//     selectHeader: '1:00',
//     selectValue: '1:00'
//   },
//   {
//     selectHeader: '1:30',
//     selectValue: '1:30'
//   },
//   {
//     selectHeader: '2:00',
//     selectValue: '2:00'
//   },
//   {
//     selectHeader: '2:30',
//     selectValue: '2:30'
//   },
//   {
//     selectHeader: '3:00',
//     selectValue: '3:00'
//   }
// ]

const WeekPlanAdd = ({onClick}) => {
  const [color, setColor] = useState();

  const onBackgroundClick = (event) => {
    event.preventDefault();
    if(event.target.getAttribute('class') === 'weekPlanAdd') onClick();
  }

  const handleChangeComplete = (color, event) => {
    setColor({ background: color.hex });
  };
  
  useEffect(() => {
    console.log(color)
  }, [color])

  return (
    <div onLoad={generateHours} onClick={onBackgroundClick} className="weekPlanAdd">
      <div className="weekPlanAdd__wrapper">
        <HeaderComponent headerTitle="Dodaj do planu" />
        <InputComponent
          orientation="vertical"
          size="small"
          labelFor="name"
          label="Nazwa"
          type="text"
          placeholder="Nazwa"
          // getValue={setExpenseDate}
        />

        <SelectComponent
          optionsData={generateHours()}
          label="Godzina rozpoczęcia"
          // onValueChange={(val) => setExpenseCategory(val)}
          size="small"
        />

        <SelectComponent
          optionsData={generateHours()}
          label="Godzina zakończenia"
          // onValueChange={(val) => setExpenseCategory(val)}
          size="small"
        />
        <div className="weekPlanAdd__wrapper__colorPicker">
          <label className="weekPlanAdd__wrapper__colorPicker__label">Wybierz kolor</label>
          <CirclePicker 
            onChangeComplete={handleChangeComplete}
          />
        </div>
        

        <ButtonComponent 
          buttonName="Dodaj"
          // buttonClick={}
        />
      </div>
    </div>
  );
};

export default WeekPlanAdd;
