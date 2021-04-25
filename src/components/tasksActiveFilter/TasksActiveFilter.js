import React, { useState } from "react";
import "./TasksActiveFilter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Components
import CheckboxComponent from "../checkboxComponent/CheckboxComponent";
import SelectComponent from "../../components/selectComponent/SelectComponent";
import InputComponent from "../inputComponent/InputComponent";

//Data
import {taskSelect} from '../../data/selectData'

const TasksActiveFilter = ({
  setSearch,
  setSelect,
  setPriority,
  initialValue,
}) => {
  const [showFilter, setShowFilter] = useState(false);

  const getSearchValue = (event) => {
    // event.preventDefault();
    setSearch(event.target.value);
  };

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
            <InputComponent
              orientation="horizontal"
              labelFor="task-title"
              type="text"
              placeholder="Szukaj"
              getValue={getSearchValue}
            />

            <CheckboxComponent
              checkboxName="priority-active"
              checkboxTitle="Piorytet"
              onValueChange={setPriority}
            />
          </div>

          <div className="tasksActiveFilter__inputs">
            <SelectComponent
              optionsData={taskSelect}
              initialValue={initialValue}
              onValueChange={(val) => setSelect(val)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default TasksActiveFilter;
