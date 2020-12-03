import React, {useState} from "react";
import "./NotifySettingsComponent.scss";

import CheckboxComponent from "../checkboxComponent/CheckboxComponent";
import ButtonComponent from "../buttonComponent/ButtonComponent";

const NotifySettingsComponent = () => {
  const [taskNotify, setTaskNotify] = useState(false);
  const [payNotify, setPayNotify] = useState(false);
  const [goalNotify, setGoalNotify] = useState(false);

  const submitNotifySettings = () => {
    //API
  }

  return (
    <div className="notifySettingsComponent">
      <CheckboxComponent
        checkboxName="taskNotify"
        checkboxTitle="Powiadomienia o zadaniach"
        onValueChange={() =>
          setTaskNotify(!taskNotify)
        }
      />
      <CheckboxComponent
        checkboxName="payNotify"
        checkboxTitle="Powiadomienia o płatnościach"
        onValueChange={() =>
          setPayNotify(!payNotify)
        }
      />
      <CheckboxComponent
        checkboxName="goalNotify"
        checkboxTitle="Powiadomienia o celach"
        onValueChange={() =>
          setGoalNotify(!goalNotify)
        }
      />
      <div className="notifySettingsComponent__button">
        <ButtonComponent buttonClick={submitNotifySettings} buttonName="Zmień" />
      </div>
    </div>
  );
};

export default NotifySettingsComponent;
