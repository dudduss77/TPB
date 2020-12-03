import React, {useState, useEffect} from 'react'
import './GoalView.scss'
import "../../globalStyle/wrappers.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ReusableContainerComponent from '../../components/reusableContainerComponent/ReusableContainerComponent'
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import ValueComponent from "../../components/valueComponent/ValueComponent";
import SubMenuComponent from "../../components/subMenuComponent/SubMenuComponent";

import GoalComponent from "../../components/goalComponent/GoalComponent";
import GoalActiveFilter from '../../components/goalActiveFilter/GoalActiveFilter'

import InputComponent from "../../components/inputComponent/InputComponent";
import LabelComponent from "../../components/labelComponent/LabelComponent";
import CheckboxComponent from "../../components/checkboxComponent/CheckboxComponent";
import SelectComponent from "../../components/selectComponent/SelectComponent";

import sortTypeTask from "../../data/sortTypeTask.json";

import { useWindowSize } from "../../customHook/useWindowSize";



const GoalView = () => {
  const [selectValueActive, setSelectValueActive] = useState("");
  const [searchValueActive, setSearchValueActive] = useState("");

  const [showFilterHistory, setShowFilteHistory] = useState(false);
  const [selectValueHistory, setSelectValueHistory] = useState("");
  const [unrealizedCheckboxValue, setunrealizedCheckboxValue] = useState(false);

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
            <HeaderComponent headerTitle="Aktywne cele"/>
            <GoalActiveFilter 
              setSearch={setSelectValueActive}
              setSelect={setSearchValueActive}
            />
              {/* <div className="itemsWrapper__filter">
                <div className="itemsWrapper__filter__header">
                  <div className="itemsWrapper__filter__header__title">
                    Filtry
                  </div>
                  <FontAwesomeIcon
                    onClick={() => setShowFilteAvtive(!showFilterActive)}
                    className="itemsWrapper__filter__header__icon"
                    icon={showFilterActive ? "angle-up" : "angle-down"}
                  />
                </div>
                {showFilterActive && (
                    <>
                      <div className="itemsWrapper__filter__inputs">
                        <LabelComponent labelTitle="Szukaj" labelFor="searchActive" />
                          <InputComponent
                            onValueChange={(val) => setSearchValueActive(val)}
                            inputType="text"
                            inputName="searchActive"
                            inputPlaceholder="Szukaj"
                          />
                      </div>
                      <div className="itemsWrapper__filter__inputs">
                        <SelectComponent
                          optionsData={sortTypeTask}
                          onValueChange={(val) => setSelectValueActive(val)}
                        />
                      </div>
                    </>
                  )}
              </div> */}
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
            <HeaderComponent headerTitle="Historia celi"/>
            <div className="itemsWrapper">
              <div className="itemsWrapper__filter">
                <div className="itemsWrapper__filter__header">
                  <div className="itemsWrapper__filter__header__title">
                    Filtry
                  </div>
                  <FontAwesomeIcon
                    onClick={() => setShowFilteHistory(!showFilterHistory)}
                    className="itemsWrapper__filter__header__icon"
                    icon={showFilterHistory ? "angle-up" : "angle-down"}
                  />
                </div>
                {showFilterHistory && (
                    <>
                      <div className="itemsWrapper__filter__inputs">
                        <CheckboxComponent
                          checkboxName="unrealized"
                          checkboxTitle="Niezrealizowane"
                          onValueChange={() =>
                            setunrealizedCheckboxValue(!unrealizedCheckboxValue)
                          }
                        />
                      </div>
                      <div className="itemsWrapper__filter__inputs">
                        <SelectComponent
                          optionsData={sortTypeTask}
                          onValueChange={(val) => setSelectValueHistory(val)}
                        />
                      </div>
                    </>
                  )}
              </div>
                <div className="itemsWrapper__items">
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
            </div>
          </ReusableContainerComponent>
        </div>
        <div className="goalView__wrapper__allGoals">
          <ReusableContainerComponent>
            <HeaderComponent headerTitle="Wszystkich celi"/>
            <ValueComponent moneyValue="3"/>
          </ReusableContainerComponent>
        </div>
        <div className="goalView__wrapper__completGoal">
          <ReusableContainerComponent>
            <HeaderComponent headerTitle="Ilość zrealizowanych"/>
            <ValueComponent moneyValue="3"/>
          </ReusableContainerComponent>
        </div>
        <div className="goalView__wrapper__moneyGoal">
          <ReusableContainerComponent>
            <HeaderComponent headerTitle="Ile przeznaczono na cele"/>
            <ValueComponent moneyValue="3"/>
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
  )
}

export default GoalView
