import React, { useState, useContext, useEffect } from "react";
import "./NotifySettingsComponent.scss";
import axios from "axios";

//Components
import HeaderComponent from "../headerComponent/HeaderComponent";
import CheckboxComponent from "../checkboxComponent/CheckboxComponent";
import ButtonComponent from "../buttonComponent/ButtonComponent";

//Context
import { UserContext } from "../../context/UserContext";

const NotifySettingsComponent = () => {
  const { userAction, userStatus, userDispatch } = useContext(UserContext);

  const [taskNotify, setTaskNotify] = useState(false);
  const [payNotify, setPayNotify] = useState(false);
  const [goalNotify, setGoalNotify] = useState(false);

  useEffect(() => {
    setTaskNotify(userStatus.taskNotify);
    setPayNotify(userStatus.expenseNotify);
    setGoalNotify(userStatus.goalNotify);
  }, [userStatus.taskNotify, userStatus.expenseNotify, userStatus.goalNotify]);

  const submitNotifySettings = () => {
    axios
      .patch(`http://localhost:5000/user`, {
        taskNotify: taskNotify,
        expenseNotify: payNotify,
        goalNotify: goalNotify,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    userDispatch({
      type: userAction.editNotify,
      payload: {
        taskNotify: taskNotify,
        expenseNotify: payNotify,
        goalNotify: goalNotify,
      },
    });
  };

  return (
    <div className="notifySettingsComponent">
      <HeaderComponent headerTitle="Powiadomienia" />
      <div className="notifySettingsComponent__wrapper">
        <CheckboxComponent
          initialValue={taskNotify}
          checkboxName="taskNotify"
          checkboxTitle="Powiadomienia o zadaniach"
          onValueChange={() => setTaskNotify(!taskNotify)}
        />
        <CheckboxComponent
          initialValue={payNotify}
          checkboxName="payNotify"
          checkboxTitle="Powiadomienia o płatnościach"
          onValueChange={() => setPayNotify(!payNotify)}
        />
        <CheckboxComponent
          initialValue={goalNotify}
          checkboxName="goalNotify"
          checkboxTitle="Powiadomienia o celach"
          onValueChange={() => setGoalNotify(!goalNotify)}
        />
      </div>

      <div className="notifySettingsComponent__button">
        <ButtonComponent
          size="small"
          buttonClick={submitNotifySettings}
          buttonName="Zmień"
        />
      </div>
    </div>
  );
};

export default NotifySettingsComponent;
