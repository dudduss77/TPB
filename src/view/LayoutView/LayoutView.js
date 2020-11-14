import React from 'react';
import './LayoutView.scss';

import TopComponent from "../../components/topComponent/TopComponent"
import NavComponent from "../../components/navComponent/NavComponent"

const LayoutView = () => {
  return (
    <div className="layoutView">
      <div className="layoutView__top">
        <TopComponent/>
      </div>
      <div className="layoutView__nav">
        <NavComponent />
      </div>
      <div className="layoutView__content"></div>
    </div>
  )
}

export default LayoutView;