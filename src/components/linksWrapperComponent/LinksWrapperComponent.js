import React from 'react'
import './LinksWrapperComponent.scss'

import NavLinkComponent from '../navLinkComponent/NavLinkComponent'

const LinksWrapperComponent = () => {
  return (
    <div className="linksWrapperComponent">
      <NavLinkComponent iconName="home" linkName="Pulpit"/>
      <NavLinkComponent iconName="tasks" linkName="Plany i zadania"/>
      <NavLinkComponent iconName="dollar-sign" linkName="Budżet"/>
      <NavLinkComponent iconName="bullseye" linkName="Cele"/>
    </div>
  )
}

export default LinksWrapperComponent;