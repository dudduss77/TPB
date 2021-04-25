import React, { useState } from "react";
import "./BudgetFilter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Components
import InputComponent from "../inputComponent/InputComponent";
import CheckboxComponent from "../checkboxComponent/CheckboxComponent";
import SelectComponent from "../../components/selectComponent/SelectComponent";

//Data
import {budgetSelect} from "../../data/selectData"

const BudgetFilter = ({
  setStartDate,
  setEndDate,
  setSelect,
  setSaveMoney,
  checkboxInitialValue,
  selectInitialValue,
}) => {
  const [showFilter, setShowFilter] = useState(false);

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
            <InputComponent
              orientation="horizontal"
              labelFor="budget-date-start"
              label="Od"
              type="date"
              getValue={setStartDate}
            />

            <InputComponent
              orientation="horizontal"
              labelFor="budget-date-end"
              label="Do"
              type="date"
              getValue={setEndDate}
            />

            <CheckboxComponent
              initialValue={checkboxInitialValue}
              checkboxName="saveMoney"
              checkboxTitle="Oszczędności"
              onValueChange={setSaveMoney}
            />
          </div>

          <div className="budgetFilter__inputs">
            <SelectComponent
              initialValue={selectInitialValue}
              optionsData={budgetSelect}
              onValueChange={(val) => setSelect(val)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BudgetFilter;
