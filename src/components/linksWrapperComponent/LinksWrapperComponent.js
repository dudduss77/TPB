import React from 'react'

import {
  BrowserRouter as Router
} from "react-router-dom";

import './LinksWrapperComponent.scss'

import NavLinkComponent from '../navLinkComponent/NavLinkComponent'

const LinksWrapperComponent = () => {
  return (
    <div className="linksWrapperComponent">
      <NavLinkComponent linkPath="/" iconName="home" linkName="Pulpit"/>
      <NavLinkComponent linkPath="/plansandtasks" iconName="tasks" linkName="Plany i zadania"/>
      <NavLinkComponent linkPath="/budget" iconName="dollar-sign" linkName="Budżet"/>
      <NavLinkComponent linkPath="/goals" iconName="bullseye" linkName="Cele"/>
    </div>
  )
}

export default LinksWrapperComponent;