export const sortBudget = (
  selectValue,
  expenseStatus,
  dateStartValue,
  dateEndValue
) => {
  return expenseStatus
    .sort((a, b) => {
      switch (selectValue) {
        case "date-up":
          return a.date > b.date;
        case "date-down":
          return a.date < b.date;
        case "cost-up":
          return a.cost > b.cost;
        case "cost-down":
          return a.cost < b.cost;
        default:
          return a.date < b.date;
      }
    })
    .filter(
      (expense) =>
        (dateStartValue ? expense.date >= dateStartValue : expense) &&
        (dateEndValue ? expense.date <= dateEndValue : expense)
    );
};
