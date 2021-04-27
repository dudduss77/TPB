import React, { useContext, useState, useEffect } from "react";
import "./BudgetSettings.scss";
import axios from "axios";

//Components
import HeaderComponent from "../headerComponent/HeaderComponent";
import InputComponent from "../inputComponent/InputComponent";
import SelectComponent from "../selectComponent/SelectComponent";
import ButtonComponent from "../buttonComponent/ButtonComponent";

//Context
import { UserContext } from "../../context/UserContext";

//SelectData
import { budgetDay } from "../../data/selectData";

const BudgetSettings = () => {
  const { userAction, userStatus, userDispatch } = useContext(UserContext);

  const [actualValue, setActualValue] = useState(0);
  const [newValue, setNewValue] = useState("");
  const [dayNumber, setDayNumber] = useState(1);

  useEffect(() => {
    setActualValue(userStatus.budgetValue);
    setDayNumber(userStatus.budgetStartDay);
  }, [userStatus.budgetValue, userStatus.budgetStartDay]);

  const submit = () => {
    axios
      .patch(`http://localhost:5000/user`, {
        budgetValue: parseInt(newValue),
        budgetStartDay: dayNumber,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    userDispatch({
      type: userAction.editBudget,
      payload: { budgetValue: parseInt(newValue), budgetStartDay: dayNumber },
    });
  };

  return (
    <div className="budgetSettings">
      <HeaderComponent headerTitle="Ustawienia budżetu" />
      <div className="budgetSettings__wrapper">
        <h3>Aktualny budżet</h3>
        <h1>{`${actualValue}zł`}</h1>

        <InputComponent
          initialValue={newValue}
          labelFor="set-budget"
          label="Ustaw budżet"
          type="text"
          placeholder="Ustaw budżet"
          getValue={setNewValue}
        />

        <SelectComponent
          optionsData={budgetDay()}
          initialValue={dayNumber}
          label="Dzień początku budżetu"
          onValueChange={(val) => setDayNumber(val)}
        />

        <ButtonComponent size="small" buttonName="Ustaw" buttonClick={submit} />
      </div>
    </div>
  );
};

export default BudgetSettings;
