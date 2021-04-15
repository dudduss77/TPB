import React from "react";
import "./UserDataComponent.scss";

import HeaderComponent from "../headerComponent/HeaderComponent";

const UserDataComponent = (props) => {
  return (
    <div className="userDataComponent">
      <HeaderComponent headerTitle="Dane Użytkownika" />
      <div className="userDataComponent__wrapper">
        <div className="userDataComponent__wrapper__block">
          <div className="userDataComponent__wrapper__block__header">Imię:</div>
          <div className="userDataComponent__wrapper__block__value">Damian</div>
        </div>
        <div className="userDataComponent__wrapper__block">
          <div className="userDataComponent__wrapper__block__header">Nazwisko:</div>
          <div className="userDataComponent__wrapper__block__value">Karbowiak</div>
        </div>
        <div className="userDataComponent__wrapper__block">
          <div className="userDataComponent__wrapper__block__header">E-mail:</div>
          <div className="userDataComponent__wrapper__block__value">dudduss76@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default UserDataComponent;
