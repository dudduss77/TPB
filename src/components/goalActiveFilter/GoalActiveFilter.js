import React, { useState } from "react";
import "./GoalActiveFilter.scss";

import "../../globalStyle/forms.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SelectComponent from "../../components/selectComponent/SelectComponent";

import sortTypeTask from "../../data/sortTypeTask.json";

const GoalActiveFilter = (props) => {
  const [showFilter, setShowFilter] = useState(false);

  const getSearchValue = (event) => {
    event.preventDefault();
    props.setSearch(event.target.value);
  };

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
      <div className="goalActiveFilter__inputs">
        <label className="labelStyle" htmlFor="search">Szukaj</label>
        <input onChange={getSearchValue} className="inputStyle" id="search" type="text" placeholder="Szukaj"/>
      </div>
      <div className="goalActiveFilter__inputs">
        <SelectComponent
          optionsData={sortTypeTask}
          onValueChange={(val) => props.setSelect(val)}
        />
      </div>
    </div>
  );
};

export default GoalActiveFilter;
