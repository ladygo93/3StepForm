import React from 'react'
import ButtonCSS from '../Button/styles/Button.module.css'

const Button = ({ onClick, label, type, extraStyles }) => {
  return (
    <button
      className={`${ButtonCSS.btn} ${extraStyles}`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
