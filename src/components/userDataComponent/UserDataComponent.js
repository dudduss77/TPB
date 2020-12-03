import React from 'react'
import './UserDataComponent.scss'

const UserDataComponent = () => {
  return (
    <div className="userDataComponent">
      <div className="userDataComponent__block">
        <div className="userDataComponent__block__header">Imię:</div>
        <div className="userDataComponent__block__value">Damian</div>
      </div>
      <div className="userDataComponent__block">
        <div className="userDataComponent__block__header">Nazwisko:</div>
        <div className="userDataComponent__block__value">Karbowiak</div>
      </div>
      <div className="userDataComponent__block">
        <div className="userDataComponent__block__header">E-mail:</div>
        <div className="userDataComponent__block__value">dudduss76@gmail.com</div>
      </div>
    </div>
  )
}

export default UserDataComponent
