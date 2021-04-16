import React, { useState, useEffect } from "react";
import "./GoalView.scss";
import "../../globalStyle/wrappers.scss";

import { useWindowSize } from "../../customHook/useWindowSize";

import SubMenuComponent from "../../components/subMenuComponent/SubMenuComponent";

import GoalActiveFilter from "../../components/goalActiveFilter/GoalActiveFilter";
import GoalHistoryFilter from "../../components/goalHistoryFilter/GoalHistoryFilter";

import SmallBlock from '../../components/smallBlock/SmallBlock'
import GoalsWrapperComponent from '../../components/goalsWrapperComponent/GoalsWrapperComponent'


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
          <GoalsWrapperComponent
            header="Aktywne cele"
            filter={
              <GoalActiveFilter
                setSearch={setSelectValueActive}
                setSelect={setSearchValueActive}
              />
            }
            editValue={true}
            edit={true}
            trash={true}
          />
        </div>
        <div className="goalView__wrapper__history">
          <GoalsWrapperComponent
            header="Historia"
            filter={
              <GoalHistoryFilter
                setUnrealized={() =>
                  setUnrealizedCheckboxValue(!unrealizedCheckboxValue)
                }
                setSelect={setSelectValueHistory}
              />
            }
            editValue={false}
            edit={false}
            trash={true}
          />
        </div>
        <div className="goalView__wrapper__allGoals">
          <SmallBlock header="Wszystkich celi" value="3" />
        </div>
        <div className="goalView__wrapper__completGoal">
          <SmallBlock header="Ilość zrealizowanych" value="3" />
        </div>
        <div className="goalView__wrapper__moneyGoal">
          <SmallBlock
            header="Ile przeznaczono na cele"
            value="3"
            currency={true}
          />
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
