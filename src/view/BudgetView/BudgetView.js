import React, {useState, useEffect} from 'react'
import './BudgetView.scss'

import ReusableContainerComponent from '../../components/reusableContainerComponent/ReusableContainerComponent'
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import ReusableSettingsComponent from "../../components/reusableSettingsComponent/ReusableSettingsComponent";
import ValueComponent from "../../components/valueComponent/ValueComponent";

import SubMenuComponent from "../../components/subMenuComponent/SubMenuComponent";

import { useWindowSize } from "../../customHook/useWindowSize";


const BudgetView = () => {

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
