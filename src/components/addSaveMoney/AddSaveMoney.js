import React from 'react'
import './AddSaveMoney.scss'

//Components
import InputComponent from '../inputComponent/InputComponent'
import ButtonComponent from '../buttonComponent/ButtonComponent'
import ErrorComponent from "../errorComponent/ErrorComponent"

const AddSaveMoney = () => {
  return (
      <>
        <ErrorComponent errorMsg=""/>
        <InputComponent
        labelFor="expense-title"
        label="Wpłać"
        type="text"
        placeholder="Ile wpłacasz"
        // getValue={setExpenseTitle}
      />
      <ButtonComponent buttonName="Wpłać" />
      </>
  )
}

export default AddSaveMoney
