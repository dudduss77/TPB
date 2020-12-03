import React from "react"
import './ReusableContainerComponent.scss'

const ReusableContainerComponent = (props) => {
  const heightStyle = {
    height: props.isHeightAuto ? 'auto' : ''
  }
  return (
    <div style={heightStyle} className="reusableContainerComponent">
      {props.children}
    </div>   
  )
}

export default ReusableContainerComponent;