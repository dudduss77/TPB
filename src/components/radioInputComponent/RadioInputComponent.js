import React from 'react'
import './RadioInputComponent.scss'

const RadioInputComponent = (props) => {
  return (
    <div className="radioInputComponent">
      <input className="radioInputComponent__input" type="radio" id={props.labelFor} name={props.name}/>
      <label className="radioInputComponent__label" htmlFor={props.labelFor}>{props.label}</label>
    </div>
  )
}

export default RadioInputComponent
