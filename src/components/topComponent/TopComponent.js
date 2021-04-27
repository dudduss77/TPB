import React, { useContext } from "react";
import "./TopComponent.scss";

//Components
import LogoComponent from "../logoComponent/LogoComponent";
import NotificationIconComponent from "../notificationIconComponent/NotificationIconComponent";
import AddIconComponent from "../addIconComponent/AddIconComponent";
import HamburgerIconComponent from "../hamburgerIconComponent/HamburgerIconComponent";
import AppSettingsIcon from "../appSettingsIcon/AppSettingsIcon";

//Context
import { UserContext } from "../../context/UserContext";

const TopComponent = ({
  onSettingsClick,
  onNotificationClick,
  onHamburgerClick,
}) => {
  const { userAction, userStatus, userDispatch } = useContext(UserContext);

  return (
    <div className="topComponent">
      <div className="topComponent__logo">
        <LogoComponent />
      </div>
      <div className="topComponent__empty"></div>
      <div className="topComponent__settings">
        <AppSettingsIcon onSettingsClick={onSettingsClick} />
      </div>
      {(userStatus.taskNotify ||
        userStatus.expenseNotify ||
        userStatus.goalNotify) && (
        <div className="topComponent__notification">
          <NotificationIconComponent
            onNotificationClick={onNotificationClick}
          />
        </div>
      )}

      <div className="topComponent__add">
        <AddIconComponent />
      </div>
      <div className="topComponent__hamburger">
        <HamburgerIconComponent onHamburgerClick={onHamburgerClick} />
      </div>
    </div>
  );
};

export default TopComponent;
