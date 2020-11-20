import React from 'react'
import './SubMenuComponent.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SubMenuComponent = (props) => {
  return (
    <div onClick={props.onSubMenuClick} className="subMenuComponent">
      <FontAwesomeIcon icon={props.subMenuIcon}/>
    </div>
  )
}

export default SubMenuComponent;