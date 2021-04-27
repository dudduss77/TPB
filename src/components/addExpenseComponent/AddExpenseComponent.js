import React, { useState, useContext, useEffect } from "react";
import moment from "moment";
import axios from "axios";

//Components
import InputComponent from "../inputComponent/InputComponent";
import ButtonComponent from "../buttonComponent/ButtonComponent";
import SelectComponent from "../selectComponent/SelectComponent";
import ErrorComponent from "../errorComponent/ErrorComponent";

//Context
import { AppContext } from "../../context/AppContext";
import { CategoryContext } from "../../context/CategoryContext";
import { ExpenseContext } from "../../context/ExpenseContext";

const AddExpenseComponent = () => {
  const { actionType, appState, appDispatch } = useContext(AppContext);
  const { categoryAction, categoryStatus, categoryDispatch } = useContext(
    CategoryContext
  );
  const { expenseAction, expenseStatus, expenseDispatch } = useContext(
    ExpenseContext
  );

  const [expenseId, setExpenseId] = useState("");
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [expenseCost, setExpenseCost] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("brak");

  useEffect(() => {
    if (appState.addEdit.editMode) {
      let [expense] = expenseStatus.filter(
        (expense) => expense.id === appState.addEdit.id
      );
      setExpenseId(expense.id);
      setExpenseTitle(expense.title);
      setExpenseDate(expense.date);
      setExpenseCost(expense.cost);
      setExpenseCategory(expense.category);
    }
  }, [appState.addEdit.editMode, appState.addEdit.id, expenseStatus]);

  const submit = () => {
    let expense = {
      id: moment.now(),
      title: expenseTitle,
      date: expenseDate,
      cost: parseInt(expenseCost),
      category: expenseCategory,
    };

    if (appState.addEdit.editMode) {
      expense.id = expenseId;
      axios
        .put(`http://localhost:5000/expense/${expenseId}`, expense)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));

      expenseDispatch({
        type: expenseAction.edit,
        payload: { id: expenseId, expense: expense },
      });
    } else {
      axios
        .post("http://localhost:5000/expense", expense)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));

      expenseDispatch({ type: expenseAction.add, payload: expense });
    }
  };
  return (
    <>
      <ErrorComponent errorMsg="" />
      <InputComponent
        initialValue={expenseTitle}
        labelFor="expense-title"
        label="Nazwa wydatku"
        type="text"
        placeholder="Nazwa wydatku"
        getValue={setExpenseTitle}
      />

      <InputComponent
        initialValue={expenseDate}
        labelFor="expense-date"
        label="Data wydatku"
        type="date"
        getValue={setExpenseDate}
      />

      <InputComponent
        initialValue={expenseCost}
        labelFor="expense-cost"
        label="Koszt"
        type="text"
        placeholder="00.00"
        getValue={setExpenseCost}
      />

      <SelectComponent
        initialValue={expenseCategory}
        optionsData={[
          { selectHeader: "Brak", selectValue: "brak" },
          ...categoryStatus,
        ]}
        onValueChange={(val) => setExpenseCategory(val)}
      />

      <ButtonComponent
        buttonName={appState.addEdit.editMode ? "Edytuj" : "Dodaj"}
        buttonClick={submit}
      />
    </>
  );
};

export default AddExpenseComponent;
