import React, { useState } from "react";

//Components
import InputComponent from "../inputComponent/InputComponent";
import ButtonComponent from "../buttonComponent/ButtonComponent";
import SelectComponent from "../selectComponent/SelectComponent";
import ErrorComponent from "../errorComponent/ErrorComponent";

const TempCategory = [
  {
    selectHeader: "Brak",
    selectValue: "empty",
  },
  {
    selectHeader: "Jedzenie",
    selectValue: "eat",
  },
  {
    selectHeader: "Hobby",
    selectValue: "hobby",
  },
  {
    selectHeader: "Nauka",
    selectValue: "learning",
  },
];

const AddExpenseComponent = () => {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [expenseCost, setExpenseCost] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("empty");
  const [constantTerm, setConstantTermn] = useState("");
  return (
    <>
      <ErrorComponent errorMsg="" />
      <InputComponent
        orientation="vertical"
        size="auto"
        labelFor="expense-title"
        label="Nazwa wydatku"
        type="text"
        placeholder="Nazwa wydatku"
        getValue={setExpenseTitle}
      />

      <InputComponent
        orientation="vertical"
        size="auto"
        labelFor="expense-date"
        label="Data wydatku"
        type="date"
        getValue={setExpenseDate}
      />

      <InputComponent
        orientation="vertical"
        size="auto"
        labelFor="expense-cost"
        label="Koszt"
        type="text"
        placeholder="00.00"
        getValue={setExpenseDate}
      />

      <SelectComponent
        initialValue={expenseCategory}
        optionsData={TempCategory}
        onValueChange={(val) => setExpenseCategory(val)}
        size="auto"
      />

      <ButtonComponent buttonName="Dodaj" size="auto" />
    </>
  );
};

export default AddExpenseComponent;
