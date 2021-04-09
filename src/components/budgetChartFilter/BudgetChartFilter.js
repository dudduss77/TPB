import React, {useEffect} from "react";
import "./BudgetChartFilter.scss";
import "../../globalStyle/forms.scss";

const BudgetChartFilter = (props) => {
  const onChangeTime = (event) => {
    props.setChartTime(event.target.value);
  }

  const onChangeType = (event) => {
    props.setChartType(event.target.value);
  }

  useEffect(() => {
    props.setChartTime("day");
    props.setChartType("ordinary");
  }, []);

  return (
    <div className="budgetChartFilter">
      <div className="budgetChartFilter__header">Filtry</div>
      <div className="budgetChartFilter__wrapper">
      <div onChange={onChangeTime} className="budgetChartFilter__wrapperInputs">
        <div className="budgetChartFilter__wrapperInputs__headerSmall">Okres</div>
        <div className="budgetChartFilter__wrapperInputs__inputs">
          <input id="day" value="day" name="interval" type="radio" defaultChecked/>
          <label htmlFor="day">Dzień</label>
        </div>
        <div className="budgetChartFilter__wrapperInputs__inputs">
          <input id="week" value="week" name="interval" type="radio" />
          <label htmlFor="week">Tydzień</label>
        </div>
        <div className="budgetChartFilter__wrapperInputs__inputs">
          <input id="month" value="month" name="interval" type="radio" />
          <label htmlFor="month">Miesiąc</label>
        </div>
        <div className="budgetChartFilter__wrapperInputs__inputs">
          <input id="year" value="year" name="interval" type="radio" />
          <label htmlFor="year">Rok</label>
        </div>
      </div>

      <div onChange={onChangeType} className="budgetChartFilter__wrapperInputs">
        <div className="budgetChartFilter__wrapperInputs__headerSmall">Typ</div>
        <div className="budgetChartFilter__wrapperInputs__inputs">
          <input id="ordinary" value="ordinary" name="Type" type="radio" defaultChecked/>
          <label htmlFor="ordinary">Zwyczajny</label>
        </div>
        <div className="budgetChartFilter__wrapperInputs__inputs">
          <input id="category" value="category" name="Type" type="radio" />
          <label htmlFor="category">Kategorie</label>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default BudgetChartFilter;
