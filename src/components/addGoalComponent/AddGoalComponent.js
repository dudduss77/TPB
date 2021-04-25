import React, { useState, useContext, useEffect } from "react";
import moment from "moment";
import axios from 'axios'

//Components
import InputComponent from "../inputComponent/InputComponent";
import TextareaComponent from "../textareaComponent/TextareaComponent";
import CheckboxComponent from "../checkboxComponent/CheckboxComponent";
import ButtonComponent from "../buttonComponent/ButtonComponent";
import ErrorComponent from "../errorComponent/ErrorComponent";

//Context
import { AppContext } from "../../context/AppContext";
import { GoalContext } from "../../context/GoalContext";

const AddGoalComponent = () => {
  const { appState } = useContext(AppContext);
  const { goalActionType, goalStatus, goalDispatch } = useContext(GoalContext);

  const [goalId, setGoalId] = useState(null);
  const [goalTitle, setGoalTitle] = useState("");
  const [goalDesc, setGoalDesc] = useState("");
  const [goalEndDate, setGoalEndDate] = useState("");
  const [goalStart, setGoalStart] = useState("");
  const [goalActualValue, setGoalActualValue] = useState("");
  const [goalEnd, setGoalEnd] = useState("");
  const [isRaport, setIsRaport] = useState(false);

  useEffect(() => {
    if (appState.addEdit.editMode === true) {
      let [goal] = goalStatus.filter((goal) => goal.id === appState.addEdit.id);
      setGoalId(goal.id);
      setGoalTitle(goal.title);
      setGoalDesc(goal.desc);
      setGoalEndDate(goal.endDate);
      setGoalStart(goal.startValue);
      setGoalActualValue(goal.actualValue);
      setGoalEnd(goal.toValue);
      setIsRaport(goal.isInRaport);
    }
  }, [appState.addEdit, goalStatus]);

  const submitGoal = () => {
    let goal = {
      id: moment.now(),
      title: goalTitle,
      desc: goalDesc,
      endDate: goalEndDate,
      startValue: goalStart,
      actualValue: goalStart,
      toValue: goalEnd,
      isInRaport: isRaport,
      done: false
    };

    if (appState.addEdit.editMode) {
      goal.id = goalId;
      goal.actualValue = goalActualValue;
      goalDispatch({
        type: goalActionType.edit,
        payload: { id: goalId, goal: goal },
      });

      axios.put(`http://localhost:5000/goals/${goalId}`, goal)
        .then(response => console.log(response))
        .catch(error => console.log(error))

    } else {
      goalDispatch({ type: goalActionType.add, payload: goal });

      axios.post('http://localhost:5000/goals', goal)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
  };

  return (
    <>
      <ErrorComponent errorMsg="" />
      <InputComponent
        initialValue={goalTitle}
        labelFor="goal-title"
        label="Nazwa celu"
        type="text"
        placeholder="Nazwa Celu"
        getValue={setGoalTitle}
      />

      <TextareaComponent
        initialValue={goalDesc}
        label="Opis celu"
        getValue={setGoalDesc}
      />

      <InputComponent
        initialValue={goalEndDate}
        labelFor="goal-date"
        label="Data zakończenia"
        type="date"
        getValue={setGoalEndDate}
      />

      <InputComponent
        initialValue={goalStart}
        labelFor="goal-start"
        label="Zaczynasz od"
        type="text"
        placeholder="0"
        getValue={setGoalStart}
      />

      <InputComponent
        initialValue={goalEnd}
        labelFor="goal-end"
        label="Kończysz na"
        type="text"
        placeholder="255"
        getValue={setGoalEnd}
      />

      <CheckboxComponent
        initialValue={isRaport}
        checkboxName="isRaport"
        checkboxTitle="Uwzględnić w raporcie"
        onValueChange={() => setIsRaport(!isRaport)}
      />

      <ButtonComponent
        buttonName={appState.addEdit.editMode ? "Edytuj" : "Dodaj"}
        buttonClick={() => submitGoal()}
      />
    </>
  );
};

export default AddGoalComponent;
