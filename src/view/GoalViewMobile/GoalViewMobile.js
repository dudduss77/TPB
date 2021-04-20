import React from 'react'

const GoalViewMobile = ({view, activeGoals, historyGoals, smallBlocks}) => {
  switch(view) {
    case 1:
      return activeGoals;
    case 2:
      return historyGoals;
    case 3:
      return smallBlocks;
    default:
      return "Error";
  }
}

export default GoalViewMobile
