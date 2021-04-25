import React, {useState} from 'react'
import './BudgetChartComponent.scss'

import HeaderComponent from '../headerComponent/HeaderComponent'
import BudgetChartFilter from '../budgetChartFilter/BudgetChartFilter'

const BudgetChartComponent = (props) => {
  const [chartTime, setChartTime] = useState("day");
  const [chartType, setChartType] = useState("ordinary");

  return (
    <div className="budgetChartComponent">
      <HeaderComponent headerTitle={props.header} />
      <div className="budgetChartComponent__wrapper">
        <div className="budgetChartComponent__wrapper__chart"></div>
        <div className="budgetChartComponent__wrapper__filter">
          <BudgetChartFilter
            setChartTime={setChartTime}
            setChartType={setChartType}
          />
        </div>
      </div>
    </div>
  );
}

export default BudgetChartComponent
