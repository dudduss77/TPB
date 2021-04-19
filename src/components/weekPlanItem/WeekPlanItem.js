import React from 'react'
import './WeekPlanItem.scss'

const WeekPlanItem = (props) => {

  const style = {
    background: `${props.background}`,
    top: `${props.top}px`,
    left: `${props.left}%`,
    width: `${props.width}%`,
    height: `${props.height}px`
  }

  return (
    <div style={style} className="weekPlanItem">
      
    </div>
  )
}

export default WeekPlanItem
