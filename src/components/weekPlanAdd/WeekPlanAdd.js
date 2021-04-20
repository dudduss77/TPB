import React, { useState, useEffect } from "react";
import "./WeekPlanAdd.scss";
import { CirclePicker } from "react-color";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import HeaderComponent from "../headerComponent/HeaderComponent";
import InputComponent from "../inputComponent/InputComponent";
import SelectComponent from "../selectComponent/SelectComponent";
import ButtonComponent from "../buttonComponent/ButtonComponent";

const generateHours = () => {
  let hours = [];
  for (let i = 0; i < 24; i++) {
    hours.push(
      {
        selectHeader: i + ":00",
        selectValue: i + ":00",
      },
      {
        selectHeader: i + ":15",
        selectValue: i + ":15",
      },
      {
        selectHeader: i + ":30",
        selectValue: i + ":30",
      },
      {
        selectHeader: i + ":45",
        selectValue: i + ":45",
      }
    );
  }
  console.log(hours);
  return hours;
};

const WeekPlanAdd = ({ onClick }) => {
  const [color, setColor] = useState();

  const onBackgroundClick = (event) => {
    event.preventDefault();
    if (event.target.getAttribute("class") === "weekPlanAdd") onClick();
  };

  const handleChangeComplete = (color, event) => {
    setColor({ background: color.hex });
  };

  useEffect(() => {
    console.log(color);
  }, [color]);

  return (
    <div
      onLoad={generateHours}
      onClick={onBackgroundClick}
      className="weekPlanAdd"
    >
      <div className="weekPlanAdd__wrapper">
        <HeaderComponent headerTitle="Dodaj do planu" />
        <div onClick={() => onClick()} className="weekPlanAdd__wrapper__close">
          <FontAwesomeIcon icon="times"/>
        </div>
        <div className="weekPlanAdd__wrapper__items">
          <InputComponent
            orientation="vertical"
            size="auto"
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
            size="auto"
          />

          <SelectComponent
            optionsData={generateHours()}
            label="Godzina zakończenia"
            // onValueChange={(val) => setExpenseCategory(val)}
            size="auto"
          />
          <div className="weekPlanAdd__wrapper__colorPicker">
            <label className="weekPlanAdd__wrapper__colorPicker__label">
              Wybierz kolor
            </label>
            <CirclePicker onChangeComplete={handleChangeComplete} />
          </div>

          <ButtonComponent
            buttonName="Dodaj"
            size="auto"
            // buttonClick={}
          />
        </div>
      </div>
    </div>
  );
};

export default WeekPlanAdd;
