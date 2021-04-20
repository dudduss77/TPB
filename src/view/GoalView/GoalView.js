import React, { useState, useEffect } from "react";
import "./GoalView.scss";
import "../../globalStyle/wrappers.scss";

import { useWindowSize } from "../../customHook/useWindowSize";

import SubMenuComponent from "../../components/subMenuComponent/SubMenuComponent";
import GoalActiveFilter from "../../components/goalActiveFilter/GoalActiveFilter";
import GoalHistoryFilter from "../../components/goalHistoryFilter/GoalHistoryFilter";
import SmallBlock from "../../components/smallBlock/SmallBlock";
import GoalsWrapperComponent from "../../components/goalsWrapperComponent/GoalsWrapperComponent";
import GoalViewMobile from "../GoalViewMobile/GoalViewMobile";

const GoalView = () => {
  const [mobile, setMobile] = useState(false);
  const [viewNumber, setViewNumber] = useState(1);

  const [selectValueActive, setSelectValueActive] = useState("");
  const [searchValueActive, setSearchValueActive] = useState("");

  const [selectValueHistory, setSelectValueHistory] = useState("");
  const [unrealizedCheckboxValue, setUnrealizedCheckboxValue] = useState(false);

  const size = useWindowSize();

  useEffect(() => {
    if (size.width <= 1230) {
      setMobile(true);
    } else if (size.width > 1230) {
      setMobile(false);
    }
  }, [size.width]);


  const activeGoals = (
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
  );

  const historyGoals = (
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
  );

  const smallBlocks = (
    <>
      <SmallBlock header="Wszystkich celi" value="3" />
      <SmallBlock header="Ilość zrealizowanych" value="3" />
      <SmallBlock header="Ile przeznaczono na cele" value="3" currency={true} />
    </>
  );

  return (
    <div className="goalView">
      <div className="goalView__wrapper">
        {!mobile && (
          <>
            <div className="goalView__wrapper__active">
            {activeGoals}
              {/* <GoalsWrapperComponent
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
              /> */}
            </div>
            <div className="goalView__wrapper__history">
              {historyGoals}
              {/* <GoalsWrapperComponent
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
              /> */}
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
          </>
        )}

        {mobile && (
          <GoalViewMobile
            view={viewNumber}
            activeGoals={activeGoals}
            historyGoals={historyGoals}
            smallBlocks={smallBlocks}
          />
        )}
      </div>
      <div className="goalView__subMenu">
        <SubMenuComponent
          onSubMenuClick={() => setViewNumber(1)}
          subMenuIcon="bullseye"
        />
        <SubMenuComponent
          onSubMenuClick={() => setViewNumber(2)}
          subMenuIcon="history"
        />
        <SubMenuComponent
          onSubMenuClick={() => setViewNumber(3)}
          subMenuIcon="info"
        />
      </div>
    </div>
  );
};

export default GoalView;
