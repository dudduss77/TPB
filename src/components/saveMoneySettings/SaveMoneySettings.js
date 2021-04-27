import React, { useState, useContext, useEffect } from "react";
import "./SaveMoneySettings.scss";
import axios from "axios";

//Components
import HeaderComponent from "../headerComponent/HeaderComponent";
import RadioInputComponent from "../radioInputComponent/RadioInputComponent";
import ButtonComponent from "../buttonComponent/ButtonComponent";

//Context
import { UserContext } from "../../context/UserContext";

const SaveMoneySettings = () => {
  const { userAction, userStatus, userDispatch } = useContext(UserContext);
  const [budgetSettings, setBudgetSettings] = useState("");

  useEffect(() => {
    setBudgetSettings(userStatus.saveMoneySettings);
  }, [userStatus]);

  const submit = () => {
    axios
      .patch("http://localhost:5000/user", {
        saveMoneySettings: budgetSettings,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    userDispatch({ type: userAction.editSaveMoney, payload: budgetSettings });
  };

  console.log(budgetSettings==="add-to-budget")
  return (
    <div className="saveMoneySettings">
      <HeaderComponent headerTitle="Ustawienia oszczędzania" />
      <div className="saveMoneySettings__wrapper">
        <h3 className="saveMoneySettings__wrapper__title">
          Pozostałość z miesiąca
        </h3>
        <RadioInputComponent
          label="Dodaj do budżetu"
          labelFor="add-to-budget"
          name="saveMoney"
          defaultChecked={(budgetSettings==="add-to-budget") ? true : false}
          getValue={setBudgetSettings}
        />
        <RadioInputComponent
          label="Dodaj do oszczędności"
          labelFor="add-to-save"
          name="saveMoney"
          defaultChecked={budgetSettings==="add-to-save" ? true : false}
          getValue={setBudgetSettings}
        />
        <div className="saveMoneySettings__wrapper__button">
          <ButtonComponent
            size="small"
            buttonName="Zapisz"
            buttonClick={submit}
          />
        </div>
      </div>
    </div>
  );
};

export default SaveMoneySettings;
