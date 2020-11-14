import React from "react"
import './UserComponent.scss'

import userIcon from '../../assets/userIcon.png'

const UserComponent = (props) => {
  return (
    <div className="userComponent">
      <img className="userComponent__avatar" src={userIcon} alt="User Icon"/>
      <div className="userComponent__username">
        {props.userName}
      </div>
    </div>
  )
}

export default UserComponent