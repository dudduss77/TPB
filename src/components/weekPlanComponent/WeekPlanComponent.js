import React, { useState, useEffect, useContext } from "react";
import "./WeekPlanComponent.scss";
import moment from "moment";
import { useWindowSize } from "../../customHook/useWindowSize";

//Components
import WeekPlanHeader from "../weekPlanHeader/WeekPlanHeader";
import WeekPlanContentWrapper from "../weekPlanContentWrapper/WeekPlanContentWrapper";
import WeekPlanAdd from "../weekPlanAdd/WeekPlanAdd";

//Context
import { AppContext } from "../../context/AppContext";
import { WeekPlanContext } from "../../context/WeekPlanContext";

//Data
import {dayArray} from "../../data/staticData"

const WeekPlanComponent = () => {
  const { actionType, appState, appDispatch } = useContext(AppContext);
  const { weekPlanAction, weekPlanStatus, weekPlanDispatch } = useContext(
    WeekPlanContext
  );

  const [currentHours, setHours] = useState(moment().hours());
  const [currentMinutes, setMinutes] = useState(moment().minutes());
  const [currentSecond, setSecond] = useState(moment().seconds());
  const [mobile, setMobile] = useState(false);
  const [dayNumber, setDayNumber] = useState(moment().days());

  const size = useWindowSize();

  useEffect(() => {
    if (size.width <= 1230) {
      setMobile(true);
    } else if (size.width > 1230) {
      setMobile(false);
    }
  }, [size.width]);

  const updateTime = () => {
    setHours(moment().hours());
    setMinutes(moment().minutes());
    setSecond(moment().seconds());
  };

  useEffect(() => {
    setInterval(
      updateTime,
      (60 - currentMinutes) * 60000 - currentSecond * 1000
    );
  });

  useEffect(() => {
    document.getElementById("test").scrollTop = (currentHours - 6) * 100; //Dodać tutaj zmienną od kiedy się plan zaczyna
  }, [currentHours]);

  useEffect(() => {
    if (dayNumber < 1) {
      setDayNumber(7);
    }
    if (dayNumber > 7) {
      setDayNumber(1);
    }
  }, [dayNumber]);

  return (
    <div className="weekPlanComponent">
      <WeekPlanHeader
        headerTitle="Tygodniowy plan"
        addClick={() =>
          appDispatch({
            type: actionType.addToPlanMenu,
          })
        }
        leftClick={() => setDayNumber(dayNumber - 1)}
        rightClick={() => setDayNumber(dayNumber + 1)}
      />
      <div className="weekPlanComponent__wrapper">
        {!mobile && (
          <>
            <div className="weekPlanComponent__wrapper__headers">
              {dayArray.map((item) => {
                return (
                  <div key={item.dayNumber} className="weekPlanComponent__wrapper__headers__items">
                    {item.dayName}
                  </div>
                );
              })}
            </div>

            <div id="test" className="weekPlanComponent__wrapper__content">
              {dayArray.map((item) => {
                return (
                  <WeekPlanContentWrapper
                    key={item.dayNumber}
                    planHourStart={7}
                    dayNumber={item.dayNumber}
                  />
                );
              })}
            </div>
          </>
        )}

        {mobile && (
          <>
            {/* <div className="weekPlanComponent__wrapper__headers">
              {dayArray.map((item, index) => {
                if (index === dayNumber - 1) {
                  return (
                    <div key={item.dayNumber} className="weekPlanComponent__wrapper__headers__items">
                      {item.dayName}
                    </div>
                  );
                }
              })}
            </div> */}

            {/* <div id="test" className="weekPlanComponent__wrapper__content">
              {dayArray.map((item, index) => {
                if (index === dayNumber - 1) {
                  return (
                    <WeekPlanContentWrapper
                      key={item.dayNumber}
                      planHourStart={7}
                      dayNumber={item.dayNumber}
                    />
                  );
                }
              })}
            </div> */}
          </>
        )}
      </div>

      {appState.planAddEdit.value && <WeekPlanAdd />}
    </div>
  );
};

export default WeekPlanComponent;
