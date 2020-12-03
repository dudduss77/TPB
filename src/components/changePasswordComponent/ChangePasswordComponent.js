import React, { useState } from "react";

import "./ChangePasswordComponent.scss";
import "../../globalStyle/forms.scss";

import {passwordValidator} from '../../validators/passwordValidator'

import ButtonComponent from "../buttonComponent/ButtonComponent";

const ChangePasswordComponent = () => {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [errMsg, setErrMsg] = useState("")
  const [isValidate, setIsValidate] = useState(false)

  const getOldPass = (event) => {
    event.preventDefault();
    setOldPass(event.target.value);
  };

  const getNewPass = (event) => {
    event.preventDefault();
    setNewPass(event.target.value);
  };

  const getRepeatPass = (event) => {
    event.preventDefault();
    setRepeatPass(event.target.value);
  };

  const submitForm = () => {
    if(isValidate) {
      console.log("działa");
    }
  }

  return (
    <div onChange={(e) => {passwordValidator(e, setErrMsg, setIsValidate)}} className="changePasswordComponent">
      <div className="changePasswordComponent__errorMsg">{errMsg}</div>
      <label htmlFor="oldPassword" className="labelStyle">
        Stare hasło
      </label>
      <input
        onChange={getOldPass}
        name="oldPassword"
        className="inputStyle"
        type="password"
        placeholder="Stare hasło"
      />
      <label htmlFor="newPassword" className="labelStyle">
        Nowe hasło
      </label>
      <input
        onChange={getNewPass}
        name="newPassword"
        className="inputStyle"
        type="password"
        placeholder="Nowe hasło"
      />
      <label htmlFor="repeatPassword" className="labelStyle">
        Powtórz hasło
      </label>
      <input
        onChange={getRepeatPass}
        name="repeatPassword"
        className="inputStyle"
        type="password"
        placeholder="Powtórz hasło"
      />

      <ButtonComponent buttonClick={submitForm} buttonName="Zmień" />
    </div>
  );
};

export default ChangePasswordComponent;
