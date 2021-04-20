import React, {useState} from 'react'

import InputComponent from '../inputComponent/InputComponent'
import CheckboxComponent from '../checkboxComponent/CheckboxComponent'
import ButtonComponent from '../buttonComponent/ButtonComponent'
import SelectComponent from '../selectComponent/SelectComponent'

const TempCategory = [
  {
    selectHeader: "Jedzenie",
    selectValue: "eat"
  },
  {
    selectHeader: "Hobby",
    selectValue: "hobby"
  },
  {
    selectHeader: "Nauka",
    selectValue: "learning"
  }
]

const TempConstatnTerm = [
  {
    selectHeader: "Codziennie",
    selectValue: "everyday"
  },
  {
    selectHeader: "Co tydzień",
    selectValue: "everyweek"
  },
  {
    selectHeader: "Co miesiąc",
    selectValue: "everymonth"
  }
]

const AddExpenseComponent = () => {
  const [expenseTitle, setExpenseTitle] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  const [expenseCost, setExpenseCost] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('');
  const [isConstant, setIsConstant] = useState(false);
  const [constantTerm, setConstantTermn] = useState('');
  return (
    <>
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
        optionsData={TempCategory}
        onValueChange={(val) => setExpenseCategory(val)}
        size="auto"
      />

      <CheckboxComponent
        size="auto"
        checkboxName="isConstant"
        checkboxTitle="Czy wydatek stały"
        onValueChange={() => setIsConstant(!isConstant)}
      />

      {isConstant && (
        <SelectComponent 
          optionsData={TempConstatnTerm}
          onValueChange={(val) => setConstantTermn(val)}
          size="auto"
        />
      )}

      


      <ButtonComponent
        buttonName="Dodaj"
        size="auto"
      />
    </>
  )
}

export default AddExpenseComponent
