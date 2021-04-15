import React, {useState} from 'react'

import "../../globalStyle/forms.scss";

import InputComponent from '../inputComponent/InputComponent'
import TextareaComponent from '../textareaComponent/TextareaComponent'
import CheckboxComponent from '../checkboxComponent/CheckboxComponent'
import ButtonComponent from '../buttonComponent/ButtonComponent'

const AddTaskComponent = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskPriority, setTaskPriority] = useState(false);
  const [taskIsInPlan, setTaskIsInPlan] = useState(false);
  return (
    <>
      <InputComponent
        orientation="vertical"
        size="small"
        labelFor="task-title"
        label="Tytuł zadania"
        type="text"
        placeholder="Tytuł twojego zadania"
        getValue={setTaskTitle}
      />

      <TextareaComponent
        size="small"
        label="Opis"
        getValue={setTaskDesc}
      />

      <InputComponent
        orientation="vertical"
        size="small"
        labelFor="task-date"
        label="Data zadania"
        type="date"
        getValue={setTaskDate}
      />

      <CheckboxComponent
        size="small"
        checkboxName="priority"
        checkboxTitle="Piorytet"
        onValueChange={() => setTaskPriority(!taskPriority)}
      />

      <CheckboxComponent
        size="small"
        checkboxName="isInPlan"
        checkboxTitle="Czy uwzględnić w planie"
        onValueChange={() => setTaskIsInPlan(!taskIsInPlan)}
      />

      <ButtonComponent
        buttonName="Dodaj"
        size="small"
      />
    </>
  )
}

export default AddTaskComponent
