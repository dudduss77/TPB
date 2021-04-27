import React, { useContext } from "react";
import "./NotifyComponent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TasksWrapper from "../tasksWrapper/TasksWrapper";
import GoalsWrapperComponent from "../goalsWrapperComponent/GoalsWrapperComponent";
import ExpenseWrapper from "../expenseWrapper/ExpenseWrapper";

import { AppContext } from "../../context/AppContext";


const NotifyComponent = (props) => {
  const { actionType, appDispatch } = useContext(AppContext);

  const closeNotify = (event) => {
    event.preventDefault();
    if (
      event.target.getAttribute("class") === "notifyComponent" ||
      event.target.getAttribute("class") ===
        "notifyComponent__wrapper__close" ||
      event.target.parentNode.parentNode.getAttribute("class") ===
        "notifyComponent__wrapper__close"
    ) {
      appDispatch({ type: actionType.showNotifyMenu });
    }
  };

  return (
    <div onClick={closeNotify} className="notifyComponent">
      <div className="notifyComponent__wrapper">
        <div className="notifyComponent__wrapper__close">
          <FontAwesomeIcon icon="times" />
        </div>
        <div className="notifyComponent__wrapper__items">
          <TasksWrapper
            header="Zadania na wykończeniu"
            check={false}
            edit={false}
            trash={false}
            // data={tempTaskData}
          />
        </div>
        <div className="notifyComponent__wrapper__items">
          <ExpenseWrapper
            header="Przypomnienie o płatnościach"
            edit={false}
            trash={false}
          />
        </div>
        <div className="notifyComponent__wrapper__items">
          <GoalsWrapperComponent
            header="Cele na wykończeniu"
            editValue={false}
            edit={false}
            trash={false}
          />
        </div>
      </div>
    </div>
  );
};

export default NotifyComponent;
