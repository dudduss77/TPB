import React, { useState } from "react";
import "./GoalActiveFilter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Components
import InputComponent from "../inputComponent/InputComponent";
import SelectComponent from "../../components/selectComponent/SelectComponent";

//Data
import {goalActiveSelect} from "../../data/selectData"

const GoalActiveFilter = ({ setSearch, setSelect, selectInitialValue, searchInitialValue }) => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="goalActiveFilter">
      <div className="goalActiveFilter__header">
        <div className="goalActiveFilter__header__title">Filtry</div>
        <FontAwesomeIcon
          className="goalActiveFilter__header__icon"
          onClick={() => setShowFilter(!showFilter)}
          icon={showFilter ? "angle-up" : "angle-down"}
        />
      </div>

      {showFilter && (
        <>
          <div className="goalActiveFilter__inputs">
            <InputComponent
              initialValue={searchInitialValue}
              orientation="horizontal"
              labelFor="goal-search"
              label="Szukaj"
              type="text"
              placeholder="Szukaj"
              getValue={setSearch}
            />
          </div>
          <div className="goalActiveFilter__inputs">
            <SelectComponent
              initialValue={selectInitialValue}
              optionsData={goalActiveSelect}
              onValueChange={(val) => setSelect(val)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default GoalActiveFilter;
