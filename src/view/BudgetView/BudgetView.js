import React, { useState, useEffect } from "react";
import "./BudgetView.scss";
import "../../globalStyle/wrappers.scss";

import { useWindowSize } from "../../customHook/useWindowSize";

import SubMenuComponent from "../../components/subMenuComponent/SubMenuComponent";
import SmallBlock from "../../components/smallBlock/SmallBlock";
import BudgetHistoryComponent from "../../components/budgetHistoryComponent/BudgetHistoryComponent";
import BudgetChartComponent from "../../components/budgetChartComponent/BudgetChartComponent";

import BudgetViewMobile from "../BudgetViewMobile/BudgetViewMobile";

const BudgetView = () => {
  const [mobile, setMobile] = useState(false);
  const [viewNumber, setViewNumber] = useState(1);

  const size = useWindowSize();

  useEffect(() => {
    if (size.width <= 1230) {
      setMobile(true);
    } else if (size.width > 1230) {
      setMobile(false);
    }
  }, [size.width]);

  const budgetChart = <BudgetChartComponent header="Wykres" />;

  const budgetHistory = <BudgetHistoryComponent />;

  const smallBlock = (
    <>
      <SmallBlock header="Suma wydatków" value="1000" currency={true} />
      <SmallBlock header="Oszczędności" value="1000" currency={true} />
      <SmallBlock header="Budżet" value="1000" currency={true} />
      <SmallBlock header="Wydane w tym miesiącu" value="1000" currency={true} />
    </>
  );

  return (
    <div className="budgetView">
      <div className="budgetView__wrapper">
        {!mobile && (
          <>
            <div className="budgetView__wrapper__chart">
              {budgetChart}
            </div>
            <div className="budgetView__wrapper__history">
              {budgetHistory}
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
          </>
        )}

        {mobile && (
          <BudgetViewMobile
            view={viewNumber}
            budgetChart={budgetChart}
            budgetHistory={budgetHistory}
            smallBlock={smallBlock}
          />
        )}
      </div>
      <div className="budgetView__subMenu">
        <SubMenuComponent
          onSubMenuClick={() => setViewNumber(1)}
          subMenuIcon="chart-bar"
        />
        <SubMenuComponent
          onSubMenuClick={() => setViewNumber(2)}
          subMenuIcon="dollar-sign"
        />
        <SubMenuComponent
          onSubMenuClick={() => setViewNumber(3)}
          subMenuIcon="history"
        />
      </div>
    </div>
  );
};

export default BudgetView;
