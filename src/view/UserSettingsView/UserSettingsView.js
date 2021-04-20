import React, { useState, useEffect } from "react";
import "./UserSettingsView.scss";

import ChangePasswordComponent from "../../components/changePasswordComponent/ChangePasswordComponent";
import ChangeEmailComponent from "../../components/changeEmailComponent/ChangeEmailComponent";
import DeleteAccountComponent from "../../components/deleteAccountComponent/DeleteAccountComponent";
import UserDataComponent from "../../components/userDataComponent/UserDataComponent";

import UserSettingsViewMobile from "../UserSettingsViewMobile/UserSettingsViewMobile";

import { useWindowSize } from "../../customHook/useWindowSize";

const UserSettingsView = () => {
  const [mobile, setMobile] = useState(false);
  const [viewNumber, setViewNumber] = useState(1);

  const size = useWindowSize();

  useEffect(() => {
    if (size.width <= 1230) {
      setMobile(true);
    } else if (size.width > 1230) {
      setMobile(false);
    }
  }, [size.width]);

  const leftColumn = <UserDataComponent />;

  const midColumn = <ChangeEmailComponent />;

  const rightColumn = (
    <>
      <ChangePasswordComponent />
      <DeleteAccountComponent />
    </>
  );
  return (
    <div className="userSettingsView">
      <div className="userSettingsView__wrapper">
        {!mobile && (
          <>
            <div className="userSettingsView__wrapper__left">{leftColumn}</div>
            <div className="userSettingsView__wrapper__mid">{midColumn}</div>
            <div className="userSettingsView__wrapper__right">
              {rightColumn}
            </div>
          </>
        )}

        {mobile && (
          <UserSettingsViewMobile
            view={viewNumber}
            leftColumn={leftColumn}
            midColumn={midColumn}
            rightColumn={rightColumn}
          />
        )}
      </div>
      <div className="userSettingsView__subMenu">
        <div
          onClick={() => setViewNumber(1)}
          className="userSettingsView__subMenu__element"
        >
          1
        </div>
        <div
          onClick={() => setViewNumber(2)}
          className="userSettingsView__subMenu__element"
        >
          2
        </div>
        <div
          onClick={() => setViewNumber(3)}
          className="userSettingsView__subMenu__element"
        >
          3
        </div>
      </div>
    </div>
  );
};

export default UserSettingsView;
