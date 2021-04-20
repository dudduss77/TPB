import React from "react";

const DashboardViewMobile = ({ view, weekPlan, taskWrapper, smallBlock, goalWrapper }) => {
  switch (view) {
    case 1:
      return weekPlan;
    case 2:
      return taskWrapper;
    case 3:
      return smallBlock;
    case 4:
      return goalWrapper;
    default:
      return "error";
  }
};

export default DashboardViewMobile
