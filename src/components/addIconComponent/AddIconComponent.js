import React from 'react';
import './AddIconComponent.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddIconComponent = (props) => {
  return (
    <div className="addIconComponent">
      <FontAwesomeIcon className="addIconComponent__icon" onClick={props.onAddClick} icon="plus"/>
    </div>
  )
}

export default AddIconComponent;