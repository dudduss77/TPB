import React, { useContext, useEffect, useState } from "react";
import "./WeekSettingsComponent.scss";
import axios from "axios";

//Components
import HeaderComponent from "../headerComponent/HeaderComponent";
import SelectComponent from "../selectComponent/SelectComponent";
import ButtonComponent from "../buttonComponent/ButtonComponent";

//Context
import { UserContext } from "../../context/UserContext";

//Functions
import {hoursToFloat} from '../../functions/functions'

//Data
import { weekPlanSettings } from "../../data/selectData";

const WeekSettingsComponent = () => {
  const { userAction, userStatus, userDispatch } = useContext(UserContext);

  const [startValue, setStartValue] = useState("0:00");

  useEffect(() => {
    setStartValue(`${userStatus.weekPlanStart}:00`);
  }, [userStatus]);

  const submit = () => {
    let hoursNum = hoursToFloat(startValue)
    axios
      .patch(`http://localhost:5000/user`, { weekPlanStart: hoursNum })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    userDispatch({ type: userAction.editWeekPlanStart, payload: hoursNum });
  };

  return (
    <div className="weekSettingsComponent">
      <HeaderComponent headerTitle="Ustawienia planu" />
      <div className="weekSettingsComponent__wrapper">
        <SelectComponent
          optionsData={weekPlanSettings()}
          initialValue={startValue}
          label="Godzina rozpoczęcia"
          onValueChange={(val) => setStartValue(val)}
          size="small"
        />

        <ButtonComponent
          size="small"
          buttonName="Zapisz"
          buttonClick={submit}
        />
      </div>
    </div>
  );
};

export default WeekSettingsComponent;
