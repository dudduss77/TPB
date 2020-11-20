import React from "react"
import './ReusableContainerComponent.scss'

const ReusableContainerComponent = (props) => {
  return (
    <div className="reusableContainerComponent">
      {props.children}
    </div>   
  )
}

export default ReusableContainerComponent;