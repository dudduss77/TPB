import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

//Components
import InputComponent from "../inputComponent/InputComponent";
import ButtonComponent from "../buttonComponent/ButtonComponent";

//Context
import { AppContext } from "../../context/AppContext";
import { GoalContext } from "../../context/GoalContext";

const UpdateGoalValue = () => {
  const { appState } = useContext(AppContext);
  const { goalActionType, goalStatus, goalDispatch } = useContext(GoalContext);
  const [goalId, setGoalId] = useState(null);
  const [value, setValue] = useState("");
  const [endValue, setEndValue] = useState("");

  useEffect(() => {
    let [goal] = goalStatus.filter((goal) => goal.id === appState.addEdit.id);
    setGoalId(goal.id);
    setValue(goal.actualValue);
    setEndValue(goal.toValue);
  }, [goalStatus]);

  const submitNewValue = () => {
    if (value >= endValue) {
      goalDispatch({ type: goalActionType.done, payload: goalId });
      goalDispatch({
        type: goalActionType.updateValue,
        payload: { id: goalId, updateValue: value },
      });
      axios.patch(`http://localhost:5000/goals/${goalId}`, {
        actualValue: value,
        done: true,
      });
    } else {
      goalDispatch({
        type: goalActionType.updateValue,
        payload: { id: goalId, updateValue: value },
      });

      axios
        .patch(`http://localhost:5000/goals/${goalId}`, { actualValue: value })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <InputComponent
        initialValue={value}
        labelFor="goal-value-update"
        label="Zaktualizuj wartość"
        type="text"
        placeholder="Zaktualizuj wartość"
        getValue={setValue}
      />

      <ButtonComponent
        buttonName={appState.addEdit.editMode ? "Edytuj" : "Dodaj"}
        buttonClick={() => submitNewValue()}
      />
    </>
  );
};

export default UpdateGoalValue;
