export const sortFilterActive = (
  goalStatus,
  searchValueActive,
  selectValueActive
) => {
  return goalStatus
    .sort((a, b) => {
      switch (selectValueActive) {
        case "progress-down":
          return a.actualValue < b.actualValue;
        case "progress-up":
          return a.actualValue > b.actualValue;
        case "date-down":
          return a.endDate < b.endDate;
        case "date-up":
          return a.endDate > b.endDate;
        default:
          return a.actualValue < b.actualValue;
      }
    })
    .filter(
      (goal) =>
        goal.done === false &&
        goal.title
          .toLowerCase()
          .search(searchValueActive.toLocaleLowerCase()) !== -1 &&
        goal.title
          .toLowerCase()
          .search(searchValueActive.toLocaleLowerCase()) === 0
    );
};

export const sortFilterHistory = (
  goalStatus,
  unrealizedCheckboxValue,
  selectValueHistory
) => {
  return goalStatus
    .sort((a, b) => {
      switch (selectValueHistory) {
        case "date-down":
          return a.endDate < b.endDate;
        case "date-up":
          return a.endDate > b.endDate;
        default:
          return a.endDate < b.endDate;
      }
    })
    .filter(
      (goal) =>
        goal.done === true &&
        (unrealizedCheckboxValue ? goal.actualValue < goal.toValue : goal)
    );
};
