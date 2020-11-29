import React, {useState, useEffect} from 'react'
import './BudgetView.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ReusableContainerComponent from '../../components/reusableContainerComponent/ReusableContainerComponent'
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import ReusableSettingsComponent from "../../components/reusableSettingsComponent/ReusableSettingsComponent";
import ValueComponent from "../../components/valueComponent/ValueComponent";

import ExpenseComponent from "../../components/expenseComponent/ExpenseComponent";
import SaveMoneyComponent from "../../components/saveMoneyComponent/SaveMoneyComponent";

import SubMenuComponent from "../../components/subMenuComponent/SubMenuComponent";

import InputComponent from "../../components/inputComponent/InputComponent";
import LabelComponent from "../../components/labelComponent/LabelComponent";
import CheckboxComponent from "../../components/checkboxComponent/CheckboxComponent";
import SelectComponent from "../../components/selectComponent/SelectComponent";

import sortTypeTask from "../../data/sortTypeTask.json";

import { useWindowSize } from "../../customHook/useWindowSize";


const BudgetView = () => {
  const [showFilter, setShowFilter] = useState(false);

  const [selectValue, setSelectValue] = useState("");
  const [dateStartValue, setDateStartValue] = useState();
  const [dateEndValue, setDateEndValue] = useState();
  const [checkboxValue, setCheckboxValue] = useState(false);
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
    <div className="budgetView">
      <div className="budgetView__wrapper" style={trasnformSettings}>
        <div className="budgetView__wrapper__chart">
          <ReusableContainerComponent>
            <HeaderComponent headerTitle="Wykres"/>

          </ReusableContainerComponent>
        </div>
        <div className="budgetView__wrapper__history">
        <ReusableContainerComponent>
            <HeaderComponent headerTitle="Historia"/>
            <div className="itemsWrapper">
            <div className="itemsWrapper__filter">
                  <div className="itemsWrapper__filter__header">
                    <div className="itemsWrapper__filter__header__title">
                      Filtry
                    </div>
                    <FontAwesomeIcon
                      onClick={() => setShowFilter(!showFilter)}
                      className="itemsWrapper__filter__header__icon"
                      icon={showFilter ? "angle-up" : "angle-down"}
                    />
                  </div>
                  {showFilter && (
                    <>
                      <div className="itemsWrapper__filter__inputs">
                        <LabelComponent labelTitle="Od" labelFor="dateStart" />
                          <InputComponent
                            onValueChange={(val) => setDateStartValue(val)}
                            inputType="date"
                            inputName="dateStart"
                            inputPlaceholder="Od daty"
                          />
                          <LabelComponent labelTitle="Do" labelFor="dateEnd" />
                          <InputComponent
                            onValueChange={(val) => setDateEndValue(val)}
                            inputType="date"
                            inputName="dateEnd"
                            inputPlaceholder="Do daty"
                          />
                          <CheckboxComponent
                            checkboxName="notDone"
                            checkboxTitle="Oszczędności"
                            onValueChange={() =>
                              setCheckboxValue(!checkboxValue)
                            }
                        />
                      </div>
                      <div className="itemsWrapper__filter__inputs">
                        <SelectComponent
                          optionsData={sortTypeTask}
                          onValueChange={(val) => setSelectValue(val)}
                        />
                      </div>
                    </>
                  )}
                </div>

              <div className="itemsWrapper__items">
                <ExpenseComponent
                  expenseId="1"
                  expenseDate="20.12.2020"
                  expenseName="Ziemniaki"
                  expenseValue="20"
                  
                />
                <SaveMoneyComponent
                  saveMoneyId="1"
                  saveMoneyDate="20.12.2020"
                  saveMoneyValue="200"
                  saveMoneyUserEnd={true}
                />
              </div>
            </div>
            
          </ReusableContainerComponent>
        </div>
        <div className="budgetView__wrapper__sumExpense">
        <ReusableContainerComponent>
            <HeaderComponent headerTitle="Suma wydatków"/>
            <ValueComponent moneyValue="1000"/>
          </ReusableContainerComponent>
        </div>
        <div className="budgetView__wrapper__saveMoney">
        <ReusableContainerComponent>
            <HeaderComponent 
              headerTitle="Oszczędności"
              settingsComponent={<ReusableSettingsComponent/>}
            />
            <ValueComponent moneyValue="1000"/>
          </ReusableContainerComponent>
        </div>
        <div className="budgetView__wrapper__yourBudget">
        <ReusableContainerComponent>
            <HeaderComponent 
              headerTitle="Budżet"
              settingsComponent={<ReusableSettingsComponent/>}
            />
            <ValueComponent moneyValue="1000"/>
          </ReusableContainerComponent>
        </div>
        <div className="budgetView__wrapper__spendMoney">
        <ReusableContainerComponent>
            <HeaderComponent headerTitle="Wydane w tym miesiącu"/>
            <ValueComponent moneyValue="1000"/>
          </ReusableContainerComponent>
        </div>
      </div>
      <div className="budgetView__subMenu">
        <SubMenuComponent
          onSubMenuClick={() => setTransformValue(0)}
          subMenuIcon="chart-bar"
        />
        <SubMenuComponent
          onSubMenuClick={() => setTransformValue(100)}
          subMenuIcon="dollar-sign"
        />
        <SubMenuComponent
          onSubMenuClick={() => setTransformValue(200)}
          subMenuIcon="history"
        />
      </div>
    </div>
  )
}

export default BudgetView
