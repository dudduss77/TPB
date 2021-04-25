import React from "react";
import "./BudgetChartFilter.scss";

//Components
import RadioInputComponent from "../radioInputComponent/RadioInputComponent";

const BudgetChartFilter = ({ setChartTime, setChartType }) => {
  return (
    <div className="budgetChartFilter">
      <div className="budgetChartFilter__header">Filtry</div>
      <div className="budgetChartFilter__wrapper">
        <div className="budgetChartFilter__wrapperInputs">
          <div className="budgetChartFilter__wrapperInputs__headerSmall">
            Okres
          </div>

          <RadioInputComponent
            label="Dzień"
            labelFor="day"
            name="interval"
            defaultChecked={true}
            getValue={setChartTime}
          />

          <RadioInputComponent
            label="Tydzień"
            labelFor="week"
            name="interval"
            getValue={setChartTime}
          />

          <RadioInputComponent
            label="Miesiąc"
            labelFor="month"
            name="interval"
            getValue={setChartTime}
          />

          <RadioInputComponent
            label="Rok"
            labelFor="year"
            name="interval"
            getValue={setChartTime}
          />
        </div>

        <div className="budgetChartFilter__wrapperInputs">
          <div className="budgetChartFilter__wrapperInputs__headerSmall">
            Typ
          </div>

          <RadioInputComponent
            label="Zwyczajny"
            labelFor="ordinary"
            name="type"
            getValue={setChartType}
            defaultChecked={true}
          />

          <RadioInputComponent
            label="Kategorie"
            labelFor="category"
            name="type"
            getValue={setChartType}
          />
        </div>
      </div>
    </div>
  );
};

export default BudgetChartFilter;
