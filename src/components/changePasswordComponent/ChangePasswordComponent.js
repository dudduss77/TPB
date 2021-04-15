import React, { useState } from "react";

import "./ChangePasswordComponent.scss";
import "../../globalStyle/forms.scss";

import { passwordValidator } from "../../validators/passwordValidator";

import ButtonComponent from "../buttonComponent/ButtonComponent";

import HeaderComponent from "../headerComponent/HeaderComponent";
import InputComponent from "../inputComponent/InputComponent";

const ChangePasswordComponent = () => {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [isValidate, setIsValidate] = useState(false);

  const submitForm = () => {
    if (isValidate) {
      console.log("działa");
    }
  };

  return (
    <div className="changePasswordComponent">
      <HeaderComponent headerTitle="Zmiana hasła" />
      <div className="changePasswordComponent__wrapper">
        <div className="changePasswordComponent__wrapper__errorMsg">
          {errMsg}
        </div>

        <InputComponent
          orientation="vertical"
          labelFor="oldPassword"
          label="Stare hasło"
          type="text"
          placeholder="Stare hasło"
          getValue={setOldPass}
        />

        <InputComponent
          orientation="vertical"
          labelFor="newPassword"
          label="Nowe hasło"
          type="text"
          placeholder="Nowe hasło"
          getValue={setNewPass}
        />

        <InputComponent
          orientation="vertical"
          labelFor="repeatPassword"
          label="Powtórz hasło"
          type="text"
          placeholder="Powtórz hasło"
          getValue={setRepeatPass}
        />

        <ButtonComponent buttonClick={submitForm} buttonName="Zmień" />
      </div>
    </div>
  );
};

export default ChangePasswordComponent;
