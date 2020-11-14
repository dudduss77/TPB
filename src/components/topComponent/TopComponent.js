import React from "react"
import './TopComponent.scss'

import LogoComponent from '../logoComponent/LogoComponent'
import NotificationIconComponent from '../notificationIconComponent/NotificationIconComponent'
import AddIconComponent from '../addIconComponent/AddIconComponent'

const TopComponent = (props) => {
  return (
    <div className="topComponent">

      <div className="topComponent__logo">
        <LogoComponent/>
      </div>
      <div className="topComponent__notification">
        <NotificationIconComponent onNotificationClick={props.onNotificationClick} />
      </div>
      <div className="topComponent__add">
        <AddIconComponent onAddClick={props.onAddClick}/>
      </div>
      
    </div>
  )
}

export default TopComponent