import React, {useState} from 'react';
import './LayoutView.scss';

import TopComponent from "../../components/topComponent/TopComponent"
import NavComponent from "../../components/navComponent/NavComponent"

const LayoutView = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  return (
    <div className="layoutView">
      <div className="layoutView__top">
        <TopComponent 
          onNotificationClick={() => setShowNotification(true)}
          onAddClick={() => setShowAdd(true)}
        />
      </div>
      <div className="layoutView__nav">
        <NavComponent />
      </div>
      <div className="layoutView__content"></div>
    </div>
  )
}

export default LayoutView;