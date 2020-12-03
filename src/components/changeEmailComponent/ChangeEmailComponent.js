import React, { useState } from "react";

import "./ChangeEmailComponent.scss";
import "../../globalStyle/forms.scss";

import ButtonComponent from "../buttonComponent/ButtonComponent";

import { emailValidator } from "../../validators/emailValidator";

const ChangeEmailComponent = () => {
  const [newEmail, setNewEmail] = useState("");
  const [repEmail, setRepEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [isValidate, setValidate] = useState(false);

  const getNewMailValue = (event) => {
    event.preventDefault();
    setNewEmail(event.target.value);
  };

  const getRepMailValue = (event) => {
    event.preventDefault();
    setRepEmail(event.target.value);
  };

  const submitForm = () => {
    if(isValidate) {
      console.log("Działa");
    }
  };

  return (
    <div onChange={(e) => {emailValidator(e, setErrMsg, setValidate);}} className="changeEmailComponent">
      <div className="changeEmailComponent__errorMsg">{errMsg}</div>
      <label className="labelStyle" htmlFor="newMail">
        Nowy adres email
      </label>
      <input
        onChange={getNewMailValue}
        className="inputStyle"
        name="newMail"
        type="text"
        placeholder="Nowy adres email"
      />
      <label className="labelStyle" htmlFor="repeatMail">
        Powtórz adres email
      </label>
      <input
        onChange={getRepMailValue}
        className="inputStyle"
        name="repeatMail"
        type="text"
        placeholder="Powtórz adres email"
      />

      <ButtonComponent buttonClick={submitForm} buttonName="Zmień" />
    </div>
  );
};

export default ChangeEmailComponent;
