import React from 'react'
import './InputComponent.scss'

const InputComponent = (props) => {


  const getInputValue = (event) => {
    event.preventDefault();
    props.getValue(event.target.value);
  }

  return (
    <div className={`inputComponent inputComponent--${props.orientation} inputComponent--${props.size}`}>
      <label 
        className="inputComponent__label" 
        htmlFor={props.labelFor}
      >
        {props.label}
      </label>
      <input 
        className="inputComponent__input" 
        type={props.type} 
        id={props.labelFor}
        placeholder={props.placeholder}
        onChange={getInputValue}
      />
    </div>
  )
}

export default InputComponent
