import React from "react"
import './UserComponent.scss'

import {
  Link
} from "react-router-dom";

import userIcon from '../../assets/userIcon.png'

const UserComponent = (props) => {
  return (
    <div className="userComponent">
      <img className="userComponent__avatar" src={userIcon} alt="User Icon"/>
      <Link to="/user" className="userComponent__username">
        {props.userName}
      </Link>
    </div>
  )
}

export default UserComponent