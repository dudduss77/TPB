import React from 'react'
import './ButtonComponent.scss'

const ButtonComponent = (props) => {
  return (
    <button onClick={props.buttonClick} className="buttonComponent">
      {props.buttonName}
    </button>
  )
}

export default ButtonComponent
