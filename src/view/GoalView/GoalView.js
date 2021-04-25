import React, { useState, useEffect, useContext } from "react";
import "./GoalView.scss";
import { useWindowSize } from "../../customHook/useWindowSize";

//Components
import SubMenuComponent from "../../components/subMenuComponent/SubMenuComponent";
import GoalActiveFilter from "../../components/goalActiveFilter/GoalActiveFilter";
import GoalHistoryFilter from "../../components/goalHistoryFilter/GoalHistoryFilter";
import SmallBlock from "../../components/smallBlock/SmallBlock";
import GoalsWrapperComponent from "../../components/goalsWrapperComponent/GoalsWrapperComponent";
import GoalViewMobile from "../GoalViewMobile/GoalViewMobile";

//Context
import { GoalContext } from "../../context/GoalContext";

//SortFilter
import {
  sortFilterActive,
  sortFilterHistory,
} from "../../sortFilterFunctions/sortFilterGoal";

const GoalView = () => {
  const { goalActionType, goalStatus, goalDispatch } = useContext(GoalContext);

  const [mobile, setMobile] = useState(false);
  const [viewNumber, setViewNumber] = useState(1);

  const [activeData, setActiveData] = useState([]);
  const [historyData, setHistoryData] = useState([]);
  const [allGoal, setAllGoal] = useState("");
  const [doneGoal, setDoneGoal] = useState("");

  const [selectValueActive, setSelectValueActive] = useState("progress-down");
  const [searchValueActive, setSearchValueActive] = useState("");

  const [selectValueHistory, setSelectValueHistory] = useState("date-down");
  const [unrealizedCheckboxValue, setUnrealizedCheckboxValue] = useState(false);

  const size = useWindowSize();

  useEffect(() => {
    if (size.width <= 1230) {
      setMobile(true);
    } else if (size.width > 1230) {
      setMobile(false);
    }
  }, [size.width]);

  useEffect(() => {
    setActiveData(
      sortFilterActive(goalStatus, searchValueActive, selectValueActive)
    );
  }, [goalStatus, searchValueActive, selectValueActive]);

  useEffect(() => {
    setHistoryData(
      sortFilterHistory(goalStatus, unrealizedCheckboxValue, selectValueHistory)
    );
  }, [goalStatus, unrealizedCheckboxValue, selectValueHistory]);

  useEffect(() => {
    setAllGoal(goalStatus.length);
    setDoneGoal(
      goalStatus.filter(
        (goal) => goal.done === true && goal.actualValue >= goal.toValue
      ).length
    );
  }, [goalStatus, unrealizedCheckboxValue]);

  const activeGoals = (
    <GoalsWrapperComponent
      header="Aktywne cele"
      filter={
        <GoalActiveFilter
          setSearch={setSearchValueActive}
          setSelect={setSelectValueActive}
          selectInitialValue={selectValueActive}
          searchInitialValue={searchValueActive}
        />
      }
      editValue={true}
      edit={true}
      trash={true}
      data={activeData}
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
          selectInitialValue={selectValueHistory}
        />
      }
      editValue={false}
      edit={false}
      trash={true}
      data={historyData}
    />
  );

  const smallBlocks = (
    <>
      <SmallBlock header="Wszystkich celi" value={allGoal} />
      <SmallBlock header="Ilość zrealizowanych" value={doneGoal} />
    </>
  );

  return (
    <div className="goalView">
      <div className="goalView__wrapper">
        {!mobile && (
          <>
            <div className="goalView__wrapper__active">{activeGoals}</div>
            <div className="goalView__wrapper__history">{historyGoals}</div>
            <div className="goalView__wrapper__allGoals">
              <SmallBlock header="Wszystkich celi" value={allGoal} />
            </div>
            <div className="goalView__wrapper__completGoal">
              <SmallBlock header="Ilość zrealizowanych" value={doneGoal} />
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
