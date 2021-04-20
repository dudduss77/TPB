import React, { useState } from "react";
import "./AddComponent.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import HeaderComponent from "../headerComponent/HeaderComponent";
import SelectComponent from "../selectComponent/SelectComponent";
import AddTaskComponent from "../addTaskComponent/AddTaskComponent";
import AddExpenseComponent from "../addExpenseComponent/AddExpenseComponent";
import AddGoalComponent from "../addGoalComponent/AddGoalComponent";
import AddSaveMoney from "../addSaveMoney/AddSaveMoney";

const selectOptions = [
  {
    selectHeader: "Zadanie",
    selectValue: "task",
  },
  {
    selectHeader: "Wydatek",
    selectValue: "expense",
  },
  {
    selectHeader: "Cel",
    selectValue: "goal",
  },
  {
    selectHeader: "Oszczędzanie",
    selectValue: "save-money",
  },
];

const AddComponent = (props) => {
  const [selectValue, setSelectValue] = useState(selectOptions[0].selectValue);

  const closeMenu = (event) => {
    event.preventDefault();
    if (event.target.getAttribute("class") === "addComponent")
      props.setShowAdd();
  };

  const renderComponent = (value) => {
    switch (value) {
      case "task":
        return <AddTaskComponent />;
      case "expense":
        return <AddExpenseComponent />;
      case "goal":
        return <AddGoalComponent />;
      case "save-money":
        return <AddSaveMoney />;
      default:
        return <p>Coś poszło nie tak</p>;
    }
  };
  return (
    <div onClick={closeMenu} className="addComponent">
      <div className="addComponent__wrapper">
        <HeaderComponent headerTitle="Dodawanie" />
        <div onClick={() => props.setShowAdd()} className="addComponent__wrapper__close">
        <FontAwesomeIcon icon="times"/>
        </div>
        <div className="addComponent__wrapper__items">
          <SelectComponent
            optionsData={selectOptions}
            onValueChange={(val) => setSelectValue(val)}
            size="auto"
          />

          {renderComponent(selectValue)}
        </div>
      </div>
    </div>
  );
};

export default AddComponent;
