import React from 'react'
import './HamburgerIconComponent.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HamburgerIconComponent = (props) => {
  return (
    <div className="hamburgerIconComponent">
      <FontAwesomeIcon className="hamburgerIconComponent__icon" onClick={props.onHamburgerClick} icon="bars"/>
    </div>
  )
}

export default HamburgerIconComponent;