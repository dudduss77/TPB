import React, { useState, useContext, useEffect, useRef } from "react";
import moment from "moment";
import axios from "axios";
import "../../globalStyle/forms.scss";

//Custom hooks
import { useTaskValidator } from "../../validators/taskValidator";

//Components
import InputComponent from "../inputComponent/InputComponent";
import TextareaComponent from "../textareaComponent/TextareaComponent";
import CheckboxComponent from "../checkboxComponent/CheckboxComponent";
import ButtonComponent from "../buttonComponent/ButtonComponent";
import ErrorComponent from "../errorComponent/ErrorComponent"

//Context
import { AppContext } from "../../context/AppContext";
import { TaskContext } from "../../context/TaskContext";

const AddTaskComponent = () => {
  const firstUpdate = useRef(true);
  const [taskId, setTaskId] = useState(null);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskPriority, setTaskPriority] = useState(false);

  const { actionType, appState, appDispatch } = useContext(AppContext);
  const { taskAction, taskStatus, taskDispatch } = useContext(TaskContext);

  const [errorMsg, setState] = useTaskValidator();

  useEffect(() => {
    if (appState.addEdit.editMode === true) {
      let [task] = taskStatus.filter((task) => task.id === appState.addEdit.id);
      setTaskId(task.id);
      setTaskTitle(task.title);
      setTaskDesc(task.desc);
      setTaskDate(task.date);
      setTaskPriority(task.priority);
    }
  }, [appState.addEdit, taskStatus]);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setState({
      title: taskTitle,
      desc: taskDesc,
      date: taskDate,
    });
  }, [taskTitle, taskDesc, taskDate]);

  const submitTask = () => {
    setState({
      title: taskTitle,
      desc: taskDesc,
      date: taskDate,
    });

    if (errorMsg === "") {
      let task = {
        id: moment.now(),
        title: taskTitle,
        desc: taskDesc,
        date: taskDate,
        priority: taskPriority,
        status: null,
      };

      if (appState.addEdit.editMode === true) {
        task.id = taskId;
        taskDispatch({
          type: taskAction.edit,
          payload: { id: taskId, task: task },
        });
        axios
          .put(`http://localhost:5000/tasks/${taskId}`, task)
          .then((results) => console.log(results))
          .catch((error) => console.log(error));
      } else {
        taskDispatch({ type: taskAction.add, payload: task });

        axios
          .post("http://localhost:5000/tasks", task)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
      }

      appDispatch({type: actionType.closeAddEdit})
    }
  };

  return (
    <>
      <ErrorComponent errorMsg={errorMsg}/>
      <InputComponent
        initialValue={taskTitle}
        labelFor="task-title"
        label="Tytuł zadania"
        type="text"
        placeholder="Tytuł twojego zadania"
        getValue={setTaskTitle}
      />

      <TextareaComponent
        initialValue={taskDesc}
        label="Opis"
        getValue={setTaskDesc}
      />

      <InputComponent
        initialValue={taskDate}
        labelFor="task-date"
        label="Data zadania"
        type="date"
        getValue={setTaskDate}
      />

      <CheckboxComponent
        initialValue={taskPriority}
        checkboxName="priority"
        checkboxTitle="Piorytet"
        onValueChange={() => setTaskPriority(!taskPriority)}
      />

      <ButtonComponent
        buttonName={appState.addEdit.editMode ? "Edytuj" : "Dodaj"}
        buttonClick={() => submitTask()}
        size="auto"
      />
    </>
  );
};

export default AddTaskComponent;
