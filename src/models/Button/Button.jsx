import React from 'react'
import './Button.css'
import { useState } from 'react'
const Button = ({buttonClass,buttonValue, onClick}) => {
   
  return (
    <button className={buttonClass} onClick={onClick} >{buttonValue}</button>
  )
}

export default Button