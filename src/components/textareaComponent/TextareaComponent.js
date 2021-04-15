import React from 'react'
import './TextareaComponent.scss'

const TextareaComponent = (props) => {

  const getTextareaValue = (event) => {
    event.preventDefault();
    props.getValue(event.target.value);
  }
  return (
    <div className={`textareaComponent textareaComponent--${props.size}`}>
      <label className="textareaComponent__label">
        {props.label}
      </label>
      <textarea onChange={getTextareaValue} className="textareaComponent__textarea"></textarea>
    </div>
  )
}

export default TextareaComponent
