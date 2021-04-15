import React, { useState, useEffect } from "react";
import "./BudgetView.scss";
import "../../globalStyle/wrappers.scss";

import { useWindowSize } from "../../customHook/useWindowSize";

import ReusableContainerComponent from "../../components/reusableContainerComponent/ReusableContainerComponent";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import ReusableSettingsComponent from "../../components/reusableSettingsComponent/ReusableSettingsComponent";
import ValueComponent from "../../components/valueComponent/ValueComponent";
import ExpenseComponent from "../../components/expenseComponent/ExpenseComponent";
import SaveMoneyComponent from "../../components/saveMoneyComponent/SaveMoneyComponent";
import SubMenuComponent from "../../components/subMenuComponent/SubMenuComponent";
import BudgetFilter from "../../components/budgetFilter/BudgetFilter";
import BudgetChartFilter from '../../components/budgetChartFilter/BudgetChartFilter'

import SmallBlock from '../../components/smallBlock/SmallBlock';
import BudgetHistoryComponent from '../../components/budgetHistoryComponent/BudgetHistoryComponent'

const BudgetView = () => {
  const [chartTime, setChartTime] = useState("");
  const [chartType, setChartType] = useState("");

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
            <HeaderComponent headerTitle="Wykres" />
            <div className="chartWrapper">
              <div className="chartWrapper__chart"></div>
              <div className="chartWrapper__filter">
                <BudgetChartFilter
                  setChartTime={setChartTime}
                  setChartType={setChartType}
                />
              </div>
            </div>
          </ReusableContainerComponent>
        </div>
        <div className="budgetView__wrapper__history">
          <BudgetHistoryComponent />
        </div>
        <div className="budgetView__wrapper__sumExpense">
          <SmallBlock header="Suma wydatków" value="1000" currency={true} />
        </div>
        <div className="budgetView__wrapper__saveMoney">
          <SmallBlock header="Oszczędności" value="1000" currency={true} />
        </div>
        <div className="budgetView__wrapper__yourBudget">
          <SmallBlock header="Budżet" value="1000" currency={true} />
        </div>
        <div className="budgetView__wrapper__spendMoney">
          <SmallBlock
            header="Wydane w tym miesiącu"
            value="1000"
            currency={true}
          />
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
  );
};

export default BudgetView;
