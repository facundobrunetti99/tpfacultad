import React from 'react'
import './Button.css'

const Button = ({buttonClass,buttonValue}) => {
   
  return (
    <button className={buttonClass} >{buttonValue}</button>
  )
}

export default Button