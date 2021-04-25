import React from "react";
import "./GoalsWrapperComponent.scss";

import HeaderComponent from "../headerComponent/HeaderComponent";
import GoalComponent from "../goalComponent/GoalComponent";

const GoalsWrapperComponent = ({
  header,
  filter,
  editValue,
  edit,
  trash,
  data,
}) => {
  return (
    <div className="goalsWrapperComponent">
      <HeaderComponent headerTitle={header} />
      {filter && filter}

      <div className="goalsWrapperComponent__goals">
        {data.map((goal) => {
          return (
            <GoalComponent
              goalEditValue={editValue}
              goalEdit={edit}
              goalTrash={trash}

              key={goal.id}
              goalId={goal.id}
              goalTitle={goal.title}
              goalDesc={goal.desc}
              goalStartValue={goal.startValue}
              goalActualValue={goal.actualValue}
              goalEndValue={goal.toValue}
              goalEndDate={goal.endDate}
              goalDone={goal.done}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GoalsWrapperComponent;
