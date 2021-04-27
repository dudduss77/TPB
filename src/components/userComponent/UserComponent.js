import React, {useContext} from "react"
import './UserComponent.scss'

import {
  Link
} from "react-router-dom";

//Context
import { UserContext } from "../../context/UserContext";

//Assets
import userIcon from '../../assets/userIcon.png'

const UserComponent = () => {
  const { userAction, userStatus, userDispatch } = useContext(UserContext);

  return (
    <div className="userComponent">
      <img className="userComponent__avatar" src={userIcon} alt="User Icon"/>
      <Link to="/user" className="userComponent__username">
        {userStatus.name + " " + userStatus.surname}
      </Link>
    </div>
  )
}

export default UserComponent