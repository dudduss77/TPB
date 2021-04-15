import React from 'react'
import './SmallBlock.scss'

import HeaderComponent from '../headerComponent/HeaderComponent'

const SmallBlock = (props) => {
  return (
    <div className="smallBlock">
      <HeaderComponent
        headerTitle={props.header}
      />
      <div className="smallBlock__value">
        {`${props.value}${props.currency ? 'zł' : ''}`}
      </div>
    </div>
  )
}

export default SmallBlock;
