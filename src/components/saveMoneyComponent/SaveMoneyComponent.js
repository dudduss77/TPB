import React, {useState} from 'react'
import './SaveMoneyComponent.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SaveMoneyComponent = (props) => {
  const [showDesc, setShowDesc] = useState(false);
  return (
    <div className="saveMoneyComponent">
      <div className="saveMoneyComponent__mainBlock">
        <div className="saveMoneyComponent__mainBlock__id">
          {props.saveMoneyId}
        </div>
        <div className="saveMoneyComponent__mainBlock__date">
          {props.saveMoneyDate}
        </div>
        <div className="saveMoneyComponent__mainBlock__name">
          Oszczędności
        </div>
        <div className="saveMoneyComponent__mainBlock__moneySave">
          {props.saveMoneyValue}
        </div>
        <div className="saveMoneyComponent__mainBlock__icon">
          <FontAwesomeIcon icon="edit"/>
        </div>
        <div className="saveMoneyComponent__mainBlock__icon">
        <FontAwesomeIcon icon="trash-alt"/>
        </div>
        <div className="saveMoneyComponent__mainBlock__icon">
        <FontAwesomeIcon onClick={() => setShowDesc(!showDesc)} icon={showDesc ? "angle-up" : "angle-down"}/>
        </div>
      </div>
      {showDesc && (
        <div className="saveMoneyComponent__desc">
          {props.saveMoneyUserEnd ? "Wpłata użytkownika" : "Koniec z miesiąca"}
        </div>
      )}
      
    </div>
  )
}

export default SaveMoneyComponent
