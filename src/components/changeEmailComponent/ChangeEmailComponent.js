import React, { useState, useContext } from "react";
import "./ChangeEmailComponent.scss";
import axios from "axios";

//Components
import ButtonComponent from "../buttonComponent/ButtonComponent";
import HeaderComponent from "../headerComponent/HeaderComponent";
import InputComponent from "../inputComponent/InputComponent";
import ErrorComponent from "../errorComponent/ErrorComponent";

//Context
import { UserContext } from "../../context/UserContext";

const ChangeEmailComponent = () => {
  const { userAction, userStatus, userDispatch } = useContext(UserContext);
  const [newEmail, setNewEmail] = useState("");
  const [repEmail, setRepEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const submitForm = () => {
    axios
      .patch("http://localhost:5000/user", { email: newEmail })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    userDispatch({ type: userAction.editMail, payload: newEmail });
  };

  return (
    <div className="changeEmailComponent">
      <HeaderComponent headerTitle="Zmiana adresu email" />

      <div className="changeEmailComponent__wrapper">
        <ErrorComponent errorMsg={errorMsg} />
        <InputComponent
          initialValue={newEmail}
          labelFor="newMail"
          label="Nowy adres email"
          type="text"
          placeholder="Nowy adres"
          getValue={setNewEmail}
        />

        <InputComponent
          initialValue={repEmail}
          orientation="vertical"
          labelFor="repeatMail"
          label="Powtórz adres email"
          type="text"
          placeholder="Powtórz adres"
          getValue={setRepEmail}
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

export default ChangeEmailComponent;
