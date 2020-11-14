import React from "react"
import './TopComponent.scss'

import LogoComponent from '../logoComponent/LogoComponent'

const TopComponent = (props) => {
  return (
    <div className="topComponent">
    
      <div className="topComponent__logo">
        <LogoComponent/>
      </div>
      <div className="topComponent__notification"></div>
      <div className="topComponent__add"></div>
      
    </div>
  )
}

export default TopComponent