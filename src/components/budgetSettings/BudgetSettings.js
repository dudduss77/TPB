import React from "react";
import "./BudgetSettings.scss";

import HeaderComponent from "../headerComponent/HeaderComponent";
import InputComponent from "../inputComponent/InputComponent";
import ButtonComponent from "../buttonComponent/ButtonComponent";

const BudgetSettings = () => {
  return (
    <div className="budgetSettings">
      <HeaderComponent headerTitle="Ustawienia budżetu" />
      <div className="budgetSettings__wrapper">
        <h3>Aktualny budżet</h3>
        <h1>2000.60zł</h1>

        <InputComponent
          orientation="vertical"
          labelFor="set-budget"
          label="Ustaw budżet"
          type="text"
          placeholder="Ustaw budżet"
          // getValue={setNewEmail}
        />

        <ButtonComponent buttonName="Ustaw" />
      </div>
    </div>
  );
};

export default BudgetSettings;
