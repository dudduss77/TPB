import React from 'react'
import './AddSaveMoney.scss'

import InputComponent from '../inputComponent/InputComponent'
import ButtonComponent from '../buttonComponent/ButtonComponent'

const AddSaveMoney = () => {
  return (
      <>
        <InputComponent
        orientation="vertical"
        size="small"
        labelFor="expense-title"
        label="Wpłać"
        type="text"
        placeholder="Ile wpłacasz"
        // getValue={setExpenseTitle}
      />
      <ButtonComponent buttonName="Wpłać"/>
      </>
  )
}

export default AddSaveMoney
