import React, {useState, useContext, useEffect} from "react";
import "./UserDataComponent.scss";

//Components
import HeaderComponent from "../headerComponent/HeaderComponent";

//Context
import { UserContext } from "../../context/UserContext";

const UserDataComponent = () => {
  const { userAction, userStatus, userDispatch } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    setUserName(userStatus.name)
    setUserSurname(userStatus.surname)
    setUserEmail(userStatus.email)
  }, [userStatus.name, userStatus.surname, userStatus.email])

  return (
    <div className="userDataComponent">
      <HeaderComponent headerTitle="Dane Użytkownika" />
      <div className="userDataComponent__wrapper">
        <div className="userDataComponent__wrapper__block">
          <div className="userDataComponent__wrapper__block__header">Imię:</div>
          <div className="userDataComponent__wrapper__block__value">{userName}</div>
        </div>
        <div className="userDataComponent__wrapper__block">
          <div className="userDataComponent__wrapper__block__header">Nazwisko:</div>
          <div className="userDataComponent__wrapper__block__value">{userSurname}</div>
        </div>
        <div className="userDataComponent__wrapper__block">
          <div className="userDataComponent__wrapper__block__header">E-mail:</div>
          <div className="userDataComponent__wrapper__block__value">{userEmail}</div>
        </div>
      </div>
    </div>
  );
};

export default UserDataComponent;
