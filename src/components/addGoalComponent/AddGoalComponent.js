import React, {useState} from 'react'

import "../../globalStyle/forms.scss";

import InputComponent from '../inputComponent/InputComponent'
import TextareaComponent from '../textareaComponent/TextareaComponent'
import CheckboxComponent from '../checkboxComponent/CheckboxComponent'
import ButtonComponent from '../buttonComponent/ButtonComponent'

const AddGoalComponent = () => {
  const [goalTitle, setGoalTitle] = useState('');
  const [goalDesc, setGoalDesc] = useState('');
  const [goalEndDate, setGoalEndDate] = useState('');
  const [goalStart, setGoalStart] = useState('');
  const [goalEnd, setGoalEnd] = useState('');
  const [isRaport, setIsRaport] = useState(false);
  return (
    <>
      <InputComponent
        orientation="vertical"
        size="auto"
        labelFor="goal-title"
        label="Nazwa celu"
        type="text"
        placeholder="Nazwa Celu"
        getValue={setGoalTitle}
      />

      <TextareaComponent
        size="auto"
        label="Opis celu"
        getValue={setGoalDesc}
      />

      <InputComponent
        orientation="vertical"
        size="auto"
        labelFor="goal-date"
        label="Data zakończenia"
        type="date"
        getValue={setGoalEndDate}
      />

      <InputComponent
        orientation="vertical"
        size="auto"
        labelFor="goal-start"
        label="Zaczynasz od"
        type="text"
        placeholder="0"
        getValue={setGoalTitle}
      />

      <InputComponent
        orientation="vertical"
        size="auto"
        labelFor="goal-end"
        label="Kończysz na"
        type="text"
        placeholder="255"
        getValue={setGoalTitle}
      />

      <CheckboxComponent
        size="auto"
        checkboxName="isRaport"
        checkboxTitle="Uwzględnić w raporcie"
        onValueChange={() => setIsRaport(!isRaport)}
      />

      <ButtonComponent
        buttonName="Dodaj"
        size="auto"
      />
    </>
  )
}

export default AddGoalComponent
