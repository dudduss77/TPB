import React, { useContext } from "react";
import "./AddIconComponent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AppContext } from "../../context/AppContext";

const AddIconComponent = () => {
  const { actionType, appState, appDispatch } = useContext(AppContext);

  return (
    <div className="addIconComponent">
      <FontAwesomeIcon
        onClick={() => appDispatch({ type: actionType.addTaskMenu })}
        className="addIconComponent__icon"
        icon="plus"
      />
    </div>
  );
};

export default AddIconComponent;
