import React from "react";
import "./TasksWrapper.scss";

import HeaderComponent from "../headerComponent/HeaderComponent";
import TaskComponent from "../taskComponent/TaskComponent";

const TasksWrapper = ({header, filter, check, edit, trash, data}) => {
  

  return (
    <div className="tasksWrapper">
      <HeaderComponent headerTitle={header} />

      {filter && filter}

      <div className="tasksWrapper__tasks">
        {data.map((task) => {
          return (
            
            <TaskComponent
              key={task.id}
              id={task.id}
              taskCheck={check}
              taskEdit={edit}
              taskTrash={trash}
              
              taskTitle={task.title}
              taskDate={task.date}
              taskDesc={task.desc}
              taskStatus={task.status}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TasksWrapper;
