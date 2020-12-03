import React, { useState } from "react";
import "./BudgetFilter.scss";
import "../../globalStyle/forms.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CheckboxComponent from "../checkboxComponent/CheckboxComponent";
import SelectComponent from "../../components/selectComponent/SelectComponent";

import sortTypeTask from "../../data/sortTypeTask.json";

const BudgetFilter = (props) => {
  const [showFilter, setShowFilter] = useState(false);

  const getStartDate = (event) => {
    event.preventDefault();
    props.setStartDate(event.target.value);
  };

  const getEndDate = (event) => {
    event.preventDefault();
    props.setEndDate(event.target.value);
  };

  return (
    <div className="budgetFilter">
      <div className="budgetFilter__header">
        <div className="budgetFilter__header__title">Filtry</div>
        <FontAwesomeIcon
          className="budgetFilter__header__icon"
          onClick={() => setShowFilter(!showFilter)}
          icon={showFilter ? "angle-up" : "angle-down"}
        />
      </div>

      {showFilter && (
        <>
          <div className="budgetFilter__inputs">
            <label className="labelStyle" htmlFor="dateStart">
              Od
            </label>
            <input onChange={getStartDate} className="inputStyle" id="dateStart" type="date" />
            <label className="labelStyle" htmlFor="dateEnd">
              Do
            </label>
            <input onChange={getEndDate} className="inputStyle" id="dateEnd" type="date" />

            <CheckboxComponent
              checkboxName="saveMoney"
              checkboxTitle="Oszczędności"
              onValueChange={props.setSaveMoney}
            />
          </div>

          <div className="budgetFilter__inputs">
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

export default BudgetFilter;
