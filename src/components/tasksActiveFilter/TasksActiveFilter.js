import React, { useState, useEffect } from "react";
import "./TasksActiveFilter.scss";
import "../../globalStyle/forms.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CheckboxComponent from "../checkboxComponent/CheckboxComponent";
import SelectComponent from "../../components/selectComponent/SelectComponent";

import sortTypeTask from "../../data/sortTypeTask.json";

const TasksActiveFilter = (props) => {
  const [showFilter, setShowFilter] = useState(false);

  const getSearchValue = (event) => {
    event.preventDefault();
    props.setSearch(event.target.value);
  }

  useEffect(() => {
    props.setSelect(sortTypeTask[0].sortType)
  }, [])

  return (
    <div className="tasksActiveFilter">
      <div className="tasksActiveFilter__header">
        <div className="tasksActiveFilter__header__title">Filtry</div>
        <FontAwesomeIcon
          className="tasksActiveFilter__header__icon"
          onClick={() => setShowFilter(!showFilter)}
          icon={showFilter ? "angle-up" : "angle-down"}
        />
      </div>

      {showFilter && (
        <>
          <div className="tasksActiveFilter__inputs">
            <label className="labelStyle">Szukaj</label>
            <input onChange={getSearchValue} className="inputStyle" type="text" placeholder="Szukaj" />
            <CheckboxComponent
              checkboxName="priority"
              checkboxTitle="Piorytet"
              onValueChange={props.setPriority}
            />
          </div>

          <div className="tasksActiveFilter__inputs">
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

export default TasksActiveFilter;
