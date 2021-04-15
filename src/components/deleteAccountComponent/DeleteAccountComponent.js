import React, { useState } from "react";
import "./DeleteAccountComponent.scss";

import CheckboxComponent from "../checkboxComponent/CheckboxComponent";
import ButtonComponent from "../buttonComponent/ButtonComponent";

import HeaderComponent from "../headerComponent/HeaderComponent";

const DeleteAccountComponent = () => {
  const [delAccountCheckbox, setDelAccountCheckbox] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const submitDelAccount = () => {
    if (delAccountCheckbox) {
    } else {
      setErrMsg("Pole wymagane");
    }
  };

  return (
    <div className="deleteAccountComponent">
      <HeaderComponent headerTitle="Usuń konto" />
      <div className="deleteAccountComponent__errorMsg">{errMsg}</div>
      <CheckboxComponent
        customColor="red"
        checkboxName="delAccount"
        checkboxTitle="Czy napewno chcesz usunąć konto"
        showError={true}
        onValueChange={() => setDelAccountCheckbox(!delAccountCheckbox)}
      />
      <ButtonComponent buttonClick={submitDelAccount} buttonName="Usuń" />
    </div>
  );
};

export default DeleteAccountComponent;
