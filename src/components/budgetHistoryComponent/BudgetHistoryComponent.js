import React, {useState} from 'react'
import "./BudgetHistoryComponent.scss"

import HeaderComponent from '../headerComponent/HeaderComponent'
import BudgetFilter from '../budgetFilter/BudgetFilter'
import ExpenseComponent from '../expenseComponent/ExpenseComponent'
import SaveMoneyComponent from '../saveMoneyComponent/SaveMoneyComponent'
 
const BudgetHistoryComponent = (props) => {
  const [selectValue, setSelectValue] = useState("");
  const [dateStartValue, setDateStartValue] = useState();
  const [dateEndValue, setDateEndValue] = useState();
  const [isSaveMoney, setIsSaveMoney] = useState(false);
  return (
    <div className="budgetHistoryComponent">
      <HeaderComponent headerTitle="Historia" />
      <BudgetFilter
        setStartDate={setDateStartValue}
        setEndDate={setDateEndValue}
        setSaveMoney={() => setIsSaveMoney(!isSaveMoney)}
        setSelect={setSelectValue}
      />

      <div className="budgetHistoryComponent__expenses">
        <ExpenseComponent
          expenseId="1"
          expenseDate="20.12.2020"
          expenseName="Ziemniaki"
          expenseValue="20"
        />
        <SaveMoneyComponent
          saveMoneyId="1"
          saveMoneyDate="20.12.2020"
          saveMoneyValue="200"
          saveMoneyUserEnd={true}
        />
      </div>
    </div>
  );
}

export default BudgetHistoryComponent
