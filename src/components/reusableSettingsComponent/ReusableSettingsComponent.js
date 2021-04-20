import React from "react"
import './ReusableSettingsComponent.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ReusableSettingsComponent = ({click}) => {
  return (
    <FontAwesomeIcon onClick={click} className="reusableSettingsComponent" icon="cog"/> 
  )
}

export default ReusableSettingsComponent;