import React from "react"
import './NavComponent.scss'

import UserComponent from '../userComponent/UserComponent'
import LinksWrapperComponent from '../linksWrapperComponent/LinksWrapperComponent'
import SingOutComponent from '../singOutComponent/SingOutComponent'

const NavComponent = () => {
  return (
    <div className="navComponent">
      <UserComponent userName="Damian Karbowiak"/>
      <LinksWrapperComponent />
      <SingOutComponent />
    </div>
  )
}

export default NavComponent