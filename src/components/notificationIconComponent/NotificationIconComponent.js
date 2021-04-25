import React, {useContext} from 'react';
import './NotificationIconComponent.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {AppContext} from '../../context/AppContext'

const NotificationIconComponent = () => {
  const {actionType, appDispatch} = useContext(AppContext)
  return (
    <div onClick={() => appDispatch({type: actionType.showNotifyMenu})} className="notificationIconComponent">
      <FontAwesomeIcon className="notificationIconComponent__icon" icon="bell"/>
    </div>
  )
}

export default NotificationIconComponent;