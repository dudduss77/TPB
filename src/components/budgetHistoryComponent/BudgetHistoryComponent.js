import React, { useState, useContext } from "react";
import "./BudgetHistoryComponent.scss";

//Component
import HeaderComponent from "../headerComponent/HeaderComponent";
import BudgetFilter from "../budgetFilter/BudgetFilter";
import ExpenseComponent from "../expenseComponent/ExpenseComponent";
import SaveMoneyComponent from "../saveMoneyComponent/SaveMoneyComponent";

//SortFilter
import { sortBudget } from "../../sortFilterFunctions/sortBudget";

//Contex
import { ExpenseContext } from "../../context/ExpenseContext";

const BudgetHistoryComponent = () => {
  const { expenseAction, expenseStatus, expenseDispatch } = useContext(
    ExpenseContext
  );

  const [selectValue, setSelectValue] = useState("date-down");
  const [dateStartValue, setDateStartValue] = useState();
  const [dateEndValue, setDateEndValue] = useState();
  const [isSaveMoney, setIsSaveMoney] = useState(false);
  return (
    <div className="budgetHistoryComponent">
      <HeaderComponent headerTitle="Historia" />
      <BudgetFilter
        checkboxInitialValue={isSaveMoney}
        selectInitialValue={selectValue}
        setStartDate={setDateStartValue}
        setEndDate={setDateEndValue}
        setSaveMoney={() => setIsSaveMoney(!isSaveMoney)}
        setSelect={setSelectValue}
        dateStartInitial={dateStartValue}
        dateEndInitial={dateEndValue}
      />

      <div className="budgetHistoryComponent__expenses">
        {isSaveMoney === false &&
          sortBudget(
            selectValue,
            expenseStatus,
            dateStartValue,
            dateEndValue
          ).map((expense) => {
            return (
              <ExpenseComponent
                expenseEdit={true}
                expenseTrash={true}
                key={expense.id}
                expenseId={expense.id}
                expenseDate={expense.date}
                expenseName={expense.title}
                expenseValue={expense.cost}
              />
            );
          })}

        {/* <SaveMoneyComponent
          saveMoneyId="1"
          saveMoneyDate="20.12.2020"
          saveMoneyValue="200"
          saveMoneyUserEnd={true}
        /> */}
      </div>
    </div>
  );
};

export default BudgetHistoryComponent;
