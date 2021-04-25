import React, { useState } from "react";
import "./GoalHistoryFilter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Components
import CheckboxComponent from "../../components/checkboxComponent/CheckboxComponent";
import SelectComponent from "../../components/selectComponent/SelectComponent";

//Data
import { goalHistorySelect } from "../../data/selectData";

const GoalHistoryFilter = ({ setSelect, setUnrealized, selectInitialValue }) => {
  const [showFilter, setShowFilter] = useState(false);

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
              onValueChange={setUnrealized}
            />
          </div>
          <div className="goalHistoryFilter__inputs">
            <SelectComponent
              initialValue={selectInitialValue}
              optionsData={goalHistorySelect}
              onValueChange={(val) => setSelect(val)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default GoalHistoryFilter;
