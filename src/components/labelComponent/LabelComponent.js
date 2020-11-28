import React from 'react'

import './LabelComponent.scss'

const LabelComponent = (props) => {
  return (
    <label className="labelComponent" htmlFor={props.labelFor}>{props.labelTitle}</label>
  )
}

export default LabelComponent;