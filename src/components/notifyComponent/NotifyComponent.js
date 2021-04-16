import React from "react";
import "./NotifyComponent.scss";

import HeaderComponent from "../headerComponent/HeaderComponent";

import TasksWrapper from "../tasksWrapper/TasksWrapper";
import GoalsWrapperComponent from "../goalsWrapperComponent/GoalsWrapperComponent";
import ExpenseWrapper from '../expenseWrapper/ExpenseWrapper'

import tempTaskData from "../../data/tempTaskData.json";

const NotifyComponent = (props) => {

  const closeNotify = (event) => {
    event.preventDefault();
    // console.log(event.target.getAttribute('class'));
    if(event.target.getAttribute('class') === 'notifyComponent') {
      props.close();
    }
  }

  return (
    <div onClick={closeNotify} className="notifyComponent">
      <div className="notifyComponent__wrapper">
        <div className="notifyComponent__wrapper__items">
          <TasksWrapper
            header="Zadania na wykończeniu"
            check={false}
            edit={false}
            trash={false}
            data={tempTaskData}
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
