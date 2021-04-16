import React from "react";
import "./SaveMoneySettings.scss";

import HeaderComponent from "../headerComponent/HeaderComponent";
import RadioInputComponent from "../radioInputComponent/RadioInputComponent";
import ButtonComponent from '../buttonComponent/ButtonComponent'

const SaveMoneySettings = () => {
  return (
    <div className="saveMoneySettings">
      <HeaderComponent headerTitle="Ustawienia oszczędzania" />
      <div className="saveMoneySettings__wrapper">
        <h3 className="saveMoneySettings__wrapper__title">Pozostałość z miesiąca</h3>
        <RadioInputComponent
          label="Dodaj do budżetu"
          labelFor="add-to-budget"
          name="saveMoney"
        />
        <RadioInputComponent
          label="Dodaj do oszczędności"
          labelFor="add-to-save"
          name="saveMoney"
        />
        <div className="saveMoneySettings__wrapper__button">
          <ButtonComponent size="small" buttonName="Zapisz"/>
          <ButtonComponent size="small" buttonName="Usuń"/>
        </div>
        
      </div>
    </div>
  );
};

export default SaveMoneySettings;
