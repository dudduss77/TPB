import React, {useReducer} from "react";
import "./App.scss";

import './fontLibrary'

import LayoutView from "./view/LayoutView/LayoutView";


//Reducers
import taskReducer from './reducers/taskReducer';

//InitialState
const taskInitialState = [];

//Context
export const TaskContext = React.createContext();

//Data

const App = () => {
  const [tasks, dispatch] = useReducer(taskReducer, taskInitialState);
  return (
    <TaskContext.Provider value={{tasksData: tasks, tasksDispatch: dispatch}}>
      <LayoutView />
    </TaskContext.Provider>
  ) 
}


export default App;
