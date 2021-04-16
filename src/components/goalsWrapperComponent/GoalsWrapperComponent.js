import React from 'react'
import './GoalsWrapperComponent.scss'

import HeaderComponent from '../headerComponent/HeaderComponent'
import GoalComponent from '../goalComponent/GoalComponent'

const GoalsWrapperComponent = (props) => {
  return (
    <div className="goalsWrapperComponent">
      <HeaderComponent headerTitle={props.header} />
      {props.filter && props.filter}

      <div className="goalsWrapperComponent__goals">
        <GoalComponent
          goalTitle="Kupić samochód"
          goalDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                    euismod facilisis neque, quis finibus ipsum imperdiet a. Sed
                    bibendum orci ornare, eleifend urna sed, tristique nulla. Vivamus
                    eget nisl eu lacus pulvinar semper eget in libero."
          goalActualValue={0}
          goalEndValue={100}
          goalEditValue={props.editValue}
          goalEdit={props.edit}
          goalTrash={props.trash}
        />
      </div>
    </div>
  );
}

export default GoalsWrapperComponent
