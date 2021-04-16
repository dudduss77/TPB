import React from 'react'
import './ButtonComponent.scss'

const ButtonComponent = (props) => {
  return (
    <button onClick={props.buttonClick} className={`buttonComponent buttonComponent--${props.size} buttonComponent--${props.align}`}>
      {props.buttonName}
    </button>
  )
}

export default ButtonComponent
