import React from 'react';

import {
  Link
} from "react-router-dom";

import './AppSettingsIcon.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AppSettingsIcon = (props) => {
  return (
    <Link to="/appsettings" className="appSettingsIcon">
      <FontAwesomeIcon className="appSettingsIcon__icon" onClick={props.onSettingsClick} icon="cog"/>
    </Link>
  )
}

export default AppSettingsIcon;