import React from "react";
import "./TasksWrapper.scss";

import HeaderComponent from "../headerComponent/HeaderComponent";
import TaskComponent from "../taskComponent/TaskComponent";

const TasksWrapper = (props) => {
  return (
    <div className="tasksWrapper">
      <HeaderComponent headerTitle={props.header} />

      {props.filter && props.filter}

      <div className="tasksWrapper__tasks">
        {props.data.map((task) => {
          return (
            <TaskComponent
              key={task.key}
              taskCheck={props.check}
              taskEdit={props.edit}
              taskTrash={props.trash}
              
              taskTitle={task.taskTitle}
              taskDate={task.taskDate}
              taskDesc={task.taskDesc}
              taskStatus={task.taskStatus}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TasksWrapper;
