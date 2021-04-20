import React from "react";
import "./BudgetViewMobile.scss";

const BudgetViewMobile = ({ view, budgetChart, budgetHistory, smallBlock }) => {
  switch (view) {
    case 1:
      return budgetChart;
    case 2:
      return budgetHistory;
    case 3:
      return smallBlock;
    default:
      return "error";
  }
};

export default BudgetViewMobile;
