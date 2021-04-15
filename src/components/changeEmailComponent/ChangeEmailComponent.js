import React, { useState } from "react";

import "./ChangeEmailComponent.scss";
import "../../globalStyle/forms.scss";

import ButtonComponent from "../buttonComponent/ButtonComponent";
import HeaderComponent from "../headerComponent/HeaderComponent";
import InputComponent from "../inputComponent/InputComponent";

import { emailValidator } from "../../validators/emailValidator";

const ChangeEmailComponent = () => {
  const [newEmail, setNewEmail] = useState("");
  const [repEmail, setRepEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [isValidate, setValidate] = useState(false);

  const submitForm = () => {
    if (isValidate) {
      console.log("Działa");
    }
  };

  return (
    // <div onChange={(e) => {emailValidator(e, setErrMsg, setValidate);}} className="changeEmailComponent">
    <div className="changeEmailComponent">
      <HeaderComponent headerTitle="Zmiana adresu email" />

      <div className="changeEmailComponent__wrapper">
        <div className="changeEmailComponent__wrapper__errorMsg">{errMsg}</div>
        <InputComponent
          orientation="vertical"
          labelFor="newMail"
          label="Nowy adres email"
          type="text"
          placeholder="Nowy adres"
          getValue={setNewEmail}
        />

        <InputComponent
          orientation="vertical"
          labelFor="repeatMail"
          label="Powtórz adres email"
          type="text"
          placeholder="Powtórz adres"
          getValue={setRepEmail}
        />

        <ButtonComponent buttonClick={submitForm} buttonName="Zmień" />
      </div>
    </div>
  );
};

export default ChangeEmailComponent;
