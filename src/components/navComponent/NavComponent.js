import React from "react"
import './NavComponent.scss'

import UserComponent from '../userComponent/UserComponent'

const NavComponent = () => {
  return (
    <div className="navComponent">
      <UserComponent userName="Damian Karbowiak"/>
    </div>
  )
}

export default NavComponent