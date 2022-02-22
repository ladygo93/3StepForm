import React from 'react'
import FormHeaderCSS from './styles/FormStepHeader.module.css'

const FormStepHeader = ({ onClick, label }) => {
  return (
    <h4 className={FormHeaderCSS.header} onClick={onClick}>
      {label}
    </h4>
  )
}

export default FormStepHeader
