import React, { useState, useEffect } from "react";
import "./GoalView.scss";
import "../../globalStyle/wrappers.scss";

import { useWindowSize } from "../../customHook/useWindowSize";

import ReusableContainerComponent from "../../components/reusableContainerComponent/ReusableContainerComponent";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import ValueComponent from "../../components/valueComponent/ValueComponent";
import SubMenuComponent from "../../components/subMenuComponent/SubMenuComponent";

import GoalComponent from "../../components/goalComponent/GoalComponent";
import GoalActiveFilter from "../../components/goalActiveFilter/GoalActiveFilter";
import GoalHistoryFilter from "../../components/goalHistoryFilter/GoalHistoryFilter";


const GoalView = () => {
  const [selectValueActive, setSelectValueActive] = useState("");
  const [searchValueActive, setSearchValueActive] = useState("");

  const [selectValueHistory, setSelectValueHistory] = useState("");
  const [unrealizedCheckboxValue, setUnrealizedCheckboxValue] = useState(false);

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
    <div className="goalView">
      <div className="goalView__wrapper" style={trasnformSettings}>
        <div className="goalView__wrapper__active">
          <ReusableContainerComponent>
            <HeaderComponent headerTitle="Aktywne cele" />
            <GoalActiveFilter
              setSearch={setSelectValueActive}
              setSelect={setSearchValueActive}
            />
            <div className="itemsWrapperTwo">
              <GoalComponent
                goalTitle="Kupić samochód"
                goalDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                    euismod facilisis neque, quis finibus ipsum imperdiet a. Sed
                    bibendum orci ornare, eleifend urna sed, tristique nulla. Vivamus
                    eget nisl eu lacus pulvinar semper eget in libero."
                goalActualValue={0}
                goalEndValue={100}
                goalEdit={true}
                goalHistory={false}
              />
            </div>
          </ReusableContainerComponent>
        </div>
        <div className="goalView__wrapper__history">
          <ReusableContainerComponent>
            <HeaderComponent headerTitle="Historia celi" />
            <GoalHistoryFilter 
              setUnrealized={() => setUnrealizedCheckboxValue(!unrealizedCheckboxValue)}
              setSelect={setSelectValueHistory}
            />
            <div className="itemsWrapperTwo">
              <GoalComponent
                goalTitle="Kupić samochód"
                goalDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                    euismod facilisis neque, quis finibus ipsum imperdiet a. Sed
                    bibendum orci ornare, eleifend urna sed, tristique nulla. Vivamus
                    eget nisl eu lacus pulvinar semper eget in libero."
                goalActualValue={0}
                goalEndValue={100}
                goalEdit={false}
                goalHistory={true}
              />
            </div>
          </ReusableContainerComponent>
        </div>
        <div className="goalView__wrapper__allGoals">
          <ReusableContainerComponent>
            <HeaderComponent headerTitle="Wszystkich celi" />
            <ValueComponent moneyValue="3" />
          </ReusableContainerComponent>
        </div>
        <div className="goalView__wrapper__completGoal">
          <ReusableContainerComponent>
            <HeaderComponent headerTitle="Ilość zrealizowanych" />
            <ValueComponent moneyValue="3" />
          </ReusableContainerComponent>
        </div>
        <div className="goalView__wrapper__moneyGoal">
          <ReusableContainerComponent>
            <HeaderComponent headerTitle="Ile przeznaczono na cele" />
            <ValueComponent moneyValue="3" />
          </ReusableContainerComponent>
        </div>
      </div>
      <div className="goalView__subMenu">
        <SubMenuComponent
          onSubMenuClick={() => setTransformValue(0)}
          subMenuIcon="bullseye"
        />
        <SubMenuComponent
          onSubMenuClick={() => setTransformValue(100)}
          subMenuIcon="history"
        />
        <SubMenuComponent
          onSubMenuClick={() => setTransformValue(200)}
          subMenuIcon="info"
        />
      </div>
    </div>
  );
};

export default GoalView;
