import React, {useState, useEffect} from "react";
import "./UserSettingsView.scss";

import ChangePasswordComponent from "../../components/changePasswordComponent/ChangePasswordComponent";
import ChangeEmailComponent from "../../components/changeEmailComponent/ChangeEmailComponent";
import DeleteAccountComponent from "../../components/deleteAccountComponent/DeleteAccountComponent";
import UserDataComponent from "../../components/userDataComponent/UserDataComponent";

import { useWindowSize } from "../../customHook/useWindowSize";

const UserSettingsView = () => {

  const [transformValue, setTransformValue] = useState(0);
  const size = useWindowSize();

  const trasnformSettings = {
    transform: "translateX(-" + transformValue + "vw)",
    transitionDuration: "2s",
  };

  useEffect(() => {
    if (size.width <= 1230) {
      setTransformValue(0);
    } else if (size.width > 1230) {
      setTransformValue(0);
    }
  }, [size.width]);
  return (
    <div className="userSettingsView">
      <div className="userSettingsView__wrapper" style={trasnformSettings}>
        <div className="userSettingsView__wrapper__left">
          <UserDataComponent />
          <DeleteAccountComponent />
        </div>
        <div className="userSettingsView__wrapper__mid">
          <ChangeEmailComponent />
        </div>
        <div className="userSettingsView__wrapper__right">
          <ChangePasswordComponent />
        </div>
      </div>
      <div className="userSettingsView__subMenu">
        <div onClick={() => setTransformValue(0)} className="userSettingsView__subMenu__element">1</div>
        <div onClick={() => setTransformValue(100)} className="userSettingsView__subMenu__element">2</div>
        <div onClick={() => setTransformValue(200)} className="userSettingsView__subMenu__element">3</div>
      </div>
    </div>
  );
};

export default UserSettingsView;
