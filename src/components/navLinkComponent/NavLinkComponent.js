import React from 'react'

import {
  Link
} from "react-router-dom";

import './NavLinkComponent.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavLinkComponent = (props) => {
  return (
    <Link to={props.linkPath} className="navLinkComponent">
      <div className="navLinkComponent__icon">
        <FontAwesomeIcon icon={props.iconName} />
      </div>
      <div className="navLinkComponent__linkname">{props.linkName}</div>
    </Link>
  )
}

export default NavLinkComponent;