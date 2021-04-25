import React from 'react'
import './TextareaComponent.scss'

const TextareaComponent = ({size="auto", label, getValue, initialValue=""}) => {

  const getTextareaValue = (event) => {
    event.preventDefault();
    getValue(event.target.value);
  }
  return (
    <div className={`textareaComponent textareaComponent--${size}`}>
      <label className="textareaComponent__label">
        {label}
      </label>
      <textarea onChange={getTextareaValue} value={initialValue} className="textareaComponent__textarea"></textarea>
    </div>
  )
}

export default TextareaComponent
