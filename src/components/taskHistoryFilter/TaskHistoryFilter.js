import React, { useState } from "react";
import "./TaskHistoryFilter.scss";
import "../../globalStyle/forms.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CheckboxComponent from "../checkboxComponent/CheckboxComponent";
import SelectComponent from "../../components/selectComponent/SelectComponent";

import sortTypeTask from "../../data/sortTypeTask.json";

const TaskHistoryFilter = (props) => {
  const [showFilter, setShowFilter] = useState(false);

  const getStartDate = (event) => {
    event.preventDefault();
    props.setStartDate(event.target.value);
  }

  const getEndDate = (event) => {
    event.preventDefault();
    props.setEndDate(event.target.value);
  }

  return (
    <div className="taskHistoryFilter">
      <div className="taskHistoryFilter__header">
        <div className="taskHistoryFilter__header__title">Filtry</div>
        <FontAwesomeIcon
          className="taskHistoryFilter__header__icon"
          onClick={() => setShowFilter(!showFilter)}
          icon={showFilter ? "angle-up" : "angle-down"}
        />
      </div>

      {showFilter && (
        <>
          <div className="taskHistoryFilter__inputs">
            <label className="labelStyle" htmlFor="startDate">
              Od
            </label>
            <input onChange={getStartDate} className="inputStyle" type="date" id="startDate" />
            <label className="labelStyle" htmlFor="endDate">
              Do
            </label>
            <input onChange={getEndDate} className="inputStyle" type="date" id="endDate" />

            <CheckboxComponent
              checkboxName="notDone"
              checkboxTitle="Niewykonane"
              onValueChange={props.setNotDone}
            />
          </div>

          <div className="taskHistoryFilter__inputs">
            <SelectComponent
              optionsData={sortTypeTask}
              onValueChange={(val) => props.setSelect(val)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default TaskHistoryFilter;
