import React from 'react'

import TasksActiveFilter from "../../components/tasksActiveFilter/TasksActiveFilter";
import TasksHistoryFilter from "../../components/taskHistoryFilter/TaskHistoryFilter";
import TasksWrapper from "../../components/tasksWrapper/TasksWrapper";


const PlansAndTasksViewMobile = ({view, activeTask, historyTask}) => {
  switch(view) {
    case 1:
      return activeTask;
    case 2: 
      return historyTask;
    default:
      return "error";
  }
}

export default PlansAndTasksViewMobile
