import React, { useState } from "react";
import "./TaskHistoryFilter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Components
import CheckboxComponent from "../checkboxComponent/CheckboxComponent";
import SelectComponent from "../../components/selectComponent/SelectComponent";
import InputComponent from "../inputComponent/InputComponent";

//Data
import { taskSelect } from "../../data/selectData";

const TaskHistoryFilter = ({
  setStartDate,
  setEndDate,
  setSelect,
  setNotDone,
  initialValue,
  dateStartInitial,
  dateEndInitial,
}) => {
  const [showFilter, setShowFilter] = useState(false);
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
            <InputComponent
              initialValue={dateStartInitial}
              orientation="horizontal"
              labelFor="startDateTaskHistory"
              label="Od"
              type="date"
              getValue={setStartDate}
            />

            <InputComponent
              initialValue={dateEndInitial}
              orientation="horizontal"
              labelFor="endDateTaskHistory"
              label="Do"
              type="date"
              getValue={setEndDate}
            />

            <CheckboxComponent
              checkboxName="notDone"
              checkboxTitle="Niewykonane"
              onValueChange={setNotDone}
            />
          </div>

          <div className="taskHistoryFilter__inputs">
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

export default TaskHistoryFilter;
