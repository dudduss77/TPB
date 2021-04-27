import React, { useState, useContext } from "react";
import "./ChangePasswordComponent.scss";
import axios from "axios";

//Components
import ButtonComponent from "../buttonComponent/ButtonComponent";
import HeaderComponent from "../headerComponent/HeaderComponent";
import InputComponent from "../inputComponent/InputComponent";
import ErrorComponent from "../errorComponent/ErrorComponent";

//Context
import { UserContext } from "../../context/UserContext";

const ChangePasswordComponent = () => {
  const { userAction, userStatus, userDispatch } = useContext(UserContext);

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const submitForm = () => {
    axios
      .patch("http://localhost:5000/user", { password: newPass })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    userDispatch({ type: userAction.editPassword, payload: newPass });
  };

  return (
    <div className="changePasswordComponent">
      <HeaderComponent headerTitle="Zmiana hasła" />
      <div className="changePasswordComponent__wrapper">
        <ErrorComponent errorMsg={errorMsg} />

        <InputComponent
          initialValue={oldPass}
          labelFor="oldPassword"
          label="Stare hasło"
          type="password"
          placeholder="Stare hasło"
          getValue={setOldPass}
        />

        <InputComponent
          initialValue={newPass}
          labelFor="newPassword"
          label="Nowe hasło"
          type="password"
          placeholder="Nowe hasło"
          getValue={setNewPass}
        />

        <InputComponent
          initialValue={repeatPass}
          labelFor="repeatPassword"
          label="Powtórz hasło"
          type="password"
          placeholder="Powtórz hasło"
          getValue={setRepeatPass}
        />

        <ButtonComponent
          buttonClick={submitForm}
          buttonName="Zmień"
          size="small"
        />
      </div>
    </div>
  );
};

export default ChangePasswordComponent;
