import React, {useState} from 'react';
import './LayoutView.scss';

import DashBoardView from '../DashboardView/DashboardView'
import PlansAndTasksView from '../PlansAndTasksView/PlansAndTasksView'


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {routes} from '../../routeConfig'

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
      <div className="layoutView__content">
        <Router>
          {routes.map((route) => (
            <Route exact key={route.path} path={route.path} component={route.component} />
          ))}
        </Router>
      </div>
    </div>
  )
}

export default LayoutView;