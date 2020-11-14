import React from 'react'
import './NavLinkComponent.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavLinkComponent = (props) => {
  return (
    <div className="navLinkComponent">
      <div className="navLinkComponent__icon">
        <FontAwesomeIcon icon={props.iconName} />
      </div>
      <div className="navLinkComponent__linkname">{props.linkName}</div>
    </div>
  )
}

export default NavLinkComponent;