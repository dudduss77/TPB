
export const ACTIONS = {
  ADDTASK: 'addTask',
  DELTASK: 'delTask',
}


export default function taskReducer(tasks, action) {
  switch (action.type) {
    case ACTIONS.ADDTASK: 
      return [...tasks, newTask(action.payload.taskTitle)]
    case ACTIONS.DELTASK:
      return delTask(tasks, action.payload.id)
    default:
      console.log("error");
  }
}

const newTask = (taskTitle) => {
  return {id: Date.now(), taskTitle: taskTitle}
}

const delTask = (tasks, id) => {
  return tasks.filter(task => task.id !== id)
}
