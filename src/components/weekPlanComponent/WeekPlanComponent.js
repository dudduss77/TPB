import React from "react";
import "./WeekPlanComponent.scss";

import HeaderComponent from "../headerComponent/HeaderComponent";
import WeekPlanItem from "../weekPlanItem/WeekPlanItem";

import tempData from "../../data/tempPlanData.json";
import tempData2 from "../../data/tempPlanData2.json";

const createHours = () => {
  const items = [];
  for (let i = 1; i <= 24; i++) {
    items.push(<div className="hoursBlock">{i}:00</div>);
  }
  return items;
};

const WeekPlanComponent = () => {
  // Pobrać dzień
  // Pobrać godzinę startu i końca
  // Zrobić różnicę godziny końca od startu i wyliczyć ile zajmuje blok
  // Sprawdzić czy ma sąsiadów (liczba sąsiadów)

  const hoursToFloat = (value, planHourStart) => {
    let temp;
    temp = value.split(":");
    temp[0] = temp[0] - planHourStart;
    temp[1] =
      temp[1] / 60 === 0 ? 0 : parseFloat((temp[1] / 60).toString().slice(1));
    temp = temp[0] + temp[1];
    return temp;
  };

  const createPlan = (dayNumber, planHourStart, data) => {
    let modData;
    let items = [];
    modData = data.filter((value) => value.day === dayNumber);

    for(let i = 0; i < modData.length; i++) {
      let itemsLen = modData[i].items.length;
      for(let j = 0; j < itemsLen; j++) {
        let hoursStart = modData[i].items[j].hoursStart;
        let hoursEnd = modData[i].items[j].hoursEnd;

        hoursStart = hoursToFloat(hoursStart, planHourStart);
        hoursEnd = hoursToFloat(hoursEnd, planHourStart);

        let hoursDiff = hoursEnd - hoursStart; 

        items.push(
          <WeekPlanItem
            key={modData[i].items[j].id}
            background={modData[i].items[j].color}
            top={hoursStart*50}
            left="0"
            width="100"
            height={hoursDiff * 50}
          />
        );
      } 
    }

    console.log(items);
    return items;
  };
  return (
    <div className="weekPlanComponent">
      <HeaderComponent headerTitle="Tygodniowy plan" />
      <div className="weekPlanComponent__wrapper">
        <div className="weekPlanComponent__wrapper__headers">
          <div className="weekPlanComponent__wrapper__headers__items">
            Poniedzałek
          </div>
          <div className="weekPlanComponent__wrapper__headers__items">
            Wtorek
          </div>
          <div className="weekPlanComponent__wrapper__headers__items">
            Środa
          </div>
          <div className="weekPlanComponent__wrapper__headers__items">
            Czwartek
          </div>
          <div className="weekPlanComponent__wrapper__headers__items">
            Piątek
          </div>
          <div className="weekPlanComponent__wrapper__headers__items">
            Sobota
          </div>
          <div className="weekPlanComponent__wrapper__headers__items">
            Niedziela
          </div>
        </div>
        <div className="weekPlanComponent__wrapper__content">
          <div className="weekPlanComponent__wrapper__content__items">
            <div className="contentWrapper">
              {createPlan(1, 1, tempData2)}

              {/* <WeekPlanItem
                background="#333"
                top="50"
                left="0"
                width="100"
                height="50"
              /> */}


            </div>
            <div className="hoursWrapper">{createHours()}</div>
          </div>
          <div className="weekPlanComponent__wrapper__content__items">
          <div className="contentWrapper">
              {createPlan(2, 1, tempData2)}

              {/* <WeekPlanItem
                background="#333"
                top="50"
                left="0"
                width="100"
                height="50"
              /> */}


            </div>
            <div className="hoursWrapper">{createHours()}</div>
          </div>
          <div className="weekPlanComponent__wrapper__content__items"></div>
          <div className="weekPlanComponent__wrapper__content__items"></div>
          <div className="weekPlanComponent__wrapper__content__items"></div>
          <div className="weekPlanComponent__wrapper__content__items"></div>
          <div className="weekPlanComponent__wrapper__content__items"></div>
        </div>
      </div>
    </div>
  );
};

export default WeekPlanComponent;
