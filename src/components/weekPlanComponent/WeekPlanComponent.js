import React, { useState, useEffect } from "react";
import "./WeekPlanComponent.scss";

import moment from "moment";

import { useWindowSize } from "../../customHook/useWindowSize";

import WeekPlanHeader from "../weekPlanHeader/WeekPlanHeader";
import WeekPlanContentWrapper from "../weekPlanContentWrapper/WeekPlanContentWrapper";
import WeekPlanAdd from "../weekPlanAdd/WeekPlanAdd";

import tempData2 from "../../data/tempPlanData2.json";

const dayArray = [
  {
    dayNumber: 1,
    dayName: "Poniedziałek",
  },
  {
    dayNumber: 2,
    dayName: "Wtorek",
  },
  {
    dayNumber: 3,
    dayName: "Środa",
  },
  {
    dayNumber: 4,
    dayName: "Czwartek",
  },
  {
    dayNumber: 5,
    dayName: "Piątek",
  },
  {
    dayNumber: 6,
    dayName: "Sobota",
  },
  {
    dayNumber: 7,
    dayName: "Niedziela",
  },
];

const WeekPlanComponent = () => {
  const [currentHours, setHours] = useState(moment().hours());
  const [currentMinutes, setMinutes] = useState(moment().minutes());
  const [currentSecond, setSecond] = useState(moment().seconds());

  const [showAdd, setShowAdd] = useState(false);

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
    if(dayNumber < 1) {
      setDayNumber(7)
    }
    if(dayNumber > 7) {
      setDayNumber(1)
    }
  }, [dayNumber])

  return (
    <div className="weekPlanComponent">
      <WeekPlanHeader
        headerTitle="Tygodniowy plan"
        addClick={() => setShowAdd(true)}
        leftClick={() => setDayNumber(dayNumber - 1)}
        rightClick={() => setDayNumber(dayNumber + 1)}
      />
      <div className="weekPlanComponent__wrapper">
        {!mobile && (
          <>
            <div className="weekPlanComponent__wrapper__headers">
              {dayArray.map((item) => {
                return (
                  <div className="weekPlanComponent__wrapper__headers__items">
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
                    data={tempData2}
                  />
                );
              })}
            </div>
          </>
        )}

        {mobile && (
          <>
            <div className="weekPlanComponent__wrapper__headers">
              {dayArray.map((item, index) => {
                if (index === dayNumber - 1) {
                  return (
                    <div className="weekPlanComponent__wrapper__headers__items">
                      {item.dayName}
                    </div>
                  );
                }
              })}
            </div>

            <div id="test" className="weekPlanComponent__wrapper__content">
              {dayArray.map((item, index) => {
                if (index === dayNumber - 1) {
                  return (
                    <WeekPlanContentWrapper
                      key={item.dayNumber}
                      planHourStart={7}
                      dayNumber={item.dayNumber}
                      data={tempData2}
                    />
                  );
                }
              })}
            </div>
          </>
        )}
      </div>

      {showAdd && <WeekPlanAdd onClick={() => setShowAdd(false)} />}
    </div>
  );
};

export default WeekPlanComponent;
