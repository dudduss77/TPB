import React from "react";
import "./ExpenseComponent.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExpenseComponent = (props) => {
  return (
    <div className="expenseComponent">
      <div className="expenseComponent__date">{props.expenseDate}</div>
      <div className="expenseComponent__name">{props.expenseName}</div>
      <div className="expenseComponent__price">{props.expenseValue + "zł"}</div>
      {props.expenseEdit && (
        <div className="expenseComponent__icon">
          <FontAwesomeIcon icon="edit" />
        </div>
      )}

      {props.expenseTrash && (
        <div className="expenseComponent__icon">
          <FontAwesomeIcon icon="trash-alt" />
        </div>
      )}
    </div>
  );
};

export default ExpenseComponent;
