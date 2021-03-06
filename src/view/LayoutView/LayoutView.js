import React, { useContext, useState } from "react";
import "./LayoutView.scss";

import { useWindowSize } from "../../customHook/useWindowSize";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "../../routeConfig";

//Context
import {AppContext} from '../../context/AppContext'


//Components
import TopComponent from "../../components/topComponent/TopComponent";
import NavComponent from "../../components/navComponent/NavComponent";
import AddComponent from "../../components/addComponent/AddComponent";
import RaportView from '../RaportView/RaportView'
import NotifyComponent from '../../components/notifyComponent/NotifyComponent'


const LayoutView = () => {
  const [showMenu, setShowMenu] = useState(false);
  const size = useWindowSize();

  const {appState} = useContext(AppContext);


  document.documentElement.style.setProperty('--vh', `${size.height *0.01}px`)
  return (
    <div className="layoutView">
    <Router>
      <div className="layoutView__top">
        <TopComponent
          onHamburgerClick={() => setShowMenu(!showMenu)}
        />
      </div>
      
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
      {appState.addEdit.value && (
        <>
        <AddComponent />
        </>
      )}

      {appState.showNotify.value && (
        <NotifyComponent />
      )}
      
        {/* <RaportView/> */}
        
    </div>
  );
};

export default LayoutView;
