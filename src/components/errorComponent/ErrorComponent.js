import React from 'react'
import './ErrorComponent.scss'

const ErrorComponent = ({errorMsg}) => {
  return (
    <div className="errorComponent">
      {errorMsg}
    </div>
  )
}

export default ErrorComponent
