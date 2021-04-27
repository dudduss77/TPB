import React, { useState, useEffect, useContext } from "react";
import "./WeekPlanAdd.scss";
import { CirclePicker } from "react-color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

//Components
import HeaderComponent from "../headerComponent/HeaderComponent";
import InputComponent from "../inputComponent/InputComponent";
import SelectComponent from "../selectComponent/SelectComponent";
import ButtonComponent from "../buttonComponent/ButtonComponent";
import ErrorComponent from "../errorComponent/ErrorComponent";

//Context
import { AppContext } from "../../context/AppContext";
import { WeekPlanContext } from "../../context/WeekPlanContext";
//Data
import { addWeekPlan, weekPlanDay } from "../../data/selectData";
import axios from "axios";

const WeekPlanAdd = ({ onClick }) => {
  const { actionType, appState, appDispatch } = useContext(AppContext);
  const { weekPlanAction, weekPlanStatus, weekPlanDispatch } = useContext(
    WeekPlanContext
  );

  const [weekPlanId, setWeekPlanId] = useState("");
  const [color, setColor] = useState();
  const [title, setTitle] = useState("");
  const [dayNumber, setDayNumber] = useState("1");
  const [startHour, setStartHour] = useState("0:00");
  const [endHour, setEndHour] = useState("0:00");

  useEffect(() => {
    if (appState.planAddEdit.editMode) {
      const [weekPlanBlock] = weekPlanStatus.filter(
        (block) => block.id === appState.planAddEdit.id
      );
      setWeekPlanId(weekPlanBlock.id);
      setTitle(weekPlanBlock.title);
      setDayNumber(weekPlanBlock.dayNumber);
      setStartHour(weekPlanBlock.hourStart);
      setEndHour(weekPlanBlock.hourEnd);
      setColor(weekPlanBlock.background);
    }
  }, [weekPlanStatus, appState]);

  const onBackgroundClick = (event) => {
    // event.preventDefault();
    if (
      event.target.getAttribute("class") === "weekPlanAdd" ||
      event.target.getAttribute("class") === "weekPlanAdd__wrapper__close" ||
      event.target.parentNode.parentNode.getAttribute("class") ===
        "weekPlanAdd__wrapper__close"
    )
      appDispatch({
        type: actionType.closeAddEditPlan,
      });
  };

  const handleChangeComplete = (color, event) => {
    setColor(color.hex);
  };

  const submitWeekPlan = () => {
    let weekPlanBlock = {
      id: moment.now(),
      title: title,
      dayNumber: dayNumber,
      hourStart: startHour,
      hourEnd: endHour,
      background: color,
    };

    if (appState.planAddEdit.editMode) {
      weekPlanBlock.id = weekPlanId;
      axios
        .put(`http://localhost:5000/weekPlan/${weekPlanId}`, weekPlanBlock)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));

      weekPlanDispatch({
        type: weekPlanAction.edit,
        payload: { id: weekPlanId, planBlock: weekPlanBlock },
      });
    } else {
      axios
        .post("http://localhost:5000/weekPlan", weekPlanBlock)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));

      weekPlanDispatch({ type: weekPlanAction.add, payload: weekPlanBlock });
    }
  };

  return (
    <div onClick={onBackgroundClick} className="weekPlanAdd">
      <div className="weekPlanAdd__wrapper">
        <HeaderComponent
          headerTitle={appState.planAddEdit.editMode ? "Edycja" : "Dodawanie"}
        />
        <div className="weekPlanAdd__wrapper__close">
          <FontAwesomeIcon icon="times" />
        </div>
        <div className="weekPlanAdd__wrapper__items">
          <ErrorComponent errorMsg="" />
          <InputComponent
            initialValue={title}
            labelFor="name"
            label="Nazwa"
            type="text"
            placeholder="Nazwa"
            getValue={setTitle}
          />

          <SelectComponent
            initialValue={dayNumber}
            optionsData={weekPlanDay}
            label="Dzień"
            onValueChange={(val) => setDayNumber(val)}
          />

          <SelectComponent
            initialValue={startHour}
            optionsData={addWeekPlan()}
            label="Godzina rozpoczęcia"
            onValueChange={(val) => setStartHour(val)}
          />

          <SelectComponent
            initialValue={endHour}
            optionsData={addWeekPlan()}
            label="Godzina zakończenia"
            onValueChange={(val) => setEndHour(val)}
          />
          <div className="weekPlanAdd__wrapper__colorPicker">
            <label className="weekPlanAdd__wrapper__colorPicker__label">
              Wybierz kolor
            </label>
            <CirclePicker color={color} onChangeComplete={handleChangeComplete} />
          </div>

          <ButtonComponent
            buttonName={appState.planAddEdit.editMode ? "Edytuj" : "Dodaj"}
            buttonClick={() => submitWeekPlan()}
          />
        </div>
      </div>
    </div>
  );
};

export default WeekPlanAdd;
