import React from 'react';
import './NotificationIconComponent.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NotificationIconComponent = (props) => {
  return (
    <div className="notificationIconComponent">
      <FontAwesomeIcon className="notificationIconComponent__icon" onClick={props.onNotificationClick} icon="bell"/>
    </div>
  )
}

export default NotificationIconComponent;