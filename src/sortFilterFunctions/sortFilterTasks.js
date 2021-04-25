export const sortFilterActive = (
  taskStatus,
  searchActiveValue,
  checkboxPriorityValue,
  selectActiveValue
) => {
  return taskStatus
    .sort((a, b) => {
      switch (selectActiveValue) {
        case "name-up":
          return a.title > b.title;
        case "name-down":
          return a.title < b.title;
        case "date-up":
          return a.date > b.date;
        case "date-down":
          return a.date < b.date;
        default:
          return a.title > b.title;
      }
    })
    .filter(
      (task) =>
        task.status === null &&
        task.title
          .toLowerCase()
          .search(searchActiveValue.toLocaleLowerCase()) !== -1 &&
        task.title
          .toLowerCase()
          .search(searchActiveValue.toLocaleLowerCase()) === 0 &&
        (checkboxPriorityValue ? task.priority === checkboxPriorityValue : task)
    );
};

export const sortFilterHistory = (
  taskStatus,
  checkboxNotDoneValue,
  dateStartValue,
  dateEndValue,
  selectHistoryValue
) => {
  return taskStatus
    .sort((a, b) => {
      switch (selectHistoryValue) {
        case "name-up":
          return a.title > b.title;
        case "name-down":
          return a.title < b.title;
        case "date-up":
          return a.date > b.date;
        case "date-down":
          return a.date < b.date;
        default:
          return a.title > b.title;
      }
    })
    .filter(
      (task) =>
        task.status !== null &&
        (checkboxNotDoneValue ? task.status === false : task) &&
        (dateStartValue ? task.date >= dateStartValue : task) &&
        (dateEndValue ? task.date <= dateEndValue : task)
    );
};
