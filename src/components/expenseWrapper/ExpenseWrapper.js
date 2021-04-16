import React from "react";
import "./ExpenseWrapper.scss";

import HeaderComponent from "../headerComponent/HeaderComponent";
import ExpenseComponent from "../expenseComponent/ExpenseComponent";

const ExpenseWrapper = (props) => {
  return (
    <div className="expenseWrapper">
      <HeaderComponent headerTitle={props.header} />
      <div className="expenseWrapper__wrapper">
        <ExpenseComponent
          expenseEdit={props.edit}
          expenseTrash={props.trash}
          expenseDate="20.12.2020"
          expenseName="Ziemniaki"
          expenseValue="20"
        />
      </div>
    </div>
  );
};

export default ExpenseWrapper;
