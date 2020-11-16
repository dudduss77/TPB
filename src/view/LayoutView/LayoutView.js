import React, { useState } from "react";
import "./LayoutView.scss";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "../../routeConfig";

import TopComponent from "../../components/topComponent/TopComponent";
import NavComponent from "../../components/navComponent/NavComponent";

const LayoutView = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="layoutView">
      <div className="layoutView__top">
        <TopComponent
          onNotificationClick={() => setShowNotification(true)}
          onAddClick={() => setShowAdd(true)}
          onHamburgerClick={() => setShowMenu(!showMenu)}
        />
      </div>
      <Router>
        <div className="layoutView__nav">
          <NavComponent />
        </div>

        <div
          onClick={() => setShowMenu(!showMenu)}
          className={`layoutView__navMobile ${
            showMenu ? "inTransform" : "outTransform"
          }`}
        >
          <div
            className={`layoutView__navMobile__menu ${
              showMenu ? "showMenuAnimation" : "unshowMenuAnimation"
            }`}
          >
            <NavComponent />
          </div>
          <div
            className={`layoutView__navMobile__background ${
              showMenu ? "fadeIn" : "fadeOut"
            }`}
          ></div>
        </div>

        <div className="layoutView__content">
          <Switch>
            {routes.map((route) => (
              <Route
                exact
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default LayoutView;
