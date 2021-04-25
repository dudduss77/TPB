import React, { useState, useContext } from "react";
import "./AddComponent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Components
import HeaderComponent from "../headerComponent/HeaderComponent";
import SelectComponent from "../selectComponent/SelectComponent";
import AddTaskComponent from "../addTaskComponent/AddTaskComponent";
import AddExpenseComponent from "../addExpenseComponent/AddExpenseComponent";
import AddGoalComponent from "../addGoalComponent/AddGoalComponent";
import AddSaveMoney from "../addSaveMoney/AddSaveMoney";
import UpdateGoalValue from '../updateGoalValue/UpdateGoalValue'

//Context
import { AppContext } from "../../context/AppContext";

//Data
import { addComponentSelect } from "../../data/selectData";

const AddComponent = () => {
  const { actionType, appState, appDispatch } = useContext(AppContext);
  const [selectValue, setSelectValue] = useState(
    appState.addEdit.editMode ? appState.addEdit.whatEdit : "task"
  );

  const closeMenu = (event) => {
    if (
      event.target.getAttribute("class") === "addComponent" ||
      event.target.getAttribute("class") === "addComponent__wrapper__close" ||
      event.target.parentNode.parentNode.getAttribute("class") ===
        "addComponent__wrapper__close"
    )
      appDispatch({ type: actionType.closeAddEdit });
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
      case "update-goal-value":
        return <UpdateGoalValue/>;
      default:
        return <p>Coś poszło nie tak</p>;
    }
  };
  return (
    <div onClick={closeMenu} className="addComponent">
      <div className="addComponent__wrapper">
        <HeaderComponent
          headerTitle={appState.addEdit.editMode ? "Edycja" : "Dodawanie"}
        />
        <div className="addComponent__wrapper__close">
          <FontAwesomeIcon icon="times" />
        </div>
        <div className="addComponent__wrapper__items">
          {!appState.addEdit.editMode && (
            <SelectComponent
              optionsData={addComponentSelect}
              initialValue={selectValue}
              onValueChange={(val) => setSelectValue(val)}
              size="auto"
            />
          )}

          {renderComponent(selectValue)}
        </div>
      </div>
    </div>
  );
};

export default AddComponent;
