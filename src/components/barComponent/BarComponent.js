import React from 'react';
import './BarComponent.scss';

const BarComponent = (props) => {
  const maxValue = Math.max(props.actualValue, props.endValue)
  const minValue = Math.min(props.actualValue, props.endValue)
  const percentValue = ((minValue * 100) / maxValue).toFixed(2);
  const widthValue = {
    width: percentValue + '%'
  }
  return (
    <div className="barComponent">
      <div className="barComponent__external">
        <div style={widthValue} className="barComponent__external__internal"></div>
      </div>
      <div className="barComponent__value">{percentValue + '%'}</div>
    </div>
  )
}

export default BarComponent;