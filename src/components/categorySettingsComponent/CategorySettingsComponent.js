import React from 'react'
import './CategorySettingsComponent.scss'

import HeaderComponent from '../headerComponent/HeaderComponent'
import InputComponent from '../inputComponent/InputComponent'
import ButtonComponent from '../buttonComponent/ButtonComponent'
import CategoryComponent from '../categoryComponent/CategoryComponent'

const CategorySettingsComponent = () => {
  return (
    <div className="categorySettingsComponent">
      <HeaderComponent headerTitle="Kategorie"/>
      <div className="categorySettingsComponent__wrapper">
        <InputComponent
          orientation="vertical"
          labelFor="newCategory"
          label="Nowa Kategoria"
          type="text"
          placeholder="Nowa Kategoria"
          // getValue={setNewEmail}
        />

        <ButtonComponent buttonName="Dodaj"/>
      </div>
      <div className="categorySettingsComponent__wrapper categorySettingsComponent__wrapper--category">
        <CategoryComponent title="Jedzenie"/>
      </div>
    </div>
  )
}

export default CategorySettingsComponent
