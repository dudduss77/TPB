import React, { useState, useEffect } from "react";
import "./GoalHistoryFilter.scss";

import "../../globalStyle/forms.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CheckboxComponent from "../../components/checkboxComponent/CheckboxComponent";
import SelectComponent from "../../components/selectComponent/SelectComponent";

import sortTypeTask from "../../data/sortTypeTask.json";

const GoalHistoryFilter = (props) => {
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    props.setSelect(sortTypeTask[0].sortType)
  }, [])

  return (
    <div className="goalHistoryFilter">
      <div className="goalHistoryFilter__header">
        <div className="goalHistoryFilter__header__title">Filtry</div>
        <FontAwesomeIcon
          className="goalHistoryFilter__header__icon"
          onClick={() => setShowFilter(!showFilter)}
          icon={showFilter ? "angle-up" : "angle-down"}
        />
      </div>
      {showFilter && (
        <>
      <div className="goalHistoryFilter__inputs">
        <CheckboxComponent
          checkboxName="unrealized"
          checkboxTitle="Niezrealizowane"
          onValueChange={props.setUnrealized}
        />
      </div>
      <div className="goalHistoryFilter__inputs">
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

export default GoalHistoryFilter;
