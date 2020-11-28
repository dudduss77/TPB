import React from 'react'

import './InputComponent.scss'

const InputComponent = (props) => {

  const inputValueChange = (evt) => {
    evt.preventDefault();
    props.onValueChange(evt.target.value);
  }
  return (
    <input onChange={inputValueChange} className="inputComponent" type={props.inputType} name={props.inputName} placeholder={props.inputPlaceholder}/>
  )
}

export default InputComponent;