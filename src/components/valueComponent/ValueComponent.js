import React from 'react'
import './ValueComponent.scss'

const ValueComponent = (props) => {
  return (
    <div className="valueComponent">
      {props.moneyValue + "zł"}
    </div>
  )
}

export default ValueComponent;