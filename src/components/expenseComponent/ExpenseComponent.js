import React, { useContext } from "react";
import "./ExpenseComponent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

//Context
import { AppContext } from "../../context/AppContext";
import { ExpenseContext } from "../../context/ExpenseContext";

const ExpenseComponent = ({
  expenseId,
  expenseDate,
  expenseName,
  expenseValue,
  expenseEdit,
  expenseTrash,
}) => {
  const { actionType, appState, appDispatch } = useContext(AppContext);
  const { expenseAction, expenseStatus, expenseDispatch } = useContext(
    ExpenseContext
  );

  const remove = (val) => {
    axios
      .delete(`http://localhost:5000/expense/${val}`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    expenseDispatch({ type: expenseAction.delete, payload: val });
  };
  return (
    <div className="expenseComponent">
      <div className="expenseComponent__date">{expenseDate}</div>
      <div className="expenseComponent__name">{expenseName}</div>
      <div className="expenseComponent__price">{expenseValue + "zł"}</div>
      {expenseEdit && (
        <div
          onClick={() => appDispatch({
            type: actionType.editExpenseMenu,
            payload: expenseId,
          })}
          className="expenseComponent__icon"
        >
          <FontAwesomeIcon icon="edit" />
        </div>
      )}

      {expenseTrash && (
        <div
          onClick={() => remove(expenseId)}
          className="expenseComponent__icon"
        >
          <FontAwesomeIcon icon="trash-alt" />
        </div>
      )}
    </div>
  );
};

export default ExpenseComponent;
